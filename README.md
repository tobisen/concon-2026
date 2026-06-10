# Vue Presentation Template

A reusable Vue 3 + Vite presentation template for tech talks, workshops, internal demos and product stories.

The template provides a polished dark keynote-style visual foundation with 16:9 slides, keyboard navigation, reusable slide components and centralized CSS design tokens.

## Getting Started

```sh
npm install
npm run dev
```

Build a production version:

```sh
npm run build
```

Create a starter deck file:

```sh
npm run create:deck my-talk "My Talk Title"
```

See [docs/create-presentation.md](/Users/tobiasbertilsson/kod/vue-presentation-template/docs/create-presentation.md) for the recommended fork workflow.

## Editing The Deck

Slides are defined in [src/data/deck.ts](/Users/tobiasbertilsson/kod/vue-presentation-template/src/data/deck.ts). The template ships with English and Swedish decks. Each slide chooses a named slide type and passes content as props:

```ts
{
  type: 'big-idea',
  props: {
    kicker: 'Our Big Idea',
    title: 'Presentations should feel designed before you add the content.',
    body: 'A reusable deck framework keeps visual decisions consistent.',
  },
}
```

For image-based slides, choose an asset by id:

```ts
{
  type: 'image-background',
  imageAsset: 'generated-tech-arc',
  props: {
    kicker: 'Architecture',
    title: 'Make the system visible.',
    body: 'Use full-bleed visuals for atmosphere and transitions.',
  },
}
```

## Presentation Config

When forking the template for a new presentation, start in [src/data/presentationConfig.ts](/Users/tobiasbertilsson/kod/vue-presentation-template/src/data/presentationConfig.ts):

- `languageSwitch`: enable or disable language selection.
- `themeSwitch`: enable or disable light/dark theme selection.
- `transitionSwitch`: enable or disable runtime transition changes.
- `defaults.language`: choose the starting language.
- `defaults.theme`: choose `dark` or `light`.
- `defaults.transition`: choose `fade`, `slide`, `lift`, `zoom` or `wipe`.
- `controls`, `progress` and `fullscreen`: choose which presentation controls are available.

## Presentation Assets

Images extracted from the PPT template live in [public/presentation](/Users/tobiasbertilsson/kod/vue-presentation-template/public/presentation). A few reusable aliases are included for future decks:

- `/presentation/workshop-lounge.jpeg`: warm workshop or talk background.
- `/presentation/workshop-wall.jpeg`: speaker or workshop context image.
- `/presentation/abstract-soft.jpeg`: neutral premium abstract background.
- `/presentation/coral-shape.jpeg`: coral accent background inspired by the PPT style.
- `/presentation/generated-tech-arc.png`: dark technical keynote background.
- `/presentation/generated-lounge-workspace.png`: warm product/workshop photo background.
- `/presentation/generated-light-paper.png`: light paper/coral background for light mode.
- `/presentation/generated-burgundy-shapes.png`: dark burgundy abstract title background.

The reusable asset catalog is defined in [src/data/imageAssets.ts](/Users/tobiasbertilsson/kod/vue-presentation-template/src/data/imageAssets.ts). Use the asset `id` in `deck.ts`.

## Available Slide Components

The reusable page type catalog is defined in [src/data/slideTypes.ts](/Users/tobiasbertilsson/kod/vue-presentation-template/src/data/slideTypes.ts). The Vue component registry is defined in [src/data/slideRegistry.ts](/Users/tobiasbertilsson/kod/vue-presentation-template/src/data/slideRegistry.ts).

- `TitleSlide`: front slide with kicker, title, subtitle, presenter and meta.
- `IntroductionSlide`: introduction or agenda slide with numbered points.
- `ChapterSlide`: section divider with number, title and subtitle.
- `BigIdeaSlide`: one large statement with optional supporting body text.
- `ContentSlide`: title, short body copy and bullets.
- `SplitSlide`: two-column comparisons such as before/after or problem/solution.
- `ThreeColumnSlide`: three parallel ideas, principles, phases or tracks.
- `CardGridSlide`: 3-5 cards for principles, phases, services or lessons.
- `ImageBackgroundSlide`: full-bleed image or cinematic background slide.
- `SpeakerSlide`: presenter or guest speaker introduction.
- `QuoteSlide`: large reflection or quote with source.
- `ClosingSlide`: final message with next steps.
- `QuestionsSlide`: Q&A ending slide with optional contact details.

## Project Structure

```text
src/
├─ components/
│  ├─ deck/
│  │  ├─ PresentationDeck.vue
│  │  └─ SlideFrame.vue
│  └─ slides/
├─ data/
│  ├─ deck.ts
│  └─ slideTypes.ts
├─ styles/
│  ├─ tokens.css
│  ├─ typography.css
│  ├─ layout.css
│  ├─ slides.css
│  └─ utilities.css
├─ App.vue
└─ main.ts
```

## Navigation

- Use `ArrowRight`, `ArrowDown`, `Space` or `PageDown` for the next slide.
- Use `ArrowLeft`, `ArrowUp` or `PageUp` for the previous slide.
- Press `F` to enter or exit browser fullscreen.
- Press `L` to toggle between English and Swedish.
- Press `T` to toggle between dark and light theme.
- Press `M` to cycle slide transitions: `fade`, `slide`, `lift`, `zoom` and `wipe`.
- Press `N` to open speaker notes.
- Use the controls in the lower right corner when presenting with a pointer.
- Use the left slide navigator to jump between slides. It is hidden automatically in fullscreen.
- Use the language switch in the upper right corner to choose `EN` or `SV`.

## Theming

Design tokens live in [src/styles/tokens.css](/Users/tobiasbertilsson/kod/vue-presentation-template/src/styles/tokens.css). Start there to change colors, typography or spacing across the whole deck. The template includes both dark and light theme tokens, and the deck can switch theme with `T` or the theme button.

## GitHub Pages

Use the included `.github/workflows/deploy-pages.yml` workflow and set GitHub Pages to `GitHub Actions` in repository settings. The Vite base path is detected automatically in GitHub Actions, and can be overridden with `VITE_BASE_PATH`.
