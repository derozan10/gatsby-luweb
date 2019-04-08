---
title: 5 tips om de laadtijd van je website te verbeteren
date: "2019-03-06"
layout: post
draft: false
featured: false
tags:
    - performantie
image: ./images/improve-pagespeed/improve-pagespeed.jpg
description: ""
---

Een goede website is gebruiksvriendelijk, doelgericht en ziet er goed uit op elk device. Voldoet jouw website aan al deze eisen? Goed zo, maar vergeet niet dat de laadtijd alsnog cruciaal kan zijn voor een goede gebruikerservaring.

> **40% verlaat meteen jouw website als de laadtijd langer duurt dan 3 seconden en 79% van de bezoekers die ontevreden zijn over de performance van de website, zegt minder geneigd te zijn opnieuw te kopen op deze website.**

Bovenstaande cijfers werden gepubliceerd in een <a target="_blank" href="https://www.thinkwithgoogle.com/marketing-resources/experience-design/mobile-page-speed-load-time/">blogpost van Google in 2016</a> en geven duidelijk aan waarom de laadtijd van je website zo belangrijk is.

## Waarom de performance van je website optimaliseren?

De gemiddelde website wordt inmiddels voor meer dan de helft bezocht door gebruikers met een mobile device, en dus met minder goede tot slechte internetverbinding. "Zware" websites worden op deze manier nog trager ingeladen.

Wetende dat 40% van de bezoekers jouw website meteen verlaat als deze niet binnen de 3 seconden geladen is, is de kans dus erg groot dat je al heel wat klanten hebt laten schieten als je website niet geoptimaliseerd is.

Naast het verbeteren van conversie, heeft pagespeed optimalisatie ook nog eens het voordeel dat Google snelle websites beloont met een hogere weergave in zoekresultaten.

Een snelle website heeft dus volgende voordelen:

-   verhoogd gebruiksgemak (zeker op smartphones)
-   hogere weergave in zoekmachines als Google
-   Minder bezoekers die afhaken, en dus een hogere conversie

## Hoe test ik de snelheid van een website?

![devices-alegria](//images.ctfassets.net/laawkh2e48v0/6knBvkOs9dzBQqiX09bUC5/bbe7c2cfb22234ad76af96720ee51d2e/devices-alegria.png)
Om te kijken hoe het gesteld is met de laadtijd van jouw website, kan je een snelheidstest toen. Hiervoor bestaan gelukkig verschillende tools, waarvan we de beste hier oplijsten:

-   <a href="https://developers.google.com/speed/pagespeed/insights/" target="_blank">Google Pagespeed Insights</a>: een tool van Google en waarschijnlijk de snelste manier om de laadtijd van je website te weten te komen. Geef een website in en krijg meteen een performance-score, alsook verbeterpunten.
-   <a href="https://developers.google.com/web/tools/lighthouse/" target="_blank">Google Lighthouse</a>: de ietwat meer geavanceerde variant van Pagespeed Insights die naast performance je website ook zal analyseren op vlak van SEO, gebruiksvriendelijkeheid, en toegankelijkheid. Uiteraard krijg je ook een gedetailleerde lijst met verbeterpunten voor je website. Daarnaast maakt de tool het erg handig om een trage 3G-verbinding na te bootsen zodat elke speedtest representatief is. Lees <a target="_blank" href="https://developers.google.com/web/tools/lighthouse/#devtools">hier</a> hoe je een Lighthouse test doet via Chrome DevTools.
-   <a target="_blank" href="https://www.webpagetest.org/">Webpage Test</a>: biedt de meeste mogelijkheden om je website te testen op performance. Je kan bijvoorbeeld de server-locatie instellen vanwaar je wil testen, gedetailleerde grafieken opvragen, een concurrenten analyse doen...

**Belangrijk:** De laadtijd van een website is sterk afhankelijk van het type verbinding. Een webpagina openen op je smartphone via een 3G-verbinding zal dus langer duren dan wanneer je thuis verbonden bent met het netwerk via een kabel. Daarom adviseren we om steeds een 3G-netwerk na te bootsten bij een test, alsook alle tests in via het incognito-venster van de browser te doen (zodat hebben je plugins geen invloed op de test).

## Onze tips

In de meeste gevallen kunnen volgende aanpassingen een grote impact hebben op de laadtijd:

-   **Optimaliseer je afbeeldingen**
    Maak je afbeeldingen niet groter dan werkelijk nodig is en gebruik een tool als <a href="https://imageoptim.com" target="_blank">ImageoOptim</a> of <a target="_blank" href="https://squoosh.app/">Squoosh</a> om de bestanden zo licht mogelijk te maken.
    Daarnaast kan het een goed idee zijn om te bekijken welke afbeeldingen echt toegevoegde waarde hebben aan je website en onnodige images te schrappen. Carousels en sliders bovenaan je webpagina zijn bijvoorbeeld een no-brainer om te verwijderen, aangezien deze een erg slechte conversie hebben.
-   **Host je fonts zelf**
    Elimineer requests naar Google Fonts en zet ze op dezelfde server als je website. Door deze techniek toe te passen, kan je soms volledige seconden van de laadtijd winnnen.
-   **Gebruik "_lazy loading_"**
    Lazy loading is een techniek waarbij afbeeldingen pas inladen wanneer ze effectief nodig zijn. Dit kan erg handig zijn als je een pagina hebt met veel visuals. Naarmate je dan verder naar beneden scollt, zullen je afbeeldingen inladen. Soms krijg je dan een korte "animatie" te zien als de image aan het laden is. Dit is echter niet storend en geeft je de kans om de pagina sneller interactief te maken. Voor de implementatie kan je gebruik maken van verschillende libraries, plugins... afhankelijk van welk platform je gebruikt voor jouw website.
-   **Reduceer "render blocking scripts"**
    Ook hier geldt hetzelfde: schrap wat niet nodig is. Bekijk hoeveel Javascript en CSS files ingeladen worden en verklein of elimineer waar nodig. Javascript files kan je bijvoorbeeld ook asynchroon laten inladen.
-   **Optimaliseer de responsetijd van de server**
    Bekijk of de response-tijd van je hosting provider niet te traag is. Verschillende providers als <a target="_blank" href="https://www.cloudflare.com/cdn/">Cloudflare</a> kunnen je files ook vanuit een _Content Delivery Network_ of **CDN** aanbieden, zodat de afstand tussen de server en eindgebruiker wordt ingekort.

Bekijk ook de website <a href="https://speedchecklist.com" target="_blank">speedchecklist.com</a> voor een handige lijst met dingen die je kan bekijken om te optimaliseren.
