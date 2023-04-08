import { useMemo } from "react"
import TablePagination from "../components/TablePaginationReclamation"
import { Button } from "@/components/ui/Button"
import Badge from "@/components/ui/Badge"
import PropTypes from "prop-types"

const ReclamationTable = ({ responseJson, changeDialogVisibility, setDetailsJson }) => {
    const getReclamationDetails = async (id) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/isimm/chargeNote/EtudiantReclamation/reclamation/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            if (response.status !== 200) {
                throw new Error(response.statusText)
            }
            const json = await response.json()
            console.log(json)
        } catch (error) {
            console.error(error)
        }
    }
    const columns = useMemo(
        () => [
            {
                Header: "N°",
                accessor: (row, index) => index + 1,
            },
            {
                Header: "Date",
                accessor: "creationDateTime",
                Cell: ({ value }) => {
                    const date = new Date(value)
                    const year = date.getFullYear()
                    const month = date.getMonth() + 1
                    const day = date.getDate()

                    const formattedDate = `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`

                    return (
                        <span>
                            <span>{formattedDate}</span>
                        </span>
                    )
                },
            },

            {
                Header: "EC",
                accessor: "codeMatiere",
                Cell: ({ value }) => <span>{value}</span>,
            },
            {
                Header: "Matiere",
                accessor: "nomMatiere",
                Cell: ({ value }) => <span>{value}</span>,
            },
            {
                Header: "Type Note",
                accessor: "typeDevoir",
                Cell: ({ value }) => <span>{value}</span>,
            },
            {
                Header: "Message",
                accessor: "message",
                Cell: ({ value }) => <span className="font-normal text-neutral-500">{value.length > 27 ? `${value.slice(0, 30)}...` : value}</span>,
            },
            {
                Header: "Statut",
                accessor: "statut",
                Cell: ({ value }) => (value === "Acceptée" ? <Badge status="green">{value}</Badge> : value === "Refusée" ? <Badge status="red">{value}</Badge> : <Badge status="yellow">{value}</Badge>),
            },
            {
                Header: "Action",
                Cell: ({ row }) => (
                    <Button
                        onClick={() => {
                            const id = row.original.idReclamation
                            getReclamationDetails(id).then((json) => setDetailsJson(json))
                            changeDialogVisibility()
                        }}
                    >
                        Details
                    </Button>
                ),
            },
        ],
        [setDetailsJson, changeDialogVisibility]
    )

    return <TablePagination columns={columns} data={responseJson} />
}

ReclamationTable.propTypes = {
    responseJson: PropTypes.isRequired,
    changeDialogVisibility: PropTypes.func.isRequired,
}

export default ReclamationTable
