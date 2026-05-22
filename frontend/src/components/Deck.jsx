import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Printer, Maximize2 } from "lucide-react";
import Slide1Title from "./slides/Slide1Title";
import Slide2ApiUprising from "./slides/Slide2ApiUprising";
import Slide3TokenJourney from "./slides/Slide3TokenJourney";
import Slide4ModelPortfolio from "./slides/Slide4ModelPortfolio";
import Slide5OperatingModel from "./slides/Slide5OperatingModel";
import Slide6Closing from "./slides/Slide6Closing";

const SLIDES = [
    { id: 1, label: "The Shift", Component: Slide1Title },
    { id: 2, label: "The API Uprising", Component: Slide2ApiUprising },
    { id: 3, label: "The Token Journey", Component: Slide3TokenJourney },
    { id: 4, label: "Model Portfolio", Component: Slide4ModelPortfolio },
    { id: 5, label: "Operating Model", Component: Slide5OperatingModel },
    { id: 6, label: "AI Assurance", Component: Slide6Closing },
];

export default function Deck() {
    const [idx, setIdx] = useState(0);
    const total = SLIDES.length;

    const go = useCallback(
        (n) => setIdx((cur) => Math.max(0, Math.min(total - 1, cur + n))),
        [total],
    );

    const jump = useCallback(
        (i) => setIdx(Math.max(0, Math.min(total - 1, i))),
        [total],
    );

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown")
                go(1);
            else if (e.key === "ArrowLeft" || e.key === "PageUp") go(-1);
            else if (e.key === "Home") jump(0);
            else if (e.key === "End") jump(total - 1);
            else if (e.key === "p" && (e.metaKey || e.ctrlKey)) {
                /* let browser handle */
            }
            else if (/^[1-9]$/.test(e.key)) jump(parseInt(e.key, 10) - 1);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [go, jump, total]);

    const handlePrint = () => window.print();
    const handleFullscreen = () => {
        if (!document.fullscreenElement)
            document.documentElement.requestFullscreen?.();
        else document.exitFullscreen?.();
    };

    const Active = SLIDES[idx].Component;

    return (
        <div
            className="relative w-full h-screen bg-[var(--ink)] text-[var(--cream)] overflow-hidden"
            data-testid="deck-root"
        >
            {/* Screen view: only current slide */}
            <div className="slide-canvas no-print" data-testid="slide-canvas">
                <Active />
            </div>

            {/* Print-only: render all slides */}
            <div className="hidden print:block">
                {SLIDES.map(({ Component, id }) => (
                    <div className="print-slide" key={id}>
                        <Component />
                    </div>
                ))}
            </div>

            {/* Top bar */}
            <header
                className="no-print fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 py-5"
                data-testid="deck-header"
            >
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--amber)] animate-pulse" />
                    <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--cream-dim)]">
                        Strategic Briefing · 10 min
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={handleFullscreen}
                        className="p-2 rounded-md border border-[var(--line)] hover:border-[var(--amber)] hover:text-[var(--amber)] transition-colors"
                        title="Toggle fullscreen"
                        data-testid="fullscreen-btn"
                    >
                        <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                        onClick={handlePrint}
                        className="flex items-center gap-2 px-3 py-2 rounded-md border border-[var(--line)] hover:border-[var(--amber)] hover:text-[var(--amber)] transition-colors font-mono text-[10px] tracking-[0.2em] uppercase"
                        title="Export to PDF"
                        data-testid="print-btn"
                    >
                        <Printer className="w-3.5 h-3.5" />
                        Export PDF
                    </button>
                </div>
            </header>

            {/* Bottom bar */}
            <footer
                className="no-print fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between px-8 py-5"
                data-testid="deck-footer"
            >
                <div className="flex items-center gap-6">
                    <button
                        onClick={() => go(-1)}
                        disabled={idx === 0}
                        className="group flex items-center gap-2 disabled:opacity-25 disabled:cursor-not-allowed"
                        data-testid="prev-btn"
                    >
                        <span className="w-9 h-9 rounded-full border border-[var(--line)] flex items-center justify-center group-hover:border-[var(--amber)] group-hover:text-[var(--amber)] transition-colors">
                            <ChevronLeft className="w-4 h-4" />
                        </span>
                    </button>
                    <button
                        onClick={() => go(1)}
                        disabled={idx === total - 1}
                        className="group flex items-center gap-2 disabled:opacity-25 disabled:cursor-not-allowed"
                        data-testid="next-btn"
                    >
                        <span className="w-9 h-9 rounded-full border border-[var(--line)] flex items-center justify-center group-hover:border-[var(--amber)] group-hover:text-[var(--amber)] transition-colors">
                            <ChevronRight className="w-4 h-4" />
                        </span>
                    </button>
                </div>

                <div
                    className="flex items-center gap-4"
                    data-testid="slide-indicator"
                >
                    <div className="flex items-center gap-1.5">
                        {SLIDES.map((s, i) => (
                            <button
                                key={s.id}
                                onClick={() => jump(i)}
                                className="group flex flex-col items-center"
                                data-testid={`dot-${i + 1}`}
                            >
                                <span
                                    className={`block h-[2px] transition-all duration-500 ${
                                        i === idx
                                            ? "w-10 bg-[var(--amber)]"
                                            : "w-5 bg-[var(--line)] group-hover:bg-[var(--cream-dim)]"
                                    }`}
                                />
                            </button>
                        ))}
                    </div>
                    <span className="font-mono text-[10px] tracking-[0.25em] text-[var(--cream-dim)] tabular-nums">
                        {String(idx + 1).padStart(2, "0")} /{" "}
                        {String(total).padStart(2, "0")}
                    </span>
                </div>
            </footer>
        </div>
    );
}
