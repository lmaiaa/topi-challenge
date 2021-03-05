<template>
  <div id="app">
    <spinner :loading="loading" />
    <router-view />
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api';
import Spinner from '@/components/Spinner.vue';
import { useLoadingStore } from '@/composables/store/use.global-store';
export default defineComponent({
  components: { Spinner },
  setup() {
    const loading = useLoadingStore().getterShowLoading;
    return { loading };
  }
});
</script>
<style lang="scss">
@import url('../node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css');
</style>
