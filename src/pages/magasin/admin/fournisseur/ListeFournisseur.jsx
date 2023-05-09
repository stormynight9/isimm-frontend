import BasePage from "@/components/magasin/BasePage";
import Table from "@/components/shared/Table";
import { Button } from "@/components/ui/Button";
import useFournisseurs from "@/hooks/magasin/useFournisseurs";

import { useMemo } from "react";
import { Link } from "react-router-dom";

export default function ListeFournisseur() {
    // const [demades, setDemades] = useState([{produits: [{id: 1, name: 'hello', quantite: 1}, {id: 2, name: 'p03223', quantite: 20}, ], date: '01/05/2023', status: 'fulfilled'}, {produits: [{id: 4, name: 'hello 2'}], quantite: 2, status: 'pending'}, {produit: {id: 3, name: 'hello 3'}, quantite: 4, status: 'canceled'}, {produit: {id: 3, name: 'hello 3'}, quantite: 4, status: 'verified'}]);
    const {fournisseurs, isLoading} = useFournisseurs();

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
                accessor: "date",
            },
            {
                Header: "Action",
                accessor: "action",
                Cell: ({value}) => <Button variant='link'><Link to={`/magasin/magasinier/fournisseur/modifier/${value}`} >Voir</Link></Button>
            }
        ],
        []
    )

    const data = useMemo(
        () => {
            if(fournisseurs) return fournisseurs.map(fournisseur => ({...fournisseur, action: fournisseur.id}))
            return []
        },
        [fournisseurs]
    )

    if(isLoading) return <div>Loading...</div>;

    return <BasePage title="Fournisseurs">
        <Table columns={columns} data={data} />
    </BasePage>
}