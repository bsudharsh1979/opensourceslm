import SlideShell from "../SlideShell";
import { TrendingUp, AlertTriangle, DollarSign } from "lucide-react";

const STATS = [
    {
        big: "89%",
        small: "of developers use generative AI",
        sub: "yet only 24% design APIs with agents in mind",
        source: "Postman, 2025",
    },
    {
        big: "7.53M",
        small: "calls to AI APIs in 12 months",
        sub: "+40% year over year",
        source: "Postman, 2025",
    },
    {
        big: "+427%",
        small: "open banking API call growth",
        sub: "137B → 720B+ by 2029",
        source: "Juniper Research",
    },
    {
        big: "51%",
        small: "of developers worry about",
        sub: "unauthorized or excessive agent calls",
        source: "Postman, 2025",
    },
];

export default function Slide2ApiUprising() {
    return (
        <SlideShell number={2} eyebrow="The API Uprising">
            <div className="h-full w-full grid grid-cols-12 gap-8 reveal">
                {/* Headline */}
                <div className="col-span-12">
                    <h2 className="font-serif font-light text-5xl lg:text-6xl leading-[1.05] tracking-tight max-w-5xl">
                        APIs are no longer pipes.
                        <br />
                        They are the{" "}
                        <span className="italic text-[var(--amber)]">
                            operating layer
                        </span>{" "}
                        of AI agents.
                    </h2>
                </div>

                {/* Stat grid */}
                <div className="col-span-8 grid grid-cols-2 gap-6 content-start">
                    {STATS.map((s, i) => (
                        <div
                            key={i}
                            className="border-t border-[var(--line)] pt-5 pr-4"
                            data-testid={`stat-${i + 1}`}
                        >
                            <div className="font-serif text-[64px] leading-none text-[var(--amber)] tabular-nums">
                                {s.big}
                            </div>
                            <p className="mt-3 text-[var(--cream)] text-base leading-snug">
                                {s.small}
                            </p>
                            <p className="mt-1 text-[var(--cream-dim)] text-sm leading-snug">
                                {s.sub}
                            </p>
                            <p className="mt-3 font-mono text-[9px] tracking-[0.25em] uppercase text-[var(--muted)]">
                                {s.source}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Right column — implication */}
                <div className="col-span-4 flex flex-col gap-4">
                    <div className="border border-[var(--amber)]/40 bg-[var(--amber)]/[0.04] p-6">
                        <div className="flex items-center gap-2 text-[var(--amber)]">
                            <AlertTriangle className="w-4 h-4" />
                            <span className="font-mono text-[10px] tracking-[0.25em] uppercase">
                                Risk
                            </span>
                        </div>
                        <p className="mt-3 font-serif text-xl leading-snug text-[var(--cream)]">
                            Agents call APIs at machine speed — across tools,
                            systems, and credentials.
                        </p>
                    </div>

                    <div className="border border-[var(--line)] bg-[var(--ink-2)] p-6">
                        <div className="flex items-center gap-2 text-[var(--cream-dim)]">
                            <DollarSign className="w-4 h-4" />
                            <span className="font-mono text-[10px] tracking-[0.25em] uppercase">
                                Value
                            </span>
                        </div>
                        <p className="mt-3 font-serif text-xl leading-snug text-[var(--cream)]">
                            <span className="text-[var(--amber)]">65%</span> of
                            organizations now generate revenue from API
                            programs.
                        </p>
                    </div>

                    <div className="flex items-center gap-2 text-[var(--cream-dim)] mt-auto">
                        <TrendingUp className="w-4 h-4 text-[var(--amber)]" />
                        <p className="font-mono text-[10px] tracking-[0.2em] uppercase">
                            API strategy = AI strategy
                        </p>
                    </div>
                </div>
            </div>
        </SlideShell>
    );
}
