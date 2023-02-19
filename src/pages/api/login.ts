import type { NextApiRequest, NextApiResponse } from 'next'
import { login } from 'lib/Login/login';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const data = await login(req.body.email, req.body.password)
    console.log('retorno', data)
    if (data == 'Email ou senha inválidos') {
      return res.status(404).json({ message: data })
    } else if (data == 'Algo deu errado no lado do servidor, tente novamente mais tarde.') {
      return res.status(500).json({ message: data })
    }
    return res.status(200).json({ message: 'Login realizado com sucesso', data: data })
  }
}
