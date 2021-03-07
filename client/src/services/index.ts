import { api } from '@/utils/api.instance';
import { GetMealsResponse } from '@serverTypes/meals';

export const listMealsByName = (name = '') => {
  return api.get<never, GetMealsResponse>(`/meals?name=${name}`);
};
export const listMealsByCategory = (category = '') => {
  return api.get<never, GetMealsResponse>(`/meals?category=${category}`);
};
export const listMealsByArea = (area = '') => {
  return api.get<never, GetMealsResponse>(`/meals?area=${area}`);
};
