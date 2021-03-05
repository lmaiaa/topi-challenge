import { Request, RequestHandler } from "express";

export type ApiMethod = "get" | "post" | "put" | "delete";

export interface ApiRoute {
  method: ApiMethod;
  path: string;
  middlewares?: RequestHandler[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handlerRequest: (req: Request<any, any, any, any>) => Promise<unknown>;
}

export enum ErrorMessages {
  Conflict = "conflict",
  NotFound = "not found",
  BadRequest = "bad request",
}
