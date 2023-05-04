import DemandeBadge from "@/components/magasin/DemandeBadge";
import Table from "@/components/shared/Table";
import Badge from "@/components/ui/Badge";
import { useMemo, useState } from "react";

export default function ListeDemandes({role}) {
    const [demades, setDemades] = useState([{produits: [{id: 1, name: 'hello', quantite: 1}, {id: 2, name: 'p03223', quantite: 20}, ], date: '01/05/2023', status: 'fulfilled'}, {produits: [{id: 4, name: 'hello 2'}], quantite: 2, status: 'pending'}, {produit: {id: 3, name: 'hello 3'}, quantite: 4, status: 'canceled'}, {produit: {id: 3, name: 'hello 3'}, quantite: 4, status: 'verified'}]);

    const columns = useMemo(
        () => [
            {
                Header: "Date",
                accessor: "date",
            },
            {
                Header: "Etat",
                accessor: "status",
                Cell: ({ value }) => <DemandeBadge status={value} />,
            },
        ],
        []
    )

    const data = useMemo(
        () => [
            {
                date: "01/05/2023",
                status: "pending",
            },
            {
                date: "30/04/2023",
                status: 'fulfilled',
            },
        ],
        []
    )

    if(role === 'service') {

        return <Table columns={columns} data={data} />

    } else {

    }

    // show demandes in a table using react-table


    return <Table columns={columns} data={data} />
}