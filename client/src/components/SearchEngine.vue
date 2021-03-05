<template>
  <div class="slds-box slds-box_small slds-align_absolute-center slds-m-top_large" style="width:300px;">
    <div class="slds-form-element">
      <label class="slds-form-element__label" for="text-input-id-1">Search your meal</label>
      <div class="slds-form-element__control slds-input-has-icon slds-input-has-icon_left">
        <svg class="slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default" aria-hidden="true">
          <use xlink:href="@/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
        </svg>
        <input type="text" id="text-input-id-1" placeholder="Ex.: Rice" class="slds-input" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'SearchEngine'
});
</script>

<style></style>
