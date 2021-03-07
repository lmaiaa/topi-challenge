import Vue from 'vue';
import VueCompositionAPI, { computed, reactive } from '@vue/composition-api';
Vue.use(VueCompositionAPI);

export interface State {
  showLoading: boolean;
}

const state = reactive<State>({
  showLoading: false
});

export function useLoadingStore() {
  function showLoading(loading: boolean) {
    state.showLoading = loading;
  }
  return { getterShowLoading: computed(() => state.showLoading), showLoading };
}
