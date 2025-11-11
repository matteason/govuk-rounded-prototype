<template>
  <h1 class="govuk-heading-xl">Rounded components prototype</h1>
  <p class="govuk-body">
    This is a prototype to show how the GOV.UK Design System might look with rounded components.
  </p>
  <p class="govuk-body">You can adjust styles in the footer, including button radius and colour, and tag styling.</p>

  <p class="govuk-body">
    This prototype was made by <a href="https://github.com/matteason" class="govuk-link">Matt Eason</a>
    as part of <a href="https://github.com/alphagov/govuk-design-system/discussions/4941" class="govuk-link">this discussion on GitHub</a>.
  </p>
  <gv-warning-text
    >This is an unofficial prototype, not made by GDS, and is not a real government service</gv-warning-text
  >
  <h2 class="govuk-heading-m">Pages</h2>
  <ul class="govuk-list">
    <li>
      <nuxt-link class="govuk-link" to="start-page">Start page</nuxt-link>
    </li>
    <li>
      <nuxt-link class="govuk-link" to="your-details">Form page</nuxt-link>
    </li>
    <li>
      <nuxt-link class="govuk-link" to="checkboxes">Checkboxes</nuxt-link>
    </li>
    <li>
      <nuxt-link class="govuk-link" to="tabs">Tabs</nuxt-link>
    </li>
    <li>
      <nuxt-link class="govuk-link" to="task-list">Task list</nuxt-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
</script>
