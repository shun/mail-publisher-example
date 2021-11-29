import type { NextApiRequest, NextApiResponse } from 'next';
import { renderToString } from "react-dom/server";
import { createTransport } from "nodemailer";

import { MailBody } from "./MailBody";

type Data = {
  status: string
}

const transporter = createTransport({
  host: "MAIL SERVER ADDRESS",
  port: 465,
  secure: true,
  auth: {
    user: "ACCOUNT NAME",
    pass: "PASSWORD",
  }
});

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
  try {
    transporter.sendMail({
      from: "hogehoge@example.com",
      to: "hogehoge2@example.com",
      subject: "mail example",
      html: body,
    });

    res.status(200).json({ status: 'OK' })
  } catch (error) {
    console.error("fail to send mail.", error);
    res.status(500).json({ status: 'NG' })
  }
}
