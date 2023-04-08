import { useEffect, useMemo, useState } from "react"
import { InputNote } from "./InputNote"
import TablePagination from "./TablePagination"
import PropTypes from "prop-types"
import { Button } from "@/components/ui/Button"

const TableChargeSec = ({ listData, code, setListData }) => {
    const [updatedData, setUpdatedData] = useState([])

    useEffect(() => {
        setUpdatedData(listData)
    }, [listData])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleInputChange = (event, rowIndex, colAccessor) => {
        const updatedRow = { ...updatedData[rowIndex] }
        updatedRow[colAccessor] = event.target.value
        const updatedTableData = [...updatedData]
        updatedTableData[rowIndex] = updatedRow
        setUpdatedData(updatedTableData)
    }

    const handleValidation = () => {
        // Update the listData with the new values from updatedData
        const updatedListData = updatedData.map((row) => ({
            ...row,
            noteDs: row.noteDs || null,
            noteExam: row.noteExam || null,
        }))
        setListData(updatedListData)
        console.log(updatedListData)
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
                Header: `DS_${code}`,
                accessor: "noteDs",
                Cell: ({ row }) => <InputNote value={row.original.noteDs} onBlur={(event) => handleInputChange(event, row.index, "noteDs")} />,
            },
            {
                Header: `EX_${code}`,
                accessor: "noteExam",
                Cell: ({ row }) => <InputNote value={row.original.noteExam} onBlur={(event) => handleInputChange(event, row.index, "noteExam")} />,
            },
        ],
        [code, handleInputChange]
    )

    return (
        <>
            <TablePagination columns={columns} data={updatedData} />
            <Button variant="outline" className="bg-gray-800 py-2 px-4 text-white hover:bg-gray-700" onClick={handleValidation}>
                Valider
            </Button>
            {/*[idEtudiant,noteDs,noteExam],idEnseignant,idMatiere,typeGroup,*/}
        </>
    )
}

TableChargeSec.propTypes = {
    listData: PropTypes.array.isRequired,
    setListData: PropTypes.func.isRequired,
}

export default TableChargeSec
