import BasePage from "@/components/magasin/BasePage"
import DemandeBadge from "@/components/magasin/DemandeBadge"
import Table from "@/components/shared/Table"
import { Button } from "@/components/ui/Button"
import useDemandes from "@/hooks/magasin/useDemandes"
import { useMemo } from "react"
import { Link } from "react-router-dom"

export default function ListeDemandes({ role, title, service, ajouter, type }) {
    const { demandes, isLoading } = useDemandes(type)

    let prefix =
        role === "magasin"
            ? "/magasin/magasinier/demande"
            : role === "service"
            ? "/magasin/service/demande"
            : "/magasin/employer/demande"
    let accepterPrefix =
        role === "service" && service ? prefix + "/accepter-notre" : prefix + "/accepter"
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
                accessor: "description",
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
                Cell: ({ value }) => (
                    <Button variant="link">
                        <Link to={`${accepterPrefix}/${value}`}>Voir</Link>
                    </Button>
                ),
                // }
            },
        ],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    )

    const data = useMemo(
        () => {
            if (demandes)
                return demandes.map((demande) => ({
                    ...demande,
                    action: demande.id,
                    demandeur: type,
                    products: `Produits: ${
                        demande.records.length
                    }, Quantité: ${demande.records.reduce(
                        (acc, record) => acc + record.quantity,
                        0
                    )}`,
                }))
            return []
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [demandes]
    )

    // const data = useMemo(
    //     () => [
    //         {
    //             createdAt: '2022',
    //             demandeur: 2,
    //             description: "afdasdfasf",
    //             status: 'pending',
    //             id:2
    //         }
    //     ], []
    // )

    if (isLoading || demandes === null) return <div>Loading...</div>

    if (role === "service") {
        return (
            <BasePage title={title}>
                {ajouter && (
                    <Link to={`${prefix}/ajouter`}>
                        <Button variant="primary">Ajouter</Button>
                    </Link>
                )}
                <Table columns={columns} data={data} />
            </BasePage>
        )
    } else {
    }

    // show demandes in a table using react-table

    return (
        <BasePage title={title}>
            {ajouter && (
                <Link to={`${prefix}/ajouter`}>
                    <Button variant="primary">Ajouter</Button>
                </Link>
            )}
            <Table columns={columns} data={data} />
        </BasePage>
    )
}
