import prisma from 'lib/prisma';

export const getAllWorks = async () => {
  try {
    const works = await prisma.extraWorks.findMany({
      select: {
        id: true
      }
    })
    console.log('works', works)
    if (works == null) {
      return []
    } else {
      return works
    }
  } catch (e) {
    console.log(e);
    return []
  }
}

export const getWorkById = async (id: string) => {
  try {
    const works = await prisma.extraWorks.findUnique({
      where: {
        id: parseInt(id)
      },
      select: {
        id: true,
        date: true,
        extraHoursId: true,
        description: true,
        total: true,
        works: true
      }
    })
    console.log('works', works)
    if (works == null) {
      return []
    } else {
      return works
    }
  } catch (e) {
    console.log(e);
    return []
  }
}

export const createWorkById = async (start: string, exit: string, id: string) => {
  try {
    const entraceDate = new Date(start).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })
    const exitDate = new Date(exit).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })
    const entrace = new Date(entraceDate)
    const lefting = new Date(exitDate)
    console.log('total', (lefting.getTime() - entrace.getTime() / (60 * 60 * 1000)))
    const works = await prisma.works.create({
      data: {
        entrace: entrace,
        exit: lefting,
        total: (lefting.getTime() - entrace.getTime()) / (60 * 60 * 1000),
        extraWorksId: parseInt(id)
      }
    })
    console.log('works', works)
    if (works == null) {
      return []
    } else {
      return works
    }
  } catch (e) {
    console.log(e);
    return []
  }
}

export const getWorks = async (id: string) => {
  try {
    const works = await prisma.works.findMany({
      where: {
        extraWorksId: parseInt(id)
      }
    })
    console.log('works', works)
    if (works == null) {
      return []
    } else {
      return works
    }
  } catch (e) {
    console.log(e);
    return []
  }
}