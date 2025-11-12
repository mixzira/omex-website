export function PrimaryButton({ text, disabled, selected, style, onClick, loading }: { text: string, disabled?: boolean, selected?: boolean, style?: string, onClick?: () => void, loading?: boolean }) {
    const getBaseClasses = () => {
        return "justify-center px-2 py-0.5 flex uppercase text-xl border-2 transition-all duration-150 [&:not(:disabled)]:hover:scale-[1.03] transition-all duration-150 origin-center will-change-transform"
    }

    const getStateClasses = () => {
        if (disabled || loading) {
            return "bg-(--gray-400) border-(--gray-400) text-(--gray-600) cursor-not-allowed"
        }

        if (selected) {
            return "bg-(--orange-800) border-(--orange-400) text-(--orange-400) hover:bg-(--orange-500) hover:border-(--orange-200) hover:text-(--orange-200) cursor-pointer"
        }

        return "bg-(--orange-500) border-(--orange-500) text-(--gray-900) hover:border-(--orange-200) hover:text-(--orange-200) hover:cursor-pointer"
    }

    return (
        <button
            className={`${getBaseClasses()} ${getStateClasses()} ${style}`}
            disabled={disabled || loading}
            onClick={onClick}
        >
            <h1 className="mt-1">{text}</h1>
        </button>
    )
}