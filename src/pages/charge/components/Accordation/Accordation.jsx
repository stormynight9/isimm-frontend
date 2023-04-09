import "./Accordation.css"
import { useState , useEffect } from 'react';
import { Button } from "@/components/ui/Button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/Accordion"

function AccordationCharge() {
    const [voeux,setVoeux]=useState([])

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
      <div>
{ voeux.map((v,i)=>{
                              return (
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger> Voeux d'enseignant  : {v.enseignant.nom} </AccordionTrigger>
    <AccordionContent>
      <p>
      Matiere : {v.matiere.name}
      </p>
      <p><br/>
      Description : {v.voeux.message}
      </p><br/>
      <div className="ButtonVoeuxContainner">
      <Button variant="default" className="ButtonValidVoeux">Valider</Button>
      <Button variant="default" className="ButtonRejectVoeux">Rejeter</Button>
      </div>                          
    </AccordionContent>
  </AccordionItem>
</Accordion>
);})}
         
          
      </div>
    );
    
  }
  
  export default AccordationCharge