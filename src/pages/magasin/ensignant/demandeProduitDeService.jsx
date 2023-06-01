import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/Textarea"
import { Button } from "@/components/ui/Button"
import { Label } from "@/components/ui/Label"


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DemandeProduitService from "../utilities/DemandeProduitService";

const DemandeProduitDeService = () => {

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  const [demandeProduit, setDemandeProduit] = useState({
    id: "",
    name: "flen fouleni",
    date: date,
    typeProduit: "",
    quantity: "",
    commentaire: "",
    etat: "en attente"
  });

  const [errorTypeProduit, setErrorTypeProduit] = useState(false)
  const [errorQuantity, setErrorQuantity] = useState(false)

  const navigaye = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setDemandeProduit({ ...demandeProduit, [e.target.name]: value });
  };

  const saveProduit = (e) => {
    e.preventDefault();
    if(window.confirm('Are you sure you want to demand this product?') && verify() === true) {
      DemandeProduitService.saveDemandeProduit(demandeProduit)
      .then((response) => {
        console.log(response);
        navigaye("/magasin/enseignant/Consulter-demandes");
      })
      .catch((error) => {
        console.log(error);
      });
    }
  };

  const verify = () => {
    if(demandeProduit.typeProduit === ""){
      setErrorTypeProduit(true)
    }
    if(demandeProduit.typeProduit !== ""){
      setErrorTypeProduit(false)
    }
    if(demandeProduit.quantity <= 0 ){
      setErrorQuantity(true)
    }
    if(demandeProduit.quantity > 0 ){
      setErrorQuantity(false)
    }
    if(demandeProduit.quantity > 0 && demandeProduit.typeProduit !== ""){
      return true
    }
    else{
      return false
    }
  }
  
  const reset = (e) => {
    e.preventDefault();
    setDemandeProduit({
      id: "",
      typeProduit: "",
      quantity: "",
      commentaire: ""
    });
    setErrorQuantity(false)
    setErrorTypeProduit(false)
  };
    return (
        <div style={{ margin: "120px" }}>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Demander Produit
            </h1>
            <h2 className="mt-10 scroll-m-20 border-b border-b-slate-200 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 dark:border-b-slate-700">
                Ici, vous pouvez demander un produit de service correspondant
            </h2>
            <div className="font max-w-md scroll-m-20 text-4xl">
                <Label >Type de produit</Label>
                <select name="typeProduit" value={demandeProduit.typeProduit} onChange={(e) => handleChange(e)}  className="select form-select" >
                  <option style={{display:'none'}} >
                    Select Produit
                  </option>
                  <option value="TV" name="typeProduit">TV</option>
                  <option value="Cable" name="typeProduit">Cable</option>
                  <option value="Video Projector" name="typeProduit">Video Projector</option>
                </select>
               {
                  errorTypeProduit&&<span style={{color:'#FFA1A1'}} className="text-xs">
                    <br/>
                    Veuillez choisir un produit valide
                  </span>
                }
                
                <Label htmlFor="qte" className="sp">Quantité demandée</Label>
                <Input type="number" id="qte" placeholder="Quantité demandée"
                name="quantity"
                value={demandeProduit.quantity}
                onChange={(e) => handleChange(e)}
                required
                />
                {
                  errorQuantity&&<span style={{color:'#FFA1A1'}} className="text-xs errorText">
                    Veuillez entrer une quantité valide
                  </span>
                }
                <Label>Commentaires</Label>
                <Textarea placeholder="Votre commentaire ici"
                name="commentaire"
                value={demandeProduit.commentaire}
                onChange={(e) => handleChange(e)} />

                <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                    <Button onClick={saveProduit} >
                        Save
                    </Button>
                    <Button
                        onClick={reset}
                        className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6">
                        Clear
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default DemandeProduitDeService
