<script lang="ts">
import { defineComponent } from 'vue'
import SlideFrame from '../deck/SlideFrame.vue'

export default defineComponent({
  name: 'QuoteSlide',
  components: { SlideFrame },
  props: {
    kicker: { type: String, default: '' },
    title: { type: String, default: '' },
    quote: { type: String, required: true },
    source: { type: String, default: '' },
  },
})
</script>

<template>
  <SlideFrame :kicker="kicker" variant="quote">
    <figure class="quote-slide">
      <h2 v-if="title" class="slide-title slide-title--medium">{{ title }}</h2>
      <blockquote>{{ quote }}</blockquote>
      <figcaption v-if="source">{{ source }}</figcaption>
    </figure>
  </SlideFrame>
</template>
