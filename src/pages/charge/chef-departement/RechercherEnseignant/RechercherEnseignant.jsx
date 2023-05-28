import React, { useState } from "react"
import axios from "axios"
import "./RechercherEnseignant.css"
import { Button } from "@/components/ui/Button"
import { Label } from "@/components/ui/Label"
import { Input } from "@/components/ui/Input"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { updateCredentials } from "@/redux/features/charge/ConsultingEnseignantSlice"
import { ToastAction } from "@/components/ui/Toast"
import { useToast } from "@/hooks/useToast"
import JoyRide from "react-joyride"
const RechercherEnseignant = () => {
    const [inputValue, setInputValue] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { toast } = useToast()

    function showToast(message) {
        showCustomToast(toast, message)
    }
    function handleInputChange(event) {
        setInputValue(event.target.value)
    }

    const onClickButton = () => {
        axios
            .get(`${import.meta.env.VITE_API_URL}/api/isimm/distributionCharge/enseignant/getEnseignantByName?nom=${inputValue.split("-")[0]}&prenom=${inputValue.split("-")[1]}`)
            .then((res) => {
                if (res && res.data) {
                    console.log(res.data)
                    dispatch(updateCredentials(res.data))
                    navigate("/charge/consultation-enseignant")
                } else {
                    showToast("Enseignant Doesn't Exist")
                }
            })
            .catch((error) => {
                console.log(error.response.data.message)
            })
    }
    const steps = [
        {
            title: "Recherche Enseignant",
            content: "Write Enseignant first and last name in the format nom-prenom example : Hamila-Ahmed",
            target: "#inputEns",
            placement: "top-end",
        },
    ]
    return (
        <div className="Rechercher-Enseignant-Container">
            <JoyRide continuous scrollToFirstStep showSkipButton steps={steps} />
            <div className="Rechercher-Enseignant">
                <Label className="Label-Enseignant">Nom Enseignant :</Label>
                <Input type="text" placeholder="Entrer nom enseignant...format(nom-prenom)" id="inputEns" className="Input-Enseignant" value={inputValue} onChange={handleInputChange} />
                <Button className="Button-Enseignant" onClick={onClickButton}>
                    Rechercher
                </Button>
            </div>
        </div>
    )
}

export default RechercherEnseignant

export function showCustomToast(toast, message) {
    toast({
        title: message,
        action: <ToastAction altText="Dismiss">D'accord</ToastAction>,
    })
}
