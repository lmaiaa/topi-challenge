<template>
  <div class="home" ref="scrollComponent">
    <div class="slds-grid">
      <input-search v-model="nameSearch" />
    </div>
    <div class="slds-grid slds-wrap">
      <meal-card class="slds-col slds-size_1-of-1" v-for="(meal, index) in mealsSliced" :key="index" :meal="meal" />
    </div>
  </div>
</template>
<script>
import { computed, defineComponent, onMounted, onUnmounted, ref, watch } from '@vue/composition-api';
import debounce from 'lodash.debounce/index';

import InputSearch from '@/components/Input.vue';
import SelectFilter from '@/components/Select.vue';
import MealCard from '@/components/MealCard.vue';

import { useMeals } from '@/composables/use-meals';
import { optionsCategory, optionsArea } from '@/utils/options.select';

export default defineComponent({
  components: { InputSearch, MealCard, SelectFilter },
  setup() {
    const { meals, getMealsByName } = useMeals();
    const nameSearch = ref('');
    const categorySelected = ref(null);
    const areaSelected = ref(null);
    const slice = ref(5);
    const CARDS_PER_PAGE = 5;

    function wrapperGetMeals() {
      return getMealsByName(nameSearch.value);
    }
    const debounceGetMeals = debounce(wrapperGetMeals, 500);

    watch(nameSearch, async () => {
      await debounceGetMeals();
    });

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
      if (element.getBoundingClientRect().bottom - 20 <= window.innerHeight) {
        loadMoreMeals();
      }
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      meals,
      scrollComponent,
      mealsSliced,
      nameSearch,
      optionsCategory,
      optionsArea,
      categorySelected,
      areaSelected
    };
  }
});
</script>
