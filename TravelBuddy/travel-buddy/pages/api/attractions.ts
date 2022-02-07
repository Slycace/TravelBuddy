import { get } from 'http';
import type { NextApiRequest, NextApiResponse } from 'next'
import getAttractionsData from './index'


let coordinates = null;

export default  async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    if(req.method ==='POST') {
        coordinates = req.body.coordinates;
        res.status(200).json({message: 'dated posted'})
    } else if (req.method === 'GET') {
      const response = await getAttractionsData(coordinates);
      const result = await response;
      res.status(200).json({data: result})
    }
  } catch (err) {
    if(req.method ==='POST') {
      res.status(500).json({err: 'failed to post data'});
    } else if (req.method ==='GET') {
      res.status(500).json({err: 'failed to get data'})
    }

  }


}
