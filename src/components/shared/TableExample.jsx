import { useMemo } from "react"
import Badge from "../ui/Badge"
import Table from "./Table"

const TableExample = () => {
    const columns = useMemo(
        () => [
            {
                Header: "Nom",
                accessor: "name",
            },
            {
                Header: "Prénom",
                accessor: "firstname",
            },
            {
                Header: "Date de naissance",
                accessor: "birthdate",
            },
            {
                Header: "Décédé",
                accessor: "isDead",
                Cell: ({ value }) => (value ? <Badge status="red">Oui</Badge> : <Badge status="green">Non</Badge>),
            },
        ],
        []
    )

    const data = useMemo(
        () => [
            {
                name: "Doe",
                firstname: "John",
                birthdate: "01/01/2000",
                isDead: true,
            },
            {
                name: "Doe",
                firstname: "Jane",
                birthdate: "01/01/2000",
                isDead: false,
            },
        ],
        []
    )

    return <Table columns={columns} data={data} />
}

export default TableExample
