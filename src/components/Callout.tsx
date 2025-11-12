interface CalloutProps {
    content: React.ReactNode;
    type: "success" | "warning" | "error" | "info";
}

export default function Callout({ content, type }: CalloutProps) {
    const icon = {
        success: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-(--green-500) inline-block" viewBox="0 0 48 48">
                <g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4">
                    <path d="M24 44a19.94 19.94 0 0 0 14.142-5.858A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.858 9.858A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 24 44Z" />
                    <path stroke-linecap="round" d="m16 24l6 6l12-12" />
                </g>
            </svg>
        ),

        info: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-(--gray-200) inline-block" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4m0-4h.01" />
                </g>
            </svg>
        ),

        warning: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-(--orange-500) inline-block" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4m0-4h.01" />
                </g>
            </svg>
        ),

        error: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-(--red-500) inline-block" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.875 6.27c.7.398 1.13 1.143 1.125 1.948v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98zM12 8v4m0 4h.01" />
            </svg>
        )
    }

    const styles = {
        success: "bg-(--green-500)/10",
        warning: "bg-(--orange-500)/10",
        error: "bg-(--red-500)/10",
        info: "bg-(--gray-600)"
    }

    return (
        <span className={`w-full flex items-center gap-2 p-4 ${styles[type]}`}>
            {icon[type]}
            <p className="w-full mt-0.5 font-normal text-(--gray-50) inline-block">{content}</p>
        </span>
    )
}