import { uploadImage } from 'lib/cloudnary';
import prisma from 'lib/prisma';

export const getUser = async (id: number) => {
  try {
    console.log('infos', id)
    const user = await prisma.user.findUnique({
      where: {
        id
      }
    })
    console.log('user', user)
    if (user == null) {
      return 'Usuário não encontrado'
    } else {
      return user
    }
  } catch (e) {
    console.log(e);
    return e
  }
}

export const attUser = async (id: number, data: any) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id
      },
      select: {
        email: true,
        name: true,
        hours_per_month: true,
        salary: true
      }
    })
    console.log('infos', data)
    await prisma.user.update({
      where: {
        id
      },
      data: {
        name: data.name || user.name,
        email: data.email || user.email,
        hours_per_month: data?.hours_per_month || user?.hours_per_month || 0,
        salary: data?.salary || user?.salary || 0
      }
    })
  } catch (e) {
    console.log(e);
    return e
  }
}

export const changeImage = async (id: number, image: string | null) => {
  try {
    console.log('uri', image)
    // if (image) {
    //   const uri = await uploadImage(image)
    //   console.log('url', uri)
    //   await prisma.user.update({
    //     where: {
    //       id
    //     },
    //     data: {
    //       avatar: uri
    //     }
    //   })
    // }
    await prisma.user.update({
      where: {
        id
      },
      data: {
        avatar: image || ''
      }
    })
    return 'Usuário editado com sucesso'
  } catch (e) {
    console.log(e);
    return e
  }
}