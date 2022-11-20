import { Request, Response } from "express";
import { prisma } from "../app";
import { Get } from "../common/decorators";

export default class GetTodoById {
  @Get("/todo/:id")
  async execute(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const todo = await prisma.todos.findFirstOrThrow({
        where: {
          id,
        },
      });

      res.status(200).send(todo);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
}
