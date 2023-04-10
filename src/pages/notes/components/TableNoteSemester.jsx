import { useState } from "react"
import { useTable, usePagination } from "react-table"
import { ChevronRightIcon, ChevronLeftIcon ,NutIcon, AlertOctagonIcon} from "lucide-react"
import React from "react"
import { Switch } from "@/components/ui/Switch"
import { Toast } from "@/components/ui/Toast"
import { toast } from "@/hooks/useToast"
const TablePagination = ({ columns, data }) => {
    const [pageIndex, setPageIndex] = useState(0) // initialize pageIndex state

    const [isColorEnabled, setIsColorEnabled] = useState(true); // initialize isColorEnabled state

    // Define a function to calculate the cell color based on the note
    const calculateNoteColor = (note, rowColor) => {
        if (isNaN(note)) {
          return rowColor;
        }
        if (note <= 0) {
          return "#8B0000"; // dark bloody red
        } else if (note <= 7) {
          return "#FF0000"; // red
        }else if (note <= 12) {
            return "#FF5500"; // darker orange with a bit of red
          
        } else if (note <= 17) {
          return "#008000"; // green
        } else if (note <= 20) {
            return "#006400"; // brighter gold yellow with animation
        }
        return rowColor;
      };

       
  

    // Add a new function to get the rowspan for the 'Unite' column
    const getUniteRowSpan = (rowIndex) => {
      const row = data[rowIndex];
      let uniteCount = 1;
      for (let i = rowIndex + 1; i < data.length; i++) {
        if (
          data[i].unite_id !== row.unite_id ||
          data[i].unite_name !== row.unite_name
        ) {
          break;
        }
        uniteCount++;
      }
      return uniteCount;
    };
  
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      page,
      nextPage,
      previousPage,
      canPreviousPage,
      canNextPage,
      pageCount,
      gotoPage,
      pageSize,
      setPageSize,
      prepareRow,
    } = useTable(
      {
        columns,
        data,
        initialState: { pageIndex: 0, pageSize: 50 },
      },
      usePagination
    );
  
    const handleToggleColor = () => {
        setIsColorEnabled(!isColorEnabled);
        if (isColorEnabled) {
          toast({
            title: "Color is now disabled",
            description: "You will no longer see any color changes",
            status: "success",
            duration: 1000,
            isClosable: true,
          });
        } else {
          toast({
            title: "Color is now enabled",
            description: "You will now see color changes",
            status: "success",
            duration: 1000,
            isClosable: true,
          });
        }
      };
  
    return (
      <div className="p-4 ">
       
        <div className="flex justify-end mb-4"> 
        
        <Switch onClick={() => {
  handleToggleColor();
  
}}>
</Switch>

        </div>
        <table
  {...getTableProps()}
  className="w-full rounded-md shadow-md my-table"
>
  <thead>
    {headerGroups.map((headerGroup) => (
      <tr {...headerGroup.getHeaderGroupProps()}>
        {headerGroup.headers.map((column) => (
          <th
            {...column.getHeaderProps()}
            
            className="bg-[#f7f7f7] p-4 text-center uppercase text-[#4F5459] border-b-violet-50"
  style={{
    boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.1) //#endregion"
  }}
          >
           
         
            {column.render("Header")}
          </th>
        ))}
      </tr>
    ))}
  </thead>
  <tbody {...getTableBodyProps()}>
  {page.map((row, i) => {
    prepareRow(row);
    const uniteRowSpan = getUniteRowSpan(i);

    // Determine the color for this row based on its index within the group
    const groupIndex = data.findIndex(
      (item) =>
        item.unite_id === row.original.unite_id &&
        item.unite_name === row.original.unite_name
    );

    // Determine the number of cells spanned by the first two columns in this group
    const cellsInGroup = row.cells.slice(0, 2);
    const cellsSpanned = cellsInGroup.reduce(
      (sum, cell) =>
        sum + (cell.column.isSpanned ? cell.column.colSpan : 1),
      0
    );

    // Determine the group color index based on the maximum of uniteRowSpan and cellsSpanned
    const colors = ["#FFFFFF", "#F7F7F7"]; // define two colors
    const rowColor = colors[row.index % colors.length]; // use the index of the row to select a color

    return (
      <tr {...row.getRowProps()}>
        {i === groupIndex && (
          <>
            <td
              {...row.cells[0].getCellProps()}
              className="p-4"
              rowSpan={uniteRowSpan}
              style={{
                textAlign: "center",
                borderRight: "3px solid #94A3B8",
                borderBottom: "2.5px solid #94A3B8",
                borderLeft: "3px solid #94A3B8",
                borderTop: (row.index === 0 ) ? "3px solid #94A3B8" : "2.5px solid #94A3B8",
                backgroundColor: rowColor,
                boxShadow: "0px 2px 2px rgba(0, 1, 0, 0.2)" // Added drop shadow
              }}
            >
              {row.cells[0].render("Cell")}
            </td>
            <td
              {...row.cells[1].getCellProps()}
              className="p-4"
              rowSpan={uniteRowSpan}
              style={{
                textAlign: "center",
                borderBottom: "2.5px solid #94A3B8",
                borderTop: (row.index === 0 ) ? "3px solid #94A3B8" : "2.5px solid #94A3B8",
                backgroundColor: rowColor,
              }}
            >
              {row.cells[1].render("Cell")}
            </td>
          </>
        )}
        {row.cells.slice(2).map((cell, index) => {
          let content = cell.value;
          let cellStyle = {
            backgroundColor:
             
                 rowColor,
            opacity: index >= 2 && isColorEnabled ? 0.8 : 1,
            textAlign: "center",
            borderBottom:   "2.5px solid #94A3B8",
            borderTop: (cell.rowSpan > 1 && cell.rowSpanIndex === 0) || (row.index === 0 && index === 0) ? "3px solid #94A3B8" : "2.5px solid #94A3B8",



            borderLeft: index === 0 ? "3px solid #94A3B8" : undefined,
            borderRight:
              index === row.cells.length - 3 ? "3px solid #94A3B8" : undefined,
              position: "relative", // add this style for absolute position of the dot
  };

  if (index === 6 && isColorEnabled) { // apply color to moyenne cell icon
    const iconColor = calculateNoteColor(cell.value);
    content = (
        <span style={{ position: "relative", display: "inline-block" }}>
            {cell.value}
            <div style={{
                position: "absolute",
                top: "-8px",
                right: "-10px",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                border: `2px solid ${iconColor}`,
                backgroundColor: "#fff",
                zIndex: 1,
            }}></div>
            <AlertOctagonIcon
                className="alert-icon"
                style={{
                    position: "absolute",
                    top: "-9px",
                    right: "-11px",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    border: `2px solid ${iconColor}`,
                    zIndex: 0,
                }}
            ></AlertOctagonIcon>
        </span>
    );
}

          if (cell.value === "NA") {
            content = "/";
            
          } else if (cell.value === "Null" || cell.value === "null" || cell.value === "NULL") 
          content = (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              -
            </div>
          );
                    
                    return (
                    <td
                    {...cell.getCellProps()}
                    className="p-4"
                    style={cellStyle}
                    >
                    {content}
                    </td>
                    );
                    })}
                    
                      </tr>
                    );
                    })}
                    </tbody>

</table>

   <div className="flex justify-between bg-gray-100 p-4 mx-auto" style={{ margin: '0 auto', maxWidth: '200px' }}>
  <div className="flex items-center">
    <button
      className={`rounded items-center px-2 py-1 ${
        canPreviousPage
          ? "cursor-pointer bg-gray-800 text-white hover:bg-gray-700"
          : "cursor-not-allowed bg-gray-300 text-gray-500"
      }`}
      onClick={() => {
        previousPage();
        setPageIndex((pageIndex) => pageIndex - 1);
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
      className={`rounded px-2 py-1 ${
        canNextPage
          ? "cursor-pointer bg-gray-800 text-white hover:bg-gray-700"
          : "cursor-not-allowed bg-gray-300 text-gray-500"
      }`}
      onClick={() => {
        nextPage();
        setPageIndex((pageIndex) =>
          pageIndex < pageCount - 1 ? pageIndex + 1 : pageCount - 1
        );
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

export default TablePagination