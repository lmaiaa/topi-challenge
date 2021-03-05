<template>
  <div
    class="slds-box slds-box_small slds-align_absolute-center slds-p-around_large slds-m-top_large"
    style="max-width:80%;"
  >
    <article class="slds-card">
      <div class="slds-card__header slds-grid">
        <header class="slds-media slds-media_center slds-has-flexi-truncate">
          <div class="slds-media__figure">
            <span class="slds-icon_container" :title="meal.area">
              <img class="slds-icon slds-icon_small" aria-hidden="true" :src="flagRoute" />
              <span class="slds-assistive-text">{{ meal.area }}</span>
            </span>
          </div>
          <div class="slds-media__body">
            <h2 class="slds-card__header-title">
              <p class="slds-card__header-link slds-truncate" title="Tasks">
                <span>{{ meal.name }}</span>
              </p>
            </h2>
          </div>
        </header>
      </div>
      <div class="slds-card__body slds-card__body_inner">
        <div class="slds-illustration slds-illustration_small">
          <img :src="meal.thumbnail" :alt="meal.name" />
          <div class="slds-text-longform">
            <h3 class="slds-text-heading_medium slds-m-top_medium">Category: {{ meal.category }}</h3>
            <p class="slds-text-body_regular" v-text="meal.instructions"></p>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { Meal } from '@serverTypes/meals';
import { computed, defineComponent, PropType } from '@vue/composition-api';

export default defineComponent({
  name: 'MealCard',
  props: {
    meal: { type: Object as PropType<Meal>, required: true }
  },
  setup(props) {
    const flagRoute = computed(() => {
      return `/flags/svg/${props.meal.area.toLowerCase()}.svg`;
    });
    return { flagRoute };
  }
});
</script>

<style></style>
