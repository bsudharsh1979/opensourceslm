import SlideShell from "../SlideShell";
import { Check, X, Minus } from "lucide-react";

const SPECTRUM = [
    {
        tier: "Closed API",
        ex: "GPT, Claude",
        weights: false,
        arch: false,
        data: false,
        finetune: false,
        deploy: false,
        tone: "muted",
    },
    {
        tier: "Open Weight",
        ex: "Llama, Mistral",
        weights: true,
        arch: true,
        data: false,
        finetune: true,
        deploy: true,
        tone: "amber",
    },
    {
        tier: "Open Source",
        ex: "OLMo, Pythia",
        weights: true,
        arch: true,
        data: true,
        finetune: true,
        deploy: true,
        tone: "amber-strong",
    },
];

const DRIVERS = [
    { stat: "70%+", label: "of new enterprise pilots now test open-weight models alongside frontier APIs" },
    { stat: "10×", label: "cheaper inference on a fine-tuned 7B vs. a closed frontier API at scale" },
    { stat: "0", label: "data leaves your VPC when models run on-prem or in a private cloud" },
];

const Mark = ({ v }) => {
    if (v === true)
        return <Check className="w-3.5 h-3.5 text-[var(--amber)]" strokeWidth={2.5} />;
    if (v === false)
        return <X className="w-3.5 h-3.5 text-[var(--crimson)]/70" strokeWidth={2} />;
    return <Minus className="w-3.5 h-3.5 text-[var(--muted)]" />;
};

export default function Slide3TokenJourney() {
    return (
        <SlideShell number={3} eyebrow="The Open-Source Rise">
            <div className="h-full w-full grid grid-cols-12 gap-10 reveal">
                <div className="col-span-12">
                    <h2 className="font-serif font-light text-5xl lg:text-6xl leading-[1.05] tracking-tight max-w-4xl">
                        <span className="italic text-[var(--muted)]">"Open"</span>{" "}
                        is a spectrum.
                        <br />
                        The world is racing{" "}
                        <span className="italic text-[var(--amber)]">
                            right
                        </span>{" "}
                        across it.
                    </h2>
                </div>

                {/* Left — comparison matrix */}
                <div className="col-span-7">
                    <div className="border border-[var(--line)] bg-[var(--ink-2)]/40">
                        <div className="grid grid-cols-7 gap-2 px-5 py-3 border-b border-[var(--line)] font-mono text-[9px] tracking-[0.2em] uppercase text-[var(--muted)]">
                            <span className="col-span-2">Tier</span>
                            <span className="text-center">Weights</span>
                            <span className="text-center">Arch</span>
                            <span className="text-center">Train Data</span>
                            <span className="text-center">Fine-tune</span>
                            <span className="text-center">Self-host</span>
                        </div>

                        {SPECTRUM.map((s, i) => (
                            <div
                                key={s.tier}
                                className={`grid grid-cols-7 gap-2 items-center px-5 py-5 ${
                                    i !== SPECTRUM.length - 1
                                        ? "border-b border-[var(--line)]/60"
                                        : ""
                                }`}
                                data-testid={`spectrum-${i + 1}`}
                            >
                                <div className="col-span-2">
                                    <p
                                        className={`font-serif text-xl ${
                                            s.tone === "amber-strong"
                                                ? "text-[var(--amber)]"
                                                : s.tone === "amber"
                                                  ? "text-[var(--cream)]"
                                                  : "text-[var(--cream-dim)]"
                                        }`}
                                    >
                                        {s.tier}
                                    </p>
                                    <p className="font-mono text-[10px] text-[var(--muted)] mt-1">
                                        e.g. {s.ex}
                                    </p>
                                </div>
                                <div className="flex justify-center">
                                    <Mark v={s.weights} />
                                </div>
                                <div className="flex justify-center">
                                    <Mark v={s.arch} />
                                </div>
                                <div className="flex justify-center">
                                    <Mark v={s.data} />
                                </div>
                                <div className="flex justify-center">
                                    <Mark v={s.finetune} />
                                </div>
                                <div className="flex justify-center">
                                    <Mark v={s.deploy} />
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="mt-4 font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--muted)]">
                        Open-weight ≠ Open-source. Audit teams must read the
                        license, not the headline.
                    </p>
                </div>

                {/* Right — why it's rising */}
                <div className="col-span-5 flex flex-col">
                    <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--amber)]">
                        Why it's rising — fast
                    </p>

                    <ul className="mt-5 space-y-5">
                        {DRIVERS.map((d, i) => (
                            <li
                                key={i}
                                className="border-l-2 border-[var(--amber)] pl-5"
                                data-testid={`driver-${i + 1}`}
                            >
                                <p className="font-serif text-4xl text-[var(--amber)] leading-none tabular-nums">
                                    {d.stat}
                                </p>
                                <p className="mt-2 text-sm text-[var(--cream)] leading-snug">
                                    {d.label}
                                </p>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-auto pt-6 border-t border-[var(--line)]">
                        <p className="font-serif text-lg text-[var(--cream)] leading-snug">
                            Plus:{" "}
                            <span className="italic text-[var(--amber)]">
                                sovereignty, customization, no vendor lock-in
                            </span>
                            , and a thriving ecosystem of fine-tunes.
                        </p>
                    </div>
                </div>
            </div>
        </SlideShell>
    );
}
