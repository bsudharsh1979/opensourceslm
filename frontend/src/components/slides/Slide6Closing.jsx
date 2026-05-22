import SlideShell from "../SlideShell";

const QUESTIONS = [
    "Which model version?",
    "Which parameters?",
    "Which API was called?",
    "Which agent decided?",
    "Which data was retrieved?",
    "Which tool was invoked?",
    "What did it cost?",
    "Was it compliant?",
    "Can we reproduce it?",
    "Can we audit it?",
];

export default function Slide6Closing() {
    return (
        <SlideShell number={6} eyebrow="AI Assurance">
            <div className="h-full w-full grid grid-cols-12 gap-10 reveal">
                {/* Left — closing manifesto */}
                <div className="col-span-7 flex flex-col justify-center">
                    <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--amber)]">
                        Closing
                    </p>

                    <h2 className="mt-5 font-serif font-light text-5xl lg:text-6xl xl:text-[72px] leading-[1.02] tracking-tight">
                        Transparency
                        <br />
                        is not enough.
                    </h2>

                    <p className="mt-8 font-serif text-2xl leading-snug text-[var(--cream-dim)] max-w-xl">
                        The real differentiator is{" "}
                        <span className="text-[var(--amber)] italic">
                            operational accountability.
                        </span>
                    </p>

                    <div className="mt-10 hairline max-w-md" />

                    <p className="mt-10 font-serif text-3xl leading-tight text-[var(--cream)] max-w-lg">
                        From AI{" "}
                        <span className="italic text-[var(--muted)] line-through decoration-[var(--crimson)]/70 decoration-2">
                            experimentation
                        </span>
                        <br />
                        to AI{" "}
                        <span className="italic text-[var(--amber)]">
                            assurance.
                        </span>
                    </p>

                    <p className="mt-10 font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--muted)]">
                        Thank you · Questions welcome
                    </p>
                </div>

                {/* Right — the 10 questions */}
                <div className="col-span-5 flex flex-col">
                    <div className="border border-[var(--line)] bg-[var(--ink-2)]/60 p-8 relative">
                        <span className="absolute -top-3 left-6 bg-[var(--ink)] px-3 font-mono text-[9px] tracking-[0.3em] uppercase text-[var(--amber)]">
                            The 10 questions
                        </span>

                        <p className="font-serif text-base text-[var(--cream-dim)] mb-5 leading-snug">
                            The future enterprise will not ask{" "}
                            <span className="italic">
                                "which model are we using?"
                            </span>{" "}
                            — it will ask:
                        </p>

                        <ol className="space-y-2">
                            {QUESTIONS.map((q, i) => (
                                <li
                                    key={q}
                                    className="flex items-baseline gap-4 border-b border-[var(--line)]/60 pb-2"
                                    data-testid={`q-${i + 1}`}
                                >
                                    <span className="font-mono text-[10px] tabular-nums text-[var(--amber)] w-5">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span className="font-serif text-[15px] text-[var(--cream)]">
                                        {q}
                                    </span>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </SlideShell>
    );
}
