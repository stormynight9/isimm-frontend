import AccordationStyles from "./Accordation.module.css"
import { useState, useEffect } from "react"
import AccordionVoeux from "../AccordionVoeux/AccordionVoeux"
import { ToastAction } from "@/components/ui/Toast"

function AccordationCharge() {
    const [voeux, setVoeux] = useState([])
    /*Consommation API */
    useEffect(() => {
        const getVoeux = async () => {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/isimm/distributionCharge/enseignantVoeux`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            const responseJson = await response.json()
            setVoeux(responseJson)
        }
        getVoeux()
    }, [])

    return (
        <div className={AccordationStyles.Accordions}>
            {voeux.length === 0 ? (
                <div>
                    <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                        No Voeux is available
                    </h3>
                </div>
            ) : (
                voeux.map((v, i) => {
                    return <AccordionVoeux key={i} v={v} />
                })
            )}
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
