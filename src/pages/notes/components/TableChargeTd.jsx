import { useMemo } from "react"
import { InputNote } from "./InputNote"
import TablePagination from "./TablePagination"
import PropTypes from "prop-types"
const TableChargeTd = ({ listData, code }) => {
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
                Header: `ORAL_${code}`,
                accessor: (row) => <InputNote value={row.noteOral} />,
            },
        ],
        []
    )

    return <TablePagination columns={columns} data={listData} />
}
TableChargeTd.propTypes = {
    listData: PropTypes.isRequired,
}
export default TableChargeTd
