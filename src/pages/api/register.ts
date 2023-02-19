import { registerAccount } from './../../../lib/Register/index';
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
    const data = await registerAccount(req.body.email, req.body.password, req.body.name)
    return res.status(200).json({ message: 'Conta criada com sucesso', data: data })
  }
}