import "./Accordation.css"
import { useState, useEffect } from "react"
import AccordionVoeux from "../AccordionVoeux/AccordionVoeux"
import { ToastAction } from "@/components/ui/Toast"
import { useToast } from "@/hooks/useToast"

function AccordationCharge() {
    const [voeux, setVoeux] = useState([])
    const { toast } = useToast()
    function showToast(message) {
        showCustomToast(toast, message)
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
                return <AccordionVoeux key={i} v={v} />
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
