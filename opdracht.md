# opdracht 3 - geavanceerde page selector block (~4 uren)

## Setup (25m)
- Opzetten en testen nieuwe plugin (10m)
- Zoeken op Google naar ideetjes, oplossingen voor een goede implementatie (15m)
  - Gevonden:
    - https://wholesomecode.ltd/blog/wp_query-gutenberg-equivalent-getentityrecords/
    - https://rudrastyh.com/gutenberg/get-posts-in-dynamic-select-control.html


## Editor: Via post query van pagina wisselen (105m)
- Implementeren getEntityRecords voor binnenhalen page data
  - issue: post data retrieven met withSelect, getEntityRecords werkt eerst wel, returned daarna 'null'
- Issue gefixt, async call werkte weer na het oplossen van paar fouten in de code
- Select menu met pagina's weergeven & onderhuids de data voor pagina's verzamelen en kunnen gebruiken in editor en frontend
  - Issue: pagina selecteren op ID werkt niet, probleem met setState
    - Mogelijke oplossing: Dispatch data -> check https://developer.wordpress.org/block-editor/reference-guides/data/
    - Oplossing gevonden op Stackoverflow: https://wordpress.stackexchange.com/questions/357853/wordpress-gutenberg-block-with-esnext-withstate-withselect
-  

## Editor: Titel tonen die geselecteerd is (20m)
- Select state werkend krijgen, dat data beschikbaar is van de geselecteerde pagina na selecteren van een andere pagina.

## Frontend: Titel en featured image tonen (65m)
- Issue, attributes zijn per default niet set voor 'save'. Soms wordt postdata al wel ingeladen, voordat media data beschikbaar is.
- Weergave van featured image
  - Issue: error in de code voor weergave van hetzelfde img element voor zowel edit als save. 
  - Oplossing: Voor 'save' moet data via attributes worden ingesteld in de 'edit'. 

## Frontend Knop naar geselecteerde pagina (10m)

## Sources: 
- https://awhitepixel.com/blog/wordpress-gutenberg-create-custom-block-part-10-fetching-posts-higher-order-components/