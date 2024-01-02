import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  console.log(req)
  return Response.json("suka");
}

export const GET = handler;
export const POST = handler;
