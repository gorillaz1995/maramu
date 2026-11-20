type LogoProps = {
  className?: string;
  /** Colour of the script line and the water stroke. */
  accent?: string;
};

/** Wordmark: carved-roof mark + "După apă" + script "la Răzvan". Inherits currentColor. */
export const Logo = ({ className = "", accent = "text-clay" }: LogoProps) => (
  <span className={`inline-flex items-end gap-2 leading-none ${className}`}>
    <svg viewBox="0 0 40 28" aria-hidden className="mb-[0.2em] h-[1.35em] w-auto shrink-0">
      <path
        d="M3 15 20 3l17 12M8 12v13h24V12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 21c6-4 12-4 18 0s12 4 18 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        className={accent}
      />
    </svg>
    <span className="flex flex-col">
      <span className="font-display text-[1.3em] font-normal tracking-[-0.02em]">După apă</span>
      <span className={`script -mt-[0.1em] self-end pr-1 text-[1.5em] transition-colors duration-500 ${accent}`}>
        la Răzvan
      </span>
    </span>
  </span>
);
