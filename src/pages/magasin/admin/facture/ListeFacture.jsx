import BasePage from "@/components/magasin/BasePage";
import Table from "@/components/shared/Table";
import { Button } from "@/components/ui/Button";
import useFactures from "@/hooks/magasin/useFactures";

import { useMemo } from "react";
import { Link } from "react-router-dom";

export default function ListeFacture() {
    // const [demades, setDemades] = useState([{produits: [{id: 1, name: 'hello', quantite: 1}, {id: 2, name: 'p03223', quantite: 20}, ], date: '01/05/2023', status: 'fulfilled'}, {produits: [{id: 4, name: 'hello 2'}], quantite: 2, status: 'pending'}, {produit: {id: 3, name: 'hello 3'}, quantite: 4, status: 'canceled'}, {produit: {id: 3, name: 'hello 3'}, quantite: 4, status: 'verified'}]);
    const {factures, isLoading} = useFactures();

    const columns = useMemo(
        () => [
            {
                Header: "Libellé",
                accessor: "label",
            },
            // {
            //     Header: "Référence",
            //     accessor: "ref",
            // },
            {
                Header: "Date de création",
                accessor: "createdAt",
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
        <Table columns={columns} data={data} />
    </BasePage>
}