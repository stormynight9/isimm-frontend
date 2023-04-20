import React, { Fragment, useState, useEffect } from "react"
import CreatableSelect from "react-select/creatable"
import { useGetMatiereQuery } from "@/redux/features/charge/MatiereApiSlice"
import { ToastAction } from "@/components/ui/Toast"
import { useToast } from "@/hooks/useToast"
import "./SelectEnseignant.css"
const SelectEnseignant = ({ matiereId, type }) => {
    const { data, isLoading } = useGetMatiereQuery(matiereId)
    const [matiereData, setMatiereData] = useState(null)
    const [disabled, setDisabled] = useState(false)
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
                        label: enseignantV.enseignant.nom + "-" + enseignantV.enseignant.prenom,
                        value: enseignantV.enseignant.nom + "-" + enseignantV.enseignant.prenom,
                    })
                }
            }

            console.log(newOptions)
            setMatiereData(newOptions)
            const enseignantMat = data.enseignantMatieres.find((enseignantMat) => enseignantMat.type === type)
            if (enseignantMat) {
                setValue({ label: enseignantMat.enseignant.nom + "-" + enseignantMat.enseignant.prenom, value: enseignantMat.enseignant.nom + "-" + enseignantMat.enseignant.prenom })
                setDisabled(true)
            }
        }
    }, [data])
    const handleCreate = async (input) => {
        console.log(input)
        const response = await fetch(`http://localhost:8090/api/isimm/distributionCharge/enseignant/getEnseignantByName?nom=${input.split("-")[0]}&prenom=${input.split("-")[1]}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        const responseJson = await response.json()
        console.log("Enseignant", responseJson)
        if (responseJson !== null) {
            setMatiereData((prev) => [...prev, { label: input, value: input }])
            const responseAdd = await fetch("http://localhost:8090/api/isimm/distributionCharge/enseignantMatiere", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ enseignant: { enseignantId: responseJson.enseignantId }, matiere: { matiereId: matiereId }, type: type }),
            })
            if (responseAdd.ok) {
                showToast("Enseignant Added")
                setValue({ label: input, value: input })
            }
        } else showToast("Enseignant Doesn't Exist")
    }
    const handleChange = async (input) => {
        console.log(matiereData)
        console.log("changed", input)
        setValue(input)

        //Update the enseignant for the matiere
        console.log(input)
        const response = await fetch(`http://localhost:8090/api/isimm/distributionCharge/enseignant/getEnseignantByName?nom=${input.label.split("-")[0]}&prenom=${input.label.split("-")[1]}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        const responseJson = await response.json()
        console.log("Found", responseJson)
        if (responseJson !== null) {
            const responseUpdate = await fetch(`http://localhost:8090/api/isimm/distributionCharge/enseignantMatiere/updateEnseignantMatiere?matiereId=${matiereId}&enseignantId=${responseJson.enseignantId}&type=${type}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            if (responseUpdate.ok) {
                showToast("Enseignant Added/Updated")
                setValue({ label: input.label, value: input.value })
                setDisabled(true)
            }
        } else showToast("Enseignant Doesn't Exist")
    }
    return <Fragment>{isLoading ? <h1>...Loading</h1> : <CreatableSelect isDisabled={disabled} className="SelectEnseignant" onChange={handleChange} value={value} options={matiereData} onCreateOption={handleCreate} />}</Fragment>
}

export default SelectEnseignant

export function showCustomToast(toast, message) {
    toast({
        title: message,
        action: <ToastAction altText="Dismiss">D'accord</ToastAction>,
    })
}
