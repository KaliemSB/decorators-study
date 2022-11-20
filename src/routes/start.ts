import { Request, Response } from "express";
import { Get } from "../common/decorators";

export default class Start {
  @Get("/")
  execute(req: Request, res: Response) {
    res.status(200).send({ status: "Online" });
  }
}
