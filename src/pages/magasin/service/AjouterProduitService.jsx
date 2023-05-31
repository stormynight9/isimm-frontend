import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/Textarea"
import { Button } from "@/components/ui/Button"
import { Label } from "@/components/ui/Label"


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProduitService from "../utilities/ProduitService";

const AjouterProduit = () => {
      const [produit, setProduit] = useState({
        id: "",
        typeProduit: "",
        quantity: "",
        commentaire: ""
      });

      const [errorTypeProduit, setErrorTypeProduit] = useState(false)
      const [errorQuantity, setErrorQuantity] = useState(false)
    
      const navigaye = useNavigate();
    
      const handleChange = (e) => {
        const value = e.target.value;
        setProduit({ ...produit, [e.target.name]: value });
      };
    
      const saveProduit = (e) => {
        e.preventDefault();
        if(window.confirm('Are you sure you want to add this product?') && verify() === true){
        ProduitService.saveProduit(produit)
          .then((response) => {
            console.log(response);
            navigaye("/magasin/service/Consulter-produits");
          })
          .catch((error) => {
            console.log(error);
          });
        }
      };

      const verify = () => {
        if(produit.typeProduit === ""){
          setErrorTypeProduit(true)
        }
        if(produit.typeProduit !== ""){
          setErrorTypeProduit(false)
        }
        if(produit.quantity <= 0 ){
          setErrorQuantity(true)
        }
        if(produit.quantity > 0 ){
          setErrorQuantity(false)
        }
        if(produit.quantity > 0 && produit.typeProduit !== ""){
          return true
        }
        else{
          return false
        }
      }
    
      const reset = (e) => {
        e.preventDefault();
        setProduit({
          id: "",
          typeProduit: "",
          quantity: "",
          commentaire: ""
        });
      };
    return (
        <div style={{ margin: "120px" }}>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Ajouter produit au service</h1>
            <h2 className="mt-10 scroll-m-20 border-b border-b-slate-200 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 dark:border-b-slate-700">Ici, vous pouvez demander un produit du magasin de l'université</h2>
            <div className="font max-w-md scroll-m-20 text-4xl">
                <Label >Type de produit</Label>
                <select name="typeProduit" value={produit.typeProduit} onChange={(e) => handleChange(e)}  className="select form-select">
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
                value={produit.quantity}
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
                value={produit.commentaire}
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

export default AjouterProduit
