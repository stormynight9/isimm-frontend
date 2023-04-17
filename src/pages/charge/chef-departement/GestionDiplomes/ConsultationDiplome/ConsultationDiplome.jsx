import React, { useMemo, Fragment } from "react"
import Table from "@/pages/charge/components/DiplomeTable"
import "./ConsultationDiplome.css"

import SelectEnseignant from "../../../components/SelectEnseignant"
const ConsultationDiplome = (props) => {
    const columns = useMemo(
        () => [
            {
                Header: "UEEE",
                columns: [
                    {
                        Header: "UE",
                        accessor: "ue",
                    },
                    {
                        Header: "Unité",
                        accessor: "unite",
                    },
                ],
            },

            {
                Header: "EC",
                accessor: "ec",
            },
            {
                Header: "Eléments Constitutifs d'EU",
                columns: [
                    {
                        Header: "Module",
                        accessor: "module",
                    },
                ],
            },
            {
                Header: "Volume Horaire Semestriel",
                columns: [
                    {
                        Header: "TOT",
                        accessor: "tot",
                    },
                    {
                        Header: "CR",
                        accessor: "cr",
                    },
                    {
                        Header: "Enseignant CR",
                        accessor: "enseignant_cr",
                    },
                    {
                        Header: "TD",
                        accessor: "td",
                    },
                    {
                        Header: "Enseignant TD",
                        accessor: "enseignant_td",
                    },
                    {
                        Header: "TP",
                        accessor: "tp",
                    },
                    {
                        Header: "Enseignant TP",
                        accessor: "enseignant_tp",
                    },
                    {
                        Header: "CI",
                        accessor: "ci",
                    },
                    {
                        Header: "Enseignant CI",
                        accessor: "enseignant_ci",
                    },
                ],
            },
            {
                Header: "Régime d’examen",
            },
        ],
        []
    )
    const { semestre } = props
    return (
        <div className="Diplome_Table">
            <div className="Table">
                <Table
                    columns={columns}
                    data={semestre.unites.map((unite) => {
                        return {
                            ue: unite.codeUnite,
                            unite: unite.name,
                            modules: unite.matieres.map((matiere) => ({
                                ec: matiere.code,
                                module: matiere.name,
                                tot: matiere.nbHCr + matiere.nbHTd + matiere.nbHTp + matiere.nbHCri + matiere.nbHNp,
                                cr: matiere.nbHCr,
                                enseignant_cr: <SelectEnseignant matiereId={matiere.matiereId} type="CR"/>,
                                td: matiere.nbHTd,
                                enseignant_td: <SelectEnseignant matiereId={matiere.matiereId} type="TD"/>,
                                tp: matiere.nbHTp,
                                enseignant_tp: <SelectEnseignant matiereId={matiere.matiereId} type="TP"/>,
                                ci: matiere.nbHCri,
                                enseignant_ci: <SelectEnseignant matiereId={matiere.matiereId} type="CI"/>,
                                cc: matiere.regime.name === "RM" ? false : true,
                                rm: matiere.regime.name === "RM" ? true : false,
                            })),
                        }
                    })}
                />
            </div>
        </div>
    )
}

export default ConsultationDiplome
