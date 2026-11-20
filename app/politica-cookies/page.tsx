import type { Metadata } from "next";
import { LegalPage, Operator } from "@/components/LegalPage";
import { CookieSettingsButton } from "@/components/CookieSettingsButton";

export const metadata: Metadata = {
  title: "Politica de cookie-uri",
  description: "Ce cookie-uri folosește site-ul, în ce scop și cum îți poți schimba alegerea.",
};

const COOKIES = [
  {
    name: "cookie-consent",
    category: "Strict necesar",
    purpose: "Reține alegerea ta privind cookie-urile.",
    duration: "6 luni",
    provider: "Site-ul nostru",
  },
  {
    name: "season (sessionStorage)",
    category: "Strict necesar",
    purpose: "Reține anotimpul ales (vară/iarnă) pe durata vizitei.",
    duration: "Până închizi fila",
    provider: "Site-ul nostru",
  },
  {
    name: "_ga, _ga_*",
    category: "Statistici",
    purpose: "Google Analytics: măsurare anonimizată a vizitelor. Se setează doar cu acordul tău.",
    duration: "Până la 2 ani",
    provider: "Google",
  },
  {
    name: "NID, AEC și altele",
    category: "Marketing",
    purpose: "Google Maps: afișarea hărții pe pagina de contact. Se încarcă doar cu acordul tău.",
    duration: "Până la 6 luni",
    provider: "Google",
  },
  {
    name: "_fbp",
    category: "Marketing",
    purpose: "Meta Pixel: măsurarea campaniilor. Se setează doar cu acordul tău, dacă îl folosim.",
    duration: "3 luni",
    provider: "Meta",
  },
];

export default function CookiesPage() {
  return (
    <LegalPage
      title="Politica de cookie-uri"
      current="/politica-cookies"
      intro="Cookie-urile sunt fișiere mici salvate de browser. Folosim doar ce e strict necesar fără să te întrebăm; restul, numai după ce ne dai acordul."
    >
      <h2>Cine folosește cookie-urile</h2>
      <Operator />

      <h2>Categorii</h2>
      <ul>
        <li>
          <strong>Strict necesare</strong> — fac site-ul să funcționeze și nu pot fi dezactivate. Temei: art. 4 alin. (5)
          din Legea nr. 506/2004 și interesul legitim.
        </li>
        <li>
          <strong>Preferințe</strong> — rețin alegeri precum datele căutate pentru rezervare.
        </li>
        <li>
          <strong>Statistici</strong> — ne arată, agregat, cum este folosit site-ul.
        </li>
        <li>
          <strong>Marketing</strong> — conținut de la terți (hărți, video) și măsurarea campaniilor.
        </li>
      </ul>

      <h2>Lista cookie-urilor</h2>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Nume</th>
              <th>Categorie</th>
              <th>Scop</th>
              <th>Durată</th>
              <th>Furnizor</th>
            </tr>
          </thead>
          <tbody>
            {COOKIES.map((cookie) => (
              <tr key={cookie.name}>
                <td>
                  <code>{cookie.name}</code>
                </td>
                <td>{cookie.category}</td>
                <td>{cookie.purpose}</td>
                <td>{cookie.duration}</td>
                <td>{cookie.provider}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Cum îți schimbi alegerea</h2>
      <p>
        Poți modifica sau retrage oricând acordul din butonul de mai jos sau din linkul „Setări cookie-uri” din subsolul
        fiecărei pagini. Poți șterge cookie-urile și din setările browserului.
      </p>
      <CookieSettingsButton />

      <h2>Mai multe informații</h2>
      <p>
        Pentru detalii despre datele personale, citește <a href="/politica-de-confidentialitate">Politica de confidențialitate</a>.
      </p>
    </LegalPage>
  );
}
