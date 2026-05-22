import SlideShell from "../SlideShell";

const ADVANTAGES = [
    { k: "Cost", v: "10–50× cheaper" },
    { k: "Latency", v: "Sub-100 ms" },
    { k: "Privacy", v: "Runs on-device" },
    { k: "Fine-tune", v: "Hours, not weeks" },
    { k: "Carbon", v: "≈ 1% of an LLM" },
    { k: "Audit", v: "Full weight access" },
];

const USE_CASES = [
    {
        domain: "Banking",
        title: "Transaction classification",
        slm: "Phi-4 · 14B",
        why: "Millions of calls / day · sub-cent cost",
    },
    {
        domain: "Audit",
        title: "Invoice & contract extraction",
        slm: "Mistral Small · 24B",
        why: "Structured JSON · runs on-prem",
    },
    {
        domain: "Healthcare",
        title: "Clinical-note de-identification",
        slm: "Qwen3 · 4B",
        why: "PII never leaves the hospital",
    },
    {
        domain: "Manufacturing",
        title: "Edge anomaly detection",
        slm: "Phi-4 · 14B",
        why: "Runs on a factory-floor GPU",
    },
    {
        domain: "Customer Ops",
        title: "Intent routing & tagging",
        slm: "Qwen3 · 1.7B",
        why: "<50 ms per ticket · fine-tunable",
    },
    {
        domain: "DevOps",
        title: "Log triage & code patches",
        slm: "Qwen3-Coder · 8B",
        why: "Air-gapped · IP-safe",
    },
];

export default function Slide4ModelPortfolio() {
    return (
        <SlideShell number={4} eyebrow="The SLM Era">
            <div className="h-full w-full grid grid-cols-12 gap-8 reveal">
                <div className="col-span-12">
                    <h2 className="font-serif font-light text-5xl lg:text-6xl leading-[1.05] tracking-tight max-w-4xl">
                        Stop renting brains.
                        <br />
                        Start owning{" "}
                        <span className="italic text-[var(--amber)]">
                            small, sharp
                        </span>{" "}
                        ones.
                    </h2>
                </div>

                {/* Left — SLM advantages */}
                <div className="col-span-4 flex flex-col">
                    <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--amber)]">
                        Why SLMs win
                    </p>

                    <p className="mt-4 font-serif text-2xl text-[var(--cream)] leading-tight">
                        A focused 7B beats a generalist 400B on a focused job —
                        for{" "}
                        <span className="italic text-[var(--amber)]">
                            1% of the cost
                        </span>
                        .
                    </p>

                    <div className="mt-8 grid grid-cols-2 gap-3">
                        {ADVANTAGES.map((a) => (
                            <div
                                key={a.k}
                                className="border border-[var(--line)] bg-[var(--ink-2)]/40 p-3"
                                data-testid={`slm-adv-${a.k}`}
                            >
                                <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-[var(--muted)]">
                                    {a.k}
                                </p>
                                <p className="mt-1 font-serif text-base text-[var(--amber)]">
                                    {a.v}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-auto pt-6">
                        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--cream-dim)]">
                            Rule of thumb
                        </p>
                        <p className="mt-2 font-serif text-base text-[var(--cream)] leading-snug">
                            One frontier API call ≈ 1,000 SLM calls.
                            <br />
                            Route accordingly.
                        </p>
                    </div>
                </div>

                {/* Right — use cases */}
                <div className="col-span-8">
                    <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--amber)]">
                        Where they shine — six use cases that don't need GPT-5
                    </p>

                    <div className="mt-5 grid grid-cols-2 gap-4">
                        {USE_CASES.map((u, i) => (
                            <div
                                key={i}
                                className="border border-[var(--line)] bg-[var(--ink-2)]/50 p-5 hover:border-[var(--amber)]/60 transition-colors"
                                data-testid={`usecase-${i + 1}`}
                            >
                                <div className="flex items-baseline justify-between">
                                    <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-[var(--amber)]">
                                        {u.domain}
                                    </span>
                                    <span className="font-mono text-[10px] text-[var(--cream-dim)]">
                                        {u.slm}
                                    </span>
                                </div>
                                <p className="mt-3 font-serif text-lg text-[var(--cream)] leading-tight">
                                    {u.title}
                                </p>
                                <p className="mt-2 text-xs text-[var(--cream-dim)] leading-snug">
                                    {u.why}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SlideShell>
    );
}
