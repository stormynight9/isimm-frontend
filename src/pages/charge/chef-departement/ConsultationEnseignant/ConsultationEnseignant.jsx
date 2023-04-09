import Table from "@/components/shared/Table"
import React from "react"
import { useMemo } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar"
import "./ConsultationEnseignant.css"

const ConsultationEnseignant = () => {
    const columns = useMemo(
        () => [
            {
                Header: "Matière",
                accessor: "Matter",
            },
            {
                Header: "TP",
                accessor: "TP",
            },
            {
                Header: "Cours",
                accessor: "Cours",
            },
            {
                Header: "TD",
                accessor: "TD",
            },
            {
                Header: "Charge Horaire",
                accessor: "HourlyLoad",
            },
        ],
        []
    )
    
    const data = useMemo(
        () => [
            {
                Matter: "UML/OCL",
                TP: "-",
                TD: "29",
                Cours:"-",
                HourlyLoad: "29",
            },
            {
                Matter: "Projet Web/Mobile",
                TP: "-",
                TD: "30",
                Cours:"-",
                HourlyLoad: 30,
            },
            {
                Matter: "Total:",
                TP: "-",
                TD: "-",
                Cours:"-",
                HourlyLoad: "Application de la formule de charge",
            },
        ],
        []
    )

    return (
        <div className="Consultation_Enseignant">
            <h4>Enseignant X</h4>
            <div className="Enseignant_Avatar">
                <Avatar className="Avatar">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h5 className="Enseignant_Account">Account</h5>
            </div>
            <div className="Enseignant_Coordonnees_Border">
                <div className="Enseignant_Coordonnees">
                    <h6>Name</h6>
                    <p>Pietro Scielhh</p>
                    <h6>CIN</h6>
                    <p>11156754</p>
                    <h6>Rapport de charge horaire</h6>
                    <p>18h</p>
                </div>
            </div>
            <Table columns={columns} data={data} />
        </div>
    )
}

export default ConsultationEnseignant
