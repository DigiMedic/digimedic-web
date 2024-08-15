# DigiMedic - Digitální páteř českého zdravotnictví

DigiMedic je inovativní platforma zaměřená na digitalizaci a optimalizaci procesů ve zdravotnictví. Naším cílem je přinášet efektivitu, přesnost a lepší péči o pacienty.

#potrebatreba Fix Build

## Projektový Brief

[... obsah zkrácen pro přehlednost ...]

## Blog a Ghost CMS

Tento projekt využívá Ghost CMS pro správu a zobrazení blogových příspěvků. Konfigurace je již nastavena pro specifickou instanci Ghost CMS.

### Konfigurace

1. Ujistěte se, že máte v kořenovém adresáři projektu soubor `.env.local` s následujícím obsahem:

   ```
   GHOST_API_URL=https://digimedic-1.ghost.io
   GHOST_CONTENT_API_KEY=a334da0c639c1a5d19de3500b2
   ```

2. V souboru `next.config.mjs` je již nakonfigurována doména pro načítání obrázků z Ghost CMS.

### Použití

1. Spusťte vývojový server:
   ```
   npm run dev
   ```

2. Otevřete prohlížeč a přejděte na `http://localhost:3000/blog` pro zobrazení blogových příspěvků.

3. Pro správu obsahu blogu se přihlaste do administrace Ghost CMS na adrese `https://digimedic-1.ghost.io/ghost/`.

### Řešení problémů

Pokud se příspěvky nezobrazují:

- Ověřte, že GHOST_API_URL a GHOST_CONTENT_API_KEY v `.env.local` jsou správné.
- Zkontrolujte konzoli prohlížeče a serveru pro případné chybové zprávy.
- Ujistěte se, že máte publikované příspěvky v Ghost CMS.
- Zkuste vymazat cache prohlížeče a znovu načíst stránku.

## Přispívání

Příspěvky jsou vítány. Prosím, otevřete issue nebo pull request pro jakékoliv návrhy nebo opravy.

## Licence

[MIT](https://choosealicense.com/licenses/mit/)