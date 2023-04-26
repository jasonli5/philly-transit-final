import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch(
    "https://www3.septa.org/api/TrainView/index.php"
  );
  const data = await response.json();

  if (data) {
      res.status(200).json(data);
  } else {
      res.status(500).json({ error: "No data found" });
  }
}
