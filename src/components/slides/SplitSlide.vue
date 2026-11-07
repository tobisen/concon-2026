<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import SlideFrame from '../deck/SlideFrame.vue'

interface JourneyStage {
  title: string
  early: string
  late: string
  discovery?: 'early' | 'late'
}

export default defineComponent({
  name: 'SplitSlide',
  components: { SlideFrame },
  props: {
    kicker: { type: String, default: '' },
    title: { type: String, required: true },
    leftTitle: { type: String, required: true },
    leftBody: { type: String, required: true },
    rightTitle: { type: String, required: true },
    rightBody: { type: String, required: true },
    body: { type: String, default: '' },
    journeyStages: { type: Array as PropType<JourneyStage[]>, default: () => [] },
  },
})
</script>

<template>
  <SlideFrame :kicker="kicker" variant="split">
    <div class="split-slide" :class="{ 'split-slide--journey': journeyStages.length, 'split-slide--summary': body && !journeyStages.length }">
      <h2 class="slide-title slide-title--medium">{{ title }}</h2>
      <table v-if="journeyStages.length" class="journey-table" :aria-label="title">
        <thead>
          <tr>
            <th scope="col">Upptäckt</th>
            <th v-for="(stage, index) in journeyStages" :key="stage.title" scope="col">
              {{ stage.title }}
              <span v-if="index < journeyStages.length - 1" class="journey-table__arrow" aria-hidden="true">→</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <strong>{{ leftTitle }}</strong>
              <p>{{ leftBody }}</p>
            </th>
            <td v-for="stage in journeyStages" :key="stage.title" :class="{ 'is-discovery': stage.discovery === 'early' }">
              <span v-if="stage.discovery === 'early'" class="journey-table__marker">Frågan ställs</span>
              <p>{{ stage.early }}</p>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <strong>{{ rightTitle }}</strong>
              <p>{{ rightBody }}</p>
            </th>
            <td v-for="stage in journeyStages" :key="stage.title" :class="{ 'is-discovery': stage.discovery === 'late' }">
              <span v-if="stage.discovery === 'late'" class="journey-table__marker">Hindret upptäcks</span>
              <p>{{ stage.late }}</p>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else class="split-slide__grid">
        <article>
          <span class="panel-label">A</span>
          <h3>{{ leftTitle }}</h3>
          <p>{{ leftBody }}</p>
        </article>
        <article>
          <span class="panel-label">B</span>
          <h3>{{ rightTitle }}</h3>
          <p>{{ rightBody }}</p>
        </article>
      </div>
      <p v-if="body" class="slide-body split-slide__takeaway">{{ body }}</p>
    </div>
  </SlideFrame>
</template>
