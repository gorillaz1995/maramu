# După Apă la Răzvan — site

Next.js 16 (App Router) · React 19 · GSAP 3 (ScrollTrigger, SplitText) · Lenis · Tailwind CSS 4.

```
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Unde se editează

- `lib/site.ts` — telefon, e-mail, adresă, prețuri masă, date firmă. **Completați câmpurile `DE COMPLETAT`** (denumire SRL, CUI, Reg. Com., rețele sociale) înainte de lansare — apar în subsol și în paginile legale.
- `lib/content.ts` — camere și prețuri, activități, obiective turistice, texte anotimpuri.
- `lib/images.ts` — lista fotografiilor.

## Imagini

Fotografiile proprii sunt corectate de culoare (ton cald, pereții mov/roz neutralizați) și redimensionate în `public/images/site/` (828 px mobil, 1600 px desktop):

```
python scripts/grade-images.py public public/images/site
```

Video-ul hero pentru mobil (`public/media/hero-mobile.mp4`) este `mock2.mp4` decupat la format vertical.

## Cookie-uri / GDPR

- Banner + panou de setări (`components/CookieConsent.tsx`), alegerea se păstrează 6 luni.
- Google Analytics se încarcă doar cu acord „Statistici” și doar dacă e setat `NEXT_PUBLIC_GA_ID`.
- Harta Google de pe /contact se încarcă doar cu acord „Marketing” sau la click.
- Formularul de rezervare nu trimite date la server: compune un e-mail / mesaj WhatsApp.
