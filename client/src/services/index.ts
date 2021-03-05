import { api } from '@/utils/api.instance';
import { GetMealsResponse } from '@serverTypes/meals';

export const listMeals = (name = '') => {
  return api.get<never, GetMealsResponse>(`/meals/list?name=${name}`);
};
