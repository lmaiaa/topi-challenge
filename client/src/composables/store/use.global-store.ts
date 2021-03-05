import { reactive, readonly } from '@vue/composition-api';

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
  return { state: readonly(state), showLoading };
}
