import * as functions from "firebase-functions";
import * as routers from "./routers";
import { routersMap } from "./utils/api.util";
import cors from "cors";
import express from "express";
import helmet from "helmet";

const app = express();

app.use(cors());
app.use(helmet());

app.get("/", (req, res) => res.send("topi-challenge API 1.0"));


const api = routersMap(app, routers);


export default functions.https.onRequest(api);
