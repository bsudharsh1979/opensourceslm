import SlideShell from "../SlideShell";
import { Eye, Brain, Hand, GraduationCap } from "lucide-react";

const OPEN_MODELS = [
    { name: "Llama 4", org: "Meta", size: "17B–400B (MoE)", fn: "Multimodal · long-context · reasoning" },
    { name: "Mixtral 8x22B", org: "Mistral", size: "141B / 39B active", fn: "MoE reasoning · efficient inference" },
    { name: "Qwen3", org: "Alibaba", size: "0.6B–235B", fn: "Multilingual · coding · agents" },
    { name: "DeepSeek-V3", org: "DeepSeek", size: "671B / 37B active", fn: "Frontier reasoning · open MoE" },
    { name: "Gemma 3", org: "Google", size: "1B–27B", fn: "Lightweight · multimodal" },
    { name: "Nemotron 3 Super", org: "NVIDIA", size: "120B / 12B active", fn: "Agentic · enterprise RAG" },
    { name: "Command R+", org: "Cohere", size: "104B", fn: "Tool-use · enterprise RAG" },
    { name: "OLMo 2", org: "AI2", size: "1B–32B", fn: "Fully open (data + weights)" },
];

const SLMS = [
    { name: "Phi-4", size: "14B", fn: "Complex reasoning at small scale" },
    { name: "Phi-3.5 mini", size: "3.8B", fn: "Edge reasoning · on-device" },
    { name: "Mistral Small 3.1", size: "24B", fn: "Function calling · 128K context · vision" },
    { name: "Qwen3", size: "0.6 / 1.7 / 4 / 8B", fn: "Routing · extraction · multilingual" },
    { name: "Llama 3.2", size: "1B / 3B", fn: "Mobile · summarization · classification" },
    { name: "Gemma 3", size: "1B / 4B", fn: "On-device · multilingual" },
    { name: "SmolLM2", size: "135M – 1.7B", fn: "Embedded · ultra-low latency" },
    { name: "Mistral 7B", size: "7B", fn: "General-purpose workhorse" },
];

const NEMO = [
    {
        Icon: Eye,
        phase: "Perceive",
        title: "Sense the world",
        bullets: [
            "Multi-modal input (text · vision · audio)",
            "RAG over enterprise data",
            "Tool & MCP server discovery",
        ],
    },
    {
        Icon: Brain,
        phase: "Think",
        title: "Plan & reason",
        bullets: [
            "Cross-framework orchestration",
            "Task decomposition & routing",
            "Cost-aware model selection",
        ],
    },
    {
        Icon: Hand,
        phase: "Act",
        title: "Execute safely",
        bullets: [
            "Tool calls via MCP",
            "Guardrails · least-privilege scopes",
            "Prompt-injection & jailbreak shields",
        ],
    },
    {
        Icon: GraduationCap,
        phase: "Learn",
        title: "Improve continuously",
        bullets: [
            "Evaluation & golden datasets",
            "Cost · latency · accuracy tracking",
            "Security testing & tool-poison checks",
        ],
    },
];

