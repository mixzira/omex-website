import { BorderDec } from "./BorderDec";

interface GameModeCardProps {
    children: React.ReactNode;
    style?: string;
}

export default function GameModeCard({ children, style }: GameModeCardProps) {
    return (
        <div className={`
            relative w-full md:h-full h-fit flex bg-(--gray-700) p-4! gap-2
            hover:-translate-y-2
            transition-all duration-150 ease-in-out
            will-change-contents
            origem-bottom
            overflow-hidden
            ${style}
        `}>
            <BorderDec side="tl" style="border-(--gray-300) group-hover:border-(--orange-500) z-[4]" proportion={4} />
            <BorderDec side="tr" style="border-(--gray-300) group-hover:border-(--orange-500) z-[4]" proportion={4} />
            <BorderDec side="bl" style="border-(--gray-300) group-hover:border-(--orange-500) z-[4]" proportion={4} />
            <BorderDec side="br" style="border-(--gray-300) group-hover:border-(--orange-500) z-[4]" proportion={4} />
            {children}
        </div>
    )
}