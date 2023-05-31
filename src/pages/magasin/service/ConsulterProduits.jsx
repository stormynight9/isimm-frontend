import Table from "@/components/shared/Table"
import { useMemo } from "react"

const ConsulterProduits = () => {
    const columns = useMemo(
        () => [
            {
                Header: "Nom de produit",
                accessor: "NomProduit",
            },
            {
                Header: "Quantité disponible",
                accessor: "qteDisp",
            },
            {
                Header: "Nom Fournisseurs",
                accessor: "NomF",
            },
            {
                Header: "Détails",
                accessor: "détails",
            },
        ],
        []
    )
    const data = useMemo(
        () => [
            {
                NomProduit: "câble HDMI",
                qteDisp: "20",
                NomF: "InfoTek",
                détails: "Modifier",
            },
            {
                NomProduit: "câble VGA",
                qteDisp: "10",
                NomF: "InfoTek",
                détails: "Modifier",
            },
            {
                NomProduit: "ramme papiers",
                qteDisp: "10",
                NomF: "agrafe",
                détails: "Modifier",
            },
            {
                NomProduit: "Data show",
                qteDisp: "05",
                NomF: "Tunisia net",
                détails: "Modifier",
            },
        ],
        []
    )
    return (
        <div style={{ margin: "120px" }}>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Consulter produits</h1>
            <h2 className="mt-10 scroll-m-20 border-b border-b-slate-200 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 dark:border-b-slate-700">Ici, vous pouvez consulter a liste de touts les produits.</h2>
            <Table columns={columns} data={data} />
        </div>
    )
}
export default ConsulterProduits
