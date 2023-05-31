import { useEffect } from "react"
import { Button } from "@/components/ui/Button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/Dialog"
import { Label } from "@/components/ui/Label"
import { Textarea } from "@/components/ui/Textarea"
import { useState } from "react"
import { ToastAction } from "@/components/ui/Toast"
import { useToast } from "@/hooks/useToast"

import ButtonVoeuxStyles from "./ButtonVoeux.module.css"
const ButtonVoeux = (props) => {
    const { matiere, matiereType } = props

    const [isVoeuxDialogVisible, setVoeuxDialogVisible] = useState(false)
    const [voeuxMsg, setVoeuxMsg] = useState("")
    const [disabled, setDisabled] = useState(false)
    const [numberVoeux, setNumberVoeux] = useState(0)
    const { toast } = useToast()
    useEffect(() => {
        const getVoeux = async () => {
            const response = await fetch(
                `${
                    import.meta.env.VITE_API_URL
                }/api/isimm/distributionCharge/enseignantVoeux/getEnseignantVoeuxByEnseignantId?enseignantId=${1}&matiereId=${
                    matiere.matiereId
                }&matiereType=${matiereType}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            const responseJson = await response.json()

            //calculate nombreHeures
            setNumberVoeux(responseJson.length)
        }
        getVoeux()
    }, [matiere.matiereId, matiereType])
    function showToast(message) {
        showCustomToast(toast, message)
    }
    const handleClick = () => {
        setVoeuxDialogVisible(!isVoeuxDialogVisible)
    }
    const handleSendVoeux = async () => {
        if (voeuxMsg.length === 0) {
            showToast("You must Provide a Message")
            return
        }
        const responseVoeux = await fetch(
            `${import.meta.env.VITE_API_URL}/api/isimm/distributionCharge/voeux`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: `Voeux Matiere:${matiere.code} Type:${matiereType}`,
                    message: voeuxMsg,
                }),
            }
        )
        const responseVoeuxJson = await responseVoeux.json()

        if (responseVoeux.ok) {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/isimm/distributionCharge/enseignantVoeux`,
                {
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
                            enseignantId: 1,
                        },
                        matiere: {
                            matiereId: matiere.matiereId,
                        },
                    }),
                }
            )
            if (response.ok) {
                setVoeuxDialogVisible(false)
                showToast("Voeux Sent Successfully")
                setDisabled(true)
                // navigate(0)
            }
        }
    }
    return (
        <Dialog className="z-[101]">
            <DialogTrigger asChild>
                <div className="mb-5 flex flex-col flex-nowrap items-center justify-start">
                    <div
                        id="targetJoy"
                        className="flex h-[25px] w-[25px]  items-center justify-center self-end rounded-full bg-[#94a3b8] p-[5px]"
                    >
                        {numberVoeux}
                    </div>
                    <Button disabled={disabled} {...props} variant="default" onClick={handleClick}>
                        Voeux
                    </Button>
                    {/*joy && <JoyRide continuous disableOverlay showSkipButton steps={steps} />*/}
                </div>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px] ">
                <DialogHeader>
                    <DialogTitle>Demande Voeux :</DialogTitle>
                </DialogHeader>
                <div className={ButtonVoeuxStyles.FormulaireContainer}>
                    <div className={ButtonVoeuxStyles.row}>
                        <Label className={ButtonVoeuxStyles.ens1}>Enseignat : </Label>
                        <Label className={ButtonVoeuxStyles.ens}>Monsieur X </Label>
                    </div>

                    <div className={ButtonVoeuxStyles.row}>
                        <Label className={ButtonVoeuxStyles.mat1}>Matiére : </Label>
                        <Label className={ButtonVoeuxStyles.mat}>{matiere.name}</Label>
                    </div>

                    <div className={ButtonVoeuxStyles.row}>
                        <Label className={ButtonVoeuxStyles.type1}>Type : </Label>
                        <Label className={ButtonVoeuxStyles.type}>{matiereType}</Label>
                    </div>

                    <div className={ButtonVoeuxStyles.row}>
                        <Label className={ButtonVoeuxStyles.mess}>Message : </Label>
                    </div>
                    <div className={ButtonVoeuxStyles.row}>
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
