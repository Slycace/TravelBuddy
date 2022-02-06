import type { NextApiRequest, NextApiResponse } from 'next'
import getAttractionsData from './index'

type Data = {
  name: string,
}

let coordinates = null;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.method,'method?')
  if(req.method === 'POST') {
    coordinates = req.body.coordinates;
    res.status(200).json({pizza:'worked'})
  } else if(req.method === 'GET') {
    let data = getAttractionsData(coordinates)
    data.then( (data) => {
      res.status(200).json({ name: data })})
    .catch((err) => (console.log(err)))
  }




}
