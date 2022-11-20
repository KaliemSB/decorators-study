import express from "express";
import { router } from "./common/decorators";
import "./routes";

const app = express();

app.use(express.json());
app.use(router);

export { app };
