import SlideShell from "../SlideShell";
import {
    User,
    ShieldCheck,
    Hash,
    Database,
    Brain,
    Wrench,
    FileCheck,
} from "lucide-react";

const STEPS = [
    {
        n: "01",
        Icon: User,
        title: "Request",
        sub: "User · App · Workflow",
        ctrl: "Identity & intent",
    },
    {
        n: "02",
        Icon: ShieldCheck,
        title: "AI Gateway",
        sub: "Policy · Auth · Budget",
        ctrl: "Prompt-injection screen",
    },
    {
        n: "03",
        Icon: Hash,
        title: "Tokenize",
        sub: "Input → tokens",
        ctrl: "Cost & context cap",
    },
    {
        n: "04",
        Icon: Database,
        title: "Retrieve",
        sub: "Embeddings · RAG",
        ctrl: "Approved sources only",
    },
    {
        n: "05",
        Icon: Brain,
        title: "Reason",
        sub: "Transformer · Routing",
        ctrl: "Pinned model version",
    },
    {
        n: "06",
        Icon: Wrench,
        title: "Tool Call",
        sub: "API · ERP · DB",
        ctrl: "Least-privilege + cap",
    },
    {
        n: "07",
        Icon: FileCheck,
        title: "Audit Output",
        sub: "Guardrails · Logs",
        ctrl: "Reproducible evidence",
    },
];

export default function Slide3TokenJourney() {
    return (
        <SlideShell number={3} eyebrow="The Token Journey">
            <div className="h-full w-full flex flex-col reveal">
                <div className="flex items-end justify-between">
                    <h2 className="font-serif font-light text-5xl lg:text-6xl leading-[1.05] tracking-tight max-w-3xl">
                        Not{" "}
                        <span className="italic text-[var(--muted)]">
                            "prompt in, answer out."
                        </span>
                        <br />
                        A{" "}
                        <span className="italic text-[var(--amber)]">
                            seven-step
                        </span>{" "}
                        audit trail.
                    </h2>
                    <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--cream-dim)] max-w-[220px] text-right">
                        Every step is a control surface · every control is
                        evidence
                    </p>
                </div>

                {/* Journey timeline */}
                <div className="mt-16 flex-1 flex items-center">
                    <div className="w-full relative">
                        {/* track */}
                        <div className="absolute left-0 right-0 top-[50px] h-px bg-[var(--line)]" />
                        <div
                            className="absolute left-0 top-[50px] h-px bg-gradient-to-r from-[var(--amber)] to-transparent"
                            style={{ width: "82%" }}
                        />

                        <div className="grid grid-cols-7 gap-4 relative">
                            {STEPS.map((s, i) => (
                                <div
                                    key={s.n}
                                    className="flex flex-col items-center text-center"
                                    data-testid={`journey-step-${i + 1}`}
                                >
                                    <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--muted)]">
                                        {s.n}
                                    </span>

                                    <div className="mt-3 w-[68px] h-[68px] rounded-full border border-[var(--line)] bg-[var(--ink-2)] flex items-center justify-center relative z-10 hover:border-[var(--amber)] transition-colors">
                                        <s.Icon
                                            className="w-6 h-6 text-[var(--amber)]"
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    <p className="mt-4 font-serif text-lg text-[var(--cream)]">
                                        {s.title}
                                    </p>
                                    <p className="mt-1 text-xs text-[var(--cream-dim)]">
                                        {s.sub}
                                    </p>

                                    <div className="mt-4 w-full pt-3 border-t border-[var(--line)]/60">
                                        <p className="font-mono text-[9px] tracking-[0.15em] uppercase text-[var(--amber)]/80">
                                            {s.ctrl}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer takeaway */}
                <div className="mt-10 flex items-center gap-6">
                    <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--amber)]">
                        Takeaway
                    </span>
                    <p className="font-serif text-xl text-[var(--cream)]">
                        Every model output is now a potential API action — and
                        every action is{" "}
                        <span className="italic text-[var(--amber)]">
                            cost, risk, revenue, or compliance.
                        </span>
                    </p>
                </div>
            </div>
        </SlideShell>
    );
}
