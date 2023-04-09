import { useTable } from "react-table"
import Badge from "@/components/ui/Badge"
const Table = ({ columns, data }) => {
    const tableInstance = useTable({ columns, data })

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance
    return (
        <div className="p-4 ">
            <table {...getTableProps()} className="w-full rounded-md shadow-md [&>tbody>*:nth-child(even)]:bg-[#f7f7f7]">
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()} className="bg-[#f7f7f7] p-4 text-left uppercase text-[#4F5459]">
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row)
                        return (
                            <>
                                {row.original.modules.map((module, index) => {
                                    return (
                                        <tr {...row.getRowProps()} key={index}>
                                            {index === 0 && <td rowSpan={row.original.modules.length}>{row.original.ue}</td>}
                                            {index === 0 && <td rowSpan={row.original.modules.length}>{row.original.unite}</td>}
                                            {Object.values(module).map((cell, cellIndex) => {
                                                return cellIndex !== 11 && cellIndex !== 12 ? (
                                                    <td className="p-4" key={cellIndex}>
                                                        {cell}
                                                    </td>
                                                ) : cellIndex === 11 && cell ? (
                                                    <td className="p-4" key={cellIndex}>
                                                        <Badge status="green">CC</Badge>
                                                    </td>
                                                ) : (
                                                    cellIndex === 12 &&
                                                    cell && (
                                                        <td className="p-4" key={cellIndex}>
                                                            <Badge status="green">RM</Badge>
                                                        </td>
                                                    )
                                                )
                                            })}
                                        </tr>
                                    )
                                })}
                            </>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table
