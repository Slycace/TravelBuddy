import type { NextApiRequest, NextApiResponse } from 'next'
import getAttractionsData from './index'

type Data = {
  name: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let data = getAttractionsData()
    data.then( (data) => (
      res.status(200).json({ name: data })))
    .catch((err) => (console.log(err)))

}
