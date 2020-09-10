# Kursen Webbutveckling III(DT173G), Moment 2

## Syfte

I huvudsak är syftet att förenkla och effektivera utvecklingsarbetet genom att automatisera repetitiva arbetsuppgifter. Alla uppgifter som
är återkommande är lämpliga att automatisera.

Att minska fel och misstag och därmed höja kvaliteten
Att effektivisera vanliga uppgifter för att höja produktiviteten och få mera uträttat till design & programmering.

#### Automatisering av min utvecklingsmiljö

* **Konkatenering samt minifiering av JavaScript filer**
* **Konkatenering, minifiering av CSS filer**
* **Minifiering av images utan att påverka kvaliteten nämnvärt**

Genom att göra på detta sätt får jag en webbplats med så få filer som möjligt men också med en så liten storlek som möjligt.

Sammantaget ger detta en snabbare webbplats med kortare laddtider för css,javascript och imagefiler vilket uppskattat av webbplatsens besökare.

Mina filer blir också betydligt svårare att kopiera eftersom de är nästan oläsliga på grund av minifieringen.

Genom att automatisera får man ett pålitligt, säkert och enhetligt system varje gång man använder det.

För att ytterligare förenkla och göra det smidigt används BrowserSync:
Denna startar en lokal server som öppnar en webbläsare när filer ändras, tillkommer eller tas bort. Detta är smidigt eftersom webbsidan uppdateras live så fort som filer ändras.



### Moduler/Paket

Min utvecklingsmiljö består av följande moduler
gulp - Själva motorn för att hantera automatisering
gulp-concat - Sköter kontatenering för både JavaScrift och CSS filer
gulp-uglify-es - Minifiering av ES6 JavaScript
gulp-cssnano - Minifiera css filer
browser-sync - En server för live uppdatering genom webbläsare
del - Används för att radera en katalog
gulp-imagemin - Minifierar(filstorlek) av image filer som kan vara av typen JPEG,GIF,PNG eller SVG.


## Installation

En installation av remote repository går till på följande sätt.

1. git clone https://github.com/tonytojo/DT173G_module2.git DT173G_m2
2. cd DT173G_m2
3. npm install(Här skapas node_modules)
Notera: Jag kallar target folder för DT173G_m2 men du kan kalla det för vad du vill. Det är alltid bra att ha ett namn som förknippas med innebörden av repositoryt.
