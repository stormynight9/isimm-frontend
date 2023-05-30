import React, { useState } from "react"
import { Label } from "@/components/ui/Label"
import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/Button"
import { useNavigate } from "react-router-dom"
import axios from "axios"
const UpdateDemande = () => {
    const navigateTo = useNavigate()

    const [formValid, setFormValid] = useState(false)
    const [type, setType] = useState("ANNUEL")
    const [file, setFile] = useState(null)
    const [Justification, setJustification] = useState("")
    const [idDemandeConger] = useState("")

    const [employe] = useState("")
    const [DateDebut] = useState("")
    const [DateFin] = useState("")
    const [etatDemande] = useState("ATTENTE")
    //const [demandes, setDemandes] = useState([])
    const demande = { type, Justification, DateDebut, DateFin, etatDemande, employe, file }

    const handleTypeChange = (event) => {
        setType(event.target.value)
    }

    const handleFileChange = (event) => {
        setFile(event.target.files[0])
    }

    const update = async (e, idDemandeConger) => {
        e.preventDefault()
        try {
            const response = await axios.post(
                `http://localhost:8090/api/isimm/gestionConge/exempleEntity/${idDemandeConger}`,
                demande
            )
            if (response.status === 200) {
                navigateTo("/conge/enseignant/mes-demandes")
            } else {
                alert(response.data.message)
            }
        } catch (error) {
            alert("Une erreur s'est produite lors de la soumission de la demande.")
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
            <form onSubmit={(e) => update(e, idDemandeConger)} style={{ width: "50%" }}>
                <h1
                    style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: "50px",
                        margin: "20px 0",
                    }}
                >
                    Modifier la Demande Congé
                </h1>

                <div>
                    <Label
                        htmlFor="employer"
                        style={{ fontSize: "20px", fontWeight: "bold" }}
                        required
                    >
                        ID_Employer
                    </Label>
                    <Input
                        type="number"
                        id="employer"
                        name="employer"
                        required
                        onChange={handleInputChange}
                    />
                </div>
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
                    <div>
                        <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <input
                                type="radio"
                                name="type"
                                id="type"
                                value="ANNUEL"
                                checked
                                required
                            />
                            Annuel
                        </label>
                    </div>
                    <div>
                        <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <input
                                type="radio"
                                name="type"
                                id="type"
                                value="MALADIE"
                                checked={type === "MALADIE"}
                                onChange={handleTypeChange}
                            />
                            Maladie
                        </label>
                    </div>

                    {type === "MALADIE" && (
                        <div>
                            <Label htmlFor="file" style={{ fontSize: "20px", fontWeight: "bold" }}>
                                Fichier médical
                            </Label>
                            <Input type="file" id="file" name="file" onChange={handleFileChange} />
                        </div>
                    )}
                    <div>
                        <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <input
                                type="radio"
                                name="type"
                                id="type"
                                value="AUTRE"
                                checked={type === "AUTRE"}
                                onChange={handleTypeChange}
                            />
                            Autre
                        </label>
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
                            <textarea
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
                            ></textarea>
                        </div>
                    )}
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

export default UpdateDemande

