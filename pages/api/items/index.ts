import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  switch (req.method) {
    case "GET":
      const items = await prisma.item.findMany();
      res.status(200).json(items);
      break;
    case "POST":
      const {name, color, price } = req.body
      if(!name || !color || price === undefined) {
        res.status(400).json({error: "Missing required fields (name, color, price)"})
        return;
      }
      const newItem = await prisma.item.create({
        data: {name, color, price}
      })
      res.status(201).json(newItem)
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"])
      res.status(405).json({error: `Method ${req.method} not allowed`})
      break;
  }

}