import SlideShell from "../SlideShell";
import {
    Lock,
    Unlock,
    Cpu,
    Server,
    Eye,
    EyeOff,
    Coins,
    Zap,
} from "lucide-react";

export default function Slide6Closing() {
    return (
        <SlideShell number={6} eyebrow="The Big Picture">
            <div className="h-full w-full grid grid-cols-12 gap-6 reveal">
                <div className="col-span-12">
                    <h2 className="font-serif font-light text-4xl lg:text-5xl leading-[1.05] tracking-tight max-w-5xl">
                        One picture. Two worlds.{" "}
                        <span className="italic text-[var(--amber)]">
                            Pick yours.
                        </span>
                    </h2>
                </div>

                {/* Big infographic — Black-Box vs Open */}
                <div className="col-span-12 grid grid-cols-2 gap-5">
                    {/* BLACK BOX side */}
                    <div className="relative border border-[var(--crimson)]/30 bg-[var(--ink-2)]/40 p-6 overflow-hidden">
                        <span className="absolute -top-3 left-6 bg-[var(--ink)] px-3 font-mono text-[9px] tracking-[0.3em] uppercase text-[var(--crimson)]">
                            Black-Box AI
                        </span>

                        <div className="flex items-baseline justify-between">
                            <Lock
                                className="w-8 h-8 text-[var(--crimson)]/80"
                                strokeWidth={1.4}
                            />
                            <span className="font-serif italic text-base text-[var(--muted)]">
                                trust the vendor
                            </span>
                        </div>

                        <div className="mt-5 grid grid-cols-4 gap-2">
                            {[
                                { Icon: EyeOff, l: "Opaque" },
                                { Icon: Server, l: "Their cloud" },
                                { Icon: Coins, l: "$$$$" },
                                { Icon: Zap, l: "Drift" },
                            ].map((b) => (
                                <div
                                    key={b.l}
                                    className="border border-[var(--line)]/60 bg-black/30 p-3 flex flex-col items-center gap-2"
                                >
                                    <b.Icon
                                        className="w-4 h-4 text-[var(--crimson)]/70"
                                        strokeWidth={1.5}
                                    />
                                    <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-[var(--cream-dim)]">
                                        {b.l}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 space-y-2">
                            {[
                                "Can't audit weights",
                                "Can't pin versions",
                                "Can't run offline",
                                "Can't avoid lock-in",
                            ].map((t) => (
                                <p
                                    key={t}
                                    className="font-serif text-sm text-[var(--cream-dim)] line-through decoration-[var(--crimson)]/40"
                                >
                                    {t}
                                </p>
                            ))}
                        </div>

                        <div className="mt-6 pt-4 border-t border-[var(--line)]">
                            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--crimson)]">
                                Outcome
                            </p>
                            <p className="mt-1 font-serif text-base text-[var(--cream-dim)]">
                                Powerful. Expensive. Unaccountable.
                            </p>
                        </div>
                    </div>

                    {/* OPEN side */}
                    <div className="relative border border-[var(--amber)]/50 bg-[var(--amber)]/[0.04] p-6 overflow-hidden">
                        <span className="absolute -top-3 left-6 bg-[var(--ink)] px-3 font-mono text-[9px] tracking-[0.3em] uppercase text-[var(--amber)]">
                            Open · Auditable · Agentic
                        </span>

                        <div className="flex items-baseline justify-between">
                            <Unlock
                                className="w-8 h-8 text-[var(--amber)]"
                                strokeWidth={1.4}
                            />
                            <span className="font-serif italic text-base text-[var(--amber)]">
                                trust the evidence
                            </span>
                        </div>

                        <div className="mt-5 grid grid-cols-4 gap-2">
                            {[
                                { Icon: Eye, l: "Transparent" },
                                { Icon: Cpu, l: "Your edge" },
                                { Icon: Coins, l: "10× cheaper" },
                                { Icon: Zap, l: "Pinned" },
                            ].map((b) => (
                                <div
                                    key={b.l}
                                    className="border border-[var(--amber)]/30 bg-[var(--ink)] p-3 flex flex-col items-center gap-2"
                                >
                                    <b.Icon
                                        className="w-4 h-4 text-[var(--amber)]"
                                        strokeWidth={1.5}
                                    />
                                    <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-[var(--cream)]">
                                        {b.l}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 space-y-2">
                            {[
                                "Audit every weight",
                                "Pin every version",
                                "Run on-prem · on-device",
                                "Switch vendor anytime",
                            ].map((t) => (
                                <p
                                    key={t}
                                    className="font-serif text-sm text-[var(--cream)]"
                                >
                                    <span className="text-[var(--amber)]">
                                        ✓
                                    </span>{" "}
                                    {t}
                                </p>
                            ))}
                        </div>

                        <div className="mt-6 pt-4 border-t border-[var(--amber)]/30">
                            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--amber)]">
                                Outcome
                            </p>
                            <p className="mt-1 font-serif text-base text-[var(--cream)]">
                                Powerful.{" "}
                                <span className="italic">Affordable.</span>{" "}
                                Accountable.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom: stat strip + closing */}
                <div className="col-span-12 grid grid-cols-4 gap-4 mt-2">
                    {[
                        { big: "10×", small: "lower inference cost" },
                        { big: "100%", small: "data sovereignty" },
                        { big: "0", small: "vendor lock-in" },
                        { big: "∞", small: "audit replay" },
                    ].map((s, i) => (
                        <div
                            key={i}
                            className="border-t border-[var(--amber)]/40 pt-3"
                            data-testid={`bigpic-stat-${i + 1}`}
                        >
                            <p className="font-serif text-4xl text-[var(--amber)] tabular-nums leading-none">
                                {s.big}
                            </p>
                            <p className="mt-2 font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--cream-dim)]">
                                {s.small}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="col-span-12 flex items-end justify-between mt-2">
                    <p className="font-serif text-2xl text-[var(--cream)] max-w-3xl leading-snug">
                        From{" "}
                        <span className="italic text-[var(--muted)] line-through decoration-[var(--crimson)]/60">
                            black-box guesswork
                        </span>{" "}
                        to{" "}
                        <span className="italic text-[var(--amber)]">
                            open, auditable intelligence
                        </span>
                        . That's the shift.
                    </p>
                    <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--amber)] text-right">
                        Thank you
                        <br />
                        <span className="text-[var(--cream-dim)]">
                            Questions welcome
                        </span>
                    </p>
                </div>
            </div>
        </SlideShell>
    );
}
