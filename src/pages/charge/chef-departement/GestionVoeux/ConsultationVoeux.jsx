import React from "react"
import AccordationCharge from "@/pages/charge/components/Accordation/Accordation"
import ConsultationVoeuxStyles from "./ConsultationVoeux.module.css"

const ConsultationVoeux = () => {
    return (
        <div className={ConsultationVoeuxStyles.ConsultationVeuxContainner}>
            <div className={ConsultationVoeuxStyles.FrameTitle}>
                <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">Received Voeux</h3>
            </div>

            <div className={ConsultationVoeuxStyles.AccordationChargeContainner}>
                <AccordationCharge />
            </div>
        </div>
    )
}

export default ConsultationVoeux
