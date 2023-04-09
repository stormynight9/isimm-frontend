import "./Accordation.css"
import { useState } from 'react';
import { Button } from "@/components/ui/Button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/Accordion"
const Voeux =[
    {NomEnseignant:' Hamel Lazhar', NomMatiere:'Analyseur syntaxique' , desc :'Nothing to say'},
    {NomEnseignant:' Gzara meriem', NomMatiere:'Machine Learning' ,desc : 'Hellllo'}, 
    {NomEnseignant:' Manel sekma ', NomMatiere:'Analyse de données ' ,desc : 'gzregzg'}, 


  ]
function AccordationCharge() {
    const [voeux,setVoeux]=useState(Voeux)

    return (
      <div>
{ Voeux.map((voeux,i)=>{
                              return (
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger> Voeux d'enseignant  : {voeux.NomEnseignant} </AccordionTrigger>
    <AccordionContent>
      <p>
      Matiere : {voeux.NomMatiere}
      </p>
      <p><br/>
      Description : {voeux.desc}
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