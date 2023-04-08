import { useMemo } from "react"
import { InputNote } from "./InputNote"
import TablePagination from "./TablePagination"
import PropTypes from "prop-types"
const TableChargeTp = ({ listData, code }) => {
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
                Header: `TP_${code}`,
                accessor: (row) => <InputNote value={row.noteTp} />,
            },
        ],
        []
    )

    return <TablePagination columns={columns} data={listData} />
}
TableChargeTp.propTypes = {
    listData: PropTypes.isRequired,
}
export default TableChargeTp
