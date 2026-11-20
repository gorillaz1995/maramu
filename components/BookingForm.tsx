"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { rooms, formatPrice } from "@/lib/content";
import { site } from "@/lib/site";

const WHATSAPP = `https://wa.me/4${site.phone.replace(/\s/g, "")}`;

const field =
  "mt-2 w-full rounded-xl border border-forest-deep/15 bg-paper px-4 py-3 text-ink outline-none transition-colors focus:border-forest";

const today = () => new Date().toISOString().slice(0, 10);

/**
 * No server yet: the request is composed into an e-mail (or WhatsApp message)
 * that the guest sends from their own app. Nothing is stored by the site.
 */
export const BookingForm = () => {
  const params = useSearchParams();
  const [sent, setSent] = useState(false);

  const compose = (form: HTMLFormElement) => {
    const data = new FormData(form);
    const room = rooms.find((item) => item.slug === data.get("camera"));
    const lines = [
      `Nume: ${data.get("nume")}`,
      `Telefon: ${data.get("telefon")}`,
      `Sosire: ${data.get("sosire")}`,
      `Plecare: ${data.get("plecare")}`,
      `Adulți: ${data.get("adulti")}, copii: ${data.get("copii")}`,
      `Cameră: ${room ? room.name : "Nu contează"}`,
      `Masă: ${data.get("masa") ? "da, doresc mic dejun / masă" : "nu"}`,
      "",
      String(data.get("mesaj") || ""),
    ];
    return { subject: `Cerere rezervare ${data.get("sosire")} – ${data.get("plecare")}`, body: lines.join("\n") };
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const { subject, body } = compose(form);
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const onWhatsApp = (event: React.MouseEvent<HTMLButtonElement>) => {
    const form = event.currentTarget.form;
    if (!form || !form.reportValidity()) return;
    const { subject, body } = compose(form);
    window.open(`${WHATSAPP}?text=${encodeURIComponent(`${subject}\n\n${body}`)}`, "_blank", "noopener");
    setSent(true);
  };

  return (
    <form onSubmit={onSubmit} className="mt-10 grid gap-5 sm:grid-cols-2" noValidate={false}>
      <label className="text-sm font-medium text-forest-deep">
        Nume și prenume
        <input name="nume" required autoComplete="name" className={field} />
      </label>
      <label className="text-sm font-medium text-forest-deep">
        Telefon
        <input name="telefon" type="tel" required autoComplete="tel" className={field} />
      </label>
      <label className="text-sm font-medium text-forest-deep">
        Sosire
        <input name="sosire" type="date" required min={today()} className={field} />
      </label>
      <label className="text-sm font-medium text-forest-deep">
        Plecare
        <input name="plecare" type="date" required min={today()} className={field} />
      </label>
      <label className="text-sm font-medium text-forest-deep">
        Adulți
        <input name="adulti" type="number" min={1} max={20} defaultValue={2} required className={field} />
      </label>
      <label className="text-sm font-medium text-forest-deep">
        Copii
        <input name="copii" type="number" min={0} max={20} defaultValue={0} className={field} />
      </label>
      <label className="text-sm font-medium text-forest-deep sm:col-span-2">
        Cameră
        <select name="camera" defaultValue={params.get("camera") ?? ""} className={field}>
          <option value="">Nu contează — recomandați-mi voi</option>
          {rooms.map((room) => (
            <option key={room.slug} value={room.slug}>
              {room.name} — {formatPrice(room.price)}
            </option>
          ))}
        </select>
      </label>
      <label className="text-sm font-medium text-forest-deep sm:col-span-2">
        Mesaj (opțional)
        <textarea name="mesaj" rows={4} className={field} placeholder="Ocazie specială, oră de sosire, nevoi pentru copii…" />
      </label>
      <label className="flex items-start gap-3 text-sm text-ink/80 sm:col-span-2">
        <input name="masa" type="checkbox" className="mt-0.5 h-5 w-5 accent-forest" />
        Doresc mic dejun și/sau masă la restaurant
      </label>
      <label className="flex items-start gap-3 text-sm text-ink/80 sm:col-span-2">
        <input name="gdpr" type="checkbox" required className="mt-0.5 h-5 w-5 accent-forest" />
        <span>
          Am citit{" "}
          <Link href="/politica-de-confidentialitate" className="underline underline-offset-4 hover:text-clay">
            Politica de confidențialitate
          </Link>{" "}
          și sunt de acord ca datele mele să fie folosite pentru a răspunde cererii de rezervare.
        </span>
      </label>

      <div className="flex flex-wrap gap-3 pt-2 sm:col-span-2">
        <button type="submit" className="btn btn-clay">
          Trimite pe e-mail
        </button>
        <button type="button" onClick={onWhatsApp} className="btn btn-outline">
          Trimite pe WhatsApp
        </button>
      </div>
      {sent && (
        <p role="status" className="rounded-xl bg-forest/10 p-4 text-sm text-forest-deep sm:col-span-2">
          Am pregătit mesajul în aplicația ta. După ce îl trimiți, îți răspundem cât de repede putem. Dacă nu s-a deschis
          nimic, scrie-ne direct la {site.email} sau sună la {site.phone}.
        </p>
      )}
    </form>
  );
};
