import { useState, useEffect } from "react"
import TableNoteSemester from "./TableNoteSemester"
import jsPDF from "jspdf"
import "jspdf-autotable"
import { Button } from "@/components/ui/Button"

const TableAfficheNote = (props) => {
    const { sem, idEtd } = props
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        const chargeSections = async () => {
            try {
                if (!sem) {
                    return
                }

                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/isimm/chargeNote/EtudiantMoyenne/notes/${idEtd}/${sem}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })

                if (!response.ok) {
                    throw new Error(response.statusText)
                }

                const json = await response.json()
                console.log("Data type:", typeof data)
                setData(json)
                setLoading(false)
            } catch (error) {
                console.error(error)
            }
        }

        chargeSections()
    }, [sem])

    const generatePDF = async () => {
        const doc = new jsPDF()
        const tableColumn = ["UE", "Unité", "EC", "Module", "TP", "ORAL", "DS", "EXAM", "Moyenne"]
        const tableRows = data.map((item) => [item.code_unite, item.unite_name, item.id_matiere, item.matiere, item.TP, item.ORAL, item.DS, item.EXAM, item.moyenne])

        // set font family and font size
        doc.setFont("Helvetica", "normal")
        doc.setFontSize(12)

        // add student information
        const studentResponse = await fetch(`${import.meta.env.VITE_API_URL}/api/isimm/chargeNote/EtudiantMoyenne/bulletin/${idEtd}/${sem}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })

        if (!studentResponse.ok) {
            throw new Error(studentResponse.statusText)
        }

        const studentJson = await studentResponse.json()

        doc.setFontSize(24)
        doc.setTextColor(73, 79, 95)
        doc.text("Bulletin", doc.internal.pageSize.width / 2, 20, { align: "center" })

        // set font size for student information
        doc.setFontSize(12)

        // add student information to PDF in a bordered rectangle
        doc.setDrawColor(0)
        doc.setFillColor(240, 240, 240)
        doc.rect(15, 30, doc.internal.pageSize.width - 30, 40, "F")
        doc.text(`Nom: ${studentJson[0].nom}`, 20, 40)
        doc.text(`Prenom: ${studentJson[0].prenom}`, 20, 50)
        doc.text(`CIN: ${studentJson[0].cne}`, 20, 60)
        doc.text(`Semestre: ${studentJson[0].semestre}`, 125, 40)
        doc.text(`Filiere: ${studentJson[0].filiere}`, 125, 50)
        doc.text(`Niveau: ${studentJson[0].niveau}`, 125, 60)

        // add table header to PDF
        doc.setDrawColor(226, 226, 226)
        doc.setFontSize(14)
        doc.autoTable({
            head: [tableColumn],
            body: [],
            startY: 80,
            headStyles: {
                fillColor: [232, 232, 232],
                textColor: [38, 38, 38],
                fontStyle: "bold",
            },
            bodyStyles: {
                cellPadding: { top: 10, bottom: 10 },
            },
            willDrawCell: function (data) {
                // Set padding for cells in the body of the table
                if (data.section === "body") {
                    data.cell.styles.cellPadding = 8
                }
            },
        })

        // set font size and styling for table rows
        doc.setFontSize(12)
        doc.autoTable({
            startY: doc.autoTable.previous.finalY,
            head: [],
            body: tableRows,
            theme: "striped",
            columnStyles: {
                0: { cellWidth: 10 },
                1: { cellWidth: 40 },
                2: { cellWidth: 28 },
                3: { cellWidth: 30 },
                4: { cellWidth: 15 },
                5: { cellWidth: 15 },
                6: { cellWidth: 15 },
                7: { cellWidth: 15 },
                8: { cellWidth: 15 },
            },
            styles: {
                cellPadding: 2,
                fontSize: 10,
                overflow: "linebreak",
                valign: "middle",
                halign: "center",
            },
            createdCell: (cell, data) => {
                // set background color for moyenne >= 10
                if (cell.column.index === 8 && data >= 10) {
                    cell.styles.fillColor = "#c8e6c9"
                }
            },
        })

        // set font size for footer
        doc.setFontSize(10)

        // add footer with page number
        const pageCount = doc.internal.getNumberOfPages()
        for (let i = 1; i <= pageCount; i++) {
            doc.setPage(i)
            doc.setFontSize(10)
            doc.text(`Page ${i} of ${pageCount}`, 15, doc.internal.pageSize.height - 10)
        }

        doc.save("my_document.pdf")
    }

    const columns = [
        { Header: "UE", accessor: "code_unite" },
        { Header: "Unité", accessor: "unite_name" },
        { Header: "EC", accessor: "id_matiere" },
        { Header: "Module", accessor: "matiere" },
        { Header: "TP", accessor: "TP" },
        { Header: "ORAL", accessor: "ORAL" },
        { Header: "DS", accessor: "DS" },
        { Header: "EXAM", accessor: "EXAM" },
        { Header: "Moyenne", accessor: "moyenne" },
    ]

    return (
        <div>
            {loading ? (
                <p>Loading data...</p>
            ) : (
                <>
                    {data.length === 0 ? (
                        <p className=" mt-56 flex items-center justify-center text-center text-lg">There is nothing to display</p>
                    ) : (
                        <>
                            <TableNoteSemester columns={columns} data={data} />
                            <Button className="mt-4" onClick={generatePDF}>
                                Download PDF
                            </Button>
                        </>
                    )}
                </>
            )}
        </div>
    )
}

export default TableAfficheNote
