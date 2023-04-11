import NavBar from "@/pages/charge/components/NavBar/NavBar"
import AccordationCharge from "@/pages/charge/components/Accordation/Accordation"
import "./ConsultationVoeux.css"

const ConsultationVoeux = () => {

    return(
        <div className="ConsultationVeuxContainner">
            <NavBar/>
            <div className="FrameTitle">
                <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"> 
                    Received Voeux 
                </h3>
            </div>
            <div className="AccordationChargeContainner"> 
                <AccordationCharge/>
            </div>
        </div>

        
    ) 
}

export default ConsultationVoeux
