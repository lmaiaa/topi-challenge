import { listMealsByArea, listMealsByCategory, listMealsByName } from '@/services';
import { Meal } from '@serverTypes/meals';
import { onMounted, readonly, ref } from '@vue/composition-api';
import { useLoadingStore } from './store/use.global-store';

const meals = ref<Meal[]>([]);
export function useMeals() {
  const { showLoading } = useLoadingStore();
  onMounted(async () => {
    if (!meals.value.length) {
      showLoading(true);
      meals.value = (await listMealsByName()).meals;
      showLoading(false);
    }
  });
  async function getMealsByName(name: string) {
    showLoading(true);
    meals.value = (await listMealsByName(name)).meals;
    showLoading(false);
  }
  async function getMealsByCategory(category: string) {
    showLoading(true);
    meals.value = (await listMealsByCategory(category)).meals;
    showLoading(false);
  }
  async function getMealsByArea(area: string) {
    showLoading(true);
    meals.value = (await listMealsByArea(area)).meals;
    console.log(meals.value);
    showLoading(false);
  }
  return { meals: readonly(meals), getMealsByName, getMealsByCategory, getMealsByArea };
}
