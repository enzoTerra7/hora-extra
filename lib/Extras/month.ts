import Cookies from 'js-cookie';
import prisma from "lib/prisma"

export const createExtraMonth = async (month: string, id: string) => {
  try {
    await prisma.ExtraHours.create({
      data: {
        month,
        userId: parseInt(id)
      }
    })
    return true
  } catch (e) {
    console.log('erro auth', e)
    return e
  }
}

export const getExtraMonth = async (id: string) => {
  try {
    const extras = await prisma.user.findUnique({
      where: {
        id: parseInt(id)
      },
      select: {
        extraHours: true
      }
    })
    return extras
  } catch (e) {
    console.log('erro auth', e)
    return e
  }
}