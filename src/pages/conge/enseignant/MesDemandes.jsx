import { useMemo } from "react"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/DropdownMenu"
import Badge from "@/components/ui/Badge"
import Table from "@/components/shared/Table"
const MesDemandes = () => {
    const columns = useMemo(
        () => [
            {
                Header: "ID demande",
                accessor: "id_demande_conger",
            },
            {
                Header: "Date Demande",
                accessor: "Date_demande",
                Cell: ({ value }) => new Date(value).toLocaleDateString("fr-FR"),
            },
            {
                Header: "Date Départ",
                accessor: "dateDepart",
                Cell: ({ value }) => new Date(value).toLocaleDateString("fr-FR"),
            },
            {
                Header: "Date Retour",
                accessor: "dateRetour",
                Cell: ({ value }) => new Date(value).toLocaleDateString("fr-FR"),
            },
            {
                Header: "Nombre de jours",
                accessor: "nb_jours",
                Cell: ({ row }) => {
                    const dateDepart = new Date(row.original.dateDepart)
                    const dateRetour = new Date(row.original.dateRetour)
                    const diffInMs = dateRetour - dateDepart
                    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24))
                    return diffInDays
                },
            },
            {
                Header: "Etat",
                accessor: "etat",
                Cell: ({ value }) => {
                    if (value === "en cours") {
                        return (
                            <div className="relative">
                                <Badge status="yellow">{value}</Badge>
                            </div>
                        )
                    } else {
                        return <Badge status={value === "accepté" ? "green" : "red"}>{value}</Badge>
                    }
                },
            },
            {
                Header: "ACTIONS",
                accessor: "actions",
                Cell: ({ row }) => {
                    const etat = row.original.etat
                    return (
                        <div className="flex items-center justify-center">
                            {etat === "en cours" && (
                                <DropdownMenu>
                                    <DropdownMenuTrigger>
                                        <button className="flex items-center justify-center">
                                            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                                                <circle cx="12" cy="12" r="1"></circle>
                                                <circle cx="6" cy="12" r="1"></circle>
                                                <circle cx="18" cy="12" r="1"></circle>
                                            </svg>
                                        </button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem onClick={() => window.history.back()}>Modifier la demande</DropdownMenuItem>
                                        <DropdownMenuItem className="text-red-500">Supprimer la demande</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            )}
                            {(etat === "accepté" || etat === "refusé") && (
                                <DropdownMenu>
                                    <DropdownMenuTrigger>
                                        <button className="flex items-center justify-center">
                                            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                                                <circle cx="12" cy="12" r="1"></circle>
                                                <circle cx="6" cy="12" r="1"></circle>
                                                <circle cx="18" cy="12" r="1"></circle>
                                            </svg>
                                        </button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem onClick={() => window.history.back()}>Envoyez une autre demande</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            )}
                        </div>
                    )
                },
            },
        ],
        []
    )

    const data = useMemo(() => [
        {
            id_demande_conger: "1",
            Date_demande: "2023-03-01",
            dateDepart: "2023-03-05",
            dateRetour: "2023-03-10",
            etat: "en cours",
        },
        {
            id_demande_conger: "2",
            Date_demande: "2023-03-02",
            dateDepart: "2023-03-12",
            dateRetour: "2023-03-15",
            etat: "accepté",
        },
        {
            id_demande_conger: "3",
            Date_demande: "2023-03-02",
            dateDepart: "2023-03-12",
            dateRetour: "2023-03-15",
            etat: "refusé",
        },
    ])

    return (
        <div>
            <Table columns={columns} data={data} />
        </div>
    )
}

export default MesDemandes
