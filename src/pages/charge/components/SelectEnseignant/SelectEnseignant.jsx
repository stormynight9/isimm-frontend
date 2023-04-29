import React, { Fragment, useState, useEffect } from "react"
import CreatableSelect from "react-select/creatable"
import { useGetMatiereQuery } from "@/redux/features/charge/MatiereApiSlice"
import { ToastAction } from "@/components/ui/Toast"
import { Button } from "@/components/ui/Button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/Dialog"
import { useToast } from "@/hooks/useToast"
import "./SelectEnseignant.css"
const SelectEnseignant = ({ matiereId, type }) => {
    const { data, isLoading } = useGetMatiereQuery(matiereId)
    const [matiereData, setMatiereData] = useState(null)
    const [disabled, setDisabled] = useState(false)
    const [value, setValue] = useState({ label: "", value: "" })
    const [nbGrpvalue, setNbGrpvalue] = useState({ label: "", value: "" })
    const { toast } = useToast()
    const [isAssignEnseignantVisible, setIsAssignEnseignantVisible] = useState(false)
    const handleClick = () => {
        setIsAssignEnseignantVisible(!isAssignEnseignantVisible)
    }
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
    }
    const handleChangeNbGrp = async (input) => {
        setNbGrpvalue(input)
    }
    const handleAssignEnseignant = async () => {
        //Update the enseignant for the matiere
        const input = value
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
            const responseUpdate = await fetch(`http://localhost:8090/api/isimm/distributionCharge/enseignantMatiere/updateEnseignantMatiere?matiereId=${matiereId}&enseignantId=${responseJson.enseignantId}&type=${type}&nombreGroupes=${nbGrpvalue.value}`, {
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
    return (
        <Fragment>
            {isLoading ? (
                <h1>...Loading</h1>
            ) : disabled ? (
                <p>{value.value}</p>
            ) : (
                <Dialog className="z-[101]">
                    <DialogTrigger asChild>
                        <Button className="p-[25px]" disabled={disabled} variant="default" onClick={handleClick}>
                            Assign Enseignant
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] ">
                        <DialogHeader>
                            <DialogTitle>Assign Enseignant</DialogTitle>
                        </DialogHeader>
                        <div className="DlgContent flex flex-col gap-5">
                            <div className="flex flex-row  items-center justify-between  gap-5">
                                Enseignant : <CreatableSelect isDisabled={disabled} className="SelectEnseignant" onChange={handleChange} value={value} options={matiereData} onCreateOption={handleCreate} />
                            </div>
                            <div className="flex flex-row  items-center justify-between  gap-5">
                                Nombre Groupes :{" "}
                                <CreatableSelect
                                    className="SelectEnseignant"
                                    onChange={handleChangeNbGrp}
                                    value={nbGrpvalue}
                                    options={[
                                        { label: "1", value: "1" },
                                        { label: "2", value: "2" },
                                        { label: "3", value: "3" },
                                        { label: "4", value: "4" },
                                    ]}
                                    onCreateOption={handleCreate}
                                />
                            </div>
                        </div>

                        <DialogFooter>
                            <Button type="submit" onClick={handleAssignEnseignant}>
                                Assign
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            )}
        </Fragment>
    )
}

export default SelectEnseignant

export function showCustomToast(toast, message) {
    toast({
        title: message,
        action: <ToastAction altText="Dismiss">D'accord</ToastAction>,
    })
}
