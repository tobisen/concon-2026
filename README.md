# ConCon 2026 – Tänk om jag hade vetat

**Det vi ofta förstår för sent i produktutveckling**

Tobias Bertilsson · ConCon 2026 · Hela resan – från koncept till produkt

Version 1: 14 slides på svenska, cirka 30 minuter inklusive pauser, egna exempel och en kort publikreflektion. Föredraget hämtar inspiration från *Tänk om vi hade vetat det här tidigare* med Tomas Lydahl och Dennis Westerberg. Kopplingarna till produktutveckling är talarens egna reflektioner; inga formuleringar tillskrivs podden som citat.

## Köra och verifiera

Projektet använder Vue 3, TypeScript och Vite 8. Använd Node 22.12+ (eller 20.19+).

```sh
npm ci
npm run dev
```

```sh
npx vue-tsc -b
npm run build
npm run preview
```

`build` kör också typecheck. Projektet har ingen befintlig testsvit eller testscript.

## Innehåll och talaranteckningar

- [src/data/deck.ts](src/data/deck.ts): alla slides och talaranteckningar, i presentationsordning.
- [src/data/presentationConfig.ts](src/data/presentationConfig.ts): metadata, svenskt språk, mörkt tema, diskret toning och kontroller.
- [src/data/slideTypes.ts](src/data/slideTypes.ts) och [src/data/slideRegistry.ts](src/data/slideRegistry.ts): sidtyper och komponentregister.
- [src/data/imageAssets.ts](src/data/imageAssets.ts): befintliga lokala bilder. De två bilderna i föredraget illustrerar samarbete respektive fart/riktning.
- [src/styles](src/styles): mallens burgundy/coral-tema, layout och typografi.

Anteckningarna följer mallens `notes: string[]`. Varje slide har syfte, tid, manus och övergång. Regianvisningar och kompletteringsmarkeringar ska inte läsas högt. Tidsplanen förutsätter att de föreslagna egna exemplen fylls i och att publikpauserna får ta plats. Repetera med klocka för att anpassa till ditt taltempo.

| Del | Slides | Tid |
| --- | --- | --- |
| Varför frågan fastnade | 1–3 | 00:00–05:00 |
| Våra tankar formar hur vi arbetar | 4–7 | 05:00–13:00 |
| Insikterna i praktiken | 8–12 | 13:00–25:00 |
| Avslutning och publikreflektion | 13–14 | 25:00–30:00 |

## Komplettera före framförandet

Sök efter `[KOMPLETTERA MED EGET EXEMPEL]` i `deck.ts`. Varje markering innehåller ett konkret berättelseförslag och avsatt tid:

| Slide | Komplettering | Ungefärlig tid |
| --- | --- | --- |
| 5 · Vårt gamla bagage | En gammal teamberättelse och vilka förutsättningar den byggde på. | 25 sek |
| 8 · Ett refinement som aldrig tog slut | Ett långt eller återkommande refinement: behovet, diskussionen och vad som förblev oklart eller ändrade förståelsen. | 60 sek |
| 9 · Vi såg kvaliteten för sent | Ett tillgänglighetsproblem i samarbete mellan frontend, UX och test; när det upptäcktes och vad som behövde ändras. Ett uttryckligen hypotetiskt dialogexempel finns som alternativ. | 35 sek |
| 10 · AI gör oss snabbare | Ett eget spel- eller prototypprojekt: vad AI hjälpte dig prova och vad du själv behövde bedöma. | 40 sek |
| 11 · Från Scrum Master till agil coach | Din egen reflektion om rollen och ett hinder som krävde flera perspektiv. Bekräfta att jämförelsen på sliden stämmer med din erfarenhet. | 40 sek |

Konferensens exakta datum är inte angivet. Metadata använder därför enbart **2026**.

## Presentera

- `→`, `↓`, `Space`, `PageDown`: nästa slide.
- `←`, `↑`, `PageUp`: föregående slide.
- `F`: helskärm; bildöversikten döljs automatiskt.
- `N`: talaranteckningar ovanpå aktuell slide, i en skrollbar panel. `N` eller `Escape` stänger panelen.
- Knapparna nere till höger navigerar; miniatyrerna till vänster hoppar till valfri slide.

Språk-, tema- och övergångsväxling är avstängda i konfigurationen för det här föredraget. Komponenter och kontroller för dessa funktioner finns kvar. Decket innehåller bara svenska; lägg till språk både i `DeckLanguage` och `decks` om fler versioner behövs senare.

## GitHub Pages

Den befintliga [deploy-pages.yml](.github/workflows/deploy-pages.yml) bygger `dist` och publicerar vid push till `main`. Vite väljer automatiskt repositoryts sökväg i GitHub Actions. `VITE_BASE_PATH` kan användas för att ange en annan bas. Bildvägar hanteras av presentationsmotorns befintliga `withBasePath`.

Välj `GitHub Actions` under repositoryts Pages-inställningar när publicering är aktuell.

Mallen behåller även verktyget `npm run create:deck <filnamn> "Titel"`. Se [docs/create-presentation.md](docs/create-presentation.md) för den allmänna mallguiden.
