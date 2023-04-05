import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/Menubar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select"

import { NavigationMenu } from "@/components/ui/NavigationMenu"
import ListItem from "../components/ListItem"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

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
// const sections = [
//     {
//         title: "CPI1",
//     },
//     {
//         title: "CPI2",
//     },
//     {
//         title: "ING1 Info",
//     },
//     {
//         title: "Master",
//     },
// ]

const Section = () => {
    const [responseJson, setResponseJson] = useState([])
    const [sections, setSections] = useState([])
    const [selectedSection, setSelectedSection] = useState(null)
    const [selectedSemestre, setSelectedSemestre] = useState("")

    useEffect(() => {
        chargeSections()
    }, [])

    const chargeSections = async () => {
        try {
            const response = await fetch("http://localhost:8090/api/isimm/chargeNote/EnseignantSection/1", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            const json = await response.json()
            setResponseJson(json)
            const sections = [...new Set(json.map((item) => item.nameSection))]
            setSections(sections)
        } catch (error) {
            console.error(error)
        }
    }

    const filterResults = () => {
        if (selectedSection && selectedSemestre) {
            const filteredData = responseJson.filter((item) => item.nameSection === selectedSection && item.nameSemestre === selectedSemestre)
            console.log(filteredData)
            return filteredData
        } else {
            return responseJson
        }
    }

    const handleSectionSelect = (section) => {
        console.log(section)
        setSelectedSection(section)
    }

    const handleSemestreSelect = (semestre) => {
        console.log(semestre)
        setSelectedSemestre(semestre)
    }

    return (
        <div className="section m-10">
            <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">Notes > Sections</h3>
            <br></br>
            <div className="flex">
                <div className="semestres pr-4">
                    <Select
                        onValueChange={(selectedOption) => {
                            handleSemestreSelect(selectedOption.valueOf())
                        }}
                    >
                        <SelectTrigger className="w-[125px]">
                            <SelectValue placeholder="Semsetre" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Semestre 1">Semestre 1</SelectItem>
                            <SelectItem value="Semestre 2">Semestre 2</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="sections">
                    <Menubar className="max-w-fit">
                        {sections.map((section) => (
                            <MenubarMenu key={section}>
                                <MenubarTrigger
                                    className="hover:bg-slate-300"
                                    onClick={() => {
                                        handleSectionSelect(section)
                                        console.log(section)
                                    }}
                                >
                                    {section}
                                </MenubarTrigger>
                            </MenubarMenu>
                        ))}
                    </Menubar>
                </div>
            </div>

            <div className="classgroup mt-5">
                <NavigationMenu className="justify-start">
                    <ul className="grid w-[400px] gap-7 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {filterResults().map((item, index) => (
                            <Link to={"/notes/" + item.nameSection + "/" + item.groupType + "/" + item.idMatiere}>
                                <ListItem key={index} title={item.nameSection + " - " + item.groupType + item.groupId} href={item.href}>
                                    {item.nameMatiere}
                                </ListItem>
                            </Link>
                        ))}
                    </ul>
                </NavigationMenu>
            </div>
        </div>
    )
}

export default Section
