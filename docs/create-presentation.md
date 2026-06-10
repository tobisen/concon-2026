# Create A New Presentation

This repo is designed to be forked for each new presentation.

## 1. Fork And Install

```sh
npm install
npm run dev
```

## 2. Configure The Deck

Start in `src/data/presentationConfig.ts`.

- Set `meta.title`, `meta.speaker`, `meta.date`, `meta.contact` and `meta.repositoryUrl`.
- Set `VITE_BASE_PATH` only if you need to override the automatic GitHub Pages base path.
- Choose default `language`, `theme` and `transition`.
- Disable `languageSwitch`, `themeSwitch` or `transitionSwitch` when a presentation should be locked.

## 3. Create Slides

Edit `src/data/deck.ts` directly, or scaffold a starter deck:

```sh
npm run create:deck my-talk "My Talk Title"
```

Each slide uses a named `type`:

```ts
{
  type: 'content',
  props: {
    kicker: 'Context',
    title: 'Why this matters',
    body: 'Short body text.',
    bullets: ['One', 'Two', 'Three'],
  },
  notes: ['Private speaker note.'],
}
```

## 4. Choose Images

Use `imageAsset` with any id from `src/data/imageAssets.ts`:

```ts
{
  type: 'image-background',
  imageAsset: 'generated-burgundy-shapes',
  props: {
    title: 'A strong section opener',
  },
}
```

## 5. Present

- `F`: fullscreen
- `L`: language
- `T`: theme
- `M`: transition
- `N`: speaker notes

The slide navigator is visible on the left while editing or presenting in the browser window. It is hidden automatically in fullscreen.

## 6. Deploy To GitHub Pages

The included GitHub Actions workflow builds and deploys `dist` on every push to `main`.

In GitHub, go to `Settings` -> `Pages` and set `Build and deployment` to `GitHub Actions`.

For normal project pages, the Vite base path is detected automatically from the repository name. For custom domains or unusual paths, set `VITE_BASE_PATH` as a repository variable or workflow environment value.
