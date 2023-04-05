import { Button } from "@/components/ui/Button"
import { DownloadIcon } from "lucide-react"
import { useParams } from "react-router-dom"
import TableChargeNote from "../components/TableChargeNote"

const ChargeNote = () => {
    let { section, td, tp } = useParams()

    return (
        <div className="chargeNote m-10">
            <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                Notes {`>`} {section} {td && `- ${td}`} {tp && `- ${tp}`}
            </h3>
            <br></br>
            <div className="btnUploads">
                <Button variant="outline" className="mr-6 bg-gray-800 py-2 px-4 text-white hover:bg-gray-700">
                    Télécharger Liste (.CSV) <DownloadIcon className="w-[20px] pl-[5px]" />
                </Button>
                <Button variant="outline">Upload Liste (.CSV)</Button>
                <TableChargeNote></TableChargeNote>
                <Button variant="outline" className="bg-gray-800 py-2 px-4 text-white hover:bg-gray-700">
                    Valider
                </Button>
            </div>
        </div>
    )
}

export default ChargeNote
