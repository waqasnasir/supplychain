import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();
    const { id } = req.query;
    switch (req.method) {
        case "GET":
            try {
                const events = await prisma.event.findMany({
                    where: { itemId: Number(id) },
                    orderBy: {
                        createdAt: "desc",
                    },
                });
                res.status(200).json(events);
            } catch (error) {
                res.status(500).json({ error: "error fetching events " + error });
            }
            break;
        case "POST":
            try {
                const { location, custodian } = req.body;
                const event = await prisma.event.create({
                    data: {
                        itemId: Number(id),
                        location,
                        custodian,
                    },
                });
                res.status(201).json(event);
            } catch (error) {
                res.status(500).json({ error: "error creating event " + error });
            }
            break;
        default:
            res.setHeader("Allow", ["GET", "POST"]);
            res.status(405).json({ error: `${req.method} is not allowed` });
    }
  
}