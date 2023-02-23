import Cookies from 'js-cookie';
import prisma from "lib/prisma"

export const createExtraMonth = async (month: string, id: string) => {
  try {
    await prisma.extraHours.create({
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

export const deleteExtraMonth = async (id: string) => {
  try {
    await prisma.user.delete({
      where: {
        id: parseInt(id)
      }
    })
    return true
  } catch (e) {
    console.log('erro auth', e)
    return e
  }
}

export const getAllUserExtra = async () => {
  try {
    const extras = await prisma.extraHours.findMany({
      select: {
        id: true
      }
    })
    console.log(extras)
    return extras
  } catch (e) {
    console.log('erro auth', e)
    return []
  }
}

export const getExtraById = async (id: string) => {
  try {
    const extras = await prisma.extraHours.findUnique({
      where: {
        id: parseInt(id)
      },
      select: {
        id: true,
        month: true,
        total: true,
        userId: true,
        ExtraWorks: true
      }
    })
    return extras
  } catch (e) {
    console.log('erro auth', e)
    return false
  }
}

export const getExtraWorks = async (id: string) => {
  try {
    const extras = await prisma.extraHours.findUnique({
      where: {
        id: parseInt(id)
      },
      select: {
        ExtraWorks: true
      }
    })
    console.log('retorno do get', extras)
    return extras
  } catch (e) {
    console.log('erro get works', e)
    return false
  }
}

export const createExtraWork = async (description: string, id: string) => {
  try {
    console.log('valores criar', description, id)
    await prisma.extraWorks.create({
      data: {
        description: description,
        extraHoursId: parseInt(id)
      }
    })
    return true
  } catch (e) {
    console.log('erro create work', e)
    return false
  }
}

export const deleteExtraWork = async (id: string) => {
  try {
    console.log('valores apagar', id)
    await prisma.extraWorks.delete({
      where: {
        id: parseInt(id)
      }
    })
    return true
  } catch (e) {
    console.log('erro create work', e)
    return false
  }
}