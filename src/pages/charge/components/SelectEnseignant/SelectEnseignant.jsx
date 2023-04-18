import React, { Fragment, useState, useEffect } from "react"
import CreatableSelect from "react-select/creatable"
import { useGetMatiereQuery } from "@/redux/features/charge/MatiereApiSlice"
import { ToastAction } from "@/components/ui/Toast"
import { useToast } from "@/hooks/useToast"
import "./SelectEnseignant.css"
const SelectEnseignant = ({ matiereId, type }) => {
    const { data, isLoading } = useGetMatiereQuery(matiereId)
    const [matiereData, setMatiereData] = useState(null)
    const [value, setValue] = useState({ label: "", value: "" })
    const { toast } = useToast()

    function showToast(message) {
        showCustomToast(toast, message)
    }
    useEffect(() => {
        if (data) {
            const newOptions = []

            for (const enseignantV of data.enseignantVoeux) {
                if (enseignantV.type === type) {
                    newOptions.push({
                        label: enseignantV.enseignant.nom,
                        value: enseignantV.enseignant.nom,
                    })
                }
            }
            console.log(newOptions)
            setMatiereData(newOptions)
            const enseignantMat = data.enseignantMatieres.find((enseignantMat) => enseignantMat.type === type)
            if (enseignantMat) setValue({ label: enseignantMat.enseignant.nom, value: enseignantMat.enseignant.nom })
        }
    }, [data])
    const handleCreate = async (input) => {
        console.log(input)
        const response = await fetch(`http://localhost:8090/api/isimm/distributionCharge/enseignant/getEnseignantByName?nom=${input.split(" ")[0]}&prenom=${input.split(" ").slice(1, input.split(" ").length).join(" ")}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        const responseJson = await response.json()
        console.log(responseJson)
        if (responseJson !== null) {
            setMatiereData((prev) => [...prev, { label: input, value: input }])
            const responseAdd = await fetch("http://localhost:8090/api/isimm/distributionCharge/enseignantMatiere", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ enseignant: { enseignantId: 2 }, matiere: { matiereId: matiereId }, type: type }),
            })
            if (responseAdd.ok) {
                showToast("Enseignant Added")
                setValue({ label: input, value: input })
            }
        } else showToast("Enseignant Doesn't Exist")
    }
    const handleChange = (input) => {
        console.log(matiereData)
        console.log("changed", input)
        setValue(input)

        //Update the enseignant for the matiere
    }
    return <Fragment>{isLoading ? <h1>...Loading</h1> : <CreatableSelect className="SelectEnseignant" onChange={handleChange} value={value} options={matiereData} onCreateOption={handleCreate} />}</Fragment>
}

export default SelectEnseignant

export function showCustomToast(toast, message) {
    toast({
        title: message,
        action: <ToastAction altText="Dismiss">D'accord</ToastAction>,
    })
}
