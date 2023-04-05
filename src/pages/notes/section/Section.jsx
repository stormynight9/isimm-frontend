import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/Tabs"
import ListItem from "../components/ListItem"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

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
            const response = await fetch(import.meta.env.VITE_API_URL + "/api/isimm/chargeNote/EnseignantSection/1", {
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
            <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">Notes {`>`} Sections</h3>
            <br></br>
            <div className="flex">
                <div className="semestres pr-6">
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
                    <Tabs defaultValue="" className="w-[400px]">
                        {sections.map((section, index) => (
                            <TabsList key={index}>
                                <TabsTrigger
                                    className="hover:bg-slate-300"
                                    onClick={() => {
                                        handleSectionSelect(section)
                                        console.log(section)
                                    }}
                                >
                                    {section}
                                </TabsTrigger>
                            </TabsList>
                        ))}
                    </Tabs>
                </div>
            </div>

            <div className="classgroup mt-5">
                <ul className="grid w-[400px] gap-7 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {filterResults().map((item, index) => (
                        <Link key={index} to={"/notes/" + item.nameSection + "/" + item.groupType + "/" + item.idMatiere}>
                            <ListItem title={item.nameSection + " - " + item.groupType + item.groupId} href={item.href}>
                                {item.nameMatiere}
                            </ListItem>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Section
