export default function SlideShell({
    number,
    eyebrow,
    children,
    accent = "amber",
}) {
    return (
        <section
            className="relative w-full h-full overflow-hidden bg-[var(--ink)] grain"
            data-testid={`slide-${number}`}
        >
            {/* Subtle dot grid corner */}
            <div className="absolute top-0 right-0 w-[320px] h-[320px] dot-grid opacity-60 pointer-events-none" />

            {/* Slide eyebrow */}
            <div className="absolute top-20 left-12 flex items-center gap-4 z-10">
                <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-[var(--amber)]">
                    {String(number).padStart(2, "0")}
                </span>
                <span className="block w-10 h-px bg-[var(--line)]" />
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--cream-dim)]">
                    {eyebrow}
                </span>
            </div>

            <div className="h-full w-full pt-32 pb-24 px-12">{children}</div>

            {/* Bottom-left signature */}
            <div className="absolute bottom-20 left-12 font-mono text-[9px] tracking-[0.3em] uppercase text-[var(--muted)] no-print">
                — Auditable AI Operations
            </div>
        </section>
    );
}
