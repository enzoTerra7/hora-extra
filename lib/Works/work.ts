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
        extraHoursId: true,
        description: true,
        total: true,
        works: true,
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

export const createWorkById = async (start: string, id: string, exit?: string) => {
  try {
    const entraceDate = new Date(start)
    const exitDate = new Date(exit || start)
    const total = ((exitDate.getTime() - entraceDate.getTime()) / (60 * 60 * 1000))
    const works = await prisma.works.create({
      data: {
        entrace: String(entraceDate),
        exit: String(exitDate),
        total: total,
        extraWorksId: parseInt(id),
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

export const updateWorkById = async (start: string, id: string, exit?: string) => {
  try {
    console.log('id', id);
    const entraceDate = new Date(start)
    const exitDate = new Date(exit || start)
    const total = ((exitDate.getTime() - entraceDate.getTime()) / (60 * 60 * 1000))
    const works = await prisma.works.update({
      where: {
        id: parseInt(id)
      },
      data: {
        entrace: String(entraceDate),
        exit: String(exitDate),
        total: total
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

export const deleteWorkById = async (id: string) => {
  try {
    await prisma.works.delete({
      where: {
        id: parseInt(id)
      }
    })
    return true
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

export async function updateExtraWorksTotal() {
  const extraWorks = await prisma.extraWorks.findMany({
    include: {
      works: true,
    },
  });

  for (const extraWork of extraWorks) {
    const total = extraWork.works.reduce((acc, work) => acc + work.total, 0);

    await prisma.extraWorks.update({
      where: { id: extraWork.id },
      data: { total },
    });
  }
}

export async function updateExtraHoursTotal() {
  const extraHours = await prisma.extraHours.findMany({
    include: {
      ExtraWorks: true,
    },
  });

  for (const extraWork of extraHours) {
    const total = extraWork.ExtraWorks.reduce((acc, work) => acc + work.total, 0);

    await prisma.extraHours.update({
      where: { id: extraWork.id },
      data: { total },
    });
  }
}