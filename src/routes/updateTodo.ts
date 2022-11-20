import { Request, Response } from "express";
import { prisma } from "../app";
import { Patch } from "../common/decorators";

export default class UpdateTodo {
  @Patch("/todo/:id")
  async execute(req: Request, res: Response) {
    try {
      if (!req.body) throw new Error("Missing properties to update.");

      const { id } = req.params;
      const { name, description, completed } = req.body;

      const updatedTodo = await prisma.todos.update({
        where: {
          id,
        },
        data: { name, description, completed },
      });

      res.status(200).send(updatedTodo);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
}
