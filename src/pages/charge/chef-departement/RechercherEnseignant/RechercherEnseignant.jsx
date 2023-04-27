import React from "react"
import "./RechercherEnseignant.css"
import { Button } from "@/components/ui/Button"
import { Label } from "@/components/ui/Label"
import { Input } from "@/components/ui/Input"
import { Link } from "react-router-dom"

const RechercherEnseignant = () => {
    return (
        <div className="Rechercher-Enseignant-Container">
            <div className="Rechercher-Enseignant">
                <Label className="Label-Enseignant">Nom Enseignant :</Label>
                <Input type="text" placeholder="Entrer nom enseignant..." className="Input-Enseignant" />
                <Link to="/charge/consultation-enseignant">
                    <Button className="Button-Enseignant">Rechercher</Button>
                </Link>
            </div>
        </div>
    )
}

export default RechercherEnseignant
