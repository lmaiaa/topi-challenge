<template>
  <div class="container-default">
    <header>
      <div class="slds-page-header slds-p-around_medium">
        <div class="slds-page-header__row">
          <div class="slds-page-header__col-title">
            <div class="slds-media">
              <div class="slds-media__figure">
                <!---
            <span class="slds-icon_container slds-icon-standard-opportunity">
              <svg class="slds-icon slds-page-header__icon" aria-hidden="true">
                <use xlink:href="@/assets/icons/utility-sprite/svg/symbols.svg#favorite" />
              </svg>
            </span>--->
              </div>
              <div class="slds-media__body">
                <div class="slds-page-header__name">
                  <div class="slds-page-header__name-title">
                    <h1>
                      <span class="slds-page-header__title slds-truncate">CookBook</span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <body>
      <router-view />
    </body>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Default'
});
</script>

<style></style>
