import SlideShell from "../SlideShell";
import {
    EyeOff,
    AlertTriangle,
    Bug,
    Lock,
    Zap,
} from "lucide-react";

const STEPS = [
    { n: "01", label: "Prompt", state: "visible" },
    { n: "02", label: "Tokenize", state: "visible" },
    { n: "03", label: "Embed", state: "fading" },
    { n: "04", label: "Attention", state: "blackbox" },
    { n: "05", label: "Decode", state: "fading" },
    { n: "06", label: "Output", state: "visible" },
];

const RISKS = [
    {
        Icon: EyeOff,
        title: "No explainability",
        sub: "Attention ≠ business reasoning. The path from token to answer is opaque.",
    },
    {
        Icon: Bug,
        title: "Hallucination",
        sub: "Confident, fluent — and often wrong. Closed APIs offer no source proof.",
    },
    {
        Icon: Lock,
        title: "Data leakage",
        sub: "Prompts, docs, PII flow to a vendor with no audit of training reuse.",
    },
    {
        Icon: Zap,
        title: "Silent model drift",
        sub: "Provider swaps weights overnight. Yesterday's controls no longer apply.",
    },
    {
        Icon: AlertTriangle,
        title: "Lock-in & cost shock",
        sub: "Pricing, latency, and access change without warning. No fallback.",
    },
];

export default function Slide2ApiUprising() {
    return (
        <SlideShell number={2} eyebrow="The Black-Box Risk">
            <div className="h-full w-full flex flex-col reveal">
                <div className="flex items-end justify-between">
                    <h2 className="font-serif font-light text-5xl lg:text-6xl leading-[1.05] tracking-tight max-w-4xl">
                        Inside the transformer,
                        <br />
                        the token journey goes{" "}
                        <span className="italic text-[var(--amber)]">dark</span>.
                    </h2>
                    <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--cream-dim)] max-w-[260px] text-right">
                        What enters as language exits as a guess — with no
                        receipt
                    </p>
                </div>

                {/* Token journey — visualizing the black box */}
                <div className="mt-12">
                    <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[var(--muted)] mb-5">
                        The journey of a token
                    </p>

                    <div className="relative">
                        <div className="absolute left-0 right-0 top-1/2 h-px bg-[var(--line)]" />

                        <div className="grid grid-cols-6 gap-3 relative">
                            {STEPS.map((s, i) => {
                                const isBlack = s.state === "blackbox";
                                const isFade = s.state === "fading";
                                return (
                                    <div
                                        key={s.n}
                                        className="flex flex-col items-center"
                                        data-testid={`token-step-${i + 1}`}
                                    >
                                        <span className="font-mono text-[9px] tracking-[0.2em] text-[var(--muted)]">
                                            {s.n}
                                        </span>
                                        <div
                                            className={`mt-2 h-12 w-full flex items-center justify-center relative z-10 border ${
                                                isBlack
                                                    ? "bg-black border-[var(--crimson)]/60 shadow-[0_0_30px_-8px_rgba(239,68,68,0.6)]"
                                                    : isFade
                                                      ? "bg-[var(--ink-2)] border-[var(--line)]"
                                                      : "bg-[var(--ink-2)] border-[var(--amber)]/60"
                                            }`}
                                        >
                                            <span
                                                className={`font-serif text-sm ${
                                                    isBlack
                                                        ? "text-[var(--crimson)]/60 italic"
                                                        : isFade
                                                          ? "text-[var(--cream-dim)]"
                                                          : "text-[var(--cream)]"
                                                }`}
                                            >
                                                {isBlack ? "???" : s.label}
                                            </span>
                                        </div>
                                        <span className="mt-2 font-mono text-[9px] tracking-[0.15em] uppercase text-[var(--muted)]">
                                            {isBlack
                                                ? "Black box"
                                                : isFade
                                                  ? "partial"
                                                  : "visible"}
                                        </span>
                                        {!isBlack && i !== STEPS.length - 1 && null}
                                        {isBlack && (
                                            <p className="mt-2 font-mono text-[9px] tracking-[0.15em] uppercase text-[var(--crimson)]">
                                                no proof
                                            </p>
                                        )}
                                        {!isBlack && (
                                            <p className="mt-2 font-mono text-[9px] tracking-[0.15em] uppercase text-[var(--amber)]/0">
                                                .
                                            </p>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Big black-box label */}
                        <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 font-mono text-[9px] tracking-[0.3em] uppercase text-[var(--crimson)]/80">
                            ↑ this is where trust dies
                        </div>
                    </div>
                </div>

                {/* Risk cards */}
                <div className="mt-16 grid grid-cols-5 gap-4 flex-1">
                    {RISKS.map((r, i) => (
                        <div
                            key={r.title}
                            className="border border-[var(--line)] bg-[var(--ink-2)]/40 p-5 hover:border-[var(--crimson)]/50 transition-colors"
                            data-testid={`risk-${i + 1}`}
                        >
                            <r.Icon
                                className="w-5 h-5 text-[var(--crimson)]/90"
                                strokeWidth={1.5}
                            />
                            <p className="mt-4 font-serif text-lg text-[var(--cream)] leading-tight">
                                {r.title}
                            </p>
                            <p className="mt-2 text-[11px] text-[var(--cream-dim)] leading-snug">
                                {r.sub}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-8 flex items-center gap-6 border-t border-[var(--line)] pt-5">
                    <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--amber)]">
                        Bottom line
                    </span>
                    <p className="font-serif text-xl text-[var(--cream)]">
                        You can't{" "}
                        <span className="italic text-[var(--amber)]">audit</span>{" "}
                        what you can't{" "}
                        <span className="italic text-[var(--amber)]">see</span>{" "}
                        — and you can't trust what you can't audit.
                    </p>
                </div>
            </div>
        </SlideShell>
    );
}
