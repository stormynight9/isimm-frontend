import { cn } from "@/lib/utils"

interface BadgeProps {
    status: "yellow" | "green" | "red"
    children: React.ReactNode
}

const Badge = ({ status, children }: BadgeProps) => {

    const BadgeClassName = cn({
        "inline-block px-4 rounded-full font-medium capitalize": true,
        "bg-[#fae9c2] text-[#542b14]": status === "yellow",
        "bg-[#e6f4ea] text-[#1f5d3d]": status === "green",
        "bg-[#f4d7d7] text-[#5d1f1f]": status === "red",
    })

    return (
        <div className={BadgeClassName}>{children}</div>
    )
}

export default Badge