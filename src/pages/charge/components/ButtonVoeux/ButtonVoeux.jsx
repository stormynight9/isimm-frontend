import React, { Fragment, useEffect } from "react"
import { Button } from "@/components/ui/Button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/Dialog"
import { Label } from "@/components/ui/Label"
import { Textarea } from "@/components/ui/Textarea"
import { useState } from "react"
import { ToastAction } from "@/components/ui/Toast"
import { useToast } from "@/hooks/useToast"
import { useNavigate } from "react-router-dom"
import JoyRide from "react-joyride"

import "./ButtonVoeux.css"
const ButtonVoeux = (props) => {
    const { matiere, matiereType, joy } = props

    const [isVoeuxDialogVisible, setVoeuxDialogVisible] = useState(false)
    const [voeuxMsg, setVoeuxMsg] = useState("")
    const [disabled, setDisabled] = useState(false)
    const [numberVoeux, setNumberVoeux] = useState(0)
    const navigate = useNavigate()
    const { toast } = useToast()
    useEffect(() => {
        const getVoeux = async () => {
            const response = await fetch(`http://localhost:8090/api/isimm/distributionCharge/enseignantVoeux/getEnseignantVoeuxByEnseignantId?enseignantId=${1}&matiereId=${matiere.matiereId}&matiereType=${matiereType}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const responseJson = await response.json()
            console.log(responseJson)
            //calculate nombreHeures
            setNumberVoeux(responseJson.length)
        }
        getVoeux()
    }, [])
    function showToast(message) {
        showCustomToast(toast, message)
    }
    const handleClick = () => {
        setVoeuxDialogVisible(!isVoeuxDialogVisible)
    }
    const handleSendVoeux = async () => {
        if (voeuxMsg.length == 0) {
            showToast("You must Provide a Message")
            return
        }
        const responseVoeux = await fetch("http://localhost:8090/api/isimm/distributionCharge/voeux", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: `Voeux Matiere:${matiere.code} Type:${matiereType}`,
                message: voeuxMsg,
            }),
        })
        const responseVoeuxJson = await responseVoeux.json()
        console.log(responseVoeuxJson)

        if (responseVoeux.ok) {
            const response = await fetch("http://localhost:8090/api/isimm/distributionCharge/enseignantVoeux", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    type: matiereType,
                    voeux: {
                        voeuxId: responseVoeuxJson.voeuxId,
                    },
                    enseignant: {
                        enseignantId: 2,
                    },
                    matiere: {
                        matiereId: matiere.matiereId,
                    },
                }),
            })
            if (response.ok) {
                setVoeuxDialogVisible(false)
                showToast("Voeux Sent Successfully")
                setDisabled(true)
                // navigate(0)
            }
        }
    }
    const steps = [
        {
            title: "Number of submitted voeux",
            content: "An indicator for the number of submitted voeux for this subject",
            target: "#targetJoy",
            placement: "right-end",
            isFixed: true,
            event: "hover",
        },
    ]
    return (
        <Dialog className="z-[101]">
            <DialogTrigger asChild>
                <div className="mb-5 flex flex-col flex-nowrap items-center justify-start">
                    <div id="targetJoy" className="flex h-[25px] w-[25px]  items-center justify-center self-end rounded-full bg-[#94a3b8] p-[5px]">
                        {numberVoeux}
                    </div>
                    <Button disabled={disabled} {...props} variant="default" onClick={handleClick}>
                        Voeux
                    </Button>
                    {joy && <JoyRide continuous disableOverlay showSkipButton steps={steps} />}
                </div>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px] ">
                <DialogHeader>
                    <DialogTitle>Demande Voeux :</DialogTitle>
                </DialogHeader>
                <div className="FormulaireContainer">
                    <div className="row">
                        <Label className="ens1">Enseignat : </Label>
                        <Label className="ens">Monsieur X </Label>
                    </div>

                    <div className="row">
                        <Label className="mat1">Matiére : </Label>
                        <Label className="mat">{matiere.name}</Label>
                    </div>

                    <div className="row">
                        <Label className="type1">Type : </Label>
                        <Label className="type">{matiereType}</Label>
                    </div>

                    <div className="row">
                        <Label className="mess">Message : </Label>
                    </div>
                    <div className="row">
                        <Textarea
                            type="text"
                            style={{ resize: "none" }}
                            placeholder="laissez votre message ici ..."
                            value={voeuxMsg}
                            onChange={(evt) => {
                                setVoeuxMsg(evt.target.value)
                            }}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={handleSendVoeux}>
                        Envoyer
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default ButtonVoeux

export function showCustomToast(toast, message) {
    toast({
        title: message,
        action: <ToastAction altText="Dismiss">D'accord</ToastAction>,
    })
}
