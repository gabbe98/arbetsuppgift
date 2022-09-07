# Arbetsuppgift

## Tools used

* https://meyerweb.com/eric/tools/css/reset/
* https://fontawesome.com/

## Getting Started

To run this project you will need these VSCode extensions:


### Live Sass Compiler
```
Name: Live Sass Compiler
Id: glenn2223.live-sass
Description: Compile Sass or Scss to CSS at realtime.
Version: 5.5.1
Publisher: Glenn Marks
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass
```

### Live Server
```
Name: Live Server
Id: ritwickdey.LiveServer
Description: Launch a development local Server with live reload feature for static & dynamic pages
Version: 5.7.9
Publisher: Ritwick Dey
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
```

## Test Questions

**Q:** Varför är det generellt en bra idé att placera CSS `<link>`s mellan `<head></head>` och JS `<script>`s precis innan `</body>`? Känner du till några undantag?

**A:** `<link>` är bra att ha i `<head>` så att användaren slipper se html strukturen utan styles innan css har laddats in. `<script>` är generellt bra att ha sist eftersom det kan ta längre tid att ladda in dessa filer. Dock beror allt på vad det är för typ av js man laddar in ett bibliotek ska laddas in tidigt i head så sidan kan ta nytta av dess funktionalitet.

**Q:** Beskriv skillnaderna mellan en cookie, sessionStorage och localStorage.

**A:** Alla är sätt att spara användardata skillnaderna är hur de gör det och hur länge de gör det. Cookies har en viss specifierad livslängd och är data som servern får utav clienten och använder sig utav, att använda cookies vid authentication är ett vanligt exempel. localStorage är likt cookies men har ingen satt livslängd och finns hos clienten tills den har rensats bort, att ha användar preferencer som temafärg(darkmode) sparat här är vanligt. sessionStorage är till för att spara data så att den finns kvar tills användaren avslutar session:en(ex: stänger fönstret).

**Q:** Kan du förklara skillnaden mellan att koda en webbplats för att vara responsiv i jämförelse
med att använda en mobile-first-strategi?

**A:** Antar att att göra en sida responsiv betyder att man har en sida och sedan bygger den så den fungerar på alla skärmar. Att köra mobile-first-strategi betyder helt enkelt att man börjar med mobilvyn och har blivit väldigt populärt det senaste eftersom att så stor del av trafiken sker via mobila enheter nu. Så att prioritera så att UX i mobilt läge inte glöms av kan det vara väldigt smart att börja med det.

**Q:** Om du vill kolla hur en viss funktions (t.ex. CSS Flexible Box Layout) stöd ser ut i olika
webbläsare, vilken tjänst använder du?

**A:** Jag använder mig oftast utav https://caniuse.com/ för att se vart och om saker stöds.
