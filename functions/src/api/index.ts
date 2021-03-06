import * as routers from "./routers";
import { routersMap } from "./utils/api.util";
import cors from "cors";
import express from "express";
import helmet from "helmet";

const app = express();

app.use(cors());
app.use(helmet());

const api = routersMap(app, routers);

export { api };
