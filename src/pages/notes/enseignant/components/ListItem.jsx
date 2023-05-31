import { cn } from "@/lib/utils"

const ListItem = ({ className, title, children, ...props }) => {
    return (
        <li>
            <div className={cn("z-[49]  block select-none space-y-1 rounded-md bg-slate-100 p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-200 focus:bg-slate-200 dark:hover:bg-slate-700 dark:focus:bg-slate-700", className)} {...props}>
                <div className="text-sm font-medium leading-none">{title}</div>
                <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">{children}</p>
            </div>
        </li>
    )
}
ListItem.displayName = "ListItem"
export default ListItem
