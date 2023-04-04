import { useMemo } from "react"
import TablePagination from "../components/TablePagination"
import { Button } from "@/components/ui/Button"
import Badge from "@/components/ui/Badge"

const ReclamationTable = () => {
    const columns = useMemo(
        () => [
            {
                Header: "ID",
                accessor: "id",
            },
            {
                Header: "Date",
                accessor: "date",
            },
            {
                Header: "EC",
                accessor: "EC",
            },
            {
                Header: "Matiere",
                accessor: "matiere",
            },
            {
                Header: "Message",
                accessor: "message",
            },
            {
                Header: "Statut",
                accessor: "statut",
                Cell: ({ value }) => <Badge status="green">Accepté</Badge>,
            },
            {
                Header: "Action",
                Cell: <Button>Details</Button>,
            },
        ],
        []
    )

    const data = useMemo(
        () => [
            {
                id: "0000001",
                date: "13-01-2023",
                EC: "5111",
                matiere: "Analyse de données",
                message: "Je fait cette reclamation pour",
                Statut: "Accepté",
            },
            {
                id: "0000001",
                date: "13-01-2023",
                EC: "5111",
                matiere: "Analyse de données",
                message: "Je fait cette reclamation pour",
                Statut: "Accepté",
            },
            {
                id: "0000001",
                date: "13-01-2023",
                EC: "5111",
                matiere: "Analyse de données",
                message: "Je fait cette reclamation pour",
                Statut: "Accepté",
            },
        ],
        []
    )

    return <TablePagination columns={columns} data={data} />
}

export default ReclamationTable
