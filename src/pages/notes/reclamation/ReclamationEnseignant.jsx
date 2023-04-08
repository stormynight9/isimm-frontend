import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion"
import { Button } from "@/components/ui/Button"
import { useToast } from "@/hooks/useToast"
import { ToastAction } from "@radix-ui/react-toast"
import { useEffect, useState } from "react"

const ReclamationEnseignant = () => {
    const [responseJson, setResponseJson] = useState([])
    const { toast } = useToast()

    function showToast(message) {
        showCustomToast(toast, message)
    }

    const changerStatut = (idReclamation, statut) => {
        fetch(import.meta.env.VITE_API_URL + "/api/isimm/chargeNote/EnseignantReclamation/updateReclamation", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                idReclamation: idReclamation,
                statut: statut,
            }),
        })
            .then((response) => {
                if (response.status === 200) {
                    showToast("Reclamation a été " + statut)
                }
                return response.json()
            })
            .then((data) => {
                showToast(data.message)
            })
            .catch((error) => {
                console.error("Error:", error)
            })
    }

    const chargeReclamations = async () => {
        try {
            const response = await fetch(import.meta.env.VITE_API_URL + "/api/isimm/chargeNote/EnseignantReclamation/enseignant/12", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            const json = await response.json()
            setResponseJson(json)
            console.log(json)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        chargeReclamations()
    }, [])
    return (
        <div className=".block mx-auto justify-center p-9">
            <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">Notes {`>`} Reclamation</h3>
            <Accordion type="single" collapsible className="mt-14 w-full pl-48 pr-48">
                {responseJson.map((item, index) => (
                    <AccordionItem value={"item-" + index} className="mb-2 rounded-lg bg-[#E2E8F0] pl-5 pr-1">
                        <AccordionTrigger>Reclamation N° {index + 1}</AccordionTrigger>
                        <AccordionContent>
                            <span className="font-bold">Nom Etudiant :</span>
                            <span> Belhassen Tayari</span>
                            <br></br>
                            <span className="font-bold">Nom Matiére :</span>
                            <span> {item.nomMatiere} </span>
                            <br></br>
                            <span className="font-bold">Type Devoir :</span>
                            <span> {item.typeNote} </span>
                            <br></br>
                            <span className="font-bold">Date Reclamation :</span>
                            <span> {item.dateCreation.slice(0, 10)} </span>
                            <br></br>
                            <br></br>

                            <span className="font-bold">Message :</span>
                            <br></br>
                            <span> {item.message} </span>
                            <br></br>
                            <div className="flex justify-end">
                                <Button onClick={() => changerStatut(item.idReclamation, "Refusée")} className="mr-3 bg-red-500">
                                    Réfuser
                                </Button>
                                <Button onClick={() => changerStatut(item.idReclamation, "Acceptée")} className="mr-3 bg-green-500 ">
                                    Accepter
                                </Button>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}

export default ReclamationEnseignant

export function showCustomToast(toast, message) {
    toast({
        title: message,
        action: <ToastAction altText="Dismiss">D'accord</ToastAction>,
    })
}
