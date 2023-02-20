import { attUser } from './../../../../lib/User/index';
import { getUser } from 'lib/User/index';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method == 'GET') {
    const data = await getUser(Number(req.query.id))
    console.log('retorno', data)
    if (data == 'Usuário não encontrado') {
      return res.status(404).json({ message: data })
    }

    return res.status(200).json({ message: 'Usuário carregado com sucesso', data: data })
  } else if (req.method == 'PUT') {
    const data = await attUser(Number(req.query.id), req.body)
    if (data == 'Usuário não encontrado') {
      return res.status(404).json({ message: data })
    }

    return res.status(200).json({ message: 'Usuário atualizado com sucesso', data: data })
  }
}
