import { useEffect, useMemo, useState } from "react"
import { InputNote } from "./InputNote"
import TablePagination from "./TablePagination"
import PropTypes from "prop-types"
import { Button } from "@/components/ui/Button"
import Papa from "papaparse"
import { useToast } from "@/hooks/useToast"
import { ToastAction } from "@/components/ui/Toast"
const TableChargeTp = ({ listData, code, setListData, idEnseignant, idMatiere, idSemestre }) => {
    const [updatedData, setUpdatedData] = useState([])

    useEffect(() => {
        setUpdatedData(listData)
    }, [listData])

    const { toast } = useToast()

    function showToast(message) {
        showCustomToast(toast, message)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleInputChange = (event, rowIndex, colAccessor) => {
        try {
            if (!(event.target.value >= 0 && event.target.value <= 20)) throw Error("Note Invalide")
        } catch (error) {
            showToast(error.message)
            event.target.value = null
        }
        const updatedRow = { ...updatedData[rowIndex] }
        updatedRow[colAccessor] = event.target.value
        const updatedTableData = [...updatedData]
        updatedTableData[rowIndex] = updatedRow
        setUpdatedData(updatedTableData)
    }

    const handleFileUpload = async (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.readAsText(file)
            reader.onload = async (event) => {
                const csvData = event.target.result
                try {
                    const tableData = await parseCSV(csvData)
                    setUpdatedData(tableData)
                } catch (err) {
                    toast.error(err.message)
                }
            }
        }
    }

    function parseCSV(csvData) {
        return new Promise((resolve, reject) => {
            Papa.parse(csvData, {
                header: true,
                complete: (results, file) => {
                    const tableData = results.data.map((row) => ({
                        cinEtudiant: row["CIN"],
                        nomEtudiant: row["Nom"],
                        prenomEtudiant: row["Prenom"],
                        noteTp: row[`TP_${code}`] || null,
                    }))

                    const existingCinValues = tableData.map((row) => row.cinEtudiant)
                    const uniqueCinValues = [...new Set(existingCinValues)]

                    const headers = Object.keys(results.data[0])
                    const expectedHeaders = ["CIN", "Nom", "Prenom", `TP_${code}`]

                    // Check if all expected headers are present in the file
                    const allHeadersExist = expectedHeaders.every((header) => headers.includes(header))
                    if (!allHeadersExist) {
                        showToast("The uploaded file does not correspond to the current course material. Please ensure that the file has the correct format and contains the expected data columns for this course.")
                    }
                    // Check if all CIN values in the file are already present in the `ancienne` data list
                    else if (!uniqueCinValues.every((cin) => updatedData.some((data) => data.cinEtudiant === cin))) {
                        showToast("Some CIN values in the file are not present in the existing data list")
                    } else if (existingCinValues.length !== uniqueCinValues.length) {
                        showToast("Duplicate CIN values found in the file")
                    } else {
                        resolve(tableData)
                    }
                },
                error: (err, file) => {
                    reject(err)
                },
            })
        })
    }

    const handleValidation = () => {
        // Update the listData with the new values from updatedData
        const updatedListData = updatedData.map((row) => ({
            ...row,
            noteOral: row.noteTp || null,
        }))
        setListData(updatedListData)
        valider()
    }
    const valider = async () => {
        const data = {
            list: listData,
            idEnseignant: 1,
            idMatiere: idMatiere,
            typeGroup: 2,
            idSemestre: idSemestre,
        }
        console.log(data)
        console.log(typeof listData)
        await fetch(`${import.meta.env.VITE_API_URL}/api/isimm/chargeNote/EnseignantNote/addNotesTp`, {
            method: "POST",
            headers: {
                accept: "*/*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((response) => {
            if (response.status === 200) {
                console.log("Success")
            } else {
                console.log(response.data)
            }
        })
    }

    const columns = useMemo(
        () => [
            {
                Header: "N°",
                accessor: (row, index) => index + 1,
            },
            {
                Header: "Identifiant",
                accessor: "cinEtudiant",
            },
            {
                Header: "Nom",
                accessor: "nomEtudiant",
            },
            {
                Header: "Prénom",
                accessor: "prenomEtudiant",
            },
            {
                Header: `TP_${code}`,
                accessor: "noteTp",
                Cell: ({ row }) => <InputNote type="number" min="0" step="0.25" max="20" pattern="[0-20]" title="Please enter a number between 0 and 20." defaultValue={row.original.noteTp} onBlur={(event) => handleInputChange(event, row.index, "noteTp")} />,
            },
        ],
        [code, handleInputChange]
    )

    return (
        <>
            <label
                htmlFor="fileUpload"
                className="inline-flex h-10 cursor-pointer items-center justify-center rounded-md border border-slate-200 py-2 px-4 text-sm font-medium transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800"
            >
                Upload Liste (.CSV)
            </label>
            <input id="fileUpload" type="file" accept=".csv" onChange={handleFileUpload} className="sr-only" tabIndex={-1} aria-hidden="true" />

            <TablePagination columns={columns} data={updatedData} />
            <Button variant="outline" className="bg-gray-800 py-2 px-4 text-white hover:bg-gray-700" onClick={handleValidation}>
                Valider
            </Button>
        </>
    )
}
TableChargeTp.propTypes = {
    listData: PropTypes.array.isRequired,
    setListData: PropTypes.func.isRequired,
}
export default TableChargeTp

export function showCustomToast(toast, message) {
    toast({
        title: message,
        action: <ToastAction altText="Dismiss">D'accord</ToastAction>,
    })
}
