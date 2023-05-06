import React, { useEffect, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar"
import Tab from "../../components/Tab/Tab"
import "./ProfileInformation.css"
import { useMemo } from "react"
import Table from "@/components/shared/Table"

const ProfileInformation = () => {
    const [enseignantMatieres, setEnseignantMatieres] = useState([])
    useEffect(() => {
        const getMatieres = async () => {
            const response = await fetch(`http://localhost:8090/api/isimm/distributionCharge/enseignantMatiere/getEnseignantMatieresByEnseignantId?enseignantId=${1}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const responseJson = await response.json()
            console.log(responseJson)
            //calculate nombreHeures
            setEnseignantMatieres(responseJson)
        }
        getMatieres()
    }, [])
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
                Cours: "-",
                HourlyLoad: "29",
            },
            {
                Matter: "Projet Web/Mobile",
                TP: "-",
                TD: "30",
                Cours: "-",
                HourlyLoad: 30,
            },
            {
                Matter: "Total:",
                TP: "-",
                TD: "-",
                Cours: "-",
                HourlyLoad: "Application de la formule de charge",
            },
        ],
        []
    )
    return (
        <div className="form">
            <div className="col">
                <h1 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">Profile enseignant</h1>

                <div className="row">
                    <Avatar className="Avatar">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                    <Tab />
                </div>
                
                    <Table
                        columns={columns}
                        data={enseignantMatieres.map((ensMat) => {
                            return {
                                Matter: ensMat.matiere.name,
                                TP: ensMat.matiere.nbHTp,
                                TD: ensMat.matiere.nbHTd,
                                Cours: ensMat.matiere.nbHCr,
                                HourlyLoad: ensMat.matiere.nbHTp + ensMat.matiere.nbHTd + ensMat.matiere.nbHCr,
                            }
                        })}
                    />
                
            </div>
        </div>
    )
}

export default ProfileInformation
