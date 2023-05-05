import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar"
import Tab from "../../components/Tab/Tab"
import "./ProfileInformation.css"
import { useMemo } from "react"
import Table from "@/components/shared/Table"

const ProfileInformation = () => {
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
                <div className="row">
                    <Table columns={columns} data={data} />
        
                </div>
            </div>
        </div>
    )
}

export default ProfileInformation
