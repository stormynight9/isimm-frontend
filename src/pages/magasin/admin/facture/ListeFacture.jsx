import BasePage from "@/components/magasin/BasePage";
import Table from "@/components/shared/Table";
import { Button } from "@/components/ui/Button";
import useFactures from "@/hooks/magasin/useFactures";

import { useMemo } from "react";
import { Link } from "react-router-dom";

export default function ListeFacture() {
    const {factures, isLoading} = useFactures();
    const columns = useMemo(
        () => [
            {
                Header: "Date de création",
                accessor: "date",
            },
            {
                Header: "Fournisseur",
                accessor: "fournisseur",
            },
            {
                Header: "Adresse",
                accessor: "address",
            },
            {
                Header: "Nombre des produits",
                accessor: "nproducts",
            },
            {
                Header: "Quantité totale",
                accessor: "nitems",
            },
            {
                Header: "Total HT",
                accessor: "totalht",
            },
            {
                Header: "TVA",
                accessor: "totaltva"
            },
            {
                Header: "Total TTC",
                accessor: "total"
            },
            {
                Header: "Action",
                accessor: "action",
                Cell: ({value}) => <Button variant='link'><Link to={`/magasin/magasinier/facture/visit/${value}`} >Voir</Link></Button>
            }
        ],
        []
    )

    const data = useMemo(
        () => {
            if(factures) return factures.map(facture => ({...facture, action: facture.id}))
            return []
        },
        [factures]
    )

    if(isLoading) return <div>Loading...</div>;

    return <BasePage title="Factures">
        <Link to="/magasin/magasinier/facture/ajouter"><Button variant="primary">Ajouter</Button></Link>
        <Table columns={columns} data={data} />
    </BasePage>
}