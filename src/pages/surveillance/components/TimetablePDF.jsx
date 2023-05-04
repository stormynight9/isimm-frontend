import React from "react"
import { Page, Text, View, Document, StyleSheet, Image } from "@react-pdf/renderer"
import logo from "../assets/isimm.png"
const TimetablePDF = ({ timetable }) => {
    const sessionColors = ["#19A7CE", "#617A55", "#FF6969", "#F7D060"]

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.topSection}>
                    <View style={styles.topLeft}>
                        <Text style={styles.universityText}>Republique Tunisienne Ministere de l'enseignement superieur & de la recherche scientifique</Text>
                        <Text style={styles.universityText}>Université de Monastir</Text>
                        <Text style={styles.universityText}>Institut superieur d'informatique et de Mathematiques</Text>
                    </View>
                    <Image style={styles.logo} src={logo} />
                </View>
                <View style={styles.headerSection}>
                    <View style={styles.title}>
                        <Text>Année universitaire 2022/2023</Text>
                    </View>
                    <View style={styles.title}>
                        <Text>Calendrier de devoir surveillés du 2eme Semestre 2022/2023 (du 13 au 18 Mars 2023)</Text>
                    </View>
                </View>

                <View>
                    <View style={[styles.title, { marginBottom: 12 }]}>
                        <Text style={{ fontWeight: "bold" }}>Mr Lazhar El Hamel</Text>
                    </View>
                    {/* Table header */}
                    <View style={{ flexDirection: "row", backgroundColor: "#eaeaea" }}>
                        <View style={[styles.headerCell, { flexBasis: "20%" }]}>
                            <Text>Date</Text>
                        </View>
                        <View style={[styles.headerCell, { flexBasis: "15%" }]}>
                            <Text>Seance N*</Text>
                        </View>
                        <View style={[styles.headerCell, { flexBasis: "10%" }]}>
                            <Text>Durée</Text>
                        </View>
                        <View style={[styles.headerCell, { flexBasis: "10%" }]}>
                            <Text>De</Text>
                        </View>
                        <View style={[styles.headerCell, { flexBasis: "10%" }]}>
                            <Text>A</Text>
                        </View>
                        <View style={[styles.headerCell, { flexBasis: "25%" }]}>
                            <Text>Epreuve</Text>
                        </View>
                    </View>
                    {/* Table body */}
                    {timetable.map(
                        (element, index) =>
                            element.state && (
                                <View key={element.id} style={{ flexDirection: "row", backgroundColor: sessionColors[element.sessionNumber - 1] }}>
                                    <View style={[styles.cell, { flexBasis: "20%" }]}>
                                        <Text>{element.date}</Text>
                                    </View>
                                    <View style={[styles.cell, { flexBasis: "15%" }]}>
                                        <Text>{`Seance N ${element.sessionNumber}`}</Text>
                                    </View>
                                    <View style={[styles.cell, { flexBasis: "10%" }]}>
                                        <Text>01h00</Text>
                                    </View>
                                    <View style={[styles.cell, { flexBasis: "10%" }]}>
                                        <Text>{element.start}</Text>
                                    </View>
                                    <View style={[styles.cell, { flexBasis: "10%" }]}>
                                        <Text>{element.end}</Text>
                                    </View>
                                    <View style={[styles.cell, { flexBasis: "25%" }]}>
                                        <Text>{element.subject}</Text>
                                    </View>
                                </View>
                            )
                    )}
                </View>
            </Page>
        </Document>
    )
}

const styles = StyleSheet.create({
    page: {
        padding: 20,
    },
    topSection: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        marginBottom: "50px",
        alignItems: "center",
    },
    universityText: {
        fontSize: 8,
        fontStyle: "italic",
    },
    topLeft: {
        width: "150px",
        textAlign: "center",
    },
    logo: {
        width: 70,
        height: 70,
        marginBottom: 10,
    },
    headerSection: {
        marginBottom: 20,
    },
    title: {
        fontSize: 12,
        textAlign: "center",
    },
    headerCell: {
        fontSize: 12,
        fontWeight: "bold",
        padding: 10,
        backgroundColor: "#eaeaea",
        textAlign: "center",
    },
    cell: {
        fontSize: 10,
        padding: 10,
        textAlign: "center",
    },
})

export default TimetablePDF
