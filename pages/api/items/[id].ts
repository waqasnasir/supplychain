import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();

export default async function handler(req:NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const itemId = parseInt(id as string)
  switch (req.method) {
    case "GET":
      const item = await prisma.item.findUnique({where: {id: itemId }})
      if(!item) {
        res.status(404).json({error: "Item not found"})
        return;
      }
      res.status(200).json(item);
      break;
    case "PUT":
      const existingItem = await prisma.item.findUnique({where: {id: itemId }})
      if(!existingItem) {
        res.status(404).json({error: "Item not found"})
        return;
      }
      const {color, price, name} = req.body;
      const updatedItem = await prisma.item.update({
        where: {
          id: itemId
        },
        data: {color, price, name}
      })
      res.status(200).json(updatedItem)
      break;
    case "DELETE":
      const isItem = await prisma.item.findUnique({where: {id: itemId }})
      if(!isItem) {
        res.status(404).json({error: "Item not found"})
        return;
      }
      await prisma.item.delete({where:{id: itemId}})
      res.status(200).json({message: "item deleted successfully"})
      break;
    default:
      res.setHeader("Allow", ["PUT", "GET", "DELETE"])
      res.status(400).json({error: `Method ${req.method} not allowed`})
      break;
  }
  
}