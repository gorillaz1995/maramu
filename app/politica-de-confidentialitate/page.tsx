import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, Operator } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politica de confidențialitate",
  description: `Cum prelucrează ${site.name} datele cu caracter personal, conform GDPR (Regulamentul UE 2016/679).`,
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Politica de confidențialitate"
      current="/politica-de-confidentialitate"
      intro="Respectăm intimitatea oaspeților noștri. Aici explicăm ce date colectăm, de ce, cât timp le păstrăm și ce drepturi ai, conform Regulamentului (UE) 2016/679 (GDPR) și Legii nr. 190/2018."
    >
      <h2>1. Cine suntem</h2>
      <p>Operatorul datelor cu caracter personal este:</p>
      <Operator />

      <h2>2. Ce date prelucrăm</h2>
      <ul>
        <li>
          <strong>Date de contact și rezervare</strong> — nume, telefon, e-mail, perioada sejurului, numărul de persoane,
          preferințe și mesajele pe care ni le trimiți.
        </li>
        <li>
          <strong>Date de cazare</strong> — la sosire, datele din actul de identitate cerute de legislația privind evidența
          turiștilor.
        </li>
        <li>
          <strong>Date de plată</strong> — informațiile necesare facturării. Nu stocăm datele cardului bancar.
        </li>
        <li>
          <strong>Date tehnice</strong> — adresa IP, tipul de dispozitiv și browser, paginile vizitate, doar prin cookie-uri
          și doar în limitele acordului tău (vezi <Link href="/politica-cookies">Politica de cookie-uri</Link>).
        </li>
        <li>
          <strong>Fotografii</strong> — la evenimente sau ședințe foto, doar cu acordul tău înainte de a le publica.
        </li>
      </ul>

      <h2>3. De ce și pe ce temei</h2>
      <table>
        <thead>
          <tr>
            <th>Scop</th>
            <th>Temei legal (art. 6 GDPR)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Răspuns la cereri și gestionarea rezervărilor</td>
            <td>Demersuri înainte de încheierea contractului și executarea contractului — art. 6 alin. (1) lit. b)</td>
          </tr>
          <tr>
            <td>Evidența turiștilor, facturare, contabilitate</td>
            <td>Obligație legală — art. 6 alin. (1) lit. c)</td>
          </tr>
          <tr>
            <td>Statistici despre folosirea site-ului, marketing</td>
            <td>Consimțământ — art. 6 alin. (1) lit. a), pe care îl poți retrage oricând</td>
          </tr>
          <tr>
            <td>Siguranța proprietății și apărarea în caz de litigii</td>
            <td>Interes legitim — art. 6 alin. (1) lit. f)</td>
          </tr>
        </tbody>
      </table>

      <h2>4. Cât timp păstrăm datele</h2>
      <ul>
        <li>Cererile de rezervare neconcretizate: până la 12 luni.</li>
        <li>Datele de cazare și documentele financiar-contabile: pe durata impusă de lege (de regulă 5–10 ani).</li>
        <li>Datele colectate pe bază de consimțământ: până la retragerea acestuia.</li>
      </ul>

      <h2>5. Cui transmitem datele</h2>
      <p>
        Nu vindem datele tale. Le pot accesa, strict cât e necesar, furnizori care ne ajută să funcționăm: servicii de
        e-mail și găzduire web, contabilitate, platforme de rezervare prin care ai ales să rezervi, precum și autorități
        publice, atunci când legea o cere. Unii furnizori (de ex. Google) pot transfera date în afara Spațiului Economic
        European, cu garanții adecvate (clauze contractuale standard sau decizii de adecvare).
      </p>

      <h2>6. Drepturile tale</h2>
      <ul>
        <li>dreptul de acces la date și de a primi o copie;</li>
        <li>dreptul la rectificare și la ștergere („dreptul de a fi uitat”);</li>
        <li>dreptul la restricționarea prelucrării și la portabilitatea datelor;</li>
        <li>dreptul de opoziție, inclusiv față de marketingul direct;</li>
        <li>dreptul de a-ți retrage consimțământul oricând, fără a afecta prelucrarea anterioară;</li>
        <li>dreptul de a nu face obiectul unei decizii bazate exclusiv pe prelucrare automată.</li>
      </ul>
      <p>
        Pentru oricare dintre ele, scrie-ne la <a href={`mailto:${site.email}`}>{site.email}</a>. Răspundem în cel mult o
        lună. Ai și dreptul să depui o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter
        Personal (ANSPDCP), B-dul G-ral. Gheorghe Magheru 28-30, București,{" "}
        <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer">
          www.dataprotection.ro
        </a>
        .
      </p>

      <h2>7. Securitate</h2>
      <p>
        Folosim conexiune criptată (HTTPS), acces limitat la date și furnizori care respectă standarde de securitate. Niciun
        sistem nu este însă perfect sigur; dacă observi ceva în neregulă, anunță-ne.
      </p>

      <h2>8. Minori</h2>
      <p>
        Site-ul nu se adresează copiilor sub 16 ani. Datele copiilor cazați împreună cu părinții sunt furnizate și gestionate
        de aceștia.
      </p>

      <h2>9. Modificări</h2>
      <p>
        Putem actualiza această politică. Versiunea curentă este mereu pe această pagină, cu data ultimei actualizări.
      </p>
    </LegalPage>
  );
}
