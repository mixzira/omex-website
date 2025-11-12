import { Link } from "react-router-dom";

export default function LinkComponent({ text, type, to, target, color }: { text: string, type: "internal" | "external", to: string, target?: string, color?: string }) {
    return (
        type === "internal" ? (
            <Link to={to} target={target}
                className={`w-fit underline ${color ? color : "text-(--orange-500)"} whitespace-nowrap`}
            >
                {text}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 inline-block ml-0.5" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" stroke-dasharray="28" stroke-dashoffset="28" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 6l2 -2c1 -1 3 -1 4 0l1 1c1 1 1 3 0 4l-5 5c-1 1 -3 1 -4 0M11 18l-2 2c-1 1 -3 1 -4 0l-1 -1c-1 -1 -1 -3 0 -4l5 -5c1 -1 3 -1 4 0">
                        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="28;0" />
                    </path>
                </svg>
            </Link>
        ) : (
            <a href={to} target={target}
                className={`underline ${color ? color : "text-(--orange-500)"}`}
            >
                {text}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 inline-block ml-0.5" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" stroke-dasharray="28" stroke-dashoffset="28" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 6l2 -2c1 -1 3 -1 4 0l1 1c1 1 1 3 0 4l-5 5c-1 1 -3 1 -4 0M11 18l-2 2c-1 1 -3 1 -4 0l-1 -1c-1 -1 -1 -3 0 -4l5 -5c1 -1 3 -1 4 0">
                        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="28;0" />
                    </path>
                </svg>
            </a>
        )
    )
}