// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = await fetch(
    "https://www3.septa.org/api/TransitViewAll/index.php"
  );
  const data = await response.json();

  res.status(200).json(data);
}
