interface HeaderProps {
    title: string
    children: React.ReactNode
}

const Header = ({ title, children }: HeaderProps) => {
    return (
        <header>
            <h1 className="mb-4 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{title}</h1>
            <p className="text-xl text-slate-700 dark:text-slate-400">{children}</p>
        </header>
    )
}

export default Header
