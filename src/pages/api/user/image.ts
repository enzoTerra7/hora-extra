import { uploadImage } from 'lib/cloudnary';
import { changeImage, getUser } from 'lib/User/index';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method == 'PATCH') {
    let uri: any = null
    
    console.log('body file', req.body.file)
    if (req.body.file) {
      const uri = await uploadImage(req.body.file)
      console.log('uri func', uri)
    }
    const data = await changeImage(Number(req.query.id), uri)
    console.log('retorno', data)
    if (data == 'Usuário não encontrado') {
      return res.status(404).json({ message: data })
    }

    return res.status(200).json({ data: data })
  }
}
