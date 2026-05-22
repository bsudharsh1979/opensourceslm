import SlideShell from "../SlideShell";
import {
    AlertOctagon,
    Sparkles,
    Cpu,
    Shield,
    LayoutGrid,
    ArrowRight,
} from "lucide-react";

const TOPICS = [
    {
        n: "01",
        Icon: LayoutGrid,
        title: "Today's Agenda",
        sub: "What we'll cover in 10 minutes",
        tag: "Now",
    },
    {
        n: "02",
        Icon: AlertOctagon,
        title: "The Black-Box Risk",
        sub: "Why the transformer's journey of tokens is risky",
        tag: "Risk",
    },
    {
        n: "03",
        Icon: Sparkles,
        title: "The Open-Source Rise",
        sub: "What's truly open — and why it's exploding",
        tag: "Shift",
    },
    {
        n: "04",
        Icon: Cpu,
        title: "The SLM Era",
        sub: "Why small models are winning the enterprise",
        tag: "Edge",
    },
    {
        n: "05",
        Icon: Shield,
        title: "Mitigation & Future",
        sub: "How open-source closes the trust gap",
        tag: "Path",
    },
    {
        n: "06",
        Icon: LayoutGrid,
        title: "The Big Picture",
        sub: "One infographic to remember it all",
        tag: "Wrap",
    },
];

export default function Slide1Title() {
    return (
        <SlideShell number={1} eyebrow="Agenda">
            <div className="h-full w-full grid grid-cols-12 gap-8 reveal">
                {/* Left — manifesto headline */}
                <div className="col-span-5 flex flex-col justify-center">
                    <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--amber)]">
                        A 10-minute briefing
                    </p>

                    <h1 className="mt-6 font-serif font-light text-[var(--cream)] leading-[0.95] text-5xl lg:text-6xl xl:text-[76px] tracking-tight">
                        From{" "}
                        <span className="italic text-[var(--muted)] line-through decoration-[var(--crimson)]/70 decoration-2">
                            Black-Box
                        </span>
                        <br />
                        to{" "}
                        <span className="italic text-[var(--amber)]">
                            Open,
                        </span>
                        <br />
                        Auditable AI.
                    </h1>

                    <p className="mt-8 text-[var(--cream-dim)] text-base leading-relaxed max-w-md">
                        Six ideas. One conclusion. Why the next phase of AI
                        belongs to{" "}
                        <span className="text-[var(--cream)]">open weights</span>,{" "}
                        <span className="text-[var(--cream)]">small models</span>, and{" "}
                        <span className="text-[var(--cream)]">auditable operations</span>.
                    </p>

                    <div className="mt-10 flex items-center gap-3 font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--amber)]">
                        <span>Risk</span>
                        <ArrowRight className="w-3 h-3" />
                        <span>Rise</span>
                        <ArrowRight className="w-3 h-3" />
                        <span>Small</span>
                        <ArrowRight className="w-3 h-3" />
                        <span>Mitigation</span>
                        <ArrowRight className="w-3 h-3" />
                        <span className="text-[var(--cream)]">Future</span>
                    </div>
                </div>

                {/* Right — agenda list */}
                <div className="col-span-7 flex flex-col justify-center">
                    <div className="relative border border-[var(--line)] bg-[var(--ink-2)]/50 p-8 backdrop-blur-sm">
                        <span className="absolute -top-3 left-7 bg-[var(--ink)] px-3 font-mono text-[9px] tracking-[0.3em] uppercase text-[var(--amber)]">
                            What we'll cover
                        </span>

                        <ul className="divide-y divide-[var(--line)]/60">
                            {TOPICS.map((t) => (
                                <li
                                    key={t.n}
                                    className="grid grid-cols-12 items-center gap-4 py-3.5 group"
                                    data-testid={`agenda-${t.n}`}
                                >
                                    <span className="col-span-1 font-mono text-[11px] tabular-nums text-[var(--amber)]">
                                        {t.n}
                                    </span>
                                    <div className="col-span-1 flex justify-center">
                                        <t.Icon
                                            className="w-4 h-4 text-[var(--cream-dim)] group-hover:text-[var(--amber)] transition-colors"
                                            strokeWidth={1.5}
                                        />
                                    </div>
                                    <p className="col-span-6 font-serif text-lg text-[var(--cream)] leading-tight">
                                        {t.title}
                                    </p>
                                    <p className="col-span-3 text-xs text-[var(--cream-dim)] leading-snug">
                                        {t.sub}
                                    </p>
                                    <span className="col-span-1 text-right font-mono text-[9px] tracking-[0.2em] uppercase text-[var(--amber)]/70">
                                        {t.tag}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                        <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--muted)]">
                            ~ 90 seconds per slide · questions at the end
                        </p>
                        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--amber)]">
                            Let's begin →
                        </p>
                    </div>
                </div>
            </div>
        </SlideShell>
    );
}
