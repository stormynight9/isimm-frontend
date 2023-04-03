import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Label } from "@radix-ui/react-dropdown-menu"
import { ArrowRightIcon } from "lucide-react"

const CreateCalendarForm = () => {
    return (
        <form className="mt-8 flex max-w-3xl flex-col space-y-6">
            <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                <div className="grid w-full items-center gap-1.5 md:max-w-sm">
                    <Label htmlFor="title">
                        Titre<span className="text-red-600">*</span>
                    </Label>
                    <Input id="title" placeholder="Examen Semestre 1 - 2022/2023" />
                </div>
                <div className="grid w-full items-center gap-1.5 md:max-w-sm">
                    <Label htmlFor="session-number">
                        Nombre des séancees<span className="text-red-600">*</span>
                    </Label>
                    <Input type="number" id="session-number" placeholder="4" />
                </div>
            </div>
            <div className="flex flex-col justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                <div className="grid w-full items-center gap-1.5 md:max-w-sm">
                    <Label htmlFor="start-date">
                        Date de début<span className="text-red-600">*</span>
                    </Label>
                    <Input type="date" id="start-date" placeholder="4" />
                </div>
                <div className="grid w-full items-center gap-1.5 md:max-w-sm">
                    <Label htmlFor="end-date">
                        Date de fin<span className="text-red-600">*</span>
                    </Label>
                    <Input type="date" id="end-date" placeholder="4" />
                </div>
            </div>
            <div>
                <Button type="button">
                    Suivant <ArrowRightIcon className="ml-2" size={20} />
                </Button>
            </div>
        </form>
    )
}

export default CreateCalendarForm
