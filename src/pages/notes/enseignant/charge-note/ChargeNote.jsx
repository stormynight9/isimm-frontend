import { Button } from "@/components/ui/Button"
import { DownloadIcon } from "lucide-react"
import { useEffect, useState } from "react"
import TableChargeSec from "../components/TableChargeSec"
import TableChargeTd from "../components/TableChargeTd"
import TableChargeTp from "../components/TableChargeTp"
import { saveAs } from "file-saver"
import { useSelector } from "react-redux"
const ChargeNote = () => {
    let { section, name, groupType, idEnseignant, idGroup, idSemestre, idMatiere, codeMatiere, nameMatiere } = useSelector((state) => state.note)

    const [responseJson, setResponseJson] = useState([])
    useEffect(() => {
        chargeList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
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
        } catch (error) {
            console.error(error)
        }
    }

    const handleDownloadCsv = () => {
        let csvData, csvString
        if (groupType === "0") {
            console.log(responseJson)
            csvData = responseJson.map((row) => [`\t${row.cinEtudiant}`, row.nomEtudiant, row.prenomEtudiant, row.noteDs, row.noteExam].join(","))
            csvString = [`CIN,Nom,Prenom,DS_${codeMatiere},EX_${codeMatiere}`, ...csvData].join("\n")
        } else if (groupType === "1") {
            csvData = responseJson.map((row) => [`\t${row.cinEtudiant}`, row.nomEtudiant, row.prenomEtudiant, row.noteOral].join(","))
            csvString = [`CIN,Nom,Prenom,OR_${codeMatiere}`, ...csvData].join("\n")
        } else if (groupType === "2") {
            csvData = responseJson.map((row) => [`\t${row.cinEtudiant}`, row.nomEtudiant, row.prenomEtudiant, row.noteTp].join(","))
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
            <p className="mb-3 leading-7 [&:not(:first-child)]:mt-3">{nameMatiere}</p>
            <div className="btnUploads">
                <Button variant="outline" onClick={handleDownloadCsv} className="mr-6 bg-gray-800 py-2 px-4 text-white hover:bg-gray-700">
                    Télécharger Liste (.CSV) <DownloadIcon className="w-[20px] pl-[5px]" />
                </Button>
                {groupType === "0" ? (
                    <TableChargeSec idEnseignant={idEnseignant} idMatiere={idMatiere} setListData={setResponseJson} code={codeMatiere} listData={responseJson} idSemestre={idSemestre} />
                ) : groupType === "1" ? (
                    <TableChargeTd idEnseignant={idEnseignant} idSemestre={idSemestre} idMatiere={idMatiere} setListData={setResponseJson} code={codeMatiere} listData={responseJson} />
                ) : (
                    <TableChargeTp idEnseignant={idEnseignant} idSemestre={idSemestre} idMatiere={idMatiere} setListData={setResponseJson} code={codeMatiere} listData={responseJson} />
                )}
            </div>
        </div>
    )
}

export default ChargeNote
