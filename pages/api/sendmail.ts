import type { NextApiRequest, NextApiResponse } from 'next';
import { renderToString } from "react-dom/server";
import { MailBody } from "./MailBody";

type Data = {
  status: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const fruits = [
    "apple",
    "banana",
    "orange",
  ];
  const body = renderToString(MailBody(fruits));
  console.log("body", body);
  res.status(200).json({ status: 'OK' })
}
