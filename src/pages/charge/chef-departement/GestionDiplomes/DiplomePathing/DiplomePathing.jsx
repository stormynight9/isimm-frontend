import React, { useState, useEffect } from "react"
import ConsultationDiplome from "./../ConsultationDiplome/ConsultationDiplome"
import SoumettreVoeux from "@/pages/charge/enseignant/SoumettreVoeux/SoumettreVoeux"
import { ChevronRight } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select"
import { useLocation } from "react-router-dom"
import JoyRide from "react-joyride"
import "./DiplomePathing.css"
const DiplomePathing = () => {
    const [diplomes, setDiplomes] = useState([])
    const [selectedDiplome, setSelectedDiplome] = useState(null)
    const [selectedSection, setSelectedSection] = useState(null)
    const [selectedNiveau, setSelectedNiveau] = useState(null)
    const [selectedSemestre, setSelectedSemestre] = useState(null)
    const location = useLocation()
    useEffect(() => {
        const getDiplomes = async () => {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/isimm/distributionCharge/diplome`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const responseJson = await response.json()
            setDiplomes(responseJson)
        }
        getDiplomes()
    }, [])

    const handleDiplomeSelect = (eventValue) => {
        const selectedDiplomeId = eventValue
        const selectedDiplome = diplomes.find((diplome) => diplome.diplomeId == selectedDiplomeId)
        setSelectedDiplome(selectedDiplome)
        setSelectedSection(null)
        setSelectedNiveau(null)
        setSelectedSemestre(null)
    }

    const handleSectionSelect = (eventValue) => {
        const selectedSectionId = eventValue
        const selectedSection = selectedDiplome.sections.find((section) => section.sectionId == selectedSectionId)
        setSelectedSection(selectedSection)
        setSelectedNiveau(null)
        setSelectedSemestre(null)
    }

    const handleNiveauSelect = (eventValue) => {
        const selectedNiveauId = eventValue
        const selectedNiveau = selectedSection.niveaux.find((niveau) => niveau.niveauId == selectedNiveauId)
        setSelectedNiveau(selectedNiveau)
        setSelectedSemestre(null)
    }

    const handleSemestreSelect = (eventValue) => {
        const selectedSemestreId = eventValue
        const selectedSemestre = selectedNiveau.semestres.find((semestre) => semestre.semestreId == selectedSemestreId)
        setSelectedSemestre(selectedSemestre)
    }
    const steps = [
        {
            title: "Select Diplome",
            content: "Choose The Diploma you want to consult",
            target: "#SelectDiplome",
            placement: "bottom-end",
        },
        {
            title: "Select Section",
            content: "Choose The Section of The Diploma you want to consult",
            target: "#SelectSection",
            placement: "left-start",
        },
        {
            title: "Select Niveau",
            content: "Choose The Niveau of The Diploma you want to consult",
            target: "#SelectNiveau",
            placement: "left-start",
        },
        {
            title: "Select Semestre",
            content: "Finally Choose a Semestre",
            target: "#SelectSemestre",
            placement: "bottom-end",
        },
        {
            title: "Plan d'etude",
            content: location.pathname.split("/")[2] === "soumettre-voeux" ? "Now you can consult the chosen plan d'etude and submit a voeux for the subject you want to teach" : "Now you can consult the chosen plan d'etude and modify/assign professors to each subject",
            target: "#TableCnt",
            placement: "top-start",
        },
    ]
    return (
        <div className="DiplomePathing">
            <div className="SelectRow">
                <div className="SelectRow" id="SelectDiplome">
                    <Select
                        onValueChange={(selectedOption) => {
                            handleDiplomeSelect(selectedOption.valueOf())
                        }}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select a diploma" />
                        </SelectTrigger>
                        <SelectContent>
                            {diplomes.map((diplome) => (
                                <SelectItem key={diplome.diplomeId} value={diplome.diplomeId}>
                                    {diplome.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <ChevronRight size={48} />
                </div>

                {selectedDiplome && (
                    <div className="SelectRow" id="SelectSection">
                        <Select
                            onValueChange={(selectedOption) => {
                                handleSectionSelect(selectedOption.valueOf())
                            }}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select a section" />
                            </SelectTrigger>
                            <SelectContent>
                                {selectedDiplome.sections.map((section) => (
                                    <SelectItem key={section.sectionId} value={section.sectionId}>
                                        {section.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <ChevronRight size={48} />
                        {selectedSection && (
                            <div className="SelectRow" id="SelectNiveau">
                                <Select
                                    onValueChange={(selectedOption) => {
                                        handleNiveauSelect(selectedOption.valueOf())
                                    }}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a niveau" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {selectedSection.niveaux.map((niveau) => (
                                            <SelectItem key={niveau.niveauId} value={niveau.niveauId}>
                                                {niveau.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <ChevronRight size={48} />
                                {selectedNiveau && (
                                    <div className="SelectRow" id="SelectSemestre">
                                        <Select
                                            onValueChange={(selectedOption) => {
                                                handleSemestreSelect(selectedOption.valueOf())
                                            }}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a semestre" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {selectedNiveau.semestres.map((semestre) => (
                                                    <SelectItem key={semestre.semestreId} value={semestre.semestreId}>
                                                        {semestre.name}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                )}
            </div>
            {selectedSemestre && (
                <div>
                    <JoyRide continuous hideCloseButton scrollToFirstStep showProgress showSkipButton steps={steps} />
                    {location.pathname.split("/")[2] === "soumettre-voeux" ? <SoumettreVoeux semestre={selectedSemestre} /> : <ConsultationDiplome semestre={selectedSemestre} />}
                </div>
            )}
        </div>
    )
}

export default DiplomePathing
