import { Request, Response } from "express";
import { Post } from "../common/decorators";
import { TodoDTO } from "../dtos/todo";
import { validateOrReject } from "class-validator";
import { prisma } from "../app";

export default class CreateTodo {
  @Post("/todo")
  async execute(req: Request, res: Response) {
    try {
      if (!req.body) throw new Error("Missing body properties.");

      const { name, description, completed } = req.body;

      const todo = new TodoDTO({ name, description, completed });

      await validateOrReject(todo);

      const createdTodo = await prisma.todos.create({
        data: { name, description, completed },
      });

      res.status(201).json(createdTodo);
    } catch (errors: any) {
      const error = errors.map((value) => ({
        property: value.property,
        errors: value.constraints,
      }));

      res.status(400).json(error);
    }
  }
}
