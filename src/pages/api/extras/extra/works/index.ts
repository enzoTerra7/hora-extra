import { createWorkById, deleteWorkById, getWorks, updateExtraHoursTotal, updateExtraWorksTotal, updateWorkById } from './../../../../../../lib/Works/work';
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
    //@ts-ignore
    return res.status(200).json({ work: data })
  }
  else if (req.method == 'POST') {
    const data = await createWorkById(req.query.start as string, req.query.id as string, req.query.ending as string)
    console.log('retorno', data)
    await updateExtraWorksTotal()
    //@ts-ignore
    return res.status(200).json({ work: data })
  }
  else if (req.method == 'DELETE') {
    const data = await deleteWorkById(req.query.id as string)
    await updateExtraWorksTotal()
    //@ts-ignore
    return res.status(200).json({ work: data })
  }
  else if (req.method == 'PUT') {
    const data = await updateWorkById(req.query.start as string, req.query.id as string, req.query.ending as string)
    await updateExtraWorksTotal()
    //@ts-ignore
    return res.status(200).json({ work: data })
  }
}