export default function Slide4ModelPortfolio() {
    return (
        <SlideShell number={4} eyebrow="The SLM Era">
            <div className="h-full w-full grid grid-cols-12 gap-6 reveal">
                <div className="col-span-12">
                    <h2 className="font-serif font-light text-4xl lg:text-5xl leading-[1.05] tracking-tight max-w-5xl">
                        Open weights + small models +{" "}
                        <span className="italic text-[var(--amber)]">
                            agentic loop
                        </span>{" "}
                        = the new enterprise stack.
                    </h2>
                </div>

                {/* Open-source models */}
                <div className="col-span-4 flex flex-col">
                    <div className="flex items-baseline justify-between">
                        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--amber)]">
                            Open-Source Models
                        </p>
                        <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-[var(--muted)]">
                            the foundation
                        </p>
                    </div>

                    <div className="mt-3 border border-[var(--line)] bg-[var(--ink-2)]/40 flex-1">
                        {OPEN_MODELS.map((m, i) => (
                            <div
                                key={m.name}
                                className={`px-3 py-2 ${
                                    i !== OPEN_MODELS.length - 1
                                        ? "border-b border-[var(--line)]/50"
                                        : ""
                                }`}
                                data-testid={`open-model-${i + 1}`}
                            >
                                <div className="flex items-baseline justify-between gap-2">
                                    <span className="font-serif text-sm text-[var(--cream)] leading-tight">
                                        {m.name}
                                    </span>
                                    <span className="font-mono text-[9px] text-[var(--amber)] whitespace-nowrap">
                                        {m.size}
                                    </span>
                                </div>
                                <div className="flex items-baseline justify-between gap-2 mt-0.5">
                                    <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-[var(--muted)]">
                                        {m.org}
                                    </span>
                                    <span className="text-[10px] text-[var(--cream-dim)] text-right leading-tight">
                                        {m.fn}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* SLMs */}
                <div className="col-span-4 flex flex-col">
                    <div className="flex items-baseline justify-between">
                        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--amber)]">
                            Small Language Models
                        </p>
                        <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-[var(--muted)]">
                            the workhorses
                        </p>
                    </div>

                    <div className="mt-3 border border-[var(--amber)]/40 bg-[var(--amber)]/[0.03] flex-1">
                        {SLMS.map((m, i) => (
                            <div
                                key={m.name}
                                className={`px-3 py-2 ${
                                    i !== SLMS.length - 1
                                        ? "border-b border-[var(--line)]/50"
                                        : ""
                                }`}
                                data-testid={`slm-${i + 1}`}
                            >
                                <div className="flex items-baseline justify-between gap-2">
                                    <span className="font-serif text-sm text-[var(--cream)] leading-tight">
                                        {m.name}
                                    </span>
                                    <span className="font-mono text-[9px] text-[var(--amber)] whitespace-nowrap">
                                        {m.size}
                                    </span>
                                </div>
                                <p className="mt-0.5 text-[10px] text-[var(--cream-dim)] leading-tight">
                                    {m.fn}
                                </p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-2 font-mono text-[9px] tracking-[0.2em] uppercase text-[var(--cream-dim)]">
                        Cheaper · faster · private · fine-tunable
                    </p>
                </div>

                {/* NeMo Agent Toolkit — Perceive · Think · Act · Learn */}
                <div className="col-span-4 flex flex-col">
                    <div className="flex items-baseline justify-between">
                        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--amber)]">
                            NeMo Agent Toolkit
                        </p>
                        <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-[var(--muted)]">
                            the loop
                        </p>
                    </div>

                    <div className="mt-3 flex-1 grid grid-rows-4 gap-2">
                        {NEMO.map((n, i) => (
                            <div
                                key={n.phase}
                                className="border border-[var(--line)] bg-[var(--ink-2)]/50 p-3 flex gap-3 hover:border-[var(--amber)]/60 transition-colors"
                                data-testid={`nemo-${n.phase.toLowerCase()}`}
                            >
                                <div className="flex flex-col items-center pt-0.5">
                                    <n.Icon
                                        className="w-5 h-5 text-[var(--amber)]"
                                        strokeWidth={1.5}
                                    />
                                    <span className="mt-1 font-mono text-[8px] tracking-[0.2em] uppercase text-[var(--amber)] tabular-nums">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-baseline gap-2">
                                        <span className="font-serif text-base text-[var(--cream)]">
                                            {n.phase}
                                        </span>
                                        <span className="text-[10px] italic text-[var(--cream-dim)]">
                                            {n.title}
                                        </span>
                                    </div>
                                    <ul className="mt-1 space-y-0.5">
                                        {n.bullets.map((b) => (
                                            <li
                                                key={b}
                                                className="text-[10px] text-[var(--cream-dim)] leading-snug flex gap-1.5"
                                            >
                                                <span className="text-[var(--amber)]">
                                                    ›
                                                </span>
                                                <span>{b}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom takeaway */}
                <div className="col-span-12 flex items-center gap-6 border-t border-[var(--amber)]/40 pt-4">
                    <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--amber)]">
                        Why it matters
                    </span>
                    <p className="font-serif text-lg text-[var(--cream)] leading-snug">
                        <span className="italic text-[var(--amber)]">
                            Agentic + SLMs
                        </span>{" "}
                        = 10× cheaper, on-prem, auditable digital workers — that{" "}
                        <span className="italic text-[var(--amber)]">
                            perceive, think, act, and learn
                        </span>{" "}
                        without leaking your data.
                    </p>
                </div>
            </div>
        </SlideShell>
    );
}
