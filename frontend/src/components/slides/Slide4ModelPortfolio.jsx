import SlideShell from "../SlideShell";

const TIERS = [
    {
        size: "Small",
        params: "0.6B – 14B",
        models: ["Phi-4", "Qwen3 0.6–8B"],
        use: "Classification · Extraction · Routing · Anomaly tagging",
        accent: "Lower cost · faster · private deployment",
        col: 4,
    },
    {
        size: "Medium",
        params: "14B – 32B",
        models: ["Mistral Small 3.1", "Qwen3 14B–32B"],
        use: "RAG · Summarization · Policy interpretation · Workflows",
        accent: "Quality / cost balance",
        col: 5,
    },
    {
        size: "Large / MoE",
        params: "100B – 671B",
        models: [
            "Mixtral 8x22B",
            "Llama 4 Scout / Maverick",
            "DeepSeek-V3",
            "Nemotron 3 Super",
        ],
        use: "Multi-step reasoning · Long context · Agent orchestration",
        accent: "Higher capability · higher governance load",
        col: 6,
    },
];

const PARAMS = [
    { k: "temperature", v: "0.0 – 0.3", scope: "audit, legal, finance" },
    { k: "max_output_tokens", v: "capped", scope: "prevent cost leak" },
    { k: "tool_choice", v: "allow-list", scope: "approved APIs only" },
    { k: "max_tool_calls", v: "3 – 10", scope: "stop agent loops" },
    { k: "model_version", v: "pinned", scope: "no silent drift" },
    { k: "seed", v: "fixed", scope: "audit replay" },
];

export default function Slide4ModelPortfolio() {
    return (
        <SlideShell number={4} eyebrow="Model Portfolio">
            <div className="h-full w-full grid grid-cols-12 gap-8 reveal">
                <div className="col-span-12">
                    <h2 className="font-serif font-light text-5xl lg:text-6xl leading-[1.05] tracking-tight max-w-4xl">
                        Don't use the biggest model.
                        <br />
                        <span className="italic text-[var(--amber)]">
                            Route
                        </span>{" "}
                        the right one.
                    </h2>
                </div>

                {/* Model tier columns */}
                <div className="col-span-8 grid grid-cols-3 gap-5">
                    {TIERS.map((t, i) => (
                        <div
                            key={t.size}
                            className="border border-[var(--line)] bg-[var(--ink-2)]/60 p-6 flex flex-col"
                            data-testid={`tier-${i + 1}`}
                            style={{ minHeight: 340 }}
                        >
                            <div className="flex items-baseline justify-between">
                                <span className="font-serif text-2xl text-[var(--cream)]">
                                    {t.size}
                                </span>
                                <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--amber)]">
                                    {t.params}
                                </span>
                            </div>

                            <div className="mt-5 hairline" />

                            <ul className="mt-5 space-y-1.5">
                                {t.models.map((m) => (
                                    <li
                                        key={m}
                                        className="font-mono text-xs text-[var(--cream-dim)]"
                                    >
                                        ·&nbsp;&nbsp;{m}
                                    </li>
                                ))}
                            </ul>

                            <p className="mt-6 text-sm text-[var(--cream)] leading-snug">
                                {t.use}
                            </p>

                            <p className="mt-auto pt-6 font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--amber)]/80">
                                {t.accent}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Parameter governance */}
                <div className="col-span-4 border-l border-[var(--line)] pl-7">
                    <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--amber)]">
                        Govern The Parameters
                    </p>
                    <p className="mt-2 font-serif text-xl text-[var(--cream)] leading-tight">
                        The same model can be a controlled assistant — or a
                        risk amplifier.
                    </p>

                    <ul className="mt-6 space-y-3">
                        {PARAMS.map((p) => (
                            <li
                                key={p.k}
                                className="flex items-baseline justify-between gap-3 border-b border-[var(--line)]/60 pb-2"
                            >
                                <span className="font-mono text-[11px] text-[var(--cream-dim)]">
                                    {p.k}
                                </span>
                                <span className="font-mono text-[11px] text-[var(--amber)] whitespace-nowrap">
                                    {p.v}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <p className="mt-6 font-mono text-[9px] tracking-[0.2em] uppercase text-[var(--muted)]">
                        + temperature · top_p · context · timeout
                    </p>
                </div>
            </div>
        </SlideShell>
    );
}
