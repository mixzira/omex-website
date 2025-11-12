import { BorderDec } from "@/components/BorderDec"

interface ItemsCardProps {
    children: React.ReactNode;
    style?: string;
    special?: boolean;
}

export default function ItemsCard({ children, style, special }: ItemsCardProps) {
    return (
        <div className={`
            relative flex md:w-[18.75rem] md:h-[11.875rem] w-[10.875rem] h-[7.875rem] items-center justify-center 
            ${style}
            ${special ? 'bg-(--orange-900)/10' : 'bg-(--gray-800)/90'}
        `}>
            <BorderDec side="tl" style="border-(--gray-300) group-hover:border-(--orange-500)" proportion={4} />
            <BorderDec side="tr" style="border-(--gray-300) group-hover:border-(--orange-500)" proportion={4} />
            <BorderDec side="bl" style="border-(--gray-300) group-hover:border-(--orange-500)" proportion={4} />
            <BorderDec side="br" style="border-(--gray-300) group-hover:border-(--orange-500)" proportion={4} />
            {children}
        </div>
    )
}