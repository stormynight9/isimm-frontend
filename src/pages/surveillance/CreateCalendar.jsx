import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select"
import { Label } from "@radix-ui/react-dropdown-menu"
import Header from "./components/Header"
import CreateCalendarForm from "./components/CreateCalendarForm"
import { sectionList } from "./data/section-list"

const CreateCalendar = () => {
    return (
        <div className="lg:pt-4 lg:pl-4">
            <Header title="Créer un calendrier">Ici, vous pouvez générer un calendrier pour chaque enseignant en respectant toutes les contraintes.</Header>
            <CreateCalendarForm />
            <div className="mt-8">
                <div className="grid w-full items-center gap-1.5 md:max-w-sm">
                    <Label htmlFor="start-date">Section</Label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Choisir une section" />
                        </SelectTrigger>
                        <SelectContent>
                            {sectionList.map((section) => (
                                <SelectItem key={section.id} value={section.name}>
                                    {section.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    )
}

export default CreateCalendar
