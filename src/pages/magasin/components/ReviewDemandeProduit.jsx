import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/Textarea"
import { Button } from "@/components/ui/Button"
import { Label } from "@/components/ui/Label"

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DemandeProduitService from "../utilities/DemandeProduitService";


const UpdateDemandeProduit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
  const [demandeProduit, setDemandeProduit] = useState({
    id: id,
    name: "",
    date: date,
    typeProduit: "",
    quantity: "",
    commentaire: "",
    etat: ""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setDemandeProduit({ ...demandeProduit, [e.target.name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await DemandeProduitService.getDemandeProduitById(demandeProduit.id);
        setDemandeProduit(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [demandeProduit.id]);

  const updateDemandeProduit = (e) => {
    e.preventDefault();
    console.log(demandeProduit);
    DemandeProduitService.updateDemandeProduit(demandeProduit, id)
      .then((response) => {
        navigate("/magasin/enseignant/Consulter-demandes");
      })
      .catch((error) => {
        console.log(error);
      });
  };

    return (
        <div style={{ margin: "120px" }}>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Mettre à jour le produit
            </h1>
            <h2 className="mt-10 scroll-m-20 border-b border-b-slate-200 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 dark:border-b-slate-700">
              Ici, vous pouvez faire une mise a jour du produit selecte
            </h2>
            <div className="font max-w-md scroll-m-20 text-4xl">
                <Label >Type de produit</Label>
                <select name="typeProduit" value={demandeProduit.typeProduit} onChange={(e) => handleChange(e)}  className="select form-select" disabled >
                  <option defaultValue >
                    Select Produit
                  </option>
                  <option value="TV" name="typeProduit">TV</option>
                  <option value="Cable" name="typeProduit">Cable</option>
                  <option value="Video Projector" name="typeProduit">Video Projector</option>
                </select>
                <br/>
                <Label htmlFor="qte">Quantité demandée</Label>
                <Input type="number" id="qte" placeholder="Quantité demandée"
                name="quantity"
                value={demandeProduit.quantity}
                onChange={(e) => handleChange(e)}
                required
                disabled 
                />
                <Label>Commentaires</Label>
                <Textarea placeholder="Votre commentaire ici"
                name="commentaire"
                value={demandeProduit.commentaire}
                onChange={(e) => handleChange(e)} disabled />

                <Label >Review Demande</Label>
                <select name="etat" value={demandeProduit.etat} onChange={(e) => handleChange(e)}  className="select form-select">
                  <option style={{display:'none'}} >
                      En attente
                  </option>
                  <option value="approuvée" name="etat">Approuvée</option>
                  <option value="refusé" name="etat">Refusé</option>
                </select>
                
                <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                    <Button onClick={updateDemandeProduit} >
                        Update
                    </Button>
                    <Button
                        onClick={() => navigate("/magasin/enseignant/Consulter-demandes")}
                        className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6">
                        Cancel
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default UpdateDemandeProduit
