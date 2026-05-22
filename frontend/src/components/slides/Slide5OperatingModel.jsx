import SlideShell from "../SlideShell";
import {
    Layers,
    Network,
    Coins,
    ShieldAlert,
    LineChart,
} from "lucide-react";

const LAYERS = [
    {
        Icon: Layers,
        title: "Model Governance",
        items: [
            "Registry & versioning",
            "License & provenance",
            "Approved use cases",
            "Risk rating",
        ],
    },
    {
        Icon: Network,
        title: "API & Agent Governance",
        items: [
            "Agent registry",
            "Tool allow-lists",
            "Rate & token budgets",
            "Approval workflows",
        ],
    },
    {
        Icon: Coins,
        title: "AI FinOps",
        items: [
            "Cost per task & user",
            "Token I/O ratio",
            "Cache hit rate",
            "Runaway-loop alerts",
        ],
    },
    {
        Icon: ShieldAlert,
        title: "AI Risk & Controls",
        items: [
            "Anomaly detection",
            "Prompt-injection blocks",
            "PII redaction",
            "Off-hours monitoring",
        ],
    },
    {
        Icon: LineChart,
        title: "Business Value",
        items: [
            "Cycle-time reduction",
            "Anomaly catch-rate",
            "API revenue",
            "Incident reduction",
        ],
    },
];

export default function Slide5OperatingModel() {
    return (
        <SlideShell number={5} eyebrow="Operating Model">
            <div className="h-full w-full flex flex-col reveal">
                <div className="flex items-end justify-between">
                    <h2 className="font-serif font-light text-5xl lg:text-6xl leading-[1.05] tracking-tight max-w-4xl">
                        One AI operating model.
                        <br />
                        <span className="italic text-[var(--amber)]">
                            Five
                        </span>{" "}
                        connected layers.
                    </h2>
                    <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--cream-dim)] max-w-[220px] text-right">
                        Govern models, tokens, tools, agents & APIs as one
                        ecosystem
                    </p>
                </div>

                <div className="mt-14 grid grid-cols-5 gap-4 flex-1">
                    {LAYERS.map((l, i) => (
                        <div
                            key={l.title}
                            className="relative border border-[var(--line)] bg-[var(--ink-2)]/50 p-6 flex flex-col hover:border-[var(--amber)]/60 transition-colors"
                            data-testid={`layer-${i + 1}`}
                        >
                            <span className="absolute -top-3 left-5 bg-[var(--ink)] px-2 font-mono text-[9px] tracking-[0.25em] uppercase text-[var(--amber)]">
                                Layer 0{i + 1}
                            </span>

                            <l.Icon
                                className="w-7 h-7 text-[var(--amber)]"
                                strokeWidth={1.4}
                            />

                            <p className="mt-6 font-serif text-xl leading-tight text-[var(--cream)]">
                                {l.title}
                            </p>

                            <ul className="mt-5 space-y-2">
                                {l.items.map((it) => (
                                    <li
                                        key={it}
                                        className="text-xs text-[var(--cream-dim)] leading-snug flex gap-2"
                                    >
                                        <span className="text-[var(--amber)]">
                                            ›
                                        </span>
                                        <span>{it}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-8 flex items-center gap-6 border-t border-[var(--line)] pt-5">
                    <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--amber)]">
                        The Hybrid Stack
                    </span>
                    <p className="font-serif text-lg text-[var(--cream)]">
                        Open-weight models for{" "}
                        <span className="italic text-[var(--amber)]">
                            control
                        </span>
                        . Frontier APIs for{" "}
                        <span className="italic text-[var(--amber)]">
                            leverage
                        </span>
                        . Private deployment for{" "}
                        <span className="italic text-[var(--amber)]">
                            sensitive data
                        </span>
                        .
                    </p>
                </div>
            </div>
        </SlideShell>
    );
}
