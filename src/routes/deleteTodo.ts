import { Request, Response } from "express";
import { prisma } from "../app";
import { Delete } from "../common/decorators";

export default class DeleteTodo {
  @Delete("/todo/:id")
  async execute(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const deletedTodo = await prisma.todos.delete({
        where: {
          id,
        },
      });

      res.status(200).send(deletedTodo);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
}
