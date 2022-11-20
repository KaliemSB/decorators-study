import { Request, Response } from "express";
import { Get } from "../common/decorators";

export default class GetAllTodos {
  @Get("/todo")
  execute(req: Request, res: Response) {
    res.status(200).json({ status: "Working" });
  }
}
