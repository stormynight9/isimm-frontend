import { Button } from "@/components/ui/Button"
import { Label } from "@/components/ui/Label"
import { Switch } from "@/components/ui/Switch"
import { CalendarIcon, SaveIcon, Trash2Icon } from "lucide-react"
import Header from "./components/Header"
import { Input } from "@/components/ui/Input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/Popover"
import { cn, formatDate } from "@/lib/utils"
import { Calendar } from "@/components/ui/Calendar"
import { fr } from "date-fns/locale"
import { addDays } from "date-fns"
import React, { useState } from "react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/Select"
import Subject from "./components/Subject"
import { Separator } from "@/components/ui/Separator"
import { formData } from "./data/form-data"

const date = {
    from: new Date(),
    to: addDays(new Date(), 7),
}

const GenerateCalendars = () => {
    const [subjects, setSubjects] = useState({
        subjectsList: [],
        sectionId: null,
    })

    const handleSelectChange = (value) => {
        const selectedSection = formData.sections.find((section) => section.id === value)
        setSubjects({
            subjectsList: selectedSection.subjects,
            sectionId: selectedSection.id,
        })
    }
    return (
        <div className="lg:pl-4 lg:pt-4">
            <Header title="Calendrier">
                Ici, vous pouvez générer un calendrier pour chaque enseignant en respectant toutes
                les contraintes.
            </Header>
            <div className="mt-8 max-w-3xl">
                <div className="flex justify-between">
                    <div className="flex items-center space-x-2">
                        <Switch id="visibility" />
                        <Label htmlFor="visibility">Publiée</Label>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button variant="secondary">
                            <Trash2Icon className="mr-2 h-4 w-4" /> Supprimer
                        </Button>
                        <Button>Générer des calendriers</Button>
                    </div>
                </div>
                <div className="mt-5 flex flex-col items-baseline justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                    <div className="grid w-full items-center gap-1.5 md:max-w-sm">
                        <Label htmlFor="title">Titre</Label>
                        <Input
                            id="number_of_sessions"
                            placeholder="Examen Semestre 1 - 2022/2023"
                            readOnly
                            defaultValue="Examen Semestre 1 - 2022/2023"
                        />
                    </div>
                    <div className="grid w-full items-center gap-1.5 md:max-w-sm">
                        <Label htmlFor="number_of_sessions">Nombre des séancees</Label>
                        <Input
                            type="number"
                            id="number_of_sessions"
                            placeholder="4"
                            readOnly
                            defaultValue={4}
                        />
                    </div>
                </div>
                <div className="mt-4 flex flex-col items-end space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                    <div className="grid w-1/2 gap-2">
                        <Popover>
                            <Label htmlFor="number_of_sessions">Date</Label>
                            <PopoverTrigger asChild>
                                <Button
                                    id="date"
                                    variant="outline"
                                    className={cn(
                                        "w-full justify-start text-left font-normal",
                                        !date && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {date?.from ? (
                                        date.to ? (
                                            <>
                                                {formatDate(date.from)} - {formatDate(date.to)}
                                            </>
                                        ) : (
                                            formatDate(date.from)
                                        )
                                    ) : (
                                        <span>Choisir une date</span>
                                    )}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    initialFocus
                                    mode="range"
                                    selected={date}
                                    numberOfMonths={2}
                                    locale={fr}
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
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
            </div>
        </div>
    )
}

export default GenerateCalendars
