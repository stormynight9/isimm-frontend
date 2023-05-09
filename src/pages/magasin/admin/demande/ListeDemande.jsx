import BasePage from "@/components/magasin/BasePage";
import DemandeBadge from "@/components/magasin/DemandeBadge";
import Table from "@/components/shared/Table";
import { Button } from "@/components/ui/Button";
import useDemandes from "@/hooks/magasin/useDemandes";
import { useMemo } from "react";
import { Link } from "react-router-dom";

export default function ListeDemandes({role, title}) {
    // const [demades, setDemades] = useState([{produits: [{id: 1, name: 'hello', quantite: 1}, {id: 2, name: 'p03223', quantite: 20}, ], date: '01/05/2023', status: 'fulfilled'}, {produits: [{id: 4, name: 'hello 2'}], quantite: 2, status: 'pending'}, {produit: {id: 3, name: 'hello 3'}, quantite: 4, status: 'canceled'}, {produit: {id: 3, name: 'hello 3'}, quantite: 4, status: 'verified'}]);
    const {demandes, isLoading} = useDemandes();
    console.log("demandes", demandes)

    const columns = useMemo(
        () => [
            {
                Header: "Date",
                accessor: "createdAt",
            },
            {
                Header: "Produits",
                accessor: "products",
            },
            {
                Header: "Demandeur",
                accessor: "demandeur",
            },
            {
                Header: "Détails",
                accessor: "description"
            },
            {
                Header: "Etat",
                accessor: "status",
                Cell: ({ value }) => <DemandeBadge status={value} />,
            },
            {
                Header: "Action",
                accessor: "action",
                // Cell: ({id}) => <><Button >V</Button><Button variant={"destructive"}>X</Button></>
                // Cell: ({id}) => <><Button >V</Button><Button variant={"destructive"}>X</Button></>
                // ,
            // {
            //     Header: "Action",
            //     accessor: "action",
                Cell: ({value}) => <Button variant='link' ><Link to={`/magasin/magasinier/demande/accepter/${value}`} >Voir</Link></Button>
            // }
            }
        ],  
        []
    )

    // const data = useMemo(
    //     () => {
    //         if(demandes) return demandes.map(demande => ({...demande, action: demande.id}))
    //         return []
    //     },
    //     [demandes]
    // )

    const data = useMemo(
        () => [
            {
                createdAt: '2022',
                demandeur: 2,
                description: "afdasdfasf",
                status: 'pending',
                id:2
            }
        ], []
    )

    if(isLoading) return <div>Loading...</div>;

    if(role === 'service') {

        return <BasePage title={title}>
            <Table columns={columns} data={data} />
        </BasePage>

    } else {

    }

    // show demandes in a table using react-table


    return <BasePage title={title}>
        <Table columns={columns} data={data} />
    </BasePage>
}