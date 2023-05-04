import { Textarea } from "@/components/ui/Textarea"
import CalendarCell from "./components/CalendarCell"
import Header from "./components/Header"
import { DownloadIcon, SendIcon } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { scheduleData } from "./data/schedule-data"
import { useEffect, useState } from "react"
import { PDFDownloadLink } from "@react-pdf/renderer"

import TimetablePDF from "./components/TimetablePDF"

const Calendar = () => {
    const [timeTable, setTimeTable] = useState([])
    const [pdfBlob, setPdfBlob] = useState(null)
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
    }, [])
    return (
        <div className="lg:pl-4 lg:pt-4">
            <Header title="Calendrier">Voici votre calendrier. Si vous souhaitez envoyer une réclamation, saisissez-la ci-dessous et envoyez-la.</Header>
            <h1 className="my-4 text-xl font-bold">Examen Semestre 2 - 2022/2023</h1>
            <div className="flex w-full   flex-col xl:flex-row ">
                {scheduleData.map((item, index) => (
                    <div key={index} className="mb-4 flex flex-col items-center">
                        <h2 className="text-l font-bold">{item.date}</h2>
                        <div className="flex items-center xl:flex-col xl:items-center">
                            <div className="flex w-full flex-wrap justify-center xl:flex-col">
                                {item.sessions.map((element, index) => (
                                    <CalendarCell key={index} value={element.value} variant={element.state ? "green" : "white"} className="m-2" />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="m-2 flex w-full justify-end xl:max-w-5xl">
                <div>
                    <Button variant={"outline"} className="flex gap-2">
                        <DownloadIcon className="mr-2 h-4 w-4" />{" "}
                        <PDFDownloadLink document={<TimetablePDF timetable={timeTable} />} fileName="timetable.pdf" onRender={setPdfBlob}>
                            {({ blob, url, loading, error }) => (loading ? "Loading document..." : "Télécharger pdf")}
                        </PDFDownloadLink>
                    </Button>

                    {pdfBlob && (
                        <Button variant={"outline"} className="flex gap-2" onClick={handleDownloadClick}>
                            <DownloadIcon className="mr-2 h-4 w-4" /> Télécharger pdf
                        </Button>
                    )}
                </div>
            </div>
            <div className="flex max-w-5xl flex-col items-center justify-center gap-2 ">
                <Textarea className="md:w-[50%] " />
                <Button className="flex gap-2 md:w-[50%]">
                    Envoyer <SendIcon className="mr-2 h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}

export default Calendar
