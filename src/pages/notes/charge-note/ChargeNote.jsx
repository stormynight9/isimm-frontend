import { Button } from "@/components/ui/Button"
import { DownloadIcon } from "lucide-react"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import TableChargeSec from "../components/TableChargeSec"
import TableChargeTd from "../components/TableChargeTd"
import TableChargeTp from "../components/TableChargeTp"
import { saveAs } from "file-saver"
const ChargeNote = () => {
    let { section, name, groupType, idEnseignant, idGroup, idSemestre, idMatiere,codeMatiere } = useParams()
    //:section/:name/{group_type}/{id_enseignant}/{group_id}/{id_semestre}/{id_matiere}

    const [responseJson, setResponseJson] = useState([])
    const [post, setPost] = useState(false)
    useEffect(() => {
        chargeList()
    },[])
    const chargeList = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/isimm/chargeNote/EnseignantNote/${groupType}/${idEnseignant}/${idGroup}/${idSemestre}/${idMatiere}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            const json = await response.json()
            setResponseJson(json)
            console.log(json)
        } catch (error) {
            console.error(error)
        }
    }

    const handleDownloadCsv = () => {
        let csvData, csvString
        if (groupType === "0") {
            csvData = responseJson.map((row) => [row.cinEtudiant, row.nomEtudiant, row.prenomEtudiant, row.noteDs, row.noteExam].join(","))
            csvString = [`CIN,Nom,Prenom,DS_${codeMatiere},EX_${codeMatiere}`, ...csvData].join("\n")
        } else if (groupType === "1") {
            csvData = responseJson.map((row) => [row.cinEtudiant, row.nomEtudiant, row.prenomEtudiant, row.noteOral].join(","))
            csvString = [`CIN,Nom,Prenom,ORAL_${codeMatiere}`, ...csvData].join("\n")
        }else if (groupType === "2") {
            csvData = responseJson.map((row) => [row.cinEtudiant, row.nomEtudiant, row.prenomEtudiant, row.noteTp].join(","))
            csvString = [`CIN,Nom,Prenom,TP_${codeMatiere}`, ...csvData].join("\n")
        }
        const blob = new Blob([csvString], { type: "text/csv;charset=utf-8" })
        saveAs(blob, `liste_notes_${section}_${name}.csv`)
    }

    return (
        <div className="chargeNote m-10">
            <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                Notes {`>`} {section.replace(/_/g, " ")} {name && `${name === "SEC" ? "" : "- " + name}`}
            </h3>
            <br></br>
            <div className="btnUploads">
                <Button variant="outline" onClick={handleDownloadCsv} className="mr-6 bg-gray-800 py-2 px-4 text-white hover:bg-gray-700">
                    Télécharger Liste (.CSV) <DownloadIcon className="w-[20px] pl-[5px]" />
                </Button>
                <Button variant="outline">Upload Liste (.CSV)</Button>
                {groupType === "0" ? <TableChargeSec idEnseignant={idEnseignant} idMatiere={idMatiere} setListData={setResponseJson} code={codeMatiere} listData={responseJson} /> : groupType === "1" ? <TableChargeTd code={codeMatiere} listData={responseJson} /> : <TableChargeTp code={codeMatiere} listData={responseJson} />}
                
            </div>
        </div>
    )
}

export default ChargeNote
