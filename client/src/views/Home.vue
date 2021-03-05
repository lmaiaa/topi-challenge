<template>
  <div class="home" ref="scrollComponent">
    <search-engine />
    <div class="slds-grid slds-wrap">
      <meal-card class="slds-col slds-size_1-of-1" v-for="(meal, index) in mealsSliced" :key="index" :meal="meal" />
    </div>
  </div>
</template>
<script lang>
import { computed, defineComponent, onMounted, onUnmounted, ref } from '@vue/composition-api';
import SearchEngine from '@/components/SearchEngine.vue';
import MealCard from '../components/MealCard.vue';
import { useMeals } from '@/composables/use-meals';
import Observer from '../components/Observer.vue';
export default defineComponent({
  components: { SearchEngine, MealCard, Observer },
  setup() {
    const meals = useMeals().meals;
    const slice = ref(5);
    const CARDS_PER_PAGE = 5;
    const mealsSliced = computed(() => {
      return meals.value.slice(0, slice.value);
    });
    const loadMoreMeals = () => {
      if (mealsSliced.value.length < meals.value.length) {
        slice.value = slice.value + CARDS_PER_PAGE;
      }
    };
    const scrollComponent = ref(null);
    const handleScroll = (e) => {
      const element = scrollComponent.value;
      if (element.getBoundingClientRect().bottom <= window.innerHeight) {
        loadMoreMeals();
      }
    };
    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return { meals, scrollComponent, mealsSliced };
  }
});
</script>
