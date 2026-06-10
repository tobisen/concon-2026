<script setup lang="ts">
import PresentationDeck from './components/deck/PresentationDeck.vue'
import { decks } from './data/deck'
import { presentationConfig } from './data/presentationConfig'
</script>

<template>
  <PresentationDeck :decks="decks" :config="presentationConfig" />
</template>
