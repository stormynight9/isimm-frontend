import React, { useMemo, Fragment } from "react"
import Table from "@/pages/charge/components/DiplomeTable"
import "./GestionDiplomes.css"
import { ChevronRight } from "lucide-react"
import SelectEnseignant from "../../components/SelectEnseignant"
import { useGetSemestreQuery } from "@/redux/features/charge/DiplomeApiSlice"
const GestionDiplomes = () => {
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

    const { data, error, isLoading } = useGetSemestreQuery()

    return (
        <Fragment>
            {isLoading ? (
                <h1>Loading....</h1>
            ) : (
                <div className="Diplome_Table">
                    <div className="DiplomeTitle">
                        <p>Diplome ING_INF </p> <ChevronRight /> <p>Semestre 5</p>
                    </div>
                    <div className="Table">
                        <Table
                            columns={columns}
                            data={data[0].unites.map((unite) => {
                                return {
                                    ue: unite.codeUnite,
                                    unite: unite.name,
                                    modules: unite.matieres.map((matiere) => ({
                                        ec: matiere.code,
                                        module: matiere.name,
                                        tot: matiere.nbHCr + matiere.nbHTd + matiere.nbHTp + matiere.nbHCri + matiere.nbHNp,
                                        cr: matiere.nbHCr,
                                        enseignant_cr: <SelectEnseignant />,
                                        td: matiere.nbHTd,
                                        enseignant_td: <SelectEnseignant />,
                                        tp: matiere.nbHTp,
                                        enseignant_tp: <SelectEnseignant />,
                                        ci: matiere.nbHCri,
                                        enseignant_ci: <SelectEnseignant />,
                                        cc: matiere.regime.name === "RM" ? false : true,
                                        rm: matiere.regime.name === "RM" ? true : false,
                                    })),
                                }
                            })}
                        />
                    </div>
                </div>
            )}
        </Fragment>
    )
}

export default GestionDiplomes
