import * as Controllers from "./controllers.meals";
import { ApiRoute } from "../global/types/api.types";
import { routesMap } from "../global/utils/apit.util";

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
