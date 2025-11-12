export const BorderDec = ({ side, style, proportion }: { side: 'tl' | 'tr' | 'bl' | 'br', style: string, proportion: 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 }) => {
    return (
        <div
            className={
                `absolute border-t-2 border-l-2
                ${style}
                ${proportion === 2 ? 'w-2 h-2' : proportion === 4 ? 'w-4 h-4' : proportion === 6 ? 'w-6 h-6' : proportion === 8 ? 'w-8 h-8' : proportion === 10 ? 'w-10 h-10' : proportion === 12 ? 'w-12 h-12' : proportion === 14 ? 'w-14 h-14' : 'w-16 h-16'}
                ${side === 'tl' ? 'top-0 left-0' : side === 'tr' ? 'top-0 right-0' : side === 'bl' ? 'bottom-0 left-0' : 'bottom-0 right-0'}
                ${side === 'tr' ? 'rotate-90' : side === 'br' ? 'rotate-180' : side === 'bl' ? 'rotate-270' : ''}
            `}
        ></div>
    )
}