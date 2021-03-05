<template>
  <div class="demo-only demo--inverse" v-if="loading">
    <div class="slds-spinner_container">
      <div role="status" class="slds-spinner slds-spinner_large slds-spinner_brand">
        <span class="slds-assistive-text">Loading</span>
        <div class="slds-spinner__dot-a"></div>
        <div class="slds-spinner__dot-b"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    loading: { type: Boolean }
  }
});
</script>

<style lang="scss" scoped>
.demo-only {
  z-index: 10;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
}
</style>
