import prisma from "lib/prisma"

export const auth = async (id: number | string) => {
  try {
    const token = prisma.token.findUnique({
      where: {
        id,
      }
    })
    if(token == null) {
      return false
    } else {
      const currentDate = new Date()
      const tokenDate = new Date(token.expiration)
      if(tokenDate.getDate() < currentDate.getDate()) {
        return false
      } else {
        return true
      }
    }
  } catch (e) {
    console.log('erro auth', e)
    return false
  }
}