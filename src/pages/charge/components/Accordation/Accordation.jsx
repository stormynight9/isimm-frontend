import "./Accordation.css"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/Button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion"
import { ToastAction } from "@/components/ui/Toast"
import { useToast } from "@/hooks/useToast"

function AccordationCharge() {
    const [voeux, setVoeux] = useState([])
    const { toast } = useToast()
    function showToast(message) {
        showCustomToast(toast, message)
    }
    /* Handle click */ 
   const handleClick = async(enseignantId,matiereId ,type) => {
            console.log(enseignantId)
            console.log(matiereId)
            const responseAdd = await fetch(`http://localhost:8090/api/isimm/distributionCharge/enseignantMatiere/updateEnseignantMatiere?matiereId=${matiereId}&enseignantId=${enseignantId}&type=${type}&nombreGroupes=${nbGrpvalue.value}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            if (responseAdd.ok) {
                showToast(" Added")
            }
    }
    /*Consommation API */
    useEffect(() => {
        const getVoeux = async () => {
            const response = await fetch("http://localhost:8090/api/isimm/distributionCharge/enseignantVoeux", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const responseJson = await response.json()
            console.log(responseJson)
            setVoeux(responseJson)
        }
        getVoeux()
    }, [])

    return (
        <div className="Accordions">
            {voeux.map((v, i) => {
                return (
                    <Accordion className="Accordion" type="single" collapsible key={i}>
                        <AccordionItem value="item-1">
                            <AccordionTrigger> Voeux d'enseignant : {v.enseignant.nom + '-'+v.enseignant.prenom} </AccordionTrigger>
                            <AccordionContent>
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
                                <p>
                                    <span className="bold">Nombre De Groupe : </span>
                                    {v.matiere.name}
                                </p>
                                <div className="ButtonVoeuxContainner">
                                    <Button variant="default" className="ButtonValidVoeux" onClick={event => handleClick(v.matiere.matiereId,v.enseignant.enseignantId, v.type)}>
                                        Valider
                                    </Button>

                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                )
            })}
        </div>
    )
}
export default AccordationCharge
export function showCustomToast(toast, message) {
    toast({
        title: message,
        action: <ToastAction altText="Dismiss">D'accord</ToastAction>,
    })
}
