"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { site, phoneHref } from "@/lib/site";

type CopyPhoneProps = {
  className?: string;
  children: ReactNode;
};

/**
 * On phones it dials directly; on desktop it copies the number and confirms with a toast
 * (same behaviour as the old site's CONTACTEAZĂ-NE button).
 */
export const CopyPhone = ({ className, children }: CopyPhoneProps) => {
  const [toast, setToast] = useState(false);
  const timer = useRef<number>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const onClick = async (event: React.MouseEvent<HTMLAnchorElement>) => {
    const touch = window.matchMedia("(pointer: coarse)").matches;
    if (touch) return; // let tel: open the dialer
    event.preventDefault();
    try {
      await navigator.clipboard.writeText(site.phone.replace(/\s/g, ""));
    } catch {}
    setToast(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setToast(false), 3200);
  };

  return (
    <>
      <a href={phoneHref} onClick={onClick} className={className}>
        {children}
      </a>
      {toast &&
        createPortal(
          <div
            role="status"
            className="fixed left-1/2 top-6 z-[80] -translate-x-1/2 rounded-xl bg-forest px-5 py-3 text-sm text-paper shadow-xl"
          >
            Ai copiat numărul nostru ({site.phone}). Dă-ne un telefon!
          </div>,
          document.body,
        )}
    </>
  );
};
