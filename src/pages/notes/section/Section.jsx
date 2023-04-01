import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/Menubar"

import { NavigationMenu } from "@/components/ui/NavigationMenu"
import ListItem from "../components/ListItem"

const groups = [
    {
        title: "CPI1 - TD1",
        href: "/notes/CPI1/TD1/1",
        description: "Optimisation Combinatoire",
    },
    {
        title: "CPI1 - TD2",
        href: "/notes/CPI1/TD2/2",
        description: "Optimisation Combinatoire",
    },
    {
        title: "CPI1 - TD1 - TP1",
        href: "/notes/CPI1/TD1/TP1/3",
        description: "Optimisation Combinatoire",
    },
    {
        title: "CPI1 - TD1 - TP2",
        href: "/notes/CPI1/TD1/TP2/4",
        description: "Optimisation Combinatoire",
    },
    {
        title: "CPI1 - TD2 - TP3",
        href: "/notes/CPI1/TD2/TP3/5",
        description: "Optimisation Combinatoire",
    },
]
const sections = [
    {
        title: "CPI1",
    },
    {
        title: "CPI2",
    },
    {
        title: "ING1 Info",
    },
    {
        title: "Master",
    },
]

const Section = () => {
    return (
        <div className="section m-10">
            <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">Notes > Sections</h3>
            <br></br>
            <div className="sections">
                <Menubar className="max-w-fit">
                    {sections.map((section) => (
                        <MenubarMenu>
                            <MenubarTrigger className=" hover:bg-slate-300">{section.title}</MenubarTrigger>
                        </MenubarMenu>
                    ))}
                </Menubar>
            </div>
            <div className="classgroup mt-5">
                <NavigationMenu>
                    <ul className="grid w-[400px] gap-7 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {groups.map((component) => (
                            <ListItem key={component.title} title={component.title} href={component.href}>
                                {component.description}
                            </ListItem>
                        ))}
                    </ul>
                </NavigationMenu>
            </div>
        </div>
    )
}

export default Section
