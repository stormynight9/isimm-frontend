import React, { Fragment } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select"
import { useGetMatiereQuery } from "@/redux/features/charge/MatiereApiSlice"
const SelectEnseignant = ({ matiereId, type }) => {
    const { data, isLoading } = useGetMatiereQuery(matiereId)
    return (
        <Fragment>
            {isLoading ? (
                <h1>...Loading</h1>
            ) : (
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Enseignat" />
                    </SelectTrigger>
                    <SelectContent>
                        {data.enseignantVoeux.map((enseignantV, index) => {
                            return (
                                enseignantV.type == type && (
                                    <SelectItem key={index} value={enseignantV.enseignantVoeuxId}>
                                        {enseignantV.enseignant.nom + " " + enseignantV.enseignant.prenom}
                                    </SelectItem>
                                )
                            )
                        })}
                    </SelectContent>
                </Select>
            )}
        </Fragment>
    )
}

export default SelectEnseignant
