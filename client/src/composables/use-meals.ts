import { listMealsByName } from '@/services';
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
    console.log(name);
    showLoading(true);
    meals.value = (await listMealsByName(name)).meals;

    console.log(meals.value);
    showLoading(false);
  }
  return { meals: readonly(meals), getMealsByName };
}
