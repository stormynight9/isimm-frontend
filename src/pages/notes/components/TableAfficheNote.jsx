import { useState, useEffect } from "react";
import TableNoteSemester from "./TableNoteSemester";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { Button } from "@/components/ui/Button"

const TableAfficheNote = (props) => {
  const { sem , idEtd  } = props;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const chargeSections = async () => {
      try {
        if (!sem) {
          return;
        }
        
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/isimm/chargeNote/EtudiantMoyenne/notes/${idEtd}/${sem}`, {
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
  }, [sem]);
  

  const generatePDF = () => {
    const doc = new jsPDF();
    const tableColumn = [
      "UE",
      "Unité",
      "EC",
      "Module",
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
    { Header: 'UE', accessor: 'code_unite' },
    { Header: 'Unité', accessor: 'unite_name' },
    { Header: 'EC', accessor: 'id_matiere' },
    { Header: 'Module', accessor: 'matiere' },
    { Header: "TP", accessor: "TP" },  
    { Header: "ORAL", accessor: "ORAL" }, 
    { Header: "DS", accessor: "DS" }, 
    { Header: "EXAM", accessor: "EXAM" },  
    { Header: "Moyenne", accessor: "moyenne" }
  ];

  return (
  <div >
    {loading ? (
      <p>Loading data...</p>
    ) : (
      <>
        {data.length === 0 ? (
          <p className=" flex items-center justify-center h-screen text-lg text-center">There is nothing to display</p>
        ) : (
          <>
            <TableNoteSemester columns={columns} data={data} />
            <Button className="mt-4" onClick={generatePDF}>Download PDF</Button>
          </>
        )}
      </>
    )}
  </div>
);
};

export default TableAfficheNote;
