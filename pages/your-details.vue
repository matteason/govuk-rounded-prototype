<template>
  <h1 class="govuk-heading-xl">Your details</h1>
  <gv-input label="Your name" class="govuk-!-width-three-quarters" />
  <gv-date-input
    legend="What is your date of birth?"
    hint="For example, 31 3 1980"
    autocomplete="bday"
  />
  <gv-select label="Home planet">
    <gv-select-option>

    </gv-select-option>
    <gv-select-option>
      Mercury
    </gv-select-option>
    <gv-select-option>
      Venus
    </gv-select-option>
    <gv-select-option>
      Earth
    </gv-select-option>
    <gv-select-option>
      Mars
    </gv-select-option>
    <gv-select-option>
      Jupiter
    </gv-select-option>
    <gv-select-option>
      Saturn
    </gv-select-option>
    <gv-select-option>
      Uranus
    </gv-select-option>
    <gv-select-option>
      Pluto
    </gv-select-option>
  </gv-select>

  <gv-textarea label="Can you provide more detail?">
    <template #hint>
      Do not include personal or financial information, like your National Insurance number or credit card details.
    </template>
  </gv-textarea>

  <div class="govuk-button-group">
  <gv-button>Save and continue</gv-button>
  <gv-button variant="secondary">Come back later</gv-button>
  </div>
</template>
<script setup lang="ts">
</script>