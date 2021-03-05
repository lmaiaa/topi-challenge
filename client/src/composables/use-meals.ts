import { listMeals } from '@/services';
import { Meal } from '@serverTypes/meals';
import { onMounted, readonly, ref } from '@vue/composition-api';
import { useLoadingStore } from './store/use.global-store';

export function useMeals() {
  const { showLoading } = useLoadingStore();
  const meals = ref<Meal[]>([]);
  onMounted(async () => {
    if (!meals.value.length) {
      showLoading(true);
      meals.value = (await listMeals()).meals;
      showLoading(false);
    }
  });
  return { meals: readonly(meals) };
}
