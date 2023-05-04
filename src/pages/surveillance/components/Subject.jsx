import { Button } from "@/components/ui/Button"
import { Calendar } from "@/components/ui/Calendar"
import { Label } from "@/components/ui/Label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/Popover"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/Select"
import { Switch } from "@/components/ui/Switch"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarIcon, InfoIcon } from "lucide-react"

const Subject = ({ subject, data, setFormData, sectionId }) => {
    const handleCheckedState = () => {
        const newFormData = { ...data }
        const sectionIndex = newFormData.sections.findIndex((obj) => obj.id === sectionId)
        const subjectIndex = newFormData.sections[sectionIndex].subjects.findIndex(
            (obj) => obj.id === subject.id
        )
        newFormData.sections[sectionIndex].subjects[subjectIndex].isIncluded = !subject.isIncluded
        setFormData(newFormData)
    }

    const handleDateChange = (value) => {
        const newFormData = { ...data }
        const sectionIndex = newFormData.sections.findIndex((obj) => obj.id === sectionId)
        const subjectIndex = newFormData.sections[sectionIndex].subjects.findIndex(
            (obj) => obj.id === subject.id
        )
        newFormData.sections[sectionIndex].subjects[subjectIndex].date = value
        setFormData(newFormData)
    }

    const handleSelectChange = (value) => {
        const newFormData = { ...data }
        const sectionIndex = newFormData.sections.findIndex((obj) => obj.id === sectionId)
        const subjectIndex = newFormData.sections[sectionIndex].subjects.findIndex(
            (obj) => obj.id === subject.id
        )
        newFormData.sections[sectionIndex].subjects[subjectIndex].sessionNumber = +value
        setFormData(newFormData)
    }

    return (
        <div>
            <div className="flex items-center justify-between">
                <div className="text-base font-semibold text-slate-900 dark:text-slate-50 md:text-lg">
                    {subject.name}
                </div>
                <div className="flex items-center space-x-2">
                    <div className="flex items-center justify-center">
                        <Switch
                            id="airplane-mode"
                            checked={subject.isIncluded}
                            onCheckedChange={handleCheckedState}
                        />
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className="ml-1 flex self-center p-2 focus:ring-0 focus:ring-offset-0"
                                >
                                    <InfoIcon size={16} className="text-slate-700" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent side="top" className="w-auto">
                                <small className="text-sm font-medium leading-none">
                                    S'il faut inclure ce matière dans le calendrier
                                </small>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
            </div>
            <div className="mt-2 flex flex-col gap-4 md:flex-row">
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="date" className={!subject.isIncluded ? "text-slate-400" : ""}>
                        Date
                    </Label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                disabled={!subject.isIncluded}
                                variant="outline"
                                className={cn(
                                    "w-[280px] justify-start text-left font-normal",
                                    !subject.date && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {subject.date ? (
                                    format(subject.date, "PPP")
                                ) : (
                                    <span>Choisir une date</span>
                                )}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                fromDate={new Date(data.date.from)}
                                toDate={new Date(data.date.to)}
                                mode="single"
                                selected={new Date(data.date.from)}
                                onSelect={handleDateChange}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>
                <div className="grid w-full items-center gap-1.5">
                    <Label
                        htmlFor="session"
                        className={!subject.isIncluded ? "text-slate-400" : ""}
                    >
                        Séance
                    </Label>
                    <Select onValueChange={handleSelectChange} disabled={!subject.isIncluded}>
                        <SelectTrigger>
                            <SelectValue defaultValue="1" placeholder="Séance 1" />
                        </SelectTrigger>
                        <SelectContent>
                            {[...Array(data.numberOfSessions)].map((_, index) => (
                                <SelectItem key={index} value={`${index + 1}`} selected>
                                    Séance {index + 1}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    )
}

export default Subject
