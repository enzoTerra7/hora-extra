import { getExtraWorks, createExtraWork, deleteExtraWork } from './../../../../../lib/Extras/month';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method == 'GET') {
    const data = await getExtraWorks(req.query.id as string) 
    //@ts-ignore
    return res.status(200).json({ work: data })
  }
  else if (req.method == 'POST') {
    const data = await createExtraWork(req.query.description as string, req.query.id as string) 
    //@ts-ignore
    return res.status(200).json({ work: data })
  }
  else if (req.method == 'DELETE') {
    const data = await deleteExtraWork(req.query.id as string) 
    //@ts-ignore
    return res.status(200).json({ work: data })
  }
}
