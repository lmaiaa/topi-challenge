import { Area, Category } from "./responses-types.meals";

export interface Meal {
  name: string;
  category: Category;
  area: Area;
  thumbnail: string;
  instructions: string;
}

export interface GetMealsResponse {
  meals: Meal[] | null;
}
