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
        'SYFTE: Öppna med en igenkännbar fråga och presentera avsändaren utan en separat CV-slide.',
        'TID: 1:00 · 00:00–01:00. Låt titeln stå i några sekunder innan du börjar.',
        'MANUS: Tänk om jag hade vetat. Det är en ganska användbar mening efter en produktleverans. Man kan fylla i nästan vad som helst efter den. Vad användaren behövde. Vad en annan del av organisationen redan kände till. Eller vad vi egentligen menade med ordet klart.',
        'MANUS: Jag heter Tobias Bertilsson. Jag har arbetat ungefär tio år med produktutveckling inom Telia ACE Interact, bland annat med frontend i Vue och TypeScript och som Scrum Master i en större SAFe-organisation. I dag arbetar jag som agil coach och Scrum Master på Livsmedelsverket. Jag har också med mig arbete med UX, tillgänglighet och kvalitet, och egna spelprojekt där jag använder AI i utvecklingen.',
        'MANUS: Det här är en reflektion över hela resan från koncept till produkt. Framför allt över det vi tror oss förstå på vägen.',
        'ÖVERGÅNG: Frågan i titeln fick ny fart för mig genom något som inte var en podd om produktutveckling.',
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
        'SYFTE: Förklara poddens roll som inspiration och skilja den från talarens egna kopplingar till produktutveckling. Bilden är en stämningsbild ur mallen, inte ett foto från ett eget team.',
        'TID: 2:00 · 01:00–03:00. Gör en kort paus efter frågan till publiken.',
        'MANUS: Jag har lyssnat på ungefär trettio avsnitt av Tänk om vi hade vetat det här tidigare, med Tomas Lydahl och Dennis Westerberg. Där finns teman om tankar och verklighet, om perspektiv, självbild, stress och relationer. När jag lyssnade började jag koppla de frågorna till produktutveckling.',
        'MANUS: Kopplingarna i dag är mina egna reflektioner. Jag återger inga poddcitat och försöker inte göra en sammanfattning av avsnitten. Det som intresserar mig är vad som händer om vi tar med oss frågorna in i ett teamrum. Hur mycket av det vi kallar verklighet är något vi faktiskt har sett? Och hur mycket är vår förklaring till det vi har sett?',
        'MANUS: Som utvecklare är det rätt skönt när ett problem går att återskapa. Här är felet, här är koden, här är en möjlig ändring. I ett samarbete är det svårare. Där kan vi alla ha tillgång till samma ärende och ändå föreställa oss helt olika produkter. Ingen behöver vara oengagerad för att det ska bli så.',
        'MANUS: Tänk på en gång när något blev självklart först i efterhand. Vad var det som saknades innan dess? En uppgift, en annan persons perspektiv eller en fråga som ingen riktigt hade ställt? [Pausa ungefär tio sekunder.] Det är den sortens ögonblick jag vill undersöka här.',
        'ÖVERGÅNG: För om förståelsen ändras kan också själva problemet ändra form.',
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
        'SYFTE: Sätta huvudtesen och flytta fokus från färdiga lösningar till hur vi formulerar problem tillsammans.',
        'TID: 2:00 · 03:00–05:00. Pausa efter den stora meningen.',
        'MANUS: Det vi tror är problemet är inte alltid det verkliga problemet. [Paus.] Det kan låta som en självklarhet. Men när vi redan har börjat lösa något blir det lätt dyrt, både socialt och praktiskt, att backa och fråga vad det var vi skulle åstadkomma.',
        'MANUS: Föreställ er ett team där samma frågor kommer tillbaka i varje möte. En möjlig förklaring är att mötet fungerar dåligt. Då ligger en ny agenda nära till hands. En annan möjlig förklaring är att deltagarna försöker lösa olika problem. Då kan en bättre agenda hjälpa oss att prata mer effektivt förbi varandra. Det här är ett tänkt exempel, men skillnaden mellan förklaringarna är viktig.',
        'MANUS: Jag har inget emot metoder. Som Scrum Master har jag god användning av struktur. En tydlig process kan göra det lättare att upptäcka vad som händer. Men den kan inte ensam avgöra om vi har förstått behovet. Vi behöver inte alltid fler processer, metoder eller verktyg. Ibland behöver vi upptäcka vad vi har missförstått.',
        'MANUS: På vägen från koncept till produkt fattar vi mängder av beslut innan det finns särskilt mycket att titta på. Vi fyller luckorna med erfarenhet. Det behöver vi göra. Frågan är om vi fortfarande ser vilka delar som är antaganden när arbetet väl är i gång. Annars kan vi börja försvara vår första förklaring som om den vore ett observerat faktum.',
        'ÖVERGÅNG: Låt oss ta något så vardagligt som en story som inte blir redo.',
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
        'SYFTE: Göra skillnaden mellan observation och tolkning konkret utan att göra någon yrkesroll till problemet.',
        'TID: 2:00 · 05:00–07:00. Ge publiken några sekunder att läsa de fyra perspektiven.',
        'MANUS: Vi tar en konstruerad situation. En story är inte redo att påbörjas enligt de kriterier teamet kommit överens om. Det är vår gemensamma utgångspunkt. Sedan kommer förklaringarna. Utvecklaren säger att kraven är dåliga. Produktägaren upplever att teamet vill ha för mycket detaljer. Testaren ser risker som ingen har rett ut. Scrum Mastern föreslår bättre refinement. Där känner jag åtminstone igen yrkesreflexen att vilja hjälpa samtalet med lite mer struktur.',
        'MANUS: Rollerna här är exempel, inte beskrivningar av hur utvecklare eller produktägare alltid tänker. Vilken person som helst kan bära vilket perspektiv som helst. Poängen är att alla fyra kan ha sett något relevant. Men uttrycken på korten innehåller redan slutsatser. Dåliga krav jämfört med vad? För mycket detaljer för vilket beslut? Vilka risker saknas det svar på?',
        'MANUS: Vi skulle kunna börja med att göra observationen mer precis. Vilken fråga kan vi inte svara på? Vem berörs av svaret? Vad händer om vi gissar? Då får vi något att undersöka tillsammans, i stället för fyra konkurrerande förklaringar till vem som borde arbeta annorlunda.',
        'MANUS: Det betyder inte att alla uppfattningar är lika väl underbyggda. Vi kan behöva välja och säga emot varandra. Men först behöver vi förstå vad var och en faktiskt har sett. Nästa gång någon säger att kraven är dåliga kan följdfrågan vara ganska enkel: vad i just den här storyn går inte att avgöra ännu?',
        'ÖVERGÅNG: Ibland kommer svaret på den frågan från det här ärendet. Ibland kommer det från en mycket äldre berättelse.',
      ],
    },
    {
      type: 'quote',
      props: {
        kicker: '02 · Våra tankar formar hur vi arbetar',
        title: 'Vårt gamla bagage',
        quote: '”Det har vi redan provat.”\n”Det fungerar aldrig hos oss.”\n”Vi har alltid dåliga krav.”',
        source: 'Exempel på teamberättelser · när erfarenhet blir sanning',
      },
      notes: [
        'SYFTE: Visa hur erfarenheter och självbild kan låsa handlingsutrymmet. Formuleringarna är illustrativa teamberättelser, inte poddcitat.',
        'TID: 2:00 · 07:00–09:00. Avsätt cirka 25 sekunder till ett eget exempel och en kort paus.',
        'MANUS: Det har vi redan provat. Den meningen kan innehålla väldigt värdefull erfarenhet. Någon minns ett försök som kostade tid och inte gav det vi behövde. Det vore dumt att ignorera det. Men vi behöver veta vad det var vi provade, under vilka förutsättningar och vad som faktiskt hände.',
        'MANUS: Annars kan erfarenheten växa tills den blir en regel om framtiden. Det fungerade inte då blir det fungerar aldrig hos oss. Och till slut kan den bli en beskrivning av vilka vi är. Vi är ett sådant team som alltid får dåliga krav. Då kan vi ha börjat använda historien för att förutsäga nästa möte innan det ens har ägt rum.',
        '[KOMPLETTERA MED EGET EXEMPEL] Välj en verklig, anonymiserad situation där en gammal erfarenhet påverkade ett nytt försök. Berätta kort vad som faktiskt hade provats, vilken slutsats ni drog och om förutsättningarna senare förändrades. Om slutsatsen fortfarande var rimlig, säg det. Hitta inte på ett lyckligt slut.',
        'MANUS: En fråga jag tycker är användbar här är: vad skulle vi behöva se för att vilja ompröva den här bilden? Om svaret är ingenting har vi kanske slutat undersöka saken. Samma fråga går att rikta mot den egna yrkesrollen. Behöver jag som Scrum Master alltid ha ett processförslag? Kan jag bidra genom att förstå problemet bättre först? Vi behöver inte glömma historien. Vi behöver kunna skilja den från ett facit för allt som ännu inte har hänt.',
        'ÖVERGÅNG: När det känns osäkert är det lätt att i stället försöka göra framtiden mer kontrollerbar.',
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
        'SYFTE: Visa två möjliga svar på osäkerhet. Diagrammet är en tankemodell, inte ett påstående om att fler möten alltid ger sämre resultat.',
        'TID: 2:00 · 09:00–11:00. Följ pilarna långsamt med blicken eller pekaren.',
        'MANUS: När vi är osäkra vill vi gärna få bättre grepp om arbetet. Det är begripligt. Vi lägger till en avstämning, en checklista eller en mer detaljerad plan. Ibland är det precis vad som behövs. Ett beroende som ingen samordnar kan behöva en tydlig ägare. En risk som ingen följer upp kan behöva en kontrollpunkt.',
        'MANUS: Men om osäkerheten gäller vad användaren behöver kan en tätare statusrapport lämna oss med samma obesvarade fråga. Vi kan få mycket bättre information om hur långt vi har kommit utan att bli klokare på om vi är på väg mot något användbart. Det är skillnaden jag vill visa med de två spåren.',
        'MANUS: Tänk er att vi inte vet om användaren förstår ett nytt flöde. Vi kan ägna mycket tid åt att planera genomförandet av hela flödet. Eller så kan vi först formulera vad vi behöver få syn på i en enkel skiss eller prototyp. Sedan kan vi planera vidare med det vi lär oss. Det här är ett tänkt val, inte en berättelse om ett visst projekt.',
        'MANUS: En praktisk fråga inför nästa möte kan vara: vilken osäkerhet ska det här mötet hjälpa oss med? Och hur märker vi efteråt att vi förstår mer? Jag vill kunna svara på det också när det är jag som har skickat inbjudan. Det är lättare att lägga till ett möte i kalendern än att formulera den fråga som mötet faktiskt behöver besvara. Strukturen ska hjälpa oss att se, pröva och samordna. Den kan inte garantera förståelsen åt oss.',
        'ÖVERGÅNG: Och förståelsen finns sällan färdig hos en enda person.',
      ],
    },
    {
      type: 'card-grid',
      props: {
        kicker: '02 · Våra tankar formar hur vi arbetar',
        title: 'Teamet behöver förstå varandra',
        cards: [
          { label: 'PO', title: 'Värdet', text: 'Varför är detta viktigt?' },
          { label: 'UX', title: 'Behoven', text: 'Hur fungerar det för människan?' },
          { label: 'Utvecklare', title: 'Tekniken', text: 'Vad behöver hänga ihop?' },
          { label: 'Testare', title: 'Riskerna', text: 'Vad kan vi ha missat?' },
          { label: 'Verksamhet', title: 'Vardagen', text: 'Vad händer i praktiken?' },
        ],
        body: 'Vi behöver inte bara dela information. Vi behöver skapa gemensam förståelse.',
      },
      notes: [
        'SYFTE: Visa produktförståelse som något fördelat mellan människor och förklara skillnaden mellan att dela information och att förstå tillsammans.',
        'TID: 2:00 · 11:00–13:00. Låt varje perspektiv få en kort stund.',
        'MANUS: Här finns fem frågor om samma produkt. Produktägaren kan se vilket värde som behöver skapas. UX kan synliggöra hur en människa ska kunna använda lösningen. Utvecklaren kan upptäcka tekniska beroenden. Testaren kan se vad vi ännu inte prövat. Verksamheten kan känna till vad som faktiskt händer i vardagen. Det är inte exklusiva ansvarsområden. Det är olika ingångar till förståelsen.',
        'MANUS: Om vi bara ber alla att uppdatera sin del av dokumentationen kan vi få fem välskrivna beskrivningar. Det betyder inte att sambanden mellan dem har blivit tydliga. Ett användarbehov kan förändra ett tekniskt val. Ett tekniskt beroende kan påverka vad som går att lova. En situation i verksamheten kan avslöja en risk som ingen testidé ännu fångar.',
        'MANUS: Ett enkelt sätt att få syn på glappen är att låta någon beskriva hur lösningen ska fungera med egna ord. Gärna genom ett konkret exempel. En användare försöker göra detta. Vad ser personen? Vad händer sedan? Vad händer när det inte går? Den som berättar behöver inte kunna hela svaret. Luckan i berättelsen kan vara precis det vi behövde hitta.',
        'MANUS: Det kräver att det går att säga jag förstår inte utan att samtalet omedelbart handlar om vems fel det är. Här finns också en praktisk gräns för hur mycket ett verktyg kan hjälpa. Informationen kan ligga tillgänglig och ändå saknas i vårt gemensamma resonemang. Vi behöver inte bara dela information. Vi behöver skapa gemensam förståelse.',
        'ÖVERGÅNG: Låt oss ta med oss det in i ett möte som många av oss känner till: refinement.',
      ],
    },
    {
      type: 'split',
      props: {
        kicker: '03 · Insikterna i praktiken',
        title: 'Ett refinement som aldrig tog slut',
        leftTitle: 'Mycket diskussion',
        leftBody: 'Fler detaljer. Fler följdfrågor.\nSamma story på nästa möte.',
        rightTitle: 'Verklig förståelse',
        rightBody: 'Ett konkret användarbehov.\nEtt gemensamt exempel.\nEtt synligt antagande att pröva.',
      },
      notes: [
        'SYFTE: Förankra temat i talarens erfarenhet av refinement och krav. Rubriken ramar in temat; en specifik händelse måste fyllas i av talaren.',
        'TID: 3:00 · 13:00–16:00. Reservera cirka en minut för den egna berättelsen, inklusive en paus.',
        'MANUS: Refinement är ett bra ställe att upptäcka vad vi ännu inte förstår. Men det kan också vara ett ställe där vi producerar väldigt många ord utan att komma närmare varandra. En story kan få fler detaljer och samtidigt bli svårare att förklara. Då behöver vi fråga vad alla detaljer ska hjälpa oss att avgöra.',
        '[KOMPLETTERA MED EGET EXEMPEL] Välj ett verkligt långt eller återkommande refinement från ditt arbete med krav, teamkommunikation eller beroenden. Berätta: vilket behov försökte ni förstå, vad diskuterade ni länge, och vilken fråga förblev obesvarad? Beskriv ett faktiskt ögonblick som ändrade förståelsen, om ett sådant fanns. Annars: säg vad du i efterhand hade velat fråga. Anonymisera personer och känsliga produktdetaljer. Cirka 60 sekunder; påstå inte att ett visst möte eller resultat inträffade förrän du fyllt i det.',
        'MANUS: Skillnaden mellan vänster och höger sida är inte hur många minuter mötet tar. Ett kort möte kan missa allt viktigt, och ett långt samtal kan vara nödvändigt. Skillnaden är vad vi blir kapabla att förstå och avgöra efteråt. Kan vi beskriva användarens situation? Vet vi vilken förändring vi försöker göra? Ser vi vad som fortfarande är en gissning?',
        'MANUS: Som ett illustrativt exempel: någon säger att det behövs en ny knapp. Då kan vi diskutera placering, färg och implementation väldigt länge. Men om vi inte vet vad personen försöker uppnå när knappen behövs kan vi missa att problemet ligger tidigare i flödet. Det betyder inte att lösningsdetaljerna är oviktiga. De behöver få något att förhålla sig till.',
        'MANUS: Jag skulle vilja att vi ibland avslutar refinement genom att säga samma sak med egna ord: det här försöker användaren göra, det här vet vi ännu inte, och det här blir vårt nästa steg. Om svaren skiljer sig åt har vi fått användbar information. Då kan vi fortsätta samtalet där glappet finns. En story som är färdigskriven och en story som vi förstår är två olika saker.',
        'ÖVERGÅNG: Vissa glapp i förståelsen blir synliga först när vi undersöker vad vi egentligen menar med kvalitet.',
      ],
    },
    {
      type: 'split',
      props: {
        kicker: '03 · Insikterna i praktiken',
        title: 'Vi såg kvaliteten för sent',
        leftTitle: 'Tidigt i flödet',
        leftBody: 'Kan hela dialogen användas med tangentbord?\nEn fråga som påverkar design och komponentval.',
        rightTitle: 'Sent i leveransen',
        rightBody: 'Dialogen går inte att lämna.\nNu behöver design, kod och tester göras om.',
      },
      notes: [
        'SYFTE: Använda tillgänglighet och WCAG som konkret kvalitetsperspektiv genom hela produktresan. Ingen påhittad kostnadsmodell eller uppgift om lagkrav.',
        'TID: 2:30 · 16:00–18:30. Avsätt cirka 35 sekunder för ett eget tillgänglighetsexempel.',
        'MANUS: Tillgänglighet gör frågan om gemensam förståelse väldigt konkret. Vi kan säga att en funktion är klar och samtidigt ha helt olika bilder av vem som ska kunna använda den och hur. WCAG kan hjälpa oss att konkretisera tillgänglighetskrav. Men själva samtalet om användningen behöver finnas medan vi formar lösningen.',
        'MANUS: Ta dialogrutan här som ett tänkt exempel. Tidigt kan vi fråga hur någon öppnar den, rör sig i den och kommer tillbaka med enbart tangentbordet. Svaret påverkar flödet och vilka komponenter vi väljer. Om vi först sent upptäcker att personen fastnar behöver vi ta itu med felet i något som redan kan vara designat, byggt och testat utifrån andra antaganden.',
        'MANUS: Jag sätter ingen prislapp på skillnaden. Omfattningen beror på vad som är byggt och hur det hänger ihop. Men i det här exemplet behöver vi då gå tillbaka genom flera beslut. En fråga som kunde ha väglett arbetet från början blir i stället något vi måste rätta i efterhand.',
        '[KOMPLETTERA MED EGET EXEMPEL] Välj ett verkligt tillgänglighetsproblem från samarbete mellan frontend, UX och test, till exempel fokus i en dialog, tangentbordsnavigation eller begriplig felåterkoppling. Beskriv när det blev synligt och vilka beslut som behövde omprövas. Om du saknar ett passande exempel, behåll dialogen som uttryckligen hypotetiskt exempel och undvik att framställa den som en egen händelse.',
        'MANUS: För mig är det här en bra fråga att bära mellan rollerna: vad behöver vi förstå om användningen redan när vi väljer lösning? En testare kan ställa den, liksom en designer, en utvecklare eller produktägare. Kvaliteten behöver få påverka vad vi bygger. Annars riskerar vi att först bekräfta vår egen bild av klart och sedan upptäcka vem den bilden lämnade utanför.',
        'ÖVERGÅNG: Och om vi kan bygga ännu snabbare blir det ännu mer intressant vilka antaganden som får följa med.',
      ],
    },
    {
      type: 'image-background',
      imageAsset: 'generated-tech-arc',
      props: {
        kicker: '03 · Insikterna i praktiken',
        title: 'AI gör oss snabbare – men åt vilket håll?',
        body: 'Att bygga snabbare hjälper inte om vi bygger fel sak.',
      },
      notes: [
        'SYFTE: Knyta AI-stödd utveckling till huvudtesen utan produktlöften, påhittade mätvärden eller en verktygsgenomgång. Bildens båge fungerar som en metafor för fart och riktning.',
        'TID: 2:30 · 18:30–21:00. Reservera cirka 40 sekunder för eget spel- eller prototypexempel.',
        'MANUS: Jag använder AI-stöd i utveckling, bland annat i egna spelprojekt. Det ger en väldigt konkret ingång till den här frågan. AI kan hjälpa till att skriva kod, föreslå tester och göra en idé möjlig att prova. Men om vi ger arbetet ett felaktigt antagande kan vi också få en mer färdig version av det antagandet.',
        '[KOMPLETTERA MED EGET EXEMPEL] Välj ett verkligt ögonblick ur ett eget spelprojekt eller en AI-stödd prototyp. Visa vad du bad om, vad som blev möjligt att prova och vad du själv behövde bedöma. Om du upptäckte ett felaktigt antagande, beskriv vilket. Lägg inte till en misslyckad funktion eller en tidsvinst som du inte faktiskt kan stå för.',
        'MANUS: Föreställ er annars ett spel där vi antar att spelaren förstår målet. Vi kan få hjälp att bygga fler banor, bättre menyer och mer avancerad logik. Men om spelaren inte förstår vad den försöker göra kan allt det arbetet lämna den ursprungliga frågan obesvarad. Exemplet är hypotetiskt. Det intressanta är hur lätt något som går att köra kan börja kännas som något vi redan har bekräftat.',
        'MANUS: Det finns också en möjlighet åt andra hållet. Om vi använder farten för att pröva en osäker idé tidigt kan vi få något konkret att samtala om. Då blir prototypens uppgift att hjälpa oss lära oss något, och vi behöver vara beredda att ändra eller kasta den. Ett fungerande resultat från ett verktyg är inte i sig ett svar på om användaren behöver det.',
        'MANUS: Frågan jag vill ha med mig är därför: vad är det vi försöker ta reda på med det vi bygger nu? AI kan hjälpa oss i genomförandet och i undersökandet. Men vi behöver fortfarande ta ansvar för hur vi tolkar resultatet och vilket problem vi väljer att gå vidare med. Att bygga snabbare hjälper inte om vi bygger fel sak.',
        'ÖVERGÅNG: Samma fråga om vad arbetet ska hjälpa oss förstå går att rikta mot min egen roll.',
      ],
    },
    {
      type: 'split',
      props: {
        kicker: '03 · Insikterna i praktiken',
        title: 'Från Scrum Master till agil coach',
        leftTitle: 'Hur fungerar arbetet?',
        leftBody: 'Möten. Flöde. Beroenden.\nStruktur som hjälper teamet.',
        rightTitle: 'Hur förstår vi varandra?',
        rightBody: 'Människor. Team. Organisation.\nPerspektiv som behöver mötas.',
      },
      notes: [
        'SYFTE: Ge plats åt talarens egna reflektioner kring rollen och ett bredare perspektiv. Jämförelsen är två fokus, inte en rangordning mellan yrkesroller.',
        'TID: 2:00 · 21:00–23:00. Avsätt cirka 40 sekunder för den egna reflektionen.',
        'MANUS: Jag har arbetat som Scrum Master i en större SAFe-organisation och arbetar nu som agil coach och Scrum Master på Livsmedelsverket. Det här är inte en berättelse om att lämna en roll bakom sig. Jag vill använda de två frågorna på sliden för att undersöka vad rollerna kan behöva rymma.',
        '[KOMPLETTERA MED EGET EXEMPEL] Formulera din egen reflektion om övergången till nuvarande roll. Vad har faktiskt förändrats i ditt sätt att lyssna eller ställa frågor? Välj gärna en anonymiserad situation där ett hinder i arbetet behövde förstås ur flera team- eller organisationsperspektiv. Beskriv bara insikter du själv står för. Om du inte upplever ett tydligt perspektivskifte, säg det och använd de två frågorna som en pågående undersökning.',
        'MANUS: På vänster sida finns sådant som möten, arbetsflöde och beroenden. Det är konkreta saker att arbeta med. På höger sida finns frågor om hur vi tolkar varandras avsikter, vilka villkor olika team arbetar under och vilka beslut organisationen gör möjliga. Båda sidorna behöver få plats oavsett vilken titel som står i kalenderinbjudan.',
        'MANUS: Om ett beroende fastnar kan vi behöva en bättre rutin för samordning. Vi kan också behöva förstå att två team prioriterar utifrån olika uppdrag. Då finns det något att reda ut som inte kan lösas bara genom att flytta en ruta på en tavla. Det är ett generellt exempel, ingen beskrivning av någon av mina arbetsgivare.',
        'MANUS: En fråga att pröva i rollen är: vad behöver jag förstå innan jag föreslår en förändring? Den gör inte verktygslådan mindre användbar. Den hjälper oss att välja när och varför vi använder den.',
        'ÖVERGÅNG: Om vi samlar trådarna blir det tre saker jag vill bjuda in oss att göra tidigare.',
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
        'SYFTE: Samla föredragets tre huvudlärdomar och binda ihop produktresan från koncept till leverans.',
        'TID: 2:00 · 23:00–25:00. Låt de tre lärdomarna få varsin paus.',
        'MANUS: Den första är att skilja fakta från antaganden. Vi behöver antaganden för att kunna gå framåt när vi inte vet allt. Men de behöver vara synliga. Storyn är inte redo var vår utgångspunkt. Kraven är dåliga var en möjlig förklaring. Den skillnaden gör det lättare att fråga vad som faktiskt saknas i just det här arbetet.',
        'MANUS: Den andra är att skapa förståelse innan lösningen. Det betyder inte att vi måste utreda allt innan någon får skriva kod. En skiss, lite kod eller ett test kan vara precis det som gör behovet begripligt. Men vi behöver förstå vilken fråga försöket ska hjälpa oss med. Annars kan vi hinna bygga mycket utan att ens märka vad vi ännu inte har lärt oss.',
        'MANUS: Den tredje är att våga ompröva det självklara. Det vi provade förut kan ha misslyckats av goda skäl. En plan kan ha varit klok med den kunskap vi hade då. När vi får syn på något nytt behöver vi kunna ändra riktning utan att först döma ut människorna som fattade det tidigare beslutet. Det gäller också när den människan är jag själv.',
        'MANUS: Tillsammans blir de tre ett sätt att vara uppmärksam längs hela resan. I konceptet: vilket behov antar vi finns? Under utvecklingen: förstår vi samma sak? Inför leveransen: vem kan använda det vi har byggt, och vad har vi faktiskt prövat? Jag vill inte lägga ytterligare en modell ovanpå allt ni redan använder. Jag vill att de här frågorna ska kunna göra de samtal ni redan har lite mer användbara.',
        'ÖVERGÅNG: Så här är fem frågor att ta med till ett av de samtalen. Ni behöver bara välja en.',
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
        'SYFTE: Ge publiken fem konkreta frågor och tid att välja en att använda i sin egen vardag.',
        'TID: 3:30 · 25:00–28:30. Inkluderar 30 sekunders tyst reflektion och en minut med personen bredvid. Vid behov kan publiken reflektera enskilt under hela minuten.',
        'MANUS: De här fem frågorna går att ta med utan en ny mötesserie. Välj en och knyt den till något ni redan arbetar med. De blir mer användbara om ni har en faktisk story, ett designval eller ett återkommande hinder framför er.',
        'MANUS: Vad vet vi och vad antar vi? Försök skilja det ni har sett från er förklaring till det. Vilken gammal berättelse håller oss tillbaka? Var nyfiken på vilken erfarenhet berättelsen kommer från. Vems perspektiv saknas? Det kan vara någon i rummet som ännu inte kommit till tals, eller en person som inte ens är inbjuden.',
        'MANUS: Försöker vi lösa rätt problem? Den kan vara svår när arbetet redan är i gång. Börja med att beskriva vilket problem ni faktiskt löser nu. Och den sista: vad önskar vi att vi hade förstått tidigare? Försök stanna en stund vid vad ni kan lära er, innan ni går vidare till vad någon borde ha gjort.',
        'PUBLIKREFLEKTION: Tänk på något du arbetar med just nu. Vilken av de fem frågorna skulle vara mest användbar där? Välj en och formulera den för dig själv. [Var tyst i ungefär 30 sekunder. Fyll inte pausen med fler instruktioner.]',
        'PUBLIKREFLEKTION: Om du vill, berätta för personen bredvid vilken fråga du valde och varför. Ni har ungefär en minut tillsammans. Det går lika bra att fortsätta fundera själv. [Ge en hel minut. Be sedan lugnt om uppmärksamheten igen.]',
        'MANUS: Tack. Ni behöver inte ha ett färdigt svar. Det räcker att ha hittat något som är värt att undersöka. Nästa steg kan vara att ställa den frågan på nästa teammöte och lyssna efter om ni svarar på samma sak. Då har en ganska stor reflektion blivit en liten, konkret handling.',
        'ÖVERGÅNG: Jag vill avsluta genom att ändra en sak i frågan vi började med.',
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
        'SYFTE: Knyta tillbaka till titeln och lämna publiken med en framåtriktad fråga.',
        'TID: 1:30 · 28:30–30:00. Ge slutmeningen och tystnaden efteråt ordentligt med plats.',
        'MANUS: Vi började med tänk om jag hade vetat. Den frågan tittar bakåt, mot något som redan har hänt. Den kan vara bra att stanna i när vi behöver förstå ett beslut eller en erfarenhet. Men jag vill att vi också ska kunna vända den framåt: tänk om vi kan förstå det tidigare nästa gång?',
        'MANUS: Det behöver inte innebära att vi förutser hela produktresan. Ibland kan det vara att be någon förklara vad de menar med klart. Att låta ett annat perspektiv påverka en tidig skiss. Eller att säga: det här är fortfarande ett antagande, och vi behöver prova det innan vi bygger vidare.',
        'MANUS: Den som säger jag förstår inte kan ge hela teamet en möjlighet att upptäcka något. Om vi lyckas ta vara på de ögonblicken kan vi lära oss under resan, medan det fortfarande finns val att göra. Vi kommer ändå att missa saker. Frågan är hur vi hjälper varandra att få syn på dem.',
        'MANUS: Vi kan inte veta allt från början. Men vi kan bli bättre på att upptäcka vad vi ännu inte förstår. [Pausa. Låt publiken läsa slutmeningen igen.] Tack.',
        'ÖVERGÅNG: Ingen ny slide. Låt avslutningsbilden ligga kvar när du lämnar tillbaka till moderatorn eller tar frågor om tiden medger.',
      ],
    },
  ],
}
