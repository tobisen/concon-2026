import type { DeckLanguage } from './deck'

export type DeckTheme = 'dark' | 'light'
export type SlideTransition = 'fade' | 'slide' | 'lift' | 'zoom' | 'wipe'

export interface PresentationConfig {
  meta: {
    title: string
    subtitle: string
    speaker: string
    date: string
    contact: string
    repositoryUrl: string
  }
  deployment: {
    basePath: string
  }
  defaults: {
    language: DeckLanguage
    theme: DeckTheme
    transition: SlideTransition
  }
  features: {
    languageSwitch: boolean
    themeSwitch: boolean
    transitionSwitch: boolean
    fullscreen: boolean
    progress: boolean
    controls: boolean
    overview: boolean
    speakerNotes: boolean
  }
  availableTransitions: SlideTransition[]
}

export const presentationConfig: PresentationConfig = {
  meta: {
    title: 'From Concept to Product',
    subtitle: 'A reusable presentation template for tech talks and product stories',
    speaker: 'Tobias Bertilsson',
    date: '2026',
    contact: 'tobias@example.com',
    repositoryUrl: 'https://github.com/your-org/vue-presentation-template',
  },
  deployment: {
    basePath: import.meta.env.BASE_URL,
  },
  defaults: {
    language: 'en',
    theme: 'dark',
    transition: 'slide',
  },
  features: {
    languageSwitch: true,
    themeSwitch: true,
    transitionSwitch: true,
    fullscreen: true,
    progress: true,
    controls: true,
    overview: true,
    speakerNotes: true,
  },
  availableTransitions: ['fade', 'slide', 'lift', 'zoom', 'wipe'],
}
