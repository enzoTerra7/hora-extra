import prisma from '../prisma';

export const registerAccount = async (email: string, password: string, name: string) => {
  try {
    console.log('prisma-user', prisma.user)
    // console.log('infos', email, name, password)
    await prisma?.user.create({
      data: {
        name,
        email,
        password
      }
    })
  } catch (e) {
    console.log(e);
    throw e
  }
}