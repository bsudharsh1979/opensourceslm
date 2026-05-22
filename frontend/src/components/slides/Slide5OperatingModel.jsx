import SlideShell from "../SlideShell";
import { ArrowRight } from "lucide-react";

const MITIGATIONS = [
    {
        risk: "No explainability",
        open: "Inspect weights, attention, and reasoning traces — locally.",
    },
    {
        risk: "Hallucination",
        open: "Ground every answer in your own RAG over your own data.",
    },
    {
        risk: "Data leakage",
        open: "Run on-prem or in your VPC. Nothing leaves.",
    },
    {
        risk: "Silent model drift",
        open: "Pin the exact weight hash. Upgrade only on your schedule.",
    },
    {
        risk: "Lock-in & cost shock",
        open: "Swap providers and hardware without a rewrite.",
    },
];

const FUTURE = [
    {
        n: "01",
        title: "Hybrid by default",
        sub: "Open-weight SLMs handle 80% of calls. Frontier APIs for the long tail.",
    },
    {
        n: "02",
        title: "Agentic + auditable",
        sub: "Every tool call logged, every model version pinned, every action replayable.",
    },
    {
        n: "03",
        title: "On-device intelligence",
        sub: "Phones, laptops, factories. Inference moves to where the data lives.",
    },
    {
        n: "04",
        title: "Open beats closed",
        sub: "Linux won servers. Open weights will win the AI layer — for the same reasons.",
    },
];

export default function Slide5OperatingModel() {
    return (
        <SlideShell number={5} eyebrow="Mitigation & Future">
            <div className="h-full w-full grid grid-cols-12 gap-10 reveal">
                <div className="col-span-12">
                    <h2 className="font-serif font-light text-5xl lg:text-6xl leading-[1.05] tracking-tight max-w-4xl">
                        Open-source doesn't just{" "}
                        <span className="italic text-[var(--amber)]">
                            cut cost
                        </span>
                        .<br />
                        It closes the{" "}
                        <span className="italic text-[var(--amber)]">
                            trust gap
                        </span>
                        .
                    </h2>
                </div>

                {/* Left — risk to mitigation table */}
                <div className="col-span-7">
                    <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--amber)]">
                        Each black-box risk → an open-source answer
                    </p>

                    <div className="mt-5 border border-[var(--line)] bg-[var(--ink-2)]/40">
                        {MITIGATIONS.map((m, i) => (
                            <div
                                key={m.risk}
                                className={`grid grid-cols-12 items-center gap-4 px-5 py-4 ${
                                    i !== MITIGATIONS.length - 1
                                        ? "border-b border-[var(--line)]/60"
                                        : ""
                                }`}
                                data-testid={`mitigation-${i + 1}`}
                            >
                                <span className="col-span-4 font-serif text-base text-[var(--crimson)]/80 line-through decoration-[var(--crimson)]/40">
                                    {m.risk}
                                </span>
                                <ArrowRight className="col-span-1 w-4 h-4 text-[var(--amber)]" />
                                <span className="col-span-7 font-serif text-base text-[var(--cream)] leading-snug">
                                    {m.open}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right — what's next */}
                <div className="col-span-5 flex flex-col">
                    <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--amber)]">
                        What comes next
                    </p>

                    <ul className="mt-5 space-y-5">
                        {FUTURE.map((f) => (
                            <li
                                key={f.n}
                                className="flex gap-4"
                                data-testid={`future-${f.n}`}
                            >
                                <span className="font-mono text-[10px] tabular-nums text-[var(--amber)] pt-1.5">
                                    {f.n}
                                </span>
                                <div>
                                    <p className="font-serif text-lg text-[var(--cream)] leading-tight">
                                        {f.title}
                                    </p>
                                    <p className="mt-1 text-xs text-[var(--cream-dim)] leading-snug">
                                        {f.sub}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-auto pt-6 border-t border-[var(--line)]">
                        <p className="font-serif text-lg text-[var(--cream)] leading-snug">
                            The winners will run a{" "}
                            <span className="italic text-[var(--amber)]">
                                portfolio
                            </span>{" "}
                            — not a single vendor.
                        </p>
                    </div>
                </div>
            </div>
        </SlideShell>
    );
}
