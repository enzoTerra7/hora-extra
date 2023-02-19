import prisma from '../prisma';

export const login = async (email: string, password: string) => {
  try {
    // console.log('infos', email, name, password)
    const data = await prisma?.user.findFirst({
      where: {
        email,
        password
      },
      select: {
        id: true,
        email: true,
        name: true,
        token: true
      },
    })
    if (data == null) {
      return 'Email ou senha inválidos'
    } else {
      const expirationDate = new Date()
      expirationDate.setDate(expirationDate.getDate() + 7)
      const token = await prisma.token.create({
        data: {
          userId: data.id,
          expiration: expirationDate
        },
      })
      return {
        token,
        user: data
      }
    }
  } catch (e) {
    console.log('erro', e);
    return 'Algo deu errado no lado do servidor, tente novamente mais tarde.'
  }
}