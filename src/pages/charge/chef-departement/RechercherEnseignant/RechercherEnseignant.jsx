import React, { useState, useEffect } from "react"
import axios from "axios"
import "./RechercherEnseignant.css"
import { Button } from "@/components/ui/Button"
import { Label } from "@/components/ui/Label"
import { Input } from "@/components/ui/Input"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { updateCredentials } from "@/redux/features/charge/ConsultingEnseignantSlice"
const RechercherEnseignant = () => {
    const [inputValue, setInputValue] = useState("")
    const [Enseignant, setEnseignant] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    function handleInputChange(event) {
        setInputValue(event.target.value)
    }

    const onClickButton = () => {
        axios
            .get(`http://localhost:8090/api/isimm/distributionCharge/enseignant/getEnseignantByName?nom=${inputValue.split("-")[0]}&prenom=${inputValue.split("-")[1]}`)
            .then((res) => {
                if (res && res.data) {
                    console.log(res.data)
                    dispatch(updateCredentials(res.data))
                    navigate("/charge/consultation-enseignant")
                }
            })
            .catch((error) => {
                console.log(error.response.data.message)
            })
    }

    return (
        <div className="Rechercher-Enseignant-Container">
            <div className="Rechercher-Enseignant">
                <Label className="Label-Enseignant">Nom Enseignant :</Label>
                <Input type="text" placeholder="Entrer nom enseignant...format(nom-prenom)" className="Input-Enseignant" value={inputValue} onChange={handleInputChange} />
                <Button className="Button-Enseignant" onClick={onClickButton}>
                    Rechercher
                </Button>
            </div>
        </div>
    )
}

export default RechercherEnseignant
