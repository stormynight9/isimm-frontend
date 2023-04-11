import "./Accordation.css"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/Button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion"

function AccordationCharge() {
    const [voeux, setVoeux] = useState([])

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
            console.log(responseJson[0].matiere.name)
            setVoeux(responseJson)
        }
        getVoeux()
    }, [])
    return (
<<<<<<< HEAD
        <div>
            {voeux.map((v, i) => {
                return (
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger> Voeux d'enseignant : {v.enseignant.nom} </AccordionTrigger>
                            <AccordionContent>
                                <p>Matiere : {v.matiere.name}</p>
                                <p>
                                    <br />
                                    Description : {v.voeux.message}
=======
        <div className="Accordions">
            {voeux.map((v, i) => {
                return (
                    <Accordion className="Accordion" type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger> Voeux d'enseignant : {v.enseignant.nom} </AccordionTrigger>
                            <AccordionContent>
                                <p>
                                    <span className="bold">Matiere : </span>
                                    {v.matiere.name}
                                </p>
                                <br />
                                <p>
                                    <span className="bold">Description : </span>
                                    {v.voeux.message}
>>>>>>> 69229e287e296b9665922b85b3455b81b3f72c05
                                </p>
                                <br />
                                <div className="ButtonVoeuxContainner">
                                    <Button variant="default" className="ButtonValidVoeux">
                                        Valider
                                    </Button>
                                    <Button variant="default" className="ButtonRejectVoeux">
                                        Rejeter
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
