# DigiMedic - Digitální páteř českého zdravotnictví

DigiMedic je inovativní platforma zaměřená na digitalizaci a optimalizaci procesů ve zdravotnictví. Naším cílem je přinášet efektivitu, přesnost a lepší péči o pacienty.

## Projektový Brief

[... obsah zkrácen pro přehlednost ...]

## Začínáme

### Požadavky

- Node.js (verze 14 nebo vyšší)
- npm (obvykle dodáváno s Node.js)

### Instalace

1. Naklonujte repozitář:
   ```
   git clone https://github.com/your-username/digimedic-web.git
   cd digimedic-web
   ```

2. Nainstalujte závislosti:
   ```
   npm install
   ```

3. Vytvořte soubor `.env` v kořenovém adresáři projektu s následujícím obsahem:
   ```
   GHOST_API_URL=https://testing.ghost.io
   GHOST_CONTENT_API_KEY=5ce67fdca96b95001edfec0f:a508cf3db7fb5cdde015746fcb00023895d875c0d6bfb1b5246e293c179dc128
   ```

### Spuštění vývojového serveru

```
npm run dev
```

Otevřete [http://localhost:3000](http://localhost:3000) ve vašem prohlížeči pro zobrazení aplikace.

## Blog a Ghost CMS

Tento projekt využívá Ghost CMS pro správu a zobrazení blogových příspěvků.

### Použití

1. Přejděte na `http://localhost:3000/blog` pro zobrazení blogových příspěvků.
2. Pro správu obsahu blogu se přihlaste do administrace Ghost CMS na adrese poskytnuté vaším Ghost CMS poskytovatelem.

### Řešení problémů

Pokud se příspěvky nezobrazují:

- Ověřte, že GHOST_API_URL a GHOST_CONTENT_API_KEY v `.env` jsou správné.
- Zkontrolujte konzoli prohlížeče a serveru pro případné chybové zprávy.
- Ujistěte se, že máte publikované příspěvky v Ghost CMS.

## Nasazení

Tento projekt je připraven pro nasazení na Vercel. Postupujte podle těchto kroků:

1. Pushněte vaše změny do Git repozitáře.
2. V Vercel dashboardu vytvořte nový projekt a propojte ho s vaším repozitářem.
3. V nastavení projektu na Vercel přidejte následující proměnné prostředí:
   - GHOST_API_URL
   - GHOST_CONTENT_API_KEY
4. Spusťte nasazení.

## Testování

Pro spuštění testů použijte následující příkaz:

```
npm test
```

## Přispívání

Příspěvky jsou vítány. Prosím, otevřete issue nebo pull request pro jakékoliv návrhy nebo opravy.

## Licence

[MIT](https://choosealicense.com/licenses/mit/)