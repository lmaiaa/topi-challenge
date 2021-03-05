import { TheMealDbResponse } from "./types/responses-types.meals";
import { mealDb } from "../global/services/themealdb.services";
import { GetMealsResponse } from "./types/types.meals";
import { wrapGetMealsResponse } from "./wrappers.meals";

export async function getMealByName(
  name: string = ""
): Promise<GetMealsResponse> {
  let url = `/search.php?s=${name}`;

  const response = await mealDb.get<never, TheMealDbResponse>(url);

  return wrapGetMealsResponse(response);
}
