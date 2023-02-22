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
    return extras
  } catch (e) {
    console.log('erro get works', e)
    return false
  }
}

export const createExtraWork = async (date: string, description: string, id: string) => {
  try {
    const currentDate = new Date(date)
    await prisma.extraWorks.create({
      data: {
        date: currentDate,
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