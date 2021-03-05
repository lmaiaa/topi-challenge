import {
  MealsResponse,
  TheMealDbResponse,
} from "./types/responses-types.meals";
import { GetMealsResponse, Meal } from "./types/types.meals";

export function wrapGetMealsResponse(
  response: TheMealDbResponse
): GetMealsResponse {
  return {
    meals: response.meals === null ? null : response.meals.map(wrapMeal),
  };
}

export function wrapMeal(response: MealsResponse): Meal {
  return {
    name: response.strMeal,
    category: response.strCategory,
    area: response.strArea,
    thumbnail: response.strMealThumb,
    instructions: response.strInstructions,
  };
}
