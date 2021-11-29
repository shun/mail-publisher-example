import type { NextApiRequest, NextApiResponse } from 'next';
import { renderToString } from "react-dom/server";

type Data = {
  status: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  res.status(200).json({ status: 'OK' })
}
