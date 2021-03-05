import { GetMealsResponse } from "./types/types.meals";
import { TheMealDbResponse } from "./types/responses-types.meals";
import { mealDb } from "../global/services/themealdb.services";
import { wrapGetMealsResponse } from "./wrappers.meals";

export async function getMealByName(name = ""): Promise<GetMealsResponse> {
  const url = `/search.php?s=${name}`;
  const response = await mealDb.get<never, TheMealDbResponse>(url);

  return wrapGetMealsResponse(response);
}
