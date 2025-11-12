interface Step {
    number: number;
    title: string;
    description: string;
    highlight?: boolean;
    color?: string;
}

interface TimelineProps {
    steps: Step[];
}

export default function Timeline({ steps }: TimelineProps) {
    return (
        <div className="space-y-1">
            {steps.map((step, index) => (
                <div key={step.number} className="flex flex-col items-start gap-1">
                    <div className="flex items-center gap-2">
                        <div
                            className={`flex items-center justify-center w-8 h-8 font-(family-name:--primary-font) rounded-full text-white ${step.color}`}
                        >
                            {step.number}
                        </div>
                        <h3 className={`${step.highlight ? "text-(--orange-500)" : "text-(--gray-50)"} text-1xl uppercase`}>{step.title}</h3>
                    </div>

                    <p
                        className={`ml-4 ${index < steps.length - 1 && "border-l-2 border-(--gray-600)"} pl-4 pt-2 pb-6 text-sm ${step.highlight ? "text-(--orange-300) font-bold" : "text-(--gray-200)"}`}
                    >
                        {step.description}
                    </p>
                </div>
            ))}
        </div>
    )
}