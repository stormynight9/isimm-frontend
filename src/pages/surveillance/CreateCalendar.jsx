import { Button } from "@/components/ui/Button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/Select"
import { Separator } from "@/components/ui/Separator"
import { Label } from "@radix-ui/react-dropdown-menu"
import { SaveIcon } from "lucide-react"
import React, { useState } from "react"
import CreateCalendarForm from "./components/CreateCalendarForm"
import Header from "./components/Header"
import Subject from "./components/Subject"
import { sectionList } from "./data/section-list"

const transformData = (data, date) => {
    const transformedData = {
        sections: [],
    }

    data.forEach((section) => {
        const sectionObject = {
            id: section.id,
            name: section.name,
            subjects: [],
        }
        section.subjects.forEach((subject) => {
            sectionObject.subjects.push({
                id: subject.id,
                name: subject.name,
                date: date.from,
                sessionNumber: 1,
                isIncluded: true,
            })
        })
        transformedData.sections.push(sectionObject)
    })

    return transformedData
}

const CreateCalendar = () => {
    const [subjects, setSubjects] = useState({
        subjectsList: [],
        sectionId: null,
    })
    const [showSections, setShowSections] = useState({ isShowing: false })

    const [formData, setFormData] = useState()

    const handleFormDataChange = (value) => {
        // TODO: this should become a request to the backend
        const transformedData = transformData(sectionList, value.date)
        setFormData(() => ({ ...value, ...transformedData }))
    }

    const handleSelectChange = (value) => {
        const selectedSection = formData.sections.find((section) => section.id === value)
        setSubjects({
            subjectsList: selectedSection.subjects,
            sectionId: selectedSection.id,
        })
    }

    return (
        <div className="mb-20 lg:pl-4 lg:pt-4">
            <Header title="Créer un calendrier">
                Ici, vous pouvez générer un calendrier pour chaque enseignant en respectant toutes
                les contraintes.
            </Header>
            <CreateCalendarForm
                handleFormDataChange={handleFormDataChange}
                setShowSections={setShowSections}
            />
            {showSections.isShowing && (
                <div>
                    <div className="mt-8">
                        <div className="grid w-full items-center gap-1.5 md:max-w-sm">
                            <Label htmlFor="section">Section</Label>
                            <Select onValueChange={handleSelectChange} id="section">
                                <SelectTrigger>
                                    <SelectValue placeholder="Choisir une section" />
                                </SelectTrigger>
                                <SelectContent>
                                    {formData.sections.map((section) => (
                                        <SelectItem key={section.id} value={section.id}>
                                            {section.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="mt-5 flex w-full flex-col gap-5 md:max-w-3xl">
                        {subjects.subjectsList.map((subject) => (
                            <React.Fragment key={subject.id}>
                                <Subject
                                    subject={subject}
                                    data={formData}
                                    sectionId={subjects.sectionId}
                                    setFormData={setFormData}
                                />
                                <Separator />
                            </React.Fragment>
                        ))}

                        <div className="ml-auto">
                            <Button onClick={() => console.log(formData)}>
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
