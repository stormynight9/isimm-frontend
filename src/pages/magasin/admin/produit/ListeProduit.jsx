import BasePage from "@/components/magasin/BasePage";
import Table from "@/components/shared/Table";
import { Button } from "@/components/ui/Button";
import useProducts from "@/hooks/magasin/useProducts";

import { useMemo } from "react";
import { Link } from "react-router-dom";

export default function ListeProduit() {
    // const [demades, setDemades] = useState([{produits: [{id: 1, name: 'hello', quantite: 1}, {id: 2, name: 'p03223', quantite: 20}, ], date: '01/05/2023', status: 'fulfilled'}, {produits: [{id: 4, name: 'hello 2'}], quantite: 2, status: 'pending'}, {produit: {id: 3, name: 'hello 3'}, quantite: 4, status: 'canceled'}, {produit: {id: 3, name: 'hello 3'}, quantite: 4, status: 'verified'}]);
    const {products, isLoading} = useProducts();

    const columns = useMemo(
        () => [
            {
                Header: "Référence",
                accessor: "ref",
            },
            {
                Header: "Nom",
                accessor: "label",
            },
            {
                Header: "Quantité",
                accessor: "quantity",
            },
            {
                Header: "Date de création",
                accessor: "createdAt",
            },
            {
                Header: "Action",
                accessor: "action",
                Cell: ({value}) => <Button variant="link"><Link to={`/magasin/magasinier/produit/modifier/${value}`}>Voir</Link></Button>
            }
        ],
        []
    )

    const data = useMemo(
        () => {
            if(products) return products.map(product => ({...product, action: product.id}))
            return []
        },
        [products]
    )

    if(isLoading) return <div>Loading...</div>;

    return <BasePage title="Produits">
        <Link to="/magasin/magasinier/produit/ajouter"><Button variant="primary">Ajouter</Button></Link>
        <Table columns={columns} data={data} />
    </BasePage>
}