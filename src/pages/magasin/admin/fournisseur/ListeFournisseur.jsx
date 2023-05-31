import BasePage from "@/components/magasin/BasePage";
import Table from "@/components/shared/Table";
import { Button } from "@/components/ui/Button";
import useFournisseurs from "@/hooks/magasin/useFournisseurs";

import { useMemo } from "react";
import { Link } from "react-router-dom";

export default function ListeFournisseur() {
    const {fournisseurs, isLoading} = useFournisseurs();

    const columns = useMemo(
        () => [
            {
                Header: "Libellé",
                accessor: "label",
            },
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
        <Link to="/magasin/magasinier/fournisseur/ajouter"><Button variant="primary">Ajouter</Button></Link>
        <Table columns={columns} data={data} />
    </BasePage>
}