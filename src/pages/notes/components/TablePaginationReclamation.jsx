import { useState } from "react"
import { useTable, usePagination } from "react-table"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/Dialog"
import { ChevronRightIcon, ChevronLeftIcon } from "lucide-react"
import { Button } from "@/components/ui/Button"

const TablePagination = ({ columns, data, dialogVisible }) => {
    const [pageIndex, setPageIndex] = useState(0) // initialize pageIndex state
    const [isdialogVisible, setDialogVisible] = useState(false)

    const { getTableProps, getTableBodyProps, headerGroups, page, nextPage, previousPage, canPreviousPage, canNextPage, pageCount, gotoPage, pageSize, setPageSize, prepareRow } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: 10 },
        },
        usePagination
    )

    return (
        <div>
            <table {...getTableProps()} className="w-full rounded-md shadow-md [&>tbody>*:nth-child(even)]:bg-[#f7f7f7]">
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()} className="bg-[#f7f7f7] pl-7 pr-7 pt-4 pb-4  text-center uppercase text-[#4F5459]">
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td {...cell.getCellProps()} className="whitespace-nowrap pl-2 pr-2 pt-4 pb-4 text-center text-sm">
                                            {cell.render("Cell")}
                                        </td>
                                    )
                                })}
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

            {/* details Dialog */}
            <Dialog open={isdialogVisible}>
                <DialogTrigger></DialogTrigger>
                <DialogContent className="sm:max-w-[425px] ">
                    <DialogHeader>
                        <DialogTitle>Créer Réclamation</DialogTitle>
                        <DialogDescription className="text-gray-500">(*) Champ Obligatoire !</DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button
                            type="reset"
                            onClick={() => {
                                setDialogVisible(false)
                            }}
                            className="mt-2 inline-flex h-10 items-center justify-center rounded-md border border-slate-200 bg-transparent py-2 px-4 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-700 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 sm:mt-0"
                        >
                            Annuler
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default TablePagination
