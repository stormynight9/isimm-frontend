import React , { useState, useEffect }from "react"
import axios from 'axios'
import "./RechercherEnseignant.css"
import { Button } from "@/components/ui/Button"
import { Label } from "@/components/ui/Label"
import { Input } from "@/components/ui/Input"
import { Link } from "react-router-dom"

const RechercherEnseignant = () => {
    const [inputValue, setInputValue] = useState('');
    const [Enseignant,setEnseignant]=useState('');

    function handleInputChange(event) {
        setInputValue(event.target.value);
      }
    
    const onClickButton =() => {
        axios.get(`http://localhost:8090/api/isimm/distributionCharge/enseignant?nom=${inputValue}`)
        .then((res) => {
          if (res && res.data) {
            localStorage.setItem("id",res.data[0].enseignantId)
            localStorage.setItem("nom",res.data[0].nom)
            localStorage.setItem("prenom",res.data[0].prenom)
            localStorage.setItem("cin",res.data[0].cin)
            localStorage.setItem("nombreHeures",res.data[0].nombreHeures)
          }
        })
        .catch((error) => {
          console.log(error.response.data.message);
        });
        
    }
   
    return (
        <div className="Rechercher-Enseignant-Container">
            <div className="Rechercher-Enseignant">
                <Label className="Label-Enseignant">Nom Enseignant :</Label>
                <Input type="text" placeholder="Entrer nom enseignant..." className="Input-Enseignant" value={inputValue} onChange={handleInputChange} />
                <Link to="/charge/consultation-enseignant">
                    <Button className="Button-Enseignant" onClick={onClickButton}>Rechercher</Button> 
                </Link>
            </div>
        </div>
    )
}

export default RechercherEnseignant
