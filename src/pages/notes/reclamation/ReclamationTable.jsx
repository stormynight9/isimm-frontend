import { useMemo } from "react"
import TablePagination from "./components/TablePaginationReclamation"
import { Button } from "@/components/ui/Button"
import Badge from "@/components/ui/Badge"

const ReclamationTable = () => {
    const columns = useMemo(
        () => [
            {
                Header: "ID",
                accessor: "id",
                Cell: ({ value }) => <span className="font-bold">{value}</span>,
            },
            {
                Header: "Date",
                accessor: "date",
                Cell: ({ value }) => <span className="font-bold">{value}</span>,
            },
            {
                Header: "EC",
                accessor: "EC",
                Cell: ({ value }) => <span className="font-bold">{value}</span>,
            },
            {
                Header: "Matiere",
                accessor: "matiere",
                Cell: ({ value }) => <span className="font-bold">{value}</span>,
            },
            {
                Header: "Message",
                accessor: "message",
                Cell: ({ value }) => <span className="font-normal text-neutral-500">{value.length > 27 ? `${value.slice(0, 30)}...` : value}</span>,
            },
            {
                Header: "Statut",
                accessor: "Statut",
                Cell: ({ value }) => (value === "Accepté" ? <Badge status="green">Accepté</Badge> : value === "Refuseé" ? <Badge status="red">Refuseé</Badge> : <Badge status="yellow">Envoyée</Badge>),
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
                Statut: "Refuseé",
            },
            {
                id: "0000001",
                date: "13-01-2023",
                EC: "5111",
                matiere: "Analyse de données",
                message: "Je fait cette reclamation pour",
                Statut: "Envoyée",
            },
        ],
        []
    )

    return <TablePagination columns={columns} data={data} />
}

export default ReclamationTable
