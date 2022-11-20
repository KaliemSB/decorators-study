import express from "express";
import { router } from "./common/decorators";
import { PrismaClient } from "@prisma/client";
import "./routes";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(router);

export { app, prisma };
