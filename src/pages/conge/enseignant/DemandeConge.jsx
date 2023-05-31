import React, { useState } from "react"
import { Label } from "@/components/ui/Label"
import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/Button"
import { useNavigate } from "react-router-dom"
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup"
import { Textarea } from "@/components/ui/Textarea"

const DemandeConge = () => {
    const navigateTo = useNavigate()

    const [formValid, setFormValid] = useState(false)
    const [type, setType] = useState("ANNUEL")
    const [file, setFile] = useState(null)
    const [justification, setJustification] = useState("")

    const handleTypeChange = (event) => {
        setType(event.target.value)
    }

    const handleFileChange = (event) => {
        setFile(event.target.files[0])
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (event.target.checkValidity()) {
            try {
                const DateDebut = event.target.DateDebut.value || null
                const DateFin = event.target.DateFin.value || null
                const employer = 1 // Valeur par défaut de l'ID de l'employé
                if (DateDebut && DateFin && new Date(DateDebut) > new Date(DateFin)) {
                    alert("La date de début doit être inférieure à la date de fin.")
                    return
                }

                const requestBody = {
                    type,
                    Justification: type === "AUTRE" ? justification : "",
                    DateDebut,
                    DateFin,
                    employe: employer,
                    id_file: null, // Ajout de id_file avec la valeur null par défaut
                }

                if (type === "MALADIE") {
                    const formData = new FormData()
                    formData.append("file", file)
                    formData.append("type", type)
                    formData.append("Justification", justification)
                    formData.append("DateDebut", DateDebut)
                    formData.append("DateFin", DateFin)
                    formData.append("employe", employer)

                    const response = await fetch(import.meta.env.VITE_API_URL + "uploadFile", {
                        method: "POST",
                        body: formData,
                        mode: "cors",
                    })

                    if (response.ok) {
                        const { fileId } = await response.json()
                        requestBody.id_file = fileId // Met à jour id_file avec la valeur du fileId reçu
                    } else {
                        const errorResponse = await response.json()
                        alert(errorResponse.message)
                        return
                    }
                }

                const addCongeResponse = await fetch(
                    import.meta.env.VITE_API_URL + "api/isimm/gestionConge/exempleEntity/add",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(requestBody),
                        mode: "cors",
                    }
                )

                if (addCongeResponse.ok) {
                    navigateTo("/conge/enseignant/mes-demandes")
                } else {
                    const errorResponse = await addCongeResponse.json()
                    alert(errorResponse.message)
                }
            } catch (error) {
                alert("Une erreur s'est produite lors de la soumission de la demande.")
            }
        }
    }

    const handleInputChange = () => {
        const requiredInputs = document.querySelectorAll("input[required]")
        const allInputsFilled = Array.from(requiredInputs, (input) => input.value !== "").every(
            Boolean
        )

        setFormValid(allInputsFilled)
    }

    const handleJustificationChange = (event) => {
        setJustification(event.target.value)
    }

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <form onSubmit={handleSubmit} style={{ width: "50%" }}>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Demande Congé
                </h1>

                <br></br>

                <div>
                    <div>
                        <Label htmlFor="DateDebut" style={{ fontSize: "20px", fontWeight: "bold" }}>
                            Date de départ
                        </Label>
                        <Input type="date" id="DateDebut" required onChange={handleInputChange} />
                    </div>

                    <br></br>

                    <div>
                        <Label htmlFor="DateFin" style={{ fontSize: "20px", fontWeight: "bold" }}>
                            Date de retour
                        </Label>
                        <Input type="date" id="DateFin" required onChange={handleInputChange} />
                    </div>

                    <br></br>

                    <Label style={{ fontSize: "20px", fontWeight: "bold" }}>Type de congé</Label>
                    <RadioGroup defaultValue={type} onChange={handleTypeChange}>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="ANNUEL" id="option-one" />
                            <Label htmlFor="option-one">Annuel</Label>
                        </div>

                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="MALADIE" id="option-two" />
                            <Label htmlFor="option-two">Maladie</Label>
                        </div>

                        {type === "MALADIE" && (
                            <div>
                                <Label
                                    htmlFor="file"
                                    style={{ fontSize: "20px", fontWeight: "bold" }}
                                >
                                    Fichier médical
                                </Label>
                                <Input
                                    type="file"
                                    id="file"
                                    name="file"
                                    onChange={handleFileChange}
                                />
                            </div>
                        )}

                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="AUTRE" id="option-three" />
                            <Label htmlFor="option-three">Autre</Label>
                        </div>

                        {type === "AUTRE" && (
                            <div>
                                <Label
                                    htmlFor="justification"
                                    style={{ fontSize: "20px", fontWeight: "bold" }}
                                    required
                                >
                                    Justification
                                </Label>
                                <Textarea
                                    id="justification"
                                    onChange={handleJustificationChange}
                                    placeholder="Veuillez fournir une justification pour votre demande"
                                    style={{
                                        width: "100%",
                                        height: "150px",
                                        padding: "10px",
                                        fontSize: "16px",
                                    }}
                                    required
                                ></Textarea>
                            </div>
                        )}
                    </RadioGroup>

                    <br></br>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Button type="submit" id="submit-btn" disabled={!formValid}>
                            Demander
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default DemandeConge

