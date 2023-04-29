import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select"
import { Label } from "@radix-ui/react-dropdown-menu"
import Header from "./components/Header"
import CreateCalendarForm from "./components/CreateCalendarForm"
import { sectionList } from "./data/section-list"
import Subject from "./components/Subject"
import { Separator } from "@/components/ui/Separator"
import { Button } from "@/components/ui/Button"
import { SaveIcon } from "lucide-react"
import React, { useEffect, useState } from "react"

const CreateCalendar = () => {
    const [selectedSection, setSelectedSection] = useState(null)
    const [subjects, setSubjects] = useState([])
    const [showSections, setShowSections] = useState({ isShowing: false })

    useEffect(() => {
        if (selectedSection) setSubjects(sectionList.find((section) => section.id === selectedSection).subjects)
    }, [selectedSection])

    const handleSelectChange = (value) => {
        setSelectedSection(() => value)
    }

    return (
        <div className="mb-20 lg:pt-4 lg:pl-4">
            <Header title="Créer un calendrier">Ici, vous pouvez générer un calendrier pour chaque enseignant en respectant toutes les contraintes.</Header>
            <CreateCalendarForm setShowSections={setShowSections} />
            {showSections.isShowing && (
                <div>
                    <div className="mt-8">
                        <div className="grid w-full items-center gap-1.5 md:max-w-sm">
                            <Label htmlFor="start-date">Section</Label>
                            <Select onValueChange={handleSelectChange}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Choisir une section" />
                                </SelectTrigger>
                                <SelectContent>
                                    {sectionList.map((section) => (
                                        <SelectItem key={section.id} value={section.id}>
                                            {section.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="mt-5 flex w-full flex-col gap-5 md:max-w-3xl">
                        {subjects.map((subject) => (
                            <React.Fragment key={subject.id}>
                                <Subject label={subject.name} numberOfSessions={showSections.numberOfSessions} />
                                <Separator />
                            </React.Fragment>
                        ))}

                        <div className="ml-auto">
                            <Button>
                                <SaveIcon className="mr-2 h-4 w-4" /> Sauvegarder
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CreateCalendar
