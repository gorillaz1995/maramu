import type { Metadata } from "next";
import { LegalPage, Operator } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termeni și condiții",
  description: `Termenii de utilizare a site-ului și condițiile de rezervare la ${site.name}.`,
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Termeni și condiții"
      current="/termeni-si-conditii"
      intro="Prin folosirea acestui site și prin trimiterea unei cereri de rezervare accepți termenii de mai jos. Sunt scriși simplu; dacă ceva nu e clar, întreabă-ne."
    >
      <h2>1. Despre noi</h2>
      <Operator />

      <h2>2. Rezervări</h2>
      <ul>
        <li>
          Cererea trimisă prin site, e-mail, telefon sau WhatsApp nu este o rezervare fermă. Rezervarea este confirmată doar
          după ce îți răspundem explicit, cu perioada, camera și prețul.
        </li>
        <li>Pentru unele perioade (sărbători, evenimente) putem cere un avans, comunicat la confirmare.</li>
        <li>Prețurile afișate pe site sunt orientative, în lei, pe cameră și pe noapte, și pot varia în funcție de sezon.</li>
      </ul>

      <h2>3. Anulare</h2>
      <p>
        Condițiile de anulare și de returnare a avansului sunt comunicate la confirmarea rezervării, înainte să plătești
        ceva. Dacă nu ai primit astfel de condiții, anularea este gratuită.
      </p>

      <h2>4. Pe durata sejurului</h2>
      <ul>
        <li>Te rugăm să respecți liniștea celorlalți oaspeți, mai ales după ora 22:00.</li>
        <li>Fumatul este permis doar în spațiile exterioare amenajate.</li>
        <li>Eventualele pagube produse în cameră sau în spațiile comune se suportă de cel care le-a produs.</li>
      </ul>

      <h2>5. Conținutul site-ului</h2>
      <p>
        Textele și fotografiile proprii aparțin {site.name}. Unele fotografii ale Maramureșului provin de pe Unsplash și sunt
        folosite conform licenței Unsplash. Nu poți reutiliza conținutul în scop comercial fără acordul nostru.
      </p>

      <h2>6. Soluționarea litigiilor</h2>
      <p>
        Dacă apare o problemă, scrie-ne mai întâi la <a href={`mailto:${site.email}`}>{site.email}</a> — vrem s-o rezolvăm
        împreună. Ca și consumator, te poți adresa și Autorității Naționale pentru Protecția Consumatorilor (
        <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="noopener noreferrer">
          ANPC — Soluționarea alternativă a litigiilor
        </a>
        ) sau platformei europene de{" "}
        <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
          soluționare online a litigiilor
        </a>
        .
      </p>

      <h2>7. Legea aplicabilă</h2>
      <p>Acești termeni sunt guvernați de legea română.</p>
    </LegalPage>
  );
}
