import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center pt-[var(--header-h)]">
      <div className="container-x text-center">
        <p className="eyebrow">404</p>
        <h1 className="display mt-4 text-[clamp(3rem,9vw,7rem)] text-forest-deep">Ai luat-o pe alt drum</h1>
        <p className="script mt-2 text-5xl text-clay">dar te întoarcem acasă.</p>
        <Link href="/" className="btn btn-clay mt-10">
          Înapoi la pagina principală
        </Link>
      </div>
    </section>
  );
}
