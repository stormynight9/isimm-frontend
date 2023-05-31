import { cn } from "@/lib/utils"

interface BadgeProps {
    status: "yellow" | "green" | "red"
    children: React.ReactNode
}

const Badge = ({ status, children }: BadgeProps) => {
    const BadgeClassName = cn({
        "inline-block px-4 rounded-full font-medium": true,
        "bg-amber-100 text-amber-900": status === "yellow",
        "bg-emerald-100 text-emerald-900": status === "green",
        "bg-red-100 text-red-900": status === "red",
    })

    return <div className={BadgeClassName}>{children}</div>
}

export default Badge
