import { ClassValue, clsx } from "clsx"
import { format } from "date-fns"
import { fr } from "date-fns/locale"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function getInitials(string: string) {
    let names = string.split(" "),
        initials = names[0].substring(0, 1).toUpperCase()

    if (names.length > 1) {
        initials += names[1].substring(0, 1).toUpperCase()
    }
    return initials
}

export function formatDate(date: Date) {
    return format(date, "LLL dd, y", { locale: fr })
}
