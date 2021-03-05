import path from "path";

// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config({ path: path.join(__dirname, "../.env") });

import * as functions from "firebase-functions";
import { api as Api } from "./api";

export const api = functions.https.onRequest(Api);
