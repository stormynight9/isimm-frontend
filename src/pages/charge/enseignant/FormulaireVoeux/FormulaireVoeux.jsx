
import "./FormulaireVoeux.css"
import { Label } from "@/components/ui/Label"
import { Textarea } from "@/components/ui/Textarea"

const FormulaireVoeux = () => {
    return (
        <div>
            <div className="row1">
            <Label className="ens1">Enseignat  : </Label>
            <Label className="ens">Monsieur X </Label>
            </div>


            <div className="row2">
            <Label className="mat1">Matiére    : </Label>
            <Label className="mat">Analyse de données</Label>
            </div>
            
            <div className="row3">
            <Label className="type1">Type : </Label>
            <Label className="type">Cours </Label>
            </div>

            <div className="row4">
        <Label className="mess">Message : </Label>
        </div>
        <div className="row5">
        <Textarea type="text"  placeholder="laissez votre messzge ici ..." />
        </div>

        
     


        </div>
    )
}

export default FormulaireVoeux