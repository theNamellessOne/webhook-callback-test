import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

function handler(req: any, res: any) {
  console.log(req.body);
  return Response.json({ msg: "suka" });
}

export const GET = handler;
export const POST = handler;
