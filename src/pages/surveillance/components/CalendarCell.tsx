import { cn } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority"
import React from "react"

const CalendarCellVariants = cva("flex h-28 w-48 items-center justify-center rounded-md text-lg font-medium border", {
    variants: {
        variant: {
            green: "bg-green-400 text-slate-50",
            white: "text-slate-500",
        },
    },
    defaultVariants: {
        variant: "white",
    },
})

interface CalendarCellProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof CalendarCellVariants> {
    value: string
}

const CalendarCell = React.forwardRef<HTMLDivElement, CalendarCellProps>(({ className, variant, value, ...props }, ref) => {
    return (
        <div className={cn(CalendarCellVariants({ variant, className }))} ref={ref} {...props}>
            {value}
        </div>
    )
})

CalendarCell.displayName = "CalendarCell"

export default CalendarCell
