import { GetMealsResponse } from "./types/types.meals";
import { TheMealDbResponse } from "./types/responses-types.meals";
import { mealDb } from "./../../services/themealdb.services";
import { wrapGetMealsResponse } from "./wrappers.meals";

export async function getMealByName(name=null, category=null, area=null ): Promise<GetMealsResponse> {
  let response;

  if (name !== null) {
    const url = `/search.php?s=${name}`;

    response = await mealDb.get<never, TheMealDbResponse>(url);
  } else if ( category !== null) {
    const url = `filter.php?c=${category}`;

    response = await mealDb.get<never, TheMealDbResponse>(url);
  } else {
    const url = `filter.php?a=${area}`;

    response = await mealDb.get<never, TheMealDbResponse>(url);
  }

  return wrapGetMealsResponse(response);
}
