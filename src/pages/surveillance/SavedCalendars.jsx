import Table from "@/components/shared/Table"
import Header from "./components/Header"
import Badge from "@/components/ui/Badge"
import { useMemo } from "react"
import { savedCalendars } from "./data/saved-calendars"
import { Button } from "@/components/ui/Button"
import { Link } from "react-router-dom"
import { ExternalLinkIcon } from "lucide-react"

const SavedCalendars = () => {
    const data = useMemo(() => savedCalendars, [])

    const columns = useMemo(
        () => [
            {
                Header: "Titre",
                accessor: "title",
            },
            {
                Header: "Date de création",
                accessor: "createdAt",
            },
            {
                Header: "état",
                accessor: "status",
                Cell: ({ value }) => (value ? <Badge status="green">Publié</Badge> : <Badge status="yellow">Non publié</Badge>),
            },
            {
                Header: "Action",
                accessor: "id",
                Cell: ({ value }) => (
                    <Link to={`${value}`}>
                        <Button variant="link" className="text-base text-blue-900">
                            Voir
                            <ExternalLinkIcon className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                ),
            },
        ],
        []
    )
    return (
        <div className="w-full lg:pt-4 lg:pl-4">
            <Header title="Calendriers sauvegardés" className="mb-8">
                Voici la liste de tous les calendriers sauvegardés.
            </Header>
            <div className="max-w-7xl">
                <Table columns={columns} data={data} />
            </div>
        </div>
    )
}

export default SavedCalendars
