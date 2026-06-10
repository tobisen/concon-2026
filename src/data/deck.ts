import type { SlideTypeId } from './slideRegistry'

export interface SlideDefinition {
  type: SlideTypeId
  props: Record<string, unknown>
  imageAsset?: string
  notes?: string[]
}

export type DeckLanguage = 'en' | 'sv'

export const languageLabels: Record<DeckLanguage, string> = {
  en: 'EN',
  sv: 'SV',
}

export const decks: Record<DeckLanguage, SlideDefinition[]> = {
  en: [
    {
      type: 'title',
      props: {
        kicker: 'Vue Presentation Template',
        title: 'From Concept to Product',
        subtitle: 'A reusable presentation system for tech talks, product stories and practical lessons learned.',
        presenter: 'Tobias Bertilsson',
        meta: '2026',
      },
      notes: ['Open with the promise: this is a system for future decks, not a one-off presentation.'],
    },
    {
      type: 'introduction',
      props: {
        kicker: 'Introduction',
        title: 'A deck made from reusable page types',
        intro: 'This sample deck shows the building blocks available when you create future presentations.',
        points: ['Set the story', 'Choose a slide pattern', 'Swap in your own content'],
      },
      notes: ['Explain that each point maps to one part of the template workflow.'],
    },
    {
      type: 'speaker',
      imageAsset: 'workshop-wall',
      props: {
        kicker: 'Speaker',
        name: 'Tobias Bertilsson',
        role: 'Frontend, product and presentation craft',
        bio: 'Use this page type when the audience needs a quick sense of who is speaking and why the topic matters.',
        topics: ['Vue', 'AI', 'Accessibility', 'Product stories'],
      },
      notes: ['Replace this with the actual speaker story when forking the deck.'],
    },
    {
      type: 'big-idea',
      props: {
        kicker: 'Our Big Idea',
        title: 'Presentations should feel designed before you add the content.',
        body: 'A deck framework gives every future talk a strong starting point: rhythm, typography, layout and navigation are already handled.',
      },
    },
    {
      type: 'chapter',
      props: {
        number: '01',
        title: 'A system, not a single deck',
        subtitle: 'Reusable slide patterns make it easier to tell different stories with the same visual confidence.',
      },
    },
    {
      type: 'content',
      props: {
        kicker: 'Foundation',
        title: 'What the template gives you',
        body: 'Start with a polished visual language, then swap in your own content slide by slide.',
        bullets: ['16:9 full-screen slide frame', 'Keyboard navigation with progress', 'Content-driven Vue components', 'Centralized theme tokens'],
      },
    },
    {
      type: 'image-background',
      imageAsset: 'generated-lounge-workspace',
      props: {
        kicker: 'Full image background',
        title: 'Use image-led moments when the story needs atmosphere.',
        body: 'Pass an imageUrl prop to turn this into a full-bleed visual slide. Without an image, it keeps the same cinematic contrast.',
        credit: 'Generated template asset',
      },
      notes: ['Image slides keep light text even in light mode to preserve contrast.'],
    },
    {
      type: 'split',
      props: {
        kicker: 'Comparison',
        title: 'From blank canvas to reusable flow',
        leftTitle: 'Before',
        leftBody: 'Every talk starts with layout decisions, inconsistent spacing and one-off slide hacks.',
        rightTitle: 'After',
        rightBody: 'Slides share the same composition rules, leaving your attention on story, examples and delivery.',
      },
    },
    {
      type: 'three-column',
      props: {
        kicker: 'Three column',
        title: 'Use three lanes when ideas need equal weight',
        columns: [
          {
            label: 'A',
            title: 'Context',
            text: 'What the audience needs to know before the point lands.',
          },
          {
            label: 'B',
            title: 'Choice',
            text: 'The tradeoff, decision or method you want to explain.',
          },
          {
            label: 'C',
            title: 'Outcome',
            text: 'The result, lesson or next move worth remembering.',
          },
        ],
      },
    },
    {
      type: 'card-grid',
      props: {
        kicker: 'Patterns',
        title: 'Reusable slide ingredients',
        cards: [
          {
            label: '01',
            title: 'Narrative',
            text: 'Title, chapter and quote slides shape the story arc.',
          },
          {
            label: '02',
            title: 'Clarity',
            text: 'Content slides keep explanations short, scannable and calm.',
          },
          {
            label: '03',
            title: 'Contrast',
            text: 'Split slides make tradeoffs, before/after states and choices visible.',
          },
          {
            label: '04',
            title: 'Memory',
            text: 'Big idea slides create the moments people remember.',
          },
        ],
      },
    },
    {
      type: 'quote',
      props: {
        quote: 'A strong template is a quiet co-presenter: it holds the room while you tell the story.',
        source: 'Design principle',
      },
    },
    {
      type: 'closing',
      props: {
        kicker: 'Closing',
        title: 'Build once. Reuse often. Present with less friction.',
        body: 'Replace the sample deck, keep the system, and evolve the visual language as your talks grow.',
        nextSteps: ['Pick the page type', 'Write the slide content', 'Tune the theme tokens'],
      },
    },
    {
      type: 'questions',
      props: {
        kicker: 'Q&A',
        title: 'Questions?',
        subtitle: 'Use this page type for discussion, workshop reflection or final audience questions.',
        contact: 'tobias@example.com',
      },
    },
  ],
  sv: [
    {
      type: 'title',
      props: {
        kicker: 'Concon 2026',
        title: 'Tänk om jag hade vetat',
        subtitle: 'Lärdomar från resan mellan koncept och produkt',
        presenter: 'Tobias Bertilsson',
        meta: '2026-xx-xx',
      },
      notes: ['Öppna med att rama in presentationen som praktiska lärdomar från resan mellan koncept och produkt.'],
    },
    {
      type: 'image-background',
      imageAsset: 'generated-lounge-workspace',
      props: {
        kicker: 'Frågan',
        title: 'Varför frågan fastnade',
        body: `Jag började lyssna på podden "Tänk om vi hade vetat det här tidigare."

Den handlar egentligen om människor, tankar och hur vi upplever världen.

Men frågan fastnade hos mig av en annan anledning:

Den beskriver också nästan varje produktresa jag har varit med om.`,
        credit: 'Concon 2026',
      },
      notes: ['Jämförelsevariant: image-background. Använd som en stämningsfull övergång från titel till berättelse.'],
    },
    {
      type: 'content',
      props: {
        kicker: 'Frågan',
        title: 'Tänk om vi hade vetat det här tidigare?',
        body: 'En fråga som först lät personlig, men som visade sig vara väldigt relevant för produktutveckling.',
        bullets: [
          'Tänk om vi hade förstått behovet tidigare.',
          'Tänk om vi hade sett risken tidigare.',
          'Tänk om vi hade involverat test, UX eller tillgänglighet tidigare.',
          'Tänk om vi hade pratat om antagandena innan de blev kod.',
          'Tänk om vi hade vågat säga “jag förstår inte” tidigare.',
        ],
      },
      notes: ['Foundation-variant med huvudpoäng till vänster och stödjande bullets till höger.'],
    },
    {
      type: 'speaker',
      imageAsset: 'workshop-wall',
      props: {
        kicker: 'Talare',
        name: 'Tobias Bertilsson',
        role: 'Frontend, produkt och presentationshantverk',
        bio: 'Använd den här sidtypen när publiken snabbt behöver förstå vem som pratar och varför ämnet spelar roll.',
        topics: ['Vue', 'AI', 'Tillgänglighet', 'Produktberättelser'],
      },
      notes: ['Byt ut detta mot den riktiga talarhistorien när decket forkas.'],
    },
    {
      type: 'big-idea',
      props: {
        kicker: 'Den stora idén',
        title: 'Presentationer ska kännas designade innan innehållet är klart.',
        body: 'Ett deck-ramverk ger varje framtida föreläsning en stark start: rytm, typografi, layout och navigation finns redan.',
      },
    },
    {
      type: 'chapter',
      props: {
        number: '01',
        title: 'Ett system, inte ett enskilt deck',
        subtitle: 'Återanvändbara slide-mönster gör det enklare att berätta olika historier med samma visuella trygghet.',
      },
    },
    {
      type: 'content',
      props: {
        kicker: 'Grund',
        title: 'Vad mallen ger dig',
        body: 'Börja med ett polerat visuellt språk och byt sedan ut innehållet slide för slide.',
        bullets: ['16:9 slide-ram i helskärm', 'Tangentbordsnavigation med progress', 'Innehållsstyrda Vue-komponenter', 'Centraliserade design tokens'],
      },
    },
    {
      type: 'image-background',
      imageAsset: 'generated-lounge-workspace',
      props: {
        kicker: 'Heltäckande bild',
        title: 'Använd bilddrivna ögonblick när berättelsen behöver känsla.',
        body: 'Skicka in imageUrl som prop för att göra detta till en heltäckande bildslide. Utan bild behåller den samma filmiska kontrast.',
        credit: 'Genererad template-bild',
      },
      notes: ['Bildslides behåller ljus text även i light mode för att säkra kontrast.'],
    },
    {
      type: 'split',
      props: {
        kicker: 'Jämförelse',
        title: 'Från tom canvas till återanvändbart flöde',
        leftTitle: 'Före',
        leftBody: 'Varje presentation börjar med layoutbeslut, ojämn spacing och engångslösningar.',
        rightTitle: 'Efter',
        rightBody: 'Slides delar samma kompositionsregler, så fokus hamnar på berättelse, exempel och leverans.',
      },
    },
    {
      type: 'three-column',
      props: {
        kicker: 'Tre kolumner',
        title: 'Använd tre spår när idéer ska väga lika tungt',
        columns: [
          {
            label: 'A',
            title: 'Kontext',
            text: 'Det publiken behöver förstå innan poängen landar.',
          },
          {
            label: 'B',
            title: 'Val',
            text: 'Avvägningen, beslutet eller metoden du vill förklara.',
          },
          {
            label: 'C',
            title: 'Resultat',
            text: 'Effekten, lärdomen eller nästa steget som är värt att minnas.',
          },
        ],
      },
    },
    {
      type: 'card-grid',
      props: {
        kicker: 'Mönster',
        title: 'Återanvändbara slide-byggstenar',
        cards: [
          {
            label: '01',
            title: 'Berättelse',
            text: 'Titel-, kapitel- och citatslides formar presentationens båge.',
          },
          {
            label: '02',
            title: 'Tydlighet',
            text: 'Innehållsslides håller förklaringar korta, scannbara och lugna.',
          },
          {
            label: '03',
            title: 'Kontrast',
            text: 'Splitslides synliggör avvägningar, före/efter-lägen och val.',
          },
          {
            label: '04',
            title: 'Minne',
            text: 'Big idea-slides skapar ögonblicken publiken kommer ihåg.',
          },
        ],
      },
    },
    {
      type: 'quote',
      props: {
        quote: 'En stark mall är en tyst medpresentatör: den håller rummet medan du berättar.',
        source: 'Designprincip',
      },
    },
    {
      type: 'closing',
      props: {
        kicker: 'Avslut',
        title: 'Bygg en gång. Återanvänd ofta. Presentera med mindre friktion.',
        body: 'Byt ut exempeldecket, behåll systemet och låt det visuella språket utvecklas med dina föreläsningar.',
        nextSteps: ['Välj sidtyp', 'Skriv slide-innehållet', 'Justera theme tokens'],
      },
    },
    {
      type: 'questions',
      props: {
        kicker: 'Frågor',
        title: 'Frågor?',
        subtitle: 'Använd den här sidtypen för diskussion, workshop-reflektion eller sista publikfrågor.',
        contact: 'tobias@example.com',
      },
    },
  ],
}
