import { Request, Response } from "express";
import { prisma } from "../app";
import { Get } from "../common/decorators";

export default class GetAllTodos {
  @Get("/todo")
  async execute(req: Request, res: Response) {
    try {
      const allTodos = await prisma.todos.findMany();

      res.status(200).json(allTodos);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
}
