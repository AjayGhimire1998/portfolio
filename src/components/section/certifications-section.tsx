/* eslint-disable @next/next/no-img-element */
"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { Award, X, ZoomIn } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const BLUR_FADE_DELAY = 0.04;

type Certification = (typeof DATA.certifications)[number];

const chipClass =
  "border bg-background border-border ring-2 ring-border/20 rounded-xl min-h-8 w-fit px-4 py-1 flex items-center gap-2 text-left";

export default function CertificationsSection() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<Certification | null>(null);

  // Open as a native modal: top layer (above the dock), Esc to close,
  // focus moved inside and restored to the chip afterwards.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (active && dialog && !dialog.open) {
      dialog.showModal();
      document.documentElement.style.overflow = "hidden";
    }
  }, [active]);

  const handleClose = () => {
    document.documentElement.style.overflow = "";
    setActive(null);
  };

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {DATA.certifications.map((cert, id) => (
          <BlurFade key={cert.title} delay={BLUR_FADE_DELAY * 10.5 + id * 0.05}>
            {cert.image ? (
              <button
                type="button"
                aria-haspopup="dialog"
                aria-label={`View certificate: ${cert.title}`}
                onClick={() => setActive(cert)}
                className={`${chipClass} group cursor-pointer transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-ring`}
              >
                {/* Award by default; swaps to a zoom glass on hover/focus (always on touch). */}
                <span className="relative size-4 shrink-0" aria-hidden>
                  <Award className="absolute inset-0 size-4 text-muted-foreground transition-opacity duration-200 group-hover:opacity-0 group-focus-visible:opacity-0 pointer-coarse:opacity-0" />
                  <ZoomIn className="absolute inset-0 size-4 text-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 pointer-coarse:opacity-100" />
                </span>
                <span className="text-foreground text-sm font-medium">
                  {cert.title}
                </span>
              </button>
            ) : (
              <div className={chipClass}>
                <Award className="size-4 shrink-0 text-muted-foreground" aria-hidden />
                <span className="text-foreground text-sm font-medium">
                  {cert.title}
                </span>
              </div>
            )}
          </BlurFade>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        onClose={handleClose}
        // A click on the backdrop targets the dialog element itself.
        onClick={(e) => {
          if (e.target === e.currentTarget) e.currentTarget.close();
        }}
        aria-label={active ? `${active.title} certificate` : "Certificate"}
        className="m-auto w-[calc(min(100vw,42rem)-3rem)] max-w-none max-h-[90dvh] overflow-visible bg-transparent p-0 text-foreground backdrop:bg-background/70 backdrop:backdrop-blur-sm"
      >
        {active?.image && (
          <figure className="relative flex flex-col gap-3 rounded-xl border border-border bg-card p-2 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] animate-in fade-in-0 zoom-in-95 duration-200 motion-reduce:animate-none">
            <img
              src={active.image}
              alt={`${active.title} certificate${active.issuer ? ` from ${active.issuer}` : ""}`}
              width={active.width}
              height={active.height}
              className="w-full h-auto max-h-[calc(90dvh-5rem)] object-contain rounded-lg bg-muted"
            />
            <figcaption className="flex items-start justify-between gap-4 px-2 pb-1">
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="text-sm font-medium">{active.title}</span>
                {(active.issuer || active.date) && (
                  <span className="text-xs text-muted-foreground">
                    {[active.issuer, active.date].filter(Boolean).join(" · ")}
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                aria-label="Close certificate"
                className="shrink-0 rounded-lg border border-border p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <X className="size-4" aria-hidden />
              </button>
            </figcaption>
          </figure>
        )}
      </dialog>
    </>
  );
}
