import { useState, useEffect } from "react";
import { InputNote } from "./InputNote";
import TableNoteSemester from "./TableNoteSemester";
import { uniqBy } from "lodash";
import jsPDF from "jspdf";
import "jspdf-autotable";

const TableAfficheNote = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const chargeSections = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL + "/etudiant-moyenne/notes/17/1", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const json = await response.json();
        console.log("Data type:", typeof data);
        setData(json);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    chargeSections();
  }, []);

  const generatePDF = () => {
    const doc = new jsPDF();
    const tableColumn = [
      "Unite ID",
      "Unite Name",
      "EC",
      "Matiere",
      "TP",
      "ORAL",
      "DS",
      "EXAM",
      "Moyenne"
    ];
    const tableRows = data.map((item) => [
      item.code_unite,
      item.unite_name,
      item.id_matiere,
      item.matiere,
      item.TP,
      item.ORAL,
      item.DS,
      item.EXAM,
      item.moyenne
    ]);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows
    });

    doc.save("my_document.pdf");
  };

  const columns = [
    { Header: 'Unite ID', accessor: 'code_unite' },
    { Header: 'Unite Name', accessor: 'unite_name' },
    { Header: 'EC', accessor: 'id_matiere' },
    { Header: 'Matiere', accessor: 'matiere' },
    { Header: "TP", accessor: "TP" },  
    { Header: "ORAL", accessor: "ORAL" }, 
    { Header: "DS", accessor: "DS" }, 
    { Header: "EXAM", accessor: "EXAM" },  
    { Header: "Moyenne", accessor: "moyenne" }
  ];

  return (
    <div>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <>
          <TableNoteSemester columns={columns} data={data} />
          <button onClick={generatePDF}>Download PDF</button>
        </>
      )}
    </div>
  );
};

export default TableAfficheNote;
