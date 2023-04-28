import { Input } from "@/components/ui/Input"
import { Label } from "@/components/ui/Label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select"
import { Switch } from "@/components/ui/Switch"
import { useEffect, useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/Popover"
import { Button } from "@/components/ui/Button"
import { InfoIcon } from "lucide-react"

interface SubjectProps {
    label: string
    numberOfSessions: number
    setObject: Function
    object: Object
}

const Subject = ({ label, numberOfSessions, setObject, object }: SubjectProps) => {
    const [areInputsEnabled, setAreInputsEnabled] = useState(true)
    const [sub, setSub] = useState<any>({
        name: label,
        date: new Date(),
        session: "",
    })

    useEffect(() => {
        if (sub.date !== null && sub.session !== "") {
            setObject((current: any) => ({ ...current, sessions: [...current.sessions, sub] }))
        }
    }, [sub])

    return (
        <div>
            <div className="flex items-center justify-between">
                <div className="text-base font-semibold text-slate-900 dark:text-slate-50 md:text-lg">{label}</div>
                <div className="flex items-center space-x-2">
                    <div className="flex items-center justify-center">
                        <Switch id="airplane-mode" checked={areInputsEnabled} onCheckedChange={() => setAreInputsEnabled(!areInputsEnabled)} />
                        {/* <Label htmlFor="airplane-mode">L'inclure?</Label> */}
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="ghost" className="ml-1 flex self-center p-2 focus:ring-0 focus:ring-offset-0">
                                    <InfoIcon size={16} className="text-slate-700" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent side="top" className="w-auto">
                                <small className="text-sm font-medium leading-none">S'il faut inclure ce matière dans le calendrier</small>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
            </div>
            <div className="mt-2 flex flex-col gap-4 md:flex-row">
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="date" className={!areInputsEnabled ? "text-slate-400" : ""}>
                        Date
                    </Label>
                    <Input type="date" onChange={(value) => setSub({ ...sub, date: value })} id="date" placeholder="Date" disabled={!areInputsEnabled} />
                </div>
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="session" className={!areInputsEnabled ? "text-slate-400" : ""}>
                        Séance
                    </Label>
                    <Select onValueChange={(value) => setSub({ ...sub, session: value })} disabled={!areInputsEnabled}>
                        <SelectTrigger>
                            <SelectValue placeholder="Séance" />
                        </SelectTrigger>
                        <SelectContent>
                            {[...Array(numberOfSessions)].map((_, index) => (
                                <SelectItem key={index} value={`${index + 1}`}>
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
