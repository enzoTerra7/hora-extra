import Cookies from 'js-cookie';
import prisma from "lib/prisma"

export const deleteToken = async (id: number) => {
  try {
    await prisma.token.delete({
      where: {
        id
      }
    })
    Cookies.remove('token')
    return true
  } catch (e) {
    console.log('erro auth', e)
    return e
  }
}

export const auth = async (id: number) => {
  try {
    const token = await prisma.token.findUnique({
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
        await deleteToken(id)
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