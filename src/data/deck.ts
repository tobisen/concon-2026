import type { SlideTypeId } from './slideRegistry'

export interface SlideDefinition {
  type: SlideTypeId
  props: Record<string, unknown>
  imageAsset?: string
  notes?: string[]
}

export type DeckLanguage = 'sv'

export const languageLabels: Record<DeckLanguage, string> = {
  sv: 'SV',
}

// 30 minuter inklusive pauser, publikreflektion och markerade egna exempel.
// Kapitel 1: 00–05 · Kapitel 2: 05–13 · Kapitel 3: 13–25 · Avslutning: 25–30.
export const decks: Record<DeckLanguage, SlideDefinition[]> = {
  sv: [
    {
      type: 'title',
      props: {
        kicker: 'ConCon 2026 · Hela resan – från koncept till produkt',
        title: 'Tänk om jag hade vetat',
        subtitle: 'Det vi ofta förstår för sent i produktutveckling',
        presenter: 'Tobias Bertilsson',
      },
      notes: [
        'SYFTE: Öppna i igenkänning och ge den bakgrund som gör frågan personlig. Spara detaljerna om arbetet till de slides där de hjälper berättelsen.',
        'TID: 1:00 · 00:00–01:00. Vänta några sekunder med att börja.',
        'MANUS: Tänk om jag hade vetat. En användbar mening efter en produktleverans. Tänk om jag hade vetat vad användaren försökte göra. Vad ett annat team redan visste. Eller vad vi egentligen menade med klart. I efterhand kan det se förvånansvärt enkelt ut.',
        'MANUS: Jag heter Tobias Bertilsson. Jag har ungefär tio år som frontendutvecklare på Telia ACE Interact bakom mig, och erfarenhet som Scrum Master i en SAFe-organisation med femton till tjugo team. I dag arbetar jag som agil coach och Scrum Master på Livsmedelsverket. Jag använder också AI i egna spelprojekt.',
        'MANUS: Jag har alltså flera ingångar till samma fråga. Vad är det vi förstår först när vi redan har hunnit bygga? Och skulle vi kunna hjälpa varandra att förstå något av det tidigare?',
        'ÖVERGÅNG: Den frågan fick sällskap av en podd jag började lyssna på.',
      ],
    },
    {
      type: 'image-background',
      imageAsset: 'generated-lounge-workspace',
      props: {
        kicker: '01 · Varför frågan fastnade',
        title: 'Varför frågan fastnade',
        subtitle: 'Tankar. Perspektiv. Produktutveckling.',
        body: 'Inspiration: Tänk om vi hade vetat det här tidigare\nTomas Lydahl & Dennis Westerberg',
      },
      notes: [
        'SYFTE: Introducera poddens teman som inspiration till egna frågor om produktutveckling. Bilden är en stämningsbild, inte ett dokumentärt foto.',
        'TID: 2:00 · 01:00–03:00. Ge publikfrågan ungefär tio sekunders tystnad.',
        'MANUS: Jag har lyssnat på ungefär trettio avsnitt av Tänk om vi hade vetat det här tidigare, med Tomas Lydahl och Dennis Westerberg. Där finns återkommande teman om tankar och verklighet, perspektiv, gamla föreställningar, oro och kontroll. Sådant som också kan dyka upp mitt i ett ganska vanligt möte om en ganska vanlig story.',
        'MANUS: Min koppling till produktutveckling är den här: vi arbetar hela tiden med ofullständiga bilder. Vi tolkar en formulering i ett ärende, en fråga från en kollega eller en reaktion från en användare. Sedan fattar vi beslut utifrån den bilden. Ibland hinner vi glömma vilka delar vi faktiskt såg och vilka vi fyllde i själva.',
        'MANUS: Som utvecklare är jag van vid att kunna peka på något konkret. Här är koden. Här är felet. Men samma tydlighet är svårare i ett samtal. Två personer kan läsa samma krav och tänka sig två olika lösningar. Båda kan känna att de har förstått.',
        'MANUS: Tänk på något som blev självklart först i efterhand. Var det en uppgift som saknades? Ett perspektiv? Eller en fråga som ingen hade ställt? [Pausa tio sekunder.] Det är de ögonblicken jag vill stanna i. Jag lånar frågor från poddens teman och gör mina egna kopplingar till arbetet. Det här är inget facit för hur människor fungerar.',
        'ÖVERGÅNG: För ibland är det vår bild av problemet som behöver ändras innan lösningen kan bli bättre.',
      ],
    },
    {
      type: 'big-idea',
      props: {
        kicker: '01 · Vi kanske har missförstått problemet',
        title: 'Det vi tror är problemet är inte alltid det verkliga problemet.',
        body: 'Vi behöver inte alltid fler processer, metoder eller verktyg. Ibland behöver vi upptäcka vad vi har missförstått.',
      },
      notes: [
        'SYFTE: Sätta huvudtesen. Mötessituationen är ett illustrativt exempel, ingen återgiven arbetshändelse.',
        'TID: 2:00 · 03:00–05:00. Låt huvudmeningen landa innan du fortsätter.',
        'MANUS: Det vi tror är problemet är inte alltid det verkliga problemet. [Paus.] Tänk er att samma frågor kommer tillbaka i varje möte. Vi kan tolka det som att mötet fungerar dåligt. Då blir en ny agenda en rimlig idé. Vi kan också undra om deltagarna försöker lösa olika problem. Då behöver vi få syn på skillnaden mellan deras bilder.',
        'MANUS: Det är här poddens frågor om perspektiv blir intressanta för mig. En förklaring kan kännas väldigt självklar inifrån mitt perspektiv. Jag ser att vi upprepar oss och tänker att vi saknar struktur. Någon annan ser att en avgörande fråga aldrig får något svar. Båda kan ha sett något viktigt.',
        'MANUS: Som Scrum Master har jag användning av metoder och struktur. De kan hjälpa oss att undersöka ett problem och samordna arbetet. Men en väl genomförd aktivitet kan fortfarande lämna det viktiga oklart. Vi behöver inte alltid fler processer, metoder eller verktyg. Ibland behöver vi upptäcka vad vi har missförstått.',
        'MANUS: Tidigt i en produktresa måste vi anta saker. Annars kommer vi ingenstans. Frågan är om antagandena går att känna igen senare, när de har blivit ärenden, skisser och kod. Kan vi fortfarande säga det här vet vi inte? Eller har vår första förklaring hunnit bli något som ingen längre frågar efter grunden till?',
        'ÖVERGÅNG: Vi kan börja undersöka det i en situation som är liten nog att känna igen: en story som inte är redo.',
      ],
    },
    {
      type: 'card-grid',
      props: {
        kicker: '02 · Våra tankar formar hur vi arbetar',
        title: 'Fakta eller tolkning?',
        cards: [
          { label: 'Utvecklare', title: 'Kraven är dåliga.', text: 'Vilket beteende ska vi bygga?' },
          { label: 'PO', title: 'För mycket detaljer.', text: 'Vad behöver teamet kunna avgöra?' },
          { label: 'Testare', title: 'Riskerna är oklara.', text: 'Vad händer när det går fel?' },
          { label: 'Scrum Master', title: 'Bättre refinement.', text: 'Hur får vi samtalet att hjälpa?' },
        ],
        body: 'En story är inte redo. Samma situation – fyra tolkningar.',
      },
      notes: [
        'SYFTE: Skilja en gemensam observation från olika tolkningar. Rollerna är illustrativa perspektiv, inte fasta egenskaper eller faktiska kollegor.',
        'TID: 2:00 · 05:00–07:00. Låt publiken läsa korten innan du går igenom dem.',
        'MANUS: En story är inte redo att börja på, utifrån det teamet kommit överens om. Där börjar vårt exempel. Utvecklaren tänker att kraven är dåliga. Produktägaren upplever att teamet vill ha för mycket detaljer. Testaren ser outredda risker. Scrum Mastern föreslår bättre refinement. Fyra sätt att förklara samma situation.',
        'MANUS: Som utvecklare kan jag vilja veta exakt vilket beteende jag ska bygga. Med Scrum Master-hatten kan jag börja fundera på hur samtalet borde gå till. Det är två användbara perspektiv. Det blir knepigt om jag glömmer att även min egen första förklaring behöver undersökas. Scrum Masterns förslag är också ett antagande om vad som skulle hjälpa.',
        'MANUS: Tankar är inte samma sak som fakta. I det här sammanhanget betyder det för mig att vi kan stanna upp mellan observationen och slutsatsen. Vad menar vi med dåliga krav? Vilket beslut går inte att fatta ännu? Vilken risk behöver vi förstå? Frågorna kan göra det möjligt att arbeta vidare utan att först bli överens om vem som borde ha gjort annorlunda.',
        'MANUS: Vi behöver fortfarande bedöma vilka förklaringar som håller. Alla påståenden är inte lika underbyggda. Men vi får bättre möjligheter att göra den bedömningen om vi börjar i vad var och en faktiskt har sett. Nästa gång en story känns oklar kan vi be om ett konkret exempel på det som saknas, och lyssna efter om vi ens pratar om samma sak.',
        'ÖVERGÅNG: Ibland finns förklaringen i den aktuella storyn. Ibland har vi burit den med oss mycket längre.',
      ],
    },
    {
      type: 'quote',
      props: {
        kicker: '02 · Våra tankar formar hur vi arbetar',
        title: 'Vårt gamla bagage',
        quote: '”Det fungerar aldrig hos oss.”',
        source: 'En erfarenhet → en berättelse → en sanning?',
      },
      notes: [
        'SYFTE: Knyta poddens tema om gamla föreställningar till hur ett teams självbild formas. Texten på sliden är en illustrativ teamberättelse, inte ett poddcitat.',
        'TID: 2:00 · 07:00–09:00. Reservera cirka 25 sekunder för en verklig berättelse.',
        'MANUS: Det fungerar aldrig hos oss. Det är en väldigt effektiv mening. Den kan avsluta ett försök innan någon ens behöver prova. Men bakom den kan det finnas en fullt rimlig erfarenhet. Någon minns hur mycket arbete något tog och hur lite det hjälpte.',
        'MANUS: I poddens resonemang om gamla föreställningar finns en fråga jag tar med mig till team: när blev en tidigare erfarenhet en sanning om vilka vi är? Det fungerade inte den gången kan bli det fungerar inte här. Till slut kanske vi inte längre hör det som en slutsats. Vi hör det som en beskrivning av verkligheten.',
        '[PERSONLIGT EXEMPEL BEHÖVS] Välj en verklig situation från teamarbetet, gärna på Telia, där ett tidigare försök påverkade viljan att prova igen. Återge den faktiska formuleringen eller beskriv den utan citattecken. Vad hade provats, under vilka villkor, och vilka förutsättningar gällde nu? Ett förändrat resultat behöver inte finnas. Cirka 25 sekunder.',
        'MANUS: Erfarenheten är värdefull. Jag vill förstå vad den säger oss om just den här situationen. Vad är fortfarande relevant? Vad har ändrats? Och vad skulle vi behöva se för att ompröva vår slutsats? Om svaret på den sista frågan är ingenting kan berättelsen ha blivit svår att undersöka. Då finns det kanske något att vara nyfiken på, även för den som tycker sig ha varit med länge.',
        'ÖVERGÅNG: Gamla erfarenheter kan göra oss försiktiga. Nästa fråga är vad vi gör med osäkerheten som finns kvar.',
      ],
    },
    {
      type: 'split',
      props: {
        kicker: '02 · Våra tankar formar hur vi arbetar',
        title: 'Mer kontroll är inte alltid lösningen',
        leftTitle: 'När vi söker kontroll',
        leftBody: 'Osäkerhet\n↓\nFler möten och mer detaljstyrning\n↓\nFortfarande olika bilder',
        rightTitle: 'När vi söker förståelse',
        rightBody: 'Osäkerhet\n↓\nEn gemensam fråga att undersöka\n↓\nEtt litet försök att lära av',
      },
      notes: [
        'SYFTE: Knyta oro och kontroll till produktarbetet. De två flödena visar möjliga svar på osäkerhet, inte en generell orsakslag.',
        'TID: 2:00 · 09:00–11:00. Följ först vänster flöde och sedan höger.',
        'MANUS: Osäkerhet är inte särskilt bekvämt. Det går att förstå längtan efter en tydligare plan, en tätare avstämning eller lite fler detaljer. Jag vill också veta om arbetet går framåt. Frågan är vilken sorts osäkerhet vi försöker hantera.',
        'MANUS: I en organisation med femton till tjugo team finns det verkliga beroenden att samordna. Där kan en tydlig rutin eller ett möte göra stor nytta. Men om vi inte vet om användaren förstår ett nytt flöde blir den frågan inte besvarad av att vi rapporterar status oftare. Vi kan få bättre koll på arbetet och samtidigt vara lika osäkra på behovet.',
        'MANUS: Poddens teman om oro och kontroll får mig att vilja ställa en ganska praktisk fråga: vad skulle göra oss klokare här? Om osäkerheten gäller användningen kanske en enkel skiss och ett samtal ger oss något att gå vidare med. Om den gäller ansvar kanske vi behöver samla rätt personer och fatta ett beslut. Åtgärden behöver passa det vi faktiskt saknar förståelse för.',
        'MANUS: Innan nästa möte kan vi därför fråga vilken osäkerhet mötet ska hjälpa oss med. Och efteråt: vad förstår vi nu som vi inte förstod innan? Den frågan vill jag kunna ställa också när det är jag som skickat inbjudan. Att lägga till en avstämning är trots allt en rätt lättillgänglig färdighet för en Scrum Master. Det svårare är att märka när vi behöver undersöka något annat.',
        'ÖVERGÅNG: För att kunna göra det behöver fler delar av produktbilden få plats i samtalet.',
      ],
    },
    {
      type: 'content',
      props: {
        kicker: '02 · Våra tankar formar hur vi arbetar',
        title: 'Teamet behöver förstå varandra',
        body: 'Vi behöver inte bara dela information. Vi behöver skapa gemensam förståelse.',
        bullets: [
          'PO · Vad är värdet?',
          'UX · Hur möter vi behovet?',
          'Utvecklare · Vad hänger ihop?',
          'Testare · Vad kan vi ha missat?',
          'Verksamhet · Vad händer i vardagen?',
        ],
      },
      notes: [
        'SYFTE: Göra gemensam förståelse konkret genom frontend, UX och olika produktperspektiv. Frågorna tillhör hela teamet, även om de här visas vid olika roller.',
        'TID: 2:00 · 11:00–13:00. Peka ut sambanden mellan två perspektiv snarare än att läsa upp hela listan.',
        'MANUS: Jag har med mig Vue, TypeScript och Storybook från frontendvärlden. Där finns många sätt att göra en komponent tydlig. Vilka värden tar den emot? Vilka tillstånd kan den visa? Vad händer när något går fel? I samarbetet med UX och kring tillgänglighet behöver vi också fråga hur komponenten fungerar i en människas faktiska flöde.',
        'MANUS: En väl beskriven komponent svarar inte ensam på varför den behövs. Ett tydligt mål svarar inte på alla tekniska beroenden. Och ett flöde som ser begripligt ut kan behöva prövas på fler sätt innan vi förstår hur det fungerar i vardagen. Frågorna på höger sida behöver mötas någonstans.',
        'MANUS: Det kan vara så enkelt som att vi berättar igenom ett exempel tillsammans. En person försöker göra det här. Vad ser den? Vad kan den göra härnäst? Vad händer när något saknas? Då kan utvecklaren höra något som påverkar komponenten, och verksamheten upptäcka att vi missat en vanlig situation.',
        'MANUS: Samma dokument kan alltså vara tillgängligt för alla utan att vi ännu har en gemensam bild. Ett sätt att upptäcka det är att låta olika personer återberätta behovet med egna ord. Vi lyssnar efter luckorna och skillnaderna. Om någon säger jag förstår inte kan det vara precis där samtalet behöver börja. Det är en ganska liten handling, men den kräver att vi ger varandra utrymme att vara osäkra.',
        'ÖVERGÅNG: Nu vill jag stanna lite längre i ett möte där allt det här möts: refinement.',
      ],
    },
    {
      type: 'split',
      props: {
        kicker: '03 · Ett refinement som aldrig tog slut',
        title: 'Vi pratade mycket.\nMen förstod vi samma sak?',
        leftTitle: 'Mycket diskussion',
        leftBody: 'Samma möte.\nOlika bilder av beslutet.',
        rightTitle: 'Gemensam förståelse',
        rightBody: 'Vi kan beskriva samma behov.\nVi vet vad som är osäkert.',
        body: 'Vilken osäkerhet blev mindre – och vad behöver vi undersöka?',
      },
      notes: [
        'SYFTE: Skilja mängden kommunikation från gemensam förståelse. Visa att refinement ska minska osäkerhet och skapa en gemensam bild av behov, beslut och nästa steg.',
        'TID: 3:00 · 13:00–16:00. Cirka 2–3 minuters manus med korta pauser. Ingen extra minut för en enskild berättelse behövs.',
        'REGI: Beskriv de generella erfarenheterna från Telia som ett återkommande mönster. Rollernas olika bilder nedan är en tänkt illustration, inte repliker eller observationer från ett dokumenterat möte. Metoderna nämns som möjliga förbättringar, utan påståenden om att de infördes eller gav ett visst resultat.',
        'MANUS: Vi pratade mycket. Men förstod vi samma sak? [Paus.] Under mina ungefär tio år på Telia ACE Interact arbetade jag både som frontendutvecklare och Scrum Master. Det jag beskriver här är en samlad bild av erfarenheter från det arbetet.',
        'MANUS: Refinement kunde bli långt och ineffektivt. Stories var ibland för lite förberedda, och produktägarens perspektiv fanns inte alltid tillgängligt i samtalet. Då kunde vi fastna i detaljer medan frågor om behovet låg kvar. Det säger något om förutsättningarna för samarbetet. Vi behövde få utveckling, test och produktägare att mötas kring samma frågor.',
        'MANUS: Jag har också ett ansvar där. Som utvecklare kan jag vilja lösa hur något ska byggas innan vi har förstått varför det behövs. Som Scrum Master kan jag bli upptagen av att hjälpa mötet framåt och få nästa story redo. En bock i kanten är lättare att se än gemensam förståelse.',
        'MANUS: Det kopplar för mig till poddens återkommande resonemang om tolkningar och fakta. Jag kan känna mig säker på min bild utan att ha undersökt om vi delar den. Tänk er en situation där utveckling lämnar mötet med bilden att flödet är beslutat, test ser ett undantag som måste utredas och produktägaren tror att behovet fortfarande ska undersökas. Det är en tänkt illustration. Alla kan ha lyssnat och ändå ha olika bilder av vad som är bestämt.',
        'MANUS: Då hjälper det att kunna återberätta samma exempel tillsammans. Vad försöker användaren göra? Vad har vi faktiskt beslutat? Vad är fortfarande osäkert, och hur tar vi reda på det? Skillnaderna i svaren ger oss något konkret att arbeta med. [Paus.]',
        'MANUS: Bättre förberedelser, Three Amigos och en tydligare Definition of Ready är möjliga stöd. Jag vill bedöma dem utifrån vilka frågor de hjälper oss att reda ut. Det går att fylla i en checklista och fortfarande förstå olika saker.',
        'MANUS: Ett långt samtal kan vara precis vad som behövs. Det jag vill fråga är vilken osäkerhet som blev mindre. Syftet med refinement är att skapa gemensam förståelse, så att vi kan ta nästa steg tillsammans. Jag behöver alltså också kunna stanna upp och märka när vi ännu inte är där.',
        'ÖVERGÅNG: En sak vi kan ha olika bilder av är vad som räknas som klart. Kan användaren faktiskt ta sig igenom hela flödet? Där blir tillgänglighet och kvalitet väldigt konkreta.',
      ],
    },
    {
      type: 'split',
      props: {
        kicker: '03 · Insikterna i praktiken',
        title: 'Vi såg kvaliteten för sent',
        leftTitle: 'Tidigt',
        leftBody: 'Frågan påverkar nästa beslut.',
        rightTitle: 'Sent',
        rightBody: 'Vi behöver gå tillbaka.',
        journeyStages: [
          {
            title: 'Design',
            early: 'Tangentbord hela vägen?',
            late: 'Fokusfrågan saknas.',
            discovery: 'early',
          },
          {
            title: 'Implementation',
            early: 'Bygg in fokusflödet.',
            late: 'Antagandet blir kod.',
          },
          {
            title: 'Test',
            early: 'Pröva hela flödet.',
            late: 'Fokus fastnar i dialogen.',
            discovery: 'late',
          },
          {
            title: 'Leverans',
            early: 'Ett prövat flöde.',
            late: 'Gör om. Verifiera igen.',
          },
        ],
        body: '↶ Tillbaka till design, implementation och test.',
      },
      notes: [
        'SYFTE: Visa samma tillgänglighetsfråga längs två produktresor. Dialogen är ett illustrativt exempel; den ska inte framställas som en inträffad händelse utan talarens komplettering. Inga kostnadstal eller påståenden om full WCAG-efterlevnad.',
        'TID: 2:30 · 16:00–18:30. Följ den tidiga raden, sedan den sena. Avsätt cirka 35 sekunder för ett eget exempel.',
        'MANUS: Tillgänglighet är ett område där jag har erfarenhet från frontend och samarbete med UX och test. Det gör frågan om kvalitet ganska konkret. Vad menar vi egentligen när vi säger att något går att använda? Och när i produktresan låter vi den frågan påverka våra beslut?',
        'MANUS: Här använder jag en tänkt dialogruta. På översta raden ställer vi tangentbordsfrågan redan i designen: hur kommer personen in i dialogen, runt i den och ut igen? Då kan vi välja ett mönster och bygga fokusflödet med den användningen i åtanke. I test prövar vi att det fungerar hela vägen.',
        'MANUS: På den nedre raden finns samma fråga kvar, men vi upptäcker hindret först i test. Personen fastnar i dialogen. Då behöver vi tillbaka till tidigare beslut. Ska designen ändras? Hur påverkas implementationen? Vilka tester behöver vi göra om? Pilarna visar vilket arbete frågan berör. De är ingen kostnadskurva.',
        '[PERSONLIGT EXEMPEL BEHÖVS] Välj ett verkligt exempel från ditt arbete med WCAG, UX och frontend: fokus i en dialog, tangentbordsnavigation eller felåterkoppling. När blev frågan synlig och vilka beslut berördes? Knyt berättelsen till stegen på sliden, cirka 35 sekunder. Om du saknar en faktisk berättelse, behåll dialogen som ett uttryckligen tänkt exempel och använd tiden till att beskriva sambanden.',
        'MANUS: WCAG kan hjälpa oss att formulera konkreta kvalitetskrav. För att kraven ska påverka produkten behöver de också komma in i samtalen där vi väljer lösning. Jag vill kunna se hela användningen tillsammans med UX och test, medan det fortfarande finns utrymme att välja. Samma fråga kan hjälpa oss framåt tidigt och tvinga oss att gå tillbaka senare.',
        'ÖVERGÅNG: Ju snabbare vi kan genomföra en lösning, desto mer intressant blir det vilka frågor som får följa med.',
      ],
    },
    {
      type: 'split',
      props: {
        kicker: '03 · Insikterna i praktiken',
        title: 'AI gör oss snabbare – men åt vilket håll?',
        leftTitle: 'Snabbt utan målbild',
        leftBody: 'Fler funktioner.\nOprövade antaganden.\nOklara kvalitetskrav.',
        rightTitle: 'Snabbt med syfte',
        rightBody: 'Ett behov att pröva.\nTydlig återkoppling.\nTestbara kvalitetskrav.',
        body: 'Att bygga snabbare hjälper inte om vi bygger fel sak.',
      },
      notes: [
        'SYFTE: Visa att AI kan förstärka både tydliga och otydliga intentioner. Warbound och Hollowbane är bakgrund till ett personligt exempel, inga specifika funktioner eller utfall tillskrivs projekten.',
        'TID: 2:30 · 18:30–21:00. Avsätt cirka 40 sekunder för ett verkligt spelprojektexempel.',
        'MANUS: I egna spelprojekt använder jag AI-stöd i utvecklingen. Det gör frågan om fart väldigt påtaglig. Jag kan få hjälp att implementera, föreslå tester och göra något möjligt att prova. Men verktyget får också arbeta med den målbild jag lyckas formulera. Är den oklar kan jag snabbt få mer att reda ut.',
        '[PERSONLIGT EXEMPEL BEHÖVS] Välj ett faktiskt tillfälle från Warbound eller Hollowbane. Vad ville du undersöka eller åstadkomma? Vad bad du AI om? Vad behövde du själv bedöma i resultatet? Visa gärna hur målbild eller kvalitetskrav påverkade ditt nästa steg, om du har ett sådant exempel. Påstå inga funktioner, misslyckanden eller tidsvinster som inte inträffat. Cirka 40 sekunder.',
        'MANUS: De två sidorna visar två tänkbara sätt att arbeta. På vänster sida är implementationen snabb, men vi har inte bestämt vad vi vill få reda på. Något som går att köra kan börja kännas färdigt, trots att vi ännu inte prövat om det hjälper användaren. Att kod finns är ett väldigt synligt resultat. Att en avsikt fortfarande är oklar syns sämre.',
        'MANUS: På höger sida använder vi samma möjlighet till fart, men ger arbetet ett syfte. I ett tänkt spel kan vi vilja undersöka om en ny spelare förstår sitt nästa val. Då behöver vi veta vilken återkoppling spelaren ska få och vilka egenskaper prototypen måste ha för att försöket ska säga oss något. Kvalitetskraven hjälper oss att bedöma det vi får tillbaka.',
        'MANUS: Vi kan alltså använda AI för att bygga vidare på en gissning, och vi kan använda AI för att pröva den. Skillnaden kräver fortfarande omdöme från oss. Vad ska det här hjälpa oss att förstå? Hur avgör vi om det fungerar? Det är frågor jag vill bära med mig också när implementationen känns ovanligt enkel.',
        'ÖVERGÅNG: Och den frågan om mitt eget omdöme tar mig till perspektivet jag har med mig mellan mina roller.',
      ],
    },
    {
      type: 'big-idea',
      props: {
        kicker: '03 · Från Scrum Master till agil coach',
        title: 'Först förstå människorna och problemet.',
        body: 'Sedan förbättra processen.\nFrån Telia till Livsmedelsverket.',
      },
      notes: [
        'SYFTE: Ge plats åt ett personligt perspektivskifte från Telia till Livsmedelsverket. Slidens ordning är en föreslagen hållning att reflektera över, inte en påstådd redan upplevd insikt eller rangordning mellan yrkesroller.',
        'TID: 2:00 · 21:00–23:00. Ge den egna reflektionen cirka 40 sekunder.',
        'MANUS: Jag kommer från frontend och arbete som Scrum Master i en större SAFe-organisation på Telia. Nu arbetar jag som agil coach och Scrum Master på Livsmedelsverket. Den förflyttningen ger mig en fråga att bära med mig: vad behöver jag förstå innan jag försöker förbättra något?',
        '[PERSONLIGT EXEMPEL BEHÖVS] Sätt egna ord på övergången från Telia till Livsmedelsverket. Välj en verklig situation, eller en egen reflektion du faktiskt står för, om hur du har börjat förstå människorna och problemet innan du föreslår en processförändring. Vad har ändrats och vad är sig likt? Om perspektivskiftet ännu är en ambition, säg det. Cirka 40 sekunder. Bekräfta att budskapet på sliden stämmer med din hållning.',
        'MANUS: Först förstå människorna och problemet. Sedan förbättra processen. Ordningen på sliden är värd att pröva. Vad försöker människorna åstadkomma? Vilka villkor arbetar de under? Vad är det som gör situationen svår? Med den förståelsen blir det lättare att bedöma vilken förändring som kan hjälpa.',
        'MANUS: Det kan fortfarande vara en tydligare rutin, ett bättre möte eller en annan fördelning av ansvar. Processen är ett viktigt redskap. Jag vill att den ska svara mot något vi faktiskt har försökt förstå. Och jag behöver kunna ompröva även mitt eget förslag när jag får höra något jag inte visste från början.',
        'ÖVERGÅNG: Det för oss tillbaka till tre frågor som har följt med hela vägen genom presentationen.',
      ],
    },
    {
      type: 'three-column',
      props: {
        kicker: '03 · Insikterna i praktiken',
        title: 'Tänk om vi hade frågat tidigare?',
        columns: [
          { label: '01', title: 'Skilj fakta från antaganden.', text: 'Vad har vi sett? Vad har vi fyllt i?' },
          { label: '02', title: 'Skapa förståelse innan lösningen.', text: 'Kan vi beskriva behovet tillsammans?' },
          { label: '03', title: 'Våga ompröva det självklara.', text: 'Vad skulle få oss att ändra oss?' },
        ],
      },
      notes: [
        'SYFTE: Samla tre lärdomar och knyta dem till de konkreta avsnitten, utan att återberätta hela föredraget.',
        'TID: 2:00 · 23:00–25:00. Låt varje lärdom få en kort paus.',
        'MANUS: Skilj fakta från antaganden. Vi såg det i storyn som inte var redo. Vad kunde vi faktiskt peka på, och vilken förklaring lade var och en till? Vi måste få anta saker för att kunna arbeta. Men om vi kan säga här gissar vi finns det också något vi kan undersöka.',
        'MANUS: Skapa förståelse innan lösningen. I refinement blir frågan om vi kan beskriva samma behov. I tillgänglighetsarbetet handlar den om vilken användning design och kod behöver stödja. Och med AI kan vi göra något konkret snabbt för att förstå mer. Lösningar kan hjälpa oss tänka. Vi behöver veta vilken fråga vi använder dem till.',
        'MANUS: Våga ompröva det självklara. Det som fungerade då kanske behöver anpassas nu. Det som inte fungerade då kanske fortfarande är fel idé, men vi behöver kunna förklara varför. Och mitt eget förslag kan behöva ändras när någon annan gör en del av bilden synlig.',
        'MANUS: De här frågorna kan följa hela resan från koncept till produkt. När vi formar konceptet: vilket behov tror vi finns? Under utvecklingen: är det fortfarande samma behov vi försöker möta? Inför leverans: vad har vi faktiskt prövat och vad vet vi ännu inte? Det finns inget läge där vi plötsligt är färdiga med att förstå.',
        'MANUS: För mig är det också där kopplingen till podden landar. Att upptäcka hur jag tolkar något kan öppna en ny fråga i arbetet. Jag behöver kunna höra ett annat perspektiv innan jag bestämmer att nästa metod är svaret. Ofta går det att börja i ett samtal vi ändå ska ha.',
        'ÖVERGÅNG: Här är fem frågor till just ett sådant samtal. Välj den som skulle hjälpa er mest.',
      ],
    },
    {
      type: 'introduction',
      props: {
        kicker: '04 · Till nästa teammöte',
        title: 'Fem frågor till nästa teammöte',
        intro: 'Välj en fråga. Börja med något ni arbetar med just nu.',
        points: [
          'Vad vet vi och vad antar vi?',
          'Vilken gammal berättelse håller oss tillbaka?',
          'Vems perspektiv saknas?',
          'Försöker vi lösa rätt problem?',
          'Vad önskar vi att vi hade förstått tidigare?',
        ],
      },
      notes: [
        'SYFTE: Låta publiken välja en av de fem oförändrade reflektionsfrågorna och koppla den till ett aktuellt arbete.',
        'TID: 3:30 · 25:00–28:30. Inkluderar 30 sekunder enskild reflektion och en minut i par eller fortsatt enskilt.',
        'MANUS: Det här är frågorna jag vill lämna kvar hos er. Ni behöver inte ställa alla fem i nästa möte. Börja med en och något konkret som ni faktiskt arbetar med: en story, ett beroende, en skiss eller ett hinder som kommer tillbaka.',
        'MANUS: Vad vet vi och vad antar vi? Den kan hjälpa oss att skilja en observation från vår förklaring. Vilken gammal berättelse håller oss tillbaka? Där kan vi undersöka vilken erfarenhet som har blivit en regel. Vems perspektiv saknas? Det kan vara någon i rummet, men också någon som aldrig fick en inbjudan.',
        'MANUS: Försöker vi lösa rätt problem? Börja gärna med att låta flera personer beskriva vilket problem de tror att ni löser. Vad önskar vi att vi hade förstått tidigare? Den frågan kan hjälpa oss att hitta något vi vill få syn på tidigare nästa gång. Ni behöver inte lösa allt för att kunna välja en användbar fråga.',
        'PUBLIKREFLEKTION: Tänk på ett arbete du är mitt i. Vilken fråga skulle du vilja ställa där? Formulera den för dig själv. [Var tyst i ungefär 30 sekunder.]',
        'PUBLIKREFLEKTION: Berätta gärna för personen bredvid vilken fråga du valde och varför. Ni har en minut tillsammans. Du kan också fortsätta fundera själv. [Ge en hel minut och samla sedan lugnt rummet igen.]',
        'MANUS: Tack. Ta gärna med just den formuleringen till nästa teammöte. Det räcker att börja där och lyssna på hur andra svarar. Om svaren överraskar er har ni redan något att utforska tillsammans.',
        'ÖVERGÅNG: Då vill jag vända på frågan vi började med.',
      ],
    },
    {
      type: 'closing',
      props: {
        kicker: 'Tänk om jag hade vetat →',
        title: 'Tänk om vi kan förstå det tidigare nästa gång?',
        body: 'Vi kan inte veta allt från början. Men vi kan bli bättre på att upptäcka vad vi ännu inte förstår.',
      },
      notes: [
        'SYFTE: Återknyta till titeln och lämna publiken med en framåtriktad möjlighet, utan nya teman eller krav.',
        'TID: 1:30 · 28:30–30:00. Pausa efter slutmeningen och låt bilden ligga kvar.',
        'MANUS: Tänk om jag hade vetat. Vi började med en fråga som tittar bakåt. Den kan hjälpa oss att förstå vad som hände. Men jag vill också kunna ta med den framåt: tänk om vi kan förstå det tidigare nästa gång?',
        'MANUS: Kanske börjar det med att någon ber oss förklara vad vi menar med klart. Kanske med att vi provar ett flöde med tangentbord innan vi har bestämt alla detaljer. Eller med att vi säger det här är ett antagande och bestämmer hur vi ska pröva det.',
        'MANUS: Vi kommer fortfarande att missa saker. Det hör till att göra något där vi inte vet allt i förväg. Men vi kan göra det lättare för varandra att upptäcka det vi missar, medan det fortfarande går att välja. Den som säger jag förstår inte kan ge fler än sig själv möjlighet att förstå.',
        'MANUS: Så det är frågan jag vill lämna med er. Vad kan ni hjälpa varandra att få syn på lite tidigare nästa gång? [Paus.] Vi kan inte veta allt från början. Men vi kan bli bättre på att upptäcka vad vi ännu inte förstår. Tack.',
        'ÖVERGÅNG: Ingen ny slide. Lämna tillbaka till moderatorn eller ta frågor med avslutningsbilden kvar.',
      ],
    },
  ],
}
