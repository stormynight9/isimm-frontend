import Table from "@/components/shared/Table"
import { useState, useEffect } from "react"
import { useMemo } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar"
import { useSelector } from "react-redux"
import ConsultationEnseignantStyles from "./ConsultationEnseignant.module.css"

const ConsultationEnseignant = () => {
    const { enseignantId, cin, nom, prenom, nombreHeures } = useSelector((state) => state.ConsultingEnseignant)
    const [enseignantMatieres, setEnseignantMatieres] = useState([])
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

    useEffect(() => {
        const getMatieres = async () => {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/isimm/distributionCharge/enseignantMatiere/getEnseignantMatieresByEnseignantId?enseignantId=${enseignantId}`, {
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

    return (
        <div className={ConsultationEnseignantStyles.Consultation_Enseignant_Container}>
            <div className={ConsultationEnseignantStyles.Consultation_Enseignant_Tiltle}>
                <h4>Enseignant X</h4>
            </div>
            <div className={ConsultationEnseignantStyles.Enseignant_Avatar}>
                <Avatar className={ConsultationEnseignantStyles.AvatarConsulterEnseignant}>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h5 className={ConsultationEnseignantStyles.Enseignant_Account}>Account</h5>
            </div>
            <div className={ConsultationEnseignantStyles.Enseignant_CoordonneesContainer}>
                <div className={ConsultationEnseignantStyles.Enseignant_Coordonnees}>
                    <h6>Name</h6>
                    <p>
                        {nom} {prenom}
                    </p>
                    <h6>CIN</h6>
                    <p>{cin}</p>
                    <h6>Rapport de charge horaire</h6>
                    <p>{nombreHeures}</p>
                </div>
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
    )
}

export default ConsultationEnseignant
