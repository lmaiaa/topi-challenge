<template>
  <div class="slds-box slds-box_small slds-align_absolute-center slds-m-top_large" style="width:200px;">
    <div class="slds-form-element">
      <label class="slds-form-element__label" for="select-01">{{ label }}</label>
      <div class="slds-form-element__control">
        <div class="slds-select_container">
          <select
            class="slds-select"
            id="select-01"
            v-model="value"
            @input="$emit('input', $event.target.value)"
            @change="$emit('changed', value)"
          >
            <option value="">Select…</option>
            <option v-for="(option, index) in options" :value="option.slug" :key="index"> {{ option.name }}</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';

export default defineComponent({
  props: {
    label: { type: String, required: true },
    options: { type: Array as PropType<{ name: string | number; slug: string | number }[]>, required: true },
    value: {
      type: String || Number
    }
  }
});
</script>

<style></style>
