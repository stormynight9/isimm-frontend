import Table from "@/components/shared/Table"
import { useMemo } from "react"
import Badge from "@/components/ui/Badge"
const ConsulterDemandes = () => {
    const columns = useMemo(
        () => [
            {
                Header: "Nom de l'enseignant",
                accessor: "NomEnseignant",
            },
            {
                Header: "Date de la demande",
                accessor: "Date",
            },
            {
                Header: "Nom de produit",
                accessor: "NomProduit",
            },
            {
                Header: "Quantité",
                accessor: "qte",
            },
            {
                Header: "Commentaires",
                accessor: "Commentaires",
            },
            {
                Header: "Etat",
                accessor: "Etat",
                Cell: ({ value }) => (value ? <Badge status="green">approuvée</Badge> : <Badge status="red">rejetée</Badge>),
            },
        ],
        []
    )
    const data = useMemo(
        () => [
            {
                NomEnseignant: "Hamel Lazher",
                Date: "20/10/2022",
                NomProduit: "câble VGA",
                qte: "01",
                Commentaires: "",
                Etat: true,
            },
            {
                NomEnseignant: "Graiet Mohammed",
                Date: "23/10/2022",
                NomProduit: "câble HDMI",
                qte: "01",
                Commentaires: "",
                Etat: true,
            },
            {
                NomEnseignant: "Abassi Imed",
                Date: "01/11/2022",
                NomProduit: "ramme de papiers",
                qte: "01",
                Commentaires: "",
                Etat: false,
            },
            {
                NomEnseignant: "Gzara Mariem",
                Date: "05/01/2023",
                NomProduit: "marquers",
                qte: "02",
                Commentaires: "je préfére que..",
                Etat: false,
            },
        ],
        []
    )
    return (
        <div style={{ margin: "120px" }}>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Consulter demandes</h1>
            <h2 className="mt-10 scroll-m-20 border-b border-b-slate-200 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 dark:border-b-slate-700">Ici, vous pouvez consulter a liste de toutes les demandes.</h2>
            <Table columns={columns} data={data} />
        </div>
    )
}
export default ConsulterDemandes
