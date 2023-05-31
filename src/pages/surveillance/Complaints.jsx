import { Button } from "@/components/ui/Button"
import { PDFDownloadLink } from "@react-pdf/renderer"
import { Check, ChevronsUpDown, DownloadIcon } from "lucide-react"
import { useEffect, useState } from "react"
import CalendarCell from "./components/CalendarCell"
import Header from "./components/Header"
import { scheduleData as data } from "./data/schedule-data"

import TimetablePDF from "./components/TimetablePDF"
import Message from "./components/Message"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/Popover"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/Command"
import { cn } from "@/lib/utils"
import { professors } from "./data/professors"
import { Label } from "@/components/ui/Label"

const Complaints = () => {
    const [timeTable, setTimeTable] = useState([])
    const [pdfBlob, setPdfBlob] = useState(null)
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(professors[0].value)
    const [scheduleData, setScheduleData] = useState(data)
    const handleDownloadClick = () => {
        const blob = new Blob([pdfBlob], { type: "application/pdf" })
        const url = URL.createObjectURL(blob)
        const link = document.createElement("a")
        link.href = url
        link.download = "timetable.pdf"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }
    const generateTimeTable = () => {
        let arr = []
        scheduleData.forEach((element, index) => {
            element.sessions.forEach((item, index) => {
                let newItem = {
                    ...item,
                    date: element.date,
                }
                arr.push(newItem)
            })
        })
        setTimeTable(arr)
    }

    useEffect(() => {
        generateTimeTable()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleCellChange = (date, index) => {
        let newScheduleDate = [...scheduleData]
        let dateIndex = newScheduleDate.findIndex((item) => item.date === date)
        newScheduleDate[dateIndex].sessions[index].state =
            !newScheduleDate[dateIndex].sessions[index].state
        setScheduleData(newScheduleDate)
    }
    return (
        <div className="lg:pl-4 lg:pt-4">
            <Header title="Réclamations">
                Ici, vous pouvez voir le calendrier de chaque professeur ainsi que leurs
                réclamations.
            </Header>
            <Popover open={open} onOpenChange={setOpen}>
                <Label htmlFor="enseignant" className="mb-2 mt-9 block">
                    Enseignant
                </Label>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-[256px] justify-between"
                    >
                        {value
                            ? professors.find((professor) => professor.value === value)?.label
                            : "Choisir un enseignant..."}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[256px] p-0">
                    <Command>
                        <CommandInput placeholder="Chercher un enseignant..." />
                        <CommandEmpty>Aucun enseignant trouvé</CommandEmpty>
                        <CommandGroup>
                            {professors.map((professor) => (
                                <CommandItem
                                    key={professor.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === professor.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {professor.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </Command>
                </PopoverContent>
            </Popover>
            <h1 className="my-4 text-xl font-bold">Examen Semestre 2 - 2022/2023</h1>
            <div className="flex w-full   flex-col xl:flex-row ">
                {scheduleData.map((item, index) => (
                    <div key={index} className="mb-4 flex flex-col items-center">
                        <h2 className="text-l font-bold">{item.date}</h2>
                        <div className="flex items-center xl:flex-col xl:items-center">
                            <div className="flex w-full flex-wrap justify-center xl:flex-col">
                                {item.sessions.map((element, index) => (
                                    <CalendarCell
                                        key={index}
                                        value={element.value}
                                        onClick={() => handleCellChange(item.date, index)}
                                        variant={element.state ? "green" : "white"}
                                        className="m-2 cursor-pointer"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="m-2 flex w-full justify-end xl:max-w-5xl">
                <div className="flex gap-2">
                    <Button variant={"outline"} className="flex gap-2">
                        <DownloadIcon className="mr-2 h-4 w-4" />{" "}
                        <PDFDownloadLink
                            document={<TimetablePDF timetable={timeTable} />}
                            fileName="timetable.pdf"
                            onRender={setPdfBlob}
                        >
                            {({ blob, url, loading, error }) =>
                                loading ? "Loading document..." : "Télécharger pdf"
                            }
                        </PDFDownloadLink>
                    </Button>
                    {pdfBlob && (
                        <Button
                            variant={"outline"}
                            className="flex gap-2"
                            onClick={handleDownloadClick}
                        >
                            <DownloadIcon className="mr-2 h-4 w-4" /> Télécharger pdf
                        </Button>
                    )}
                    <Button className="flex gap-2">Mettre à jour</Button>
                </div>
            </div>
            <section>
                <h2 className="mb-7 scroll-m-20 text-2xl font-semibold tracking-tight">Messages</h2>
                <div className="flex flex-col gap-10">
                    <Message date="Septembre 30, 2023 - 10:04">
                        Je ne peux pas assister de 8h30 à 11h00 en raison de problèmes personnels,
                        veuillez en tenir compte s'il vous plaît.
                    </Message>
                    <Message date="Septembre 29, 2023 - 11:49">
                        Je dois annuler ma disponibilité pour la semaine prochaine car je serai en
                        déplacement. Merci de prendre note de cela.
                    </Message>
                </div>
            </section>
        </div>
    )
}

export default Complaints
