<script setup lang="ts">
import { NuxtLink } from '#components'
import { ref, watch } from 'vue'

const route = useRoute()

const radius = ref(4)
const inputRadius = ref(0)
const tagRadius = ref(0)
const buttonBorders = ref(false)
const tagBorders = ref(false)

const buttonPalettes = [
  {
    name: 'Original',
    bg: '#00703c',
    shadow: '#002d18'
  },
  {
    name: 'Primary green',
    bg: '#11875A',
    shadow: '#0D6544'
  },
  {
    name: 'Green Shade 25%',
    bg: '#0D6544',
    shadow: '#09442D'
  },
  {
    name: 'Primary blue',
    bg: '#1D70B8',
    shadow: '#16548A'
  },
  {
    name: 'Blue Shade 25%',
    bg: '#16548A',
    shadow: '#0F385C'
  }
]

const selectedPrimaryButtonPalette = ref(buttonPalettes[0])

onMounted(() => {
  document.documentElement.style.setProperty('--input-radius', `${inputRadius.value}px`)
  document.documentElement.style.setProperty('--radius', `${radius.value}px`)
  document.documentElement.style.setProperty(
    '--primary-button-bg',
    selectedPrimaryButtonPalette.value.bg
  )
  document.documentElement.style.setProperty(
    '--primary-button-shadow',
    selectedPrimaryButtonPalette.value.shadow
  )
})

watch(radius, (val) => {
  document.documentElement.style.setProperty('--radius', `${val}px`)
})

watch(inputRadius, (val) => {
  document.documentElement.style.setProperty('--input-radius', `${val}px`)
})

watch(tagRadius, (val) => {
  document.documentElement.style.setProperty('--tag-radius', `${val}px`)
})

watch(selectedPrimaryButtonPalette, (val) => {
  document.documentElement.style.setProperty('--primary-button-bg', val.bg)
  document.documentElement.style.setProperty('--primary-button-shadow', val.shadow)
})
</script>
<template>
  <gv-skip-link />
  <gv-header :rebrand="true" :homepage-link-component="NuxtLink"> </gv-header>
  <gv-service-navigation
    v-if="route.path != '/'"
    service-name="Rounded components prototype"
    :service-name-link-component="NuxtLink"
    service-url="/"
  />
  <div class="govuk-width-container" :class="{ 'button-borders': buttonBorders, 'tag-borders': tagBorders }">
    <gv-back-link v-if="route.path != '/'" :component="NuxtLink" href="/" />
    <main class="govuk-main-wrapper" id="main-content">
      <div class="govuk-grid-row">
        <div class="govuk-grid-column-two-thirds">
          <slot />
        </div>
      </div>
    </main>
  </div>

  <gv-footer>
    <template #meta>
      <gv-details summary="Style controls">
        <gv-fieldset legend="Buttons and inputs" legend-class="govuk-fieldset__legend--s">
        <div class="govuk-form-group govuk-!-margin-bottom-2">
          <label class="govuk-label" for="radius">Button radius</label>
          <input id="radius" type="range" v-model="radius" min="0" max="20" /> {{ radius }}px
        </div>
          <div class="govuk-form-group govuk-!-margin-bottom-2">
            <label class="govuk-label" for="radius">Input radius</label>
            <input id="radius" type="range" v-model="inputRadius" min="0" max="20" /> {{ inputRadius }}px
          </div>
        <div class="govuk-form-group govuk-!-margin-bottom-2">
          <gv-checkboxes size="small">
            <gv-checkbox v-model="buttonBorders">Button borders</gv-checkbox>
          </gv-checkboxes>
        </div>
        <div class="govuk-form-group">
          <gv-select v-model="selectedPrimaryButtonPalette" label="Primary button palette">
            <gv-select-option
              v-for="palette in buttonPalettes"
              :key="palette.name"
              :value="palette"
            >
              {{ palette.name }}
            </gv-select-option>
          </gv-select>
        </div>

        </gv-fieldset>
        <gv-fieldset legend="Tags" legend-class="govuk-fieldset__legend--s">

        <div class="govuk-form-group govuk-!-margin-bottom-2">
          <label class="govuk-label" for="radius">Tag radius</label>
          <input id="radius" type="range" v-model="tagRadius" min="0" max="20" /> {{ tagRadius }}px
        </div>
        <div class="govuk-form-group govuk-!-margin-bottom-2">
          <gv-checkboxes size="small">
            <gv-checkbox v-model="tagBorders">Tag borders</gv-checkbox>
          </gv-checkboxes>
        </div>
        </gv-fieldset>
      </gv-details>
    </template>
  </gv-footer>
</template>

<style lang="scss">
@import '../node_modules/govuk-frontend/dist/govuk/index';
:root {
  --radius: 4px;
  --input-radius: 0px;
  --tag-radius: 0px;
}

.govuk-button {
  border-radius: var(--radius);
  padding-inline: calc(10px + (var(--radius) * 0.75));

  &:not(.govuk-button--secondary) {
    background: var(--primary-button-bg);
    box-shadow: 0 2px 0 var(--primary-button-shadow);
  }
}

.button-borders {
  .govuk-button {
    border: 1px solid var(--primary-button-shadow);
    padding-inline: calc(11px + (var(--radius) * 0.75));
    padding-top: 9px;
    padding-bottom: 8px;

    &--secondary {
      border-color: #929191;
    }
  }
}

.tag-borders {
  .govuk-tag {
    outline: 1px solid currentColor;
  }
}

.govuk-tag {
  border-radius: var(--tag-radius);
  padding-inline: calc(8px + (var(--tag-radius) * 0.4));
}

.govuk-input {
  border-radius: var(--input-radius);

  &:has(+ .govuk-input__suffix) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &:has(+ .govuk-input__prefix) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  &__suffix {
    border-top-right-radius: var(--input-radius);
    border-bottom-right-radius: var(--input-radius);
    padding-inline: calc(5px + (var(--input-radius) * 0.75));
  }
}

.govuk-select {
  border-radius: var(--input-radius);
}

.govuk-textarea {
  border-radius: var(--input-radius);
}

.govuk-checkboxes {
  &__label::before {
    border-radius: var(--input-radius);
  }
}

.govuk-tabs {
  &__list-item {
    border-top-left-radius: var(--radius) !important;
    border-top-right-radius: var(--radius) !important;
  }
}
</style>
