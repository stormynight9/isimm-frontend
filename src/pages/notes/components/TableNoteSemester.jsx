import { useState } from "react"
import { useTable, usePagination } from "react-table"
import { ChevronRightIcon, ChevronLeftIcon } from "lucide-react"
import React from "react"

const TableNoteSemester = ({ columns, data }) => {
    const [pageIndex, setPageIndex] = useState(0) // initialize pageIndex state

    // Add a new function to get the rowspan for the 'Unite' column
    // Define a function to calculate the cell color based on the note
    const calculateNoteColor = (note) => {
        let color = "rgba(bg-[#f7f7f7])"

        return color
    }

    // Add a new function to get the rowspan for the 'Unite' column
    const getUniteRowSpan = (rowIndex) => {
        const row = data[rowIndex]
        let uniteCount = 1
        for (let i = rowIndex + 1; i < data.length; i++) {
            if (data[i].unite_id !== row.unite_id || data[i].unite_name !== row.unite_name) {
                break
            }
            uniteCount++
        }
        return uniteCount
    }

    const { getTableProps, getTableBodyProps, headerGroups, page, nextPage, previousPage, canPreviousPage, canNextPage, pageCount, gotoPage, pageSize, setPageSize, prepareRow } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: 10 },
        },
        usePagination
    )

    return (
        <div className="p-4 ">
            <table {...getTableProps()} className="my-table w-full rounded-md shadow-md [&>tbody>*:nth-child(even)]:bg-[#f7f7f7]">
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()} className="border border-black bg-[#f7f7f7] p-[10px] text-left uppercase text-[#4F5459]">
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row)
                        const uniteRowSpan = getUniteRowSpan(i)
                        return (
                            <tr {...row.getRowProps()}>
                                {i === data.findIndex((item) => item.unite_id === row.original.unite_id && item.unite_name === row.original.unite_name) && (
                                    <>
                                        <td {...row.cells[0].getCellProps()} className="p-4" rowSpan={uniteRowSpan}>
                                            {row.cells[0].render("Cell")}
                                        </td>
                                        <td {...row.cells[1].getCellProps()} className="p-4" rowSpan={uniteRowSpan}>
                                            {row.cells[1].render("Cell")}
                                        </td>
                                    </>
                                )}
                                {row.cells.slice(2).map((cell, index) => (
                                    <td
                                        {...cell.getCellProps()}
                                        className="border border-black p-[10px]"
                                        style={{
                                            backgroundColor: index >= 2 ? calculateNoteColor(cell.value) : "#EFEFEF",
                                            opacity: index >= 2 ? 0.8 : 1,
                                        }}
                                    >
                                        {cell.render("Cell")}
                                    </td>
                                ))}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="flex justify-between bg-gray-100 p-4">
                <div className="flex items-center">
                    <span className="mr-2 font-medium">Rows per page: </span>
                    <select
                        className="rounded border px-2 py-1"
                        value={pageSize}
                        onChange={(e) => {
                            setPageSize(Number(e.target.value))
                            gotoPage(0)
                        }}
                    >
                        {[10, 20, 30, 40, 50].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                {pageSize}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex items-center">
                    <button
                        className={`rounded px-2 py-1 ${canPreviousPage ? "cursor-pointer bg-gray-800 text-white hover:bg-gray-700" : "cursor-not-allowed bg-gray-300 text-gray-500"}`}
                        onClick={() => {
                            previousPage()
                            setPageIndex(pageIndex - 1)
                        }}
                        disabled={!canPreviousPage}
                    >
                        <ChevronLeftIcon className="h-4 w-4"></ChevronLeftIcon>
                    </button>

                    <span className="mx-4">
                        <span>{`${pageIndex + 1}`}</span>
                        <span className="text-gray-400">{` / ${pageCount}`}</span>
                    </span>

                    <button
                        className={`rounded px-2 py-1 ${canNextPage ? "cursor-pointer bg-gray-800 text-white hover:bg-gray-700" : "cursor-not-allowed bg-gray-300 text-gray-500"}`}
                        onClick={() => {
                            nextPage()
                            setPageIndex(pageIndex + 1)
                        }}
                        disabled={!canNextPage}
                    >
                        <ChevronRightIcon className="h-4 w-4"></ChevronRightIcon>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TableNoteSemester
