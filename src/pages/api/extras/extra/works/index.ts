import { createWorkById, getWorks } from './../../../../../../lib/Works/work';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method == 'GET') {
    const data = await getWorks(req.query.id as string) 
    return res.status(200).json({ work: data })
  }
  else if (req.method == 'POST') {
    const data = await createWorkById(req.query.start as string, req.query.ending as string, req.query.id as string) 
    console.log('retorno', data)
    return res.status(200).json({ work: data })
  }
  // else if (req.method == 'DELETE') {
  //   const data = await deleteExtraWork(req.query.id as string) 
  //   return res.status(200).json({ work: data })
  // }
}
