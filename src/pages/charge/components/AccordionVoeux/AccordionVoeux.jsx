import React, { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion"
import Select from "react-select"
import { ToastAction } from "@/components/ui/Toast"
import { useToast } from "@/hooks/useToast"

const AccordionVoeux = ({ v }) => {
    console.log(v)
    const { toast } = useToast()
    const [nbGrpvalue, setNbGrpvalue] = useState({ label: "1", value: "1" })

    function showToast(message) {
        showCustomToast(toast, message)
    }
    const handleChangeNbGrp = async (input) => {
        setNbGrpvalue(input)
    }
    /* Handle click */
    const handleClick = async (enseignantId, matiereId, type) => {
        console.log(enseignantId)
        console.log(matiereId)
        const responseAdd = await fetch(`${import.meta.env.VITE_API_URL}/api/isimm/distributionCharge/enseignantMatiere/updateEnseignantMatiere?matiereId=${matiereId}&enseignantId=${enseignantId}&type=${type}&nombreGroupes=${nbGrpvalue.value}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
        })
        if (responseAdd.ok) {
            showToast(" Added")
        }
    }
    return (
        <Accordion className="Accordion" type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger> Voeux d'enseignant : {v.enseignant.nom + "-" + v.enseignant.prenom} </AccordionTrigger>
                <AccordionContent>
                    <div className="flex flex-row  items-center justify-start  gap-5">
                        Nombre Groupes :{" "}
                        <Select
                            className="SelectEnseignant"
                            onChange={handleChangeNbGrp}
                            value={nbGrpvalue}
                            options={[
                                { label: "1", value: "1" },
                                { label: "2", value: "2" },
                                { label: "3", value: "3" },
                                { label: "4", value: "4" },
                            ]}
                        />
                    </div>
                    <p>
                        <span className="bold">Matiere : </span>
                        {v.matiere.name}
                    </p>
                    <p>
                        <span className="bold">Type : </span>
                        {v.type}
                    </p>
                    <br />
                    <p>
                        <span className="bold">Description : </span>
                        {v.voeux.message}
                    </p>
                    <br />

                    <div className="ButtonVoeuxContainner">
                        <Button variant="default" className="ButtonValidVoeux" onClick={(event) => handleClick(v.enseignant.enseignantId, v.matiere.matiereId, v.type)}>
                            Valider
                        </Button>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export default AccordionVoeux

export function showCustomToast(toast, message) {
    toast({
        title: message,
        action: <ToastAction altText="Dismiss">D'accord</ToastAction>,
    })
}
