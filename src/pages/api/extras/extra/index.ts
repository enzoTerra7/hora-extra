import { getExtraWorks, createExtraWork } from './../../../../../lib/Extras/month';
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
    return res.status(200).json({ work: data })
  }
  else if (req.method == 'POST') {
    const data = await createExtraWork(req.query.date as string, req.query.description as string, req.query.id as string) 
    return res.status(200).json({ work: data })
  }
}