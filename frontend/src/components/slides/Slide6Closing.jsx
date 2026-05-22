import SlideShell from "../SlideShell";
import {
    User,
    Workflow,
    ShieldCheck,
    Bot,
    Wrench,
    Activity,
    FileCheck,
    ArrowDown,
    Zap,
    Coins,
    Lock,
    Gauge,
} from "lucide-react";

const BENEFITS = [
    {
        Icon: Workflow,
        title: "Cross-framework",
        sub: "LangChain · LlamaIndex · CrewAI · custom — one toolkit",
    },
    {
        Icon: ShieldCheck,
        title: "Guardrails built-in",
        sub: "Prompt-injection, jailbreak & tool-poison shields",
    },
    {
        Icon: Bot,
        title: "Managed agent registry",
        sub: "Every agent versioned, scoped, and observable",
    },
    {
        Icon: Gauge,
        title: "Eval at scale",
        sub: "Golden datasets · accuracy · latency · cost",
    },
    {
        Icon: Coins,
        title: "FinOps native",
        sub: "Per-agent, per-tool, per-task cost tracking",
    },
    {
        Icon: Lock,
        title: "Audit-ready",
        sub: "Every prompt, tool call & output logged",
    },
];

const AGENTS = ["Planner", "Retriever", "Analyzer", "Reporter"];

export default function Slide6Closing() {
    return (
        <SlideShell number={6} eyebrow="NeMo Agent Toolkit">
            <div className="h-full w-full grid grid-cols-12 gap-8 reveal">
                {/* Header */}
                <div className="col-span-12">
                    <h2 className="font-serif font-light text-4xl lg:text-5xl leading-[1.05] tracking-tight max-w-5xl">
                        How NVIDIA NeMo turns agents into{" "}
                        <span className="italic text-[var(--amber)]">
                            safe, governed
                        </span>{" "}
                        digital workers.
                    </h2>
                </div>

                {/* Architecture diagram — left 8 cols */}
                <div className="col-span-8 flex flex-col">
                    <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--amber)] mb-4">
                        The architecture
                    </p>

                    <div className="flex-1 flex flex-col items-center gap-2 relative">
                        {/* Row 1: User Request */}
                        <div className="flex items-center gap-2 px-4 py-2 border border-[var(--line)] bg-[var(--ink-2)]">
                            <User
                                className="w-3.5 h-3.5 text-[var(--cream-dim)]"
                                strokeWidth={1.5}
                            />
                            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--cream-dim)]">
                                User Request
                            </span>
                        </div>

                        <ArrowDown className="w-3 h-3 text-[var(--amber)]" />

                        {/* Row 2: Orchestrator */}
                        <div className="w-[420px] border border-[var(--amber)]/60 bg-[var(--amber)]/[0.05] px-4 py-2.5 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Workflow
                                    className="w-4 h-4 text-[var(--amber)]"
                                    strokeWidth={1.6}
                                />
                                <span className="font-serif text-sm text-[var(--cream)]">
                                    NeMo Orchestrator
                                </span>
                            </div>
                            <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-[var(--amber)]">
                                cross-framework
                            </span>
                        </div>

                        <ArrowDown className="w-3 h-3 text-[var(--amber)]" />

                        {/* Row 3: Guardrails */}
                        <div className="w-[420px] border border-[var(--crimson)]/40 bg-[var(--crimson)]/[0.06] px-4 py-2.5 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <ShieldCheck
                                    className="w-4 h-4 text-[var(--crimson)]/90"
                                    strokeWidth={1.6}
                                />
                                <span className="font-serif text-sm text-[var(--cream)]">
                                    Guardrails Layer
                                </span>
                            </div>
                            <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-[var(--crimson)]/90">
                                injection · jailbreak · pii · poison
                            </span>
                        </div>

                        <ArrowDown className="w-3 h-3 text-[var(--amber)]" />

                        {/* Row 4: 4 managed agents */}
                        <div className="w-[520px] relative">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--ink)] px-2 font-mono text-[9px] tracking-[0.25em] uppercase text-[var(--amber)]">
                                managed agent registry
                            </div>
                            <div className="grid grid-cols-4 gap-2 border border-[var(--line)] bg-[var(--ink-2)]/60 p-3">
                                {AGENTS.map((a) => (
                                    <div
                                        key={a}
                                        className="border border-[var(--amber)]/30 bg-[var(--ink)] py-2 flex flex-col items-center gap-1"
                                        data-testid={`nemo-agent-${a.toLowerCase()}`}
                                    >
                                        <Bot
                                            className="w-3.5 h-3.5 text-[var(--amber)]"
                                            strokeWidth={1.5}
                                        />
                                        <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-[var(--cream)]">
                                            {a}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <ArrowDown className="w-3 h-3 text-[var(--amber)]" />

                        {/* Row 5: Tool & MCP layer */}
                        <div className="w-[420px] border border-[var(--line)] bg-[var(--ink-2)] px-4 py-2.5 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Wrench
                                    className="w-4 h-4 text-[var(--amber)]"
                                    strokeWidth={1.6}
                                />
                                <span className="font-serif text-sm text-[var(--cream)]">
                                    Tool Registry · MCP
                                </span>
                            </div>
                            <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-[var(--cream-dim)]">
                                least-privilege
                            </span>
                        </div>

                        <ArrowDown className="w-3 h-3 text-[var(--amber)]" />

                        {/* Row 6: Eval & Monitoring */}
                        <div className="w-[420px] border border-[var(--line)] bg-[var(--ink-2)] px-4 py-2.5 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Activity
                                    className="w-4 h-4 text-[var(--amber)]"
                                    strokeWidth={1.6}
                                />
                                <span className="font-serif text-sm text-[var(--cream)]">
                                    Eval & Monitoring
                                </span>
                            </div>
                            <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-[var(--cream-dim)]">
                                cost · latency · drift
                            </span>
                        </div>

                        <ArrowDown className="w-3 h-3 text-[var(--amber)]" />

                        {/* Row 7: Audited Output */}
                        <div className="flex items-center gap-2 px-4 py-2 border border-[var(--amber)] bg-[var(--amber)]/[0.1]">
                            <FileCheck
                                className="w-3.5 h-3.5 text-[var(--amber)]"
                                strokeWidth={1.6}
                            />
                            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--amber)]">
                                Audited Output
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right column — benefits */}
                <div className="col-span-4 flex flex-col">
                    <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--amber)] mb-4">
                        Why it's effective
                    </p>

                    <div className="grid grid-cols-1 gap-2 flex-1">
                        {BENEFITS.map((b, i) => (
                            <div
                                key={b.title}
                                className="border border-[var(--line)] bg-[var(--ink-2)]/40 px-3 py-2 flex gap-3 hover:border-[var(--amber)]/60 transition-colors"
                                data-testid={`benefit-${i + 1}`}
                            >
                                <b.Icon
                                    className="w-4 h-4 text-[var(--amber)] flex-shrink-0 mt-0.5"
                                    strokeWidth={1.5}
                                />
                                <div className="min-w-0">
                                    <p className="font-serif text-sm text-[var(--cream)] leading-tight">
                                        {b.title}
                                    </p>
                                    <p className="text-[10px] text-[var(--cream-dim)] leading-snug mt-0.5">
                                        {b.sub}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-3 border-t border-[var(--amber)]/40 pt-3">
                        <div className="flex items-center gap-2">
                            <Zap className="w-3.5 h-3.5 text-[var(--amber)]" />
                            <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-[var(--amber)]">
                                The result
                            </span>
                        </div>
                        <p className="mt-1 font-serif text-sm text-[var(--cream)] leading-snug">
                            Agents that{" "}
                            <span className="italic text-[var(--amber)]">
                                perceive, think, act, and learn
                            </span>{" "}
                            — without going rogue.
                        </p>
                    </div>
                </div>

                {/* Closing footer */}
                <div className="col-span-12 flex items-center justify-between border-t border-[var(--line)] pt-3">
                    <p className="font-serif text-base text-[var(--cream)]">
                        From{" "}
                        <span className="italic text-[var(--muted)] line-through decoration-[var(--crimson)]/60">
                            black-box guesswork
                        </span>{" "}
                        to{" "}
                        <span className="italic text-[var(--amber)]">
                            open, auditable, agentic intelligence.
                        </span>
                    </p>
                    <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--amber)] text-right">
                        Thank you ·{" "}
                        <span className="text-[var(--cream-dim)]">
                            Questions welcome
                        </span>
                    </p>
                </div>
            </div>
        </SlideShell>
    );
}
