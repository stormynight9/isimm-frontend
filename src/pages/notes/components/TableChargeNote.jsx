import { useMemo } from "react"
import { InputNote } from "./InputNot"
import TablePagination from "./TablePagination"
import PropTypes from "prop-types"
const TableChargeNote = ({ listData }) => {
    const columns = useMemo(
        () => [
            {
                Header: "N°",
                accessor: (row, index) => index + 1,
            },
            {
                Header: "Identifiant",
                accessor: "cinEtudiant",
            },
            {
                Header: "Nom",
                accessor: "nomEtudiant",
            },
            {
                Header: "Prénom",
                accessor: "prenomEtudiant",
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

    return <TablePagination columns={columns} data={listData} />
}
TableChargeNote.propTypes = {
    listData: PropTypes.isRequired,
}
export default TableChargeNote
