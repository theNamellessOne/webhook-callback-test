type ResponseData = {
  message: string;
};

async function handler(req: any, res: any) {
  console.log("parsing")
  console.log(await req.json());
  console.log("parsing complete")
  return Response.json({ msg: "suka" });
}

export const GET = handler;
export const POST = handler;
