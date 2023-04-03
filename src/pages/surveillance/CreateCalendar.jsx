import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select"
import { Label } from "@radix-ui/react-dropdown-menu"
import Header from "./components/Header"
import CreateCalendarForm from "./components/CreateCalendarForm"

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
                            <SelectItem value="CPI-1">CPI-1</SelectItem>
                            <SelectItem value="CPI-2">CPI-2</SelectItem>
                            <SelectItem value="ING-1-INFO">ING-1-INFO</SelectItem>
                            <SelectItem value="ING-2-EL">ING-2-EL</SelectItem>
                            <SelectItem value="ING-3-EL">ING-3-EL</SelectItem>
                            <SelectItem value="L1-EEA">L1-EEA</SelectItem>
                            <SelectItem value="L1-INFO">L1-INFO</SelectItem>
                            <SelectItem value="L1-MATH">L1-MATH</SelectItem>
                            <SelectItem value="LA-TIC">LA-TIC</SelectItem>
                            <SelectItem value="L2-INFO">L2-INFO</SelectItem>
                            <SelectItem value="LE-MATH">LE-MATH</SelectItem>
                            <SelectItem value="LE-SE">LE-SE</SelectItem>
                            <SelectItem value="L2-TIC">L2-TIC</SelectItem>
                            <SelectItem value="L3-INFO">L3-INFO</SelectItem>
                            <SelectItem value="L3-MATH">L3-MATH</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    )
}

export default CreateCalendar
