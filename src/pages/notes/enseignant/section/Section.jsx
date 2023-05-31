import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/Tabs"
import ListItem from "../components/ListItem"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"

import { setDataUrl } from "@/redux/features/notes/noteSlice"

const Section = () => {
    const [responseJson, setResponseJson] = useState([])
    const [sections, setSections] = useState([])
    const [selectedSection, setSelectedSection] = useState(null)
    const [selectedSemestre, setSelectedSemestre] = useState("")

    const dispatch = useDispatch()

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
            return filteredData
        } else {
            return responseJson
        }
    }

    const handleSectionSelect = (section) => {
        setSelectedSection(section)
    }

    const handleSemestreSelect = (semestre) => {
        setSelectedSemestre(semestre)
    }

    const handleClick = (item) => {
        const payload = {
            section: item.nameSection,
            name: item.groupType === "SECTION" ? "SEC" : item.groupType === "TD" ? item.nameTD : item.nameTP,
            groupType: item.groupType === "SECTION" ? "0" : item.groupType === "TD" ? "1" : "2",
            idEnseignant: "1",
            idGroup: item.groupId,
            idSemestre: item.idSemestre,
            idMatiere: item.idMatiere,
            codeMatiere: item.codeMatiere,
            nameMatiere: item.nameMatiere,
        }
        dispatch(setDataUrl(payload))
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
                <div className="sections ">
                    <Tabs className="rounded-2xl bg-slate-100 ">
                        {sections.map((section, index) => (
                            <TabsList key={index} className="rounded-2xl bg-slate-100">
                                <TabsTrigger
                                    className={selectedSection === section ? "rounded-2xl bg-white" : "rounded-2xl hover:bg-slate-300"}
                                    onClick={() => {
                                        handleSectionSelect(section)
                                    }}
                                >
                                    {section.replace(/_/g, " ")}
                                </TabsTrigger>
                            </TabsList>
                        ))}
                    </Tabs>
                </div>
            </div>

            <div className="classgroup mt-5">
                <ul className="grid w-[400px] gap-7 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {filterResults().map((item, index) => (
                        <Link key={index} to={"/notes/chargeNote"}>
                            <ListItem onClick={() => handleClick(item)} title={item.nameSection.replace(/_/g, " ") + (item.groupType === "SECTION" ? "" : item.groupType === "TD" ? " - " + item.nameTD : " - " + item.nameTP) + " (" + item.session + ")"}>
                                {item.nameMatiere}
                            </ListItem>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}
// /note/:section/:name/:idEnseignant/:idGroup/:idSemestre/:idMatiere

export default Section
