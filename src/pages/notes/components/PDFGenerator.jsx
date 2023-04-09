import React, { useState, useEffect, useMemo } from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { uniqBy } from "lodash";
import TableNoteSemester from "./TableNoteSemester";
import PdfViewer from "./PdfViewer";

const PDFGenerator = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const chargeSections = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_API_URL + "/etudiant-moyenne/notes/17/1",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const json = await response.json();
        console.log("Data type:", typeof data);
        setData(json);
      } catch (error) {
        console.error(error);
      }
    };

    chargeSections();
  }, []);

  const columns = [
    { Header: "Unite ID", accessor: "code_unite" },
    { Header: "Unite Name", accessor: "unite_name" },
    { Header: "EC", accessor: "id_matiere" },
    { Header: "Matiere", accessor: "matiere" },
    { Header: "TP", accessor: "TP" },
    { Header: "ORAL", accessor: "ORAL" },
    { Header: "DS", accessor: "DS" },
    { Header: "EXAM", accessor: "EXAM" },
    { Header: "Moyenne", accessor: "moyenne" },
  ];

  const dataToRender = useMemo(() => uniqBy(data, "code_unite"), [data]);

  const renderPDF = () => {
    return (
      <Document>
        <Page size="A4">
          <View style={styles.header}>
            <Text style={styles.title}>Notes des étudiants</Text>
          </View>
          <View style={styles.body}>
            <TableNoteSemester columns={columns} data={dataToRender} />
          </View>
        </Page>
      </Document>
    );
  };

  return <PdfViewer pdf={renderPDF()} />;
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "lightblue",
    padding: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  body: {
    marginLeft: 20,
    marginRight: 20,
  },
});

export default PDFGenerator;