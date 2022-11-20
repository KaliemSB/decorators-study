import { Request, Response } from "express";
import { Post } from "../common/decorators";

export default class CreateTodo {
  @Post("/todo")
  execute(req: Request, res: Response) {
    res.status(200).json({ status: "Working" });
  }
}
