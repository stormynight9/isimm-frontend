interface HeaderProps {
    title: string
    children: React.ReactNode
    className?: string
}

const Header = ({ title, children, className }: HeaderProps) => {
    return (
        <header className={className}>
            <h1 className="mb-4 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{title}</h1>
            <p className="text-slate-700 dark:text-slate-400 lg:text-xl">{children}</p>
        </header>
    )
}

export default Header
