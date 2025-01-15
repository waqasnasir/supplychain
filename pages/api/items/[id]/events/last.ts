import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();
    const { id } = req.query;
    if (!id) {
        res.status(400).json({ error: "event id is required" });
        return;
    }
    switch (req.method) {
        case "GET":
            try {
                const event = await prisma.event.findFirst({
                    where: { itemId: Number(id) },
                    orderBy: { createdAt: "desc" },
                });
                if (!event) {
                    res.status(404).json({ error: "event not found" });
                } else {
                    res.status(200).json(event);
                }
            } catch (error) {
                res.status(500).json({ error: "error fetching last event" });
            }
            break;
        default:
            res.setHeader("Allow", ["GET"]);
            res.status(405).json({ error: `${req.method} is not allowed` });
    }
}   