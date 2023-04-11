import React from "react"
import { Button } from "@/components/ui/Button"
import FormulaireVoeux from "../enseignant/FormulaireVoeux/FormulaireVoeux"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/Dialog"
import { useState } from "react"

const ButtonVoeux = (props) => {
    const [isVoeuxDialogVisible, setVoeuxDialogVisible] = useState(false)
    const { matiere, matiereType } = props
    const handleClick = () => {
        setVoeuxDialogVisible(!isVoeuxDialogVisible)
    }
    return (
        <Dialog className="z-[101]">
            <DialogTrigger asChild>
                <Button {...props} variant="default" onClick={handleClick}>
                    Voeux
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] ">
                <DialogHeader>
                    <DialogTitle>Demande Voeux :</DialogTitle>
                </DialogHeader>
                <FormulaireVoeux matiereName={matiere.name} matiereType={matiereType} />
                <DialogFooter>
                    <Button type="submit">Envoyer</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default ButtonVoeux
