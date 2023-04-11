import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion"
import { Button } from "@/components/ui/Button"
import { useToast } from "@/hooks/useToast"
import { ToastAction } from "@radix-ui/react-toast"
import { useEffect, useState } from "react"
import nothing from "../images/nothing.png"

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
            const response = await fetch(import.meta.env.VITE_API_URL + "/api/isimm/chargeNote/EnseignantReclamation/enseignant/1", {
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
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        chargeReclamations()
    }, [responseJson])
    return (
        <div className=".block mx-auto justify-center p-9">
            <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">Notes {`>`} Reclamation</h3>
            {responseJson.length === 0 ? (
                <div className="w-full text-center">
                    <img src={nothing} alt="" srcset="" className="mx-auto mb-4 mt-44 h-20 w-20" />
                    <span className="mx-auto">Oups</span>
                    <br></br>
                    <span className="mx-auto">Vous n'avez pas du reclamations</span>
                </div>
            ) : (
                <Accordion type="single" collapsible className="mt-14 w-full pl-48 pr-48">
                    {responseJson.map((item, index) => (
                        <AccordionItem value={"item-" + index} className="mb-2 rounded-lg bg-[#E2E8F0] pl-5 pr-1">
                            <AccordionTrigger>Reclamation N° {index + 1}</AccordionTrigger>
                            <AccordionContent>
                                <table className="w-full">
                                    <tbody>
                                        <tr>
                                            <td className="py-2 pr-1 font-bold">Nom Etudiant :</td>
                                            <td className="pr-1">{item.nomEtudiant}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1  pr-2  font-bold">Nom Matiére :</td>
                                            <td>{item.nomMatiere}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1 pr-2 font-bold">Type Devoir :</td>
                                            <td>{item.typeNote}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1 pr-2 font-bold">Date Reclamation :</td>
                                            <td>{item.dateCreation.slice(0, 10)}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1 pr-2 font-bold">Statut :</td>
                                            <td>{item.statut === "Acceptée" ? <span className="rounded-full bg-green-500 px-2 py-1 text-white">{item.statut}</span> : item.statut === "Refusée" ? <span className="rounded-full bg-red-500 px-2 py-1 text-white">{item.statut}</span> : <span className="rounded-full bg-yellow-500 px-2 py-1 text-white">{item.statut}</span>}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1 pr-2 font-bold">Message :</td>
                                            <td>{item.message}</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2" className="py-1 text-right">
                                                <Button onClick={() => changerStatut(item.idReclamation, "Refusée")} className="mr-3 bg-red-500">
                                                    Réfuser
                                                </Button>
                                                <Button onClick={() => changerStatut(item.idReclamation, "Acceptée")} className="mr-3 bg-green-500">
                                                    Accepter
                                                </Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            )}
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
