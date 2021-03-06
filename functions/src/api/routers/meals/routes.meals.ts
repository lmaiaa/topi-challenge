import * as Controllers from "./controllers.meals";
import { ApiRoute } from "./../../types/api.types";
import { routesMap } from "../../utils/api.util";

/**
 * BASE PATH /tickets
 */

const routes: ApiRoute[] = [
  {
    method: "get",
    path: "/list",
    handlerRequest: ({ query }) => Controllers.getMealByName(query.name),
  },
];

export default routesMap({ routes });
