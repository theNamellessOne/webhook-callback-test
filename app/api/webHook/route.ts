import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

async function handler(req: any, res: any) {
  console.log(await req.json());
  return Response.json({ msg: "suka" });
}

export const GET = handler;
export const POST = handler;
