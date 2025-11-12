export function CountContainer({ count, label }: { count: number, label: string }) {
    return (
        <div className="flex flex-col items-center gap-1 md:gap-2">
            <div className="w-12 h-12 md:w-[5.375rem] md:h-[5.375rem] flex items-center justify-center bg-(--orange-900) border-4 border-(--orange-300)">
                <h3 className="text-lg md:text-[2rem] text-(--orange-100) mt-1">{count.toString().padStart(2, '0')}</h3>
            </div>
            <p className="uppercase text-xs text-(--orange-900) font-semibold text-center">{label}</p>
        </div>
    )
}