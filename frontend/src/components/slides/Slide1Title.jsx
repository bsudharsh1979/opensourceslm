import SlideShell from "../SlideShell";
import { ArrowRight } from "lucide-react";

export default function Slide1Title() {
    return (
        <SlideShell number={1} eyebrow="The Shift">
            <div className="h-full w-full grid grid-cols-12 gap-8 reveal">
                {/* Left column — manifesto */}
                <div className="col-span-7 flex flex-col justify-center">
                    <h1 className="font-serif font-light text-[var(--cream)] leading-[0.95] text-6xl lg:text-7xl xl:text-[88px] tracking-tight">
                        From{" "}
                        <span className="italic text-[var(--muted)] line-through decoration-[var(--crimson)]/70 decoration-2">
                            Black-Box AI
                        </span>
                        <br />
                        to{" "}
                        <span className="italic text-[var(--amber)]">
                            Auditable,
                        </span>
                        <br />
                        Agentic AI.
                    </h1>

                    <div className="mt-10 max-w-xl">
                        <p className="text-[var(--cream-dim)] text-base leading-relaxed">
                            AI is no longer just generating text. It is calling
                            APIs, invoking tools, and triggering workflows as a
                            semi-autonomous digital workforce.
                        </p>
                    </div>

                    <div className="mt-10 flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--amber)]">
                        <span>Models</span>
                        <ArrowRight className="w-3 h-3" />
                        <span>Tokens</span>
                        <ArrowRight className="w-3 h-3" />
                        <span>APIs</span>
                        <ArrowRight className="w-3 h-3" />
                        <span>Agents</span>
                        <ArrowRight className="w-3 h-3" />
                        <span className="text-[var(--cream)]">Assurance</span>
                    </div>
                </div>

                {/* Right column — statement card */}
                <div className="col-span-5 flex flex-col justify-center">
                    <div className="relative border border-[var(--line)] bg-[var(--ink-2)]/60 backdrop-blur-sm p-10">
                        <span className="absolute -top-3 left-8 bg-[var(--ink)] px-3 font-mono text-[9px] tracking-[0.3em] uppercase text-[var(--amber)]">
                            Strategic Objective
                        </span>

                        <p className="font-serif text-3xl leading-tight text-[var(--cream)]">
                            Every{" "}
                            <span className="italic text-[var(--amber)]">
                                model, token, API call,
                            </span>{" "}
                            and{" "}
                            <span className="italic text-[var(--amber)]">
                                agent action
                            </span>{" "}
                            governed, measured, and trusted.
                        </p>

                        <div className="mt-8 hairline" />

                        <div className="mt-6 grid grid-cols-3 gap-4">
                            {[
                                { k: "Transparency", v: "Open weights" },
                                { k: "Control", v: "API governance" },
                                { k: "Trust", v: "Audit trail" },
                            ].map((p) => (
                                <div key={p.k}>
                                    <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-[var(--muted)]">
                                        {p.k}
                                    </p>
                                    <p className="text-sm mt-1 text-[var(--cream)]">
                                        {p.v}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="mt-6 font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--muted)]">
                        A briefing on AI operations · 2026
                    </p>
                </div>
            </div>
        </SlideShell>
    );
}
