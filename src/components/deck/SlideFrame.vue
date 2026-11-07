<script lang="ts">
import { defineComponent } from 'vue'
import { presentationConfig } from '../../data/presentationConfig'

export default defineComponent({
  name: 'SlideFrame',
  props: {
    kicker: {
      type: String,
      default: '',
    },
    meta: {
      type: String,
      default: presentationConfig.meta.title,
    },
    variant: {
      type: String,
      default: 'default',
    },
  },
  computed: {
    presentationYear(): string {
      return presentationConfig.meta.date
    },
  },
})
</script>

<template>
  <section class="slide" :class="`slide--${variant}`">
    <div class="slide__accent" aria-hidden="true" />
    <div v-if="kicker" class="slide-kicker">{{ kicker }}</div>
    <div class="slide__content">
      <slot />
    </div>
    <footer class="slide-footer">
      <span>{{ meta }}</span>
      <span>{{ presentationYear }}</span>
    </footer>
  </section>
</template>
