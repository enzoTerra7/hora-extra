import { updateExtraHoursTotal } from 'lib/Works/work';
import { createExtraMonth, deleteExtraMonth, getExtraMonth } from './../../../../lib/Extras/month';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method == 'POST') {
    //@ts-ignore
    const data = await createExtraMonth(req.query.month, req.query.id)
    //@ts-ignore
    return res.status(200).json({ month: data, req: req.body })
  }
  else if (req.method == 'GET') {
    await updateExtraHoursTotal().then(async () => {
      //@ts-ignore
      const data = await getExtraMonth(req.query.id)
      //@ts-ignore
      return res.status(200).json({ month: data, req: req.body })
    })
  }
  else if (req.method == 'DELETE') {
    const data = await deleteExtraMonth(req.query.id as string)
    //@ts-ignore
    return res.status(200).json({ work: data })
  }
}
