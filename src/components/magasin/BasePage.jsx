export default function BasePage({children, title}) {
    return <div className="container px-5">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl my-10">
            {title}
        </h1>
        <div className="row">
            {/* <div className="col-12"> */}
            <div className="flex flex-col">
                {children}
            </div>
        </div>
    </div>
}