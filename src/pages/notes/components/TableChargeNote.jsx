import { useMemo } from "react"
import { InputNote } from "./InputNote"
import TablePagination from "./TablePagination"

const TableChargeNote = () => {
    const columns = useMemo(
        () => [
            {
                Header: "N°",
                accessor: "number",
            },
            {
                Header: "Identifiant",
                accessor: "cin",
            },
            {
                Header: "Nom",
                accessor: "name",
            },
            {
                Header: "Prénom",
                accessor: "firstname",
            },
            {
                Header: "OR_511",
                accessor: "noteOr",
                Cell: <InputNote></InputNote>,
            },
            {
                Header: "DS_511",
                accessor: "noteDs",
                Cell: <InputNote></InputNote>,
            },
            {
                Header: "EX_511",
                accessor: "noteEx",
                Cell: <InputNote></InputNote>,
            },
        ],
        []
    )

    const data = useMemo(
        () => [
            {
                number: 1,
                cin: "14029011",
                name: "Doe",
                firstname: "John",
                noteOr: "10",
                noteDs: "12",
                noteEx: "15",
            },
            {
                number: 2,
                cin: "15019012",
                name: "Smith",
                firstname: "Jane",
                noteOr: "14",
                noteDs: "16",
                noteEx: "18",
            },
            {
                number: 3,
                cin: "16029013",
                name: "Garcia",
                firstname: "Maria",
                noteOr: "8",
                noteDs: "11",
                noteEx: "13",
            },
            {
                number: 1,
                cin: "14029011",
                name: "Doe",
                firstname: "John",
                noteOr: "10",
                noteDs: "12",
                noteEx: "15",
            },
            {
                number: 2,
                cin: "15019012",
                name: "Smith",
                firstname: "Jane",
                noteOr: "14",
                noteDs: "16",
                noteEx: "18",
            },
            {
                number: 3,
                cin: "16029013",
                name: "Garcia",
                firstname: "Maria",
                noteOr: "8",
                noteDs: "11",
                noteEx: "13",
            },
            {
                number: 1,
                cin: "14029011",
                name: "Doe",
                firstname: "John",
                noteOr: "10",
                noteDs: "12",
                noteEx: "15",
            },
            {
                number: 2,
                cin: "15019012",
                name: "Smith",
                firstname: "Jane",
                noteOr: "14",
                noteDs: "16",
                noteEx: "18",
            },
            {
                number: 3,
                cin: "16029013",
                name: "Garcia",
                firstname: "Maria",
                noteOr: "8",
                noteDs: "11",
                noteEx: "13",
            },
            {
                number: 1,
                cin: "14029011",
                name: "Doe",
                firstname: "John",
                noteOr: "10",
                noteDs: "12",
                noteEx: "15",
            },
            {
                number: 2,
                cin: "15019012",
                name: "Smith",
                firstname: "Jane",
                noteOr: "14",
                noteDs: "16",
                noteEx: "18",
            },
            {
                number: 3,
                cin: "16029013",
                name: "Garcia",
                firstname: "Maria",
                noteOr: "8",
                noteDs: "11",
                noteEx: "13",
            },
            {
                number: 1,
                cin: "14029011",
                name: "Doe",
                firstname: "John",
                noteOr: "10",
                noteDs: "12",
                noteEx: "15",
            },
            {
                number: 2,
                cin: "15019012",
                name: "Smith",
                firstname: "Jane",
                noteOr: "14",
                noteDs: "16",
                noteEx: "18",
            },
            {
                number: 3,
                cin: "16029013",
                name: "Garcia",
                firstname: "Maria",
                noteOr: "8",
                noteDs: "11",
                noteEx: "13",
            },
            {
                number: 1,
                cin: "14029011",
                name: "Doe",
                firstname: "John",
                noteOr: "10",
                noteDs: "12",
                noteEx: "15",
            },
            {
                number: 2,
                cin: "15019012",
                name: "Smith",
                firstname: "Jane",
                noteOr: "14",
                noteDs: "16",
                noteEx: "18",
            },
            {
                number: 3,
                cin: "16029013",
                name: "Garcia",
                firstname: "Maria",
                noteOr: "8",
                noteDs: "11",
                noteEx: "13",
            },
        ],
        []
    )

    return <TablePagination columns={columns} data={data} />
}

export default TableChargeNote
