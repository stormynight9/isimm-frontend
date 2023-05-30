import { useMemo, useEffect, useState } from "react"
import axios from "axios"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu"
import Badge from "@/components/ui/Badge"
import Table from "@/components/shared/Table"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/Button"
import { MoreHorizontalIcon } from "lucide-react"

const MesDemandes = () => {
    const [demandes, setDemandes] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        loadDemandes()
    }, [])
    const loadDemandes = async (employe = 1) => {
        try {
            const result = await axios.get(
                `http://localhost:8090/api/isimm/gestionConge/exempleEntity/Demandes/${employe}`
            )

            setDemandes(result.data)
        } catch (error) {
            console.log(error)
        }
    }
    const deleteDemande = async (idDemandeConger) => {
        try {
            const response = await axios.delete(
                `http://localhost:8090/api/isimm/gestionConge/exempleEntity/${idDemandeConger}`
            )

            console.log(response.data)
            // Reload the demandes after deletion
            loadDemandes()
        } catch (error) {
            console.log(error)
        }
    }

    const columns = useMemo(
        () => [
            {
                Header: "ID demande",
                accessor: "idDemandeConger",
            },
            {
                Header: "Date Demande",
                accessor: "Date_demande",
                Cell: () => new Date().toLocaleDateString("fr-FR"),
            },

            {
                Header: "Date Départ",
                accessor: "dateDebut",
                Cell: ({ value }) => new Date(value).toLocaleDateString("fr-FR"),
            },
            {
                Header: "Date Retour",
                accessor: "dateFin",
                Cell: ({ value }) => new Date(value).toLocaleDateString("fr-FR"),
            },
            {
                Header: "Nombre de jours",
                accessor: "nb_jours",
                Cell: ({ row }) => {
                    const dateDepart = new Date(row.original.dateDebut)
                    const dateRetour = new Date(row.original.dateFin)
                    const diffInMs = dateRetour - dateDepart
                    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24))
                    return diffInDays
                },
            },
            {
                Header: "Etat",
                accessor: "etat_demande",
                Cell: ({ value }) => {
                    if (value === "ATTENTE") {
                        return (
                            <div className="relative">
                                <Badge status="yellow">{value}</Badge>
                            </div>
                        )
                    } else {
                        return <Badge status={value === "ACCEPTE" ? "green" : "red"}>{value}</Badge>
                    }
                },
            },
            {
                Header: "ACTIONS",
                accessor: "actions",
                Cell: ({ row }) => {
                    const etat = row.original.etat_demande
                    return (
                        <div className="flex items-center justify-center">
                            {etat === "ATTENTE" && (
                                <DropdownMenu>
                                    <DropdownMenuTrigger>
                                        <Button variant={"link"}>
                                            <MoreHorizontalIcon className="mr-2 h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem
                                            onClick={() => {
                                                // Redirect to the update form
                                                window.location.href = `/isimm-frontend/conge/enseignant/${row.original.idDemandeConger}`
                                            }}
                                        >
                                            Modifier la demande
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                            className="text-red-500"
                                            onClick={() =>
                                                deleteDemande(row.original.idDemandeConger)
                                            }
                                        >
                                            Supprimer la demande
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            )}
                            {(etat === "ACCEPTE" || etat === "REFUSE") && (
                                <DropdownMenu>
                                    <DropdownMenuTrigger>
                                        <Button variant={"link"}>
                                            <MoreHorizontalIcon className="mr-2 h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem onClick={() => window.history.back()}>
                                            Envoyez une autre demande
                                        </DropdownMenuItem>
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

    const data = useMemo(
        () => [
            {
                idDemandeConger: 1,
                Date_demande: "2023-03-01",
                dateDebut: "2023-03-05",
                dateFin: "2023-03-10",
                etat_demande: "ATTENTE",
            },
            {
                idDemandeConger: "2",
                Date_demande: "2023-03-02",
                dateDebut: "2023-03-12",
                dateFin: "2023-03-15",
                etat_demande: "ACCEPTE",
            },
            {
                idDemandeConger: "3",
                Date_demande: "2023-03-02",
                dateDebut: "2023-03-12",
                dateFin: "2023-03-15",
                etat_demande: "REFUSE",
            },
            ...demandes.map((demande) => ({
                idDemandeConger: demande.idDemandeConger,
                Date_demande: demande.Date_demande,
                dateDebut: demande.dateDebut,
                dateFin: demande.dateFin,
                etat_demande: "ATTENTE",
            })),
        ],
        [demandes, deleteDemande]
    )

    return (
        <div>
            <h1 style={{ textAlign: "center", fontWeight: "bold", fontSize: "28px" }}>
                Liste des demandes de Congés
            </h1>
            <Table columns={columns} data={data} />
        </div>
    )
}

export default MesDemandes

