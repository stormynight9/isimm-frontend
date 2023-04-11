import "./FormulaireVoeux.css"
import { Label } from "@/components/ui/Label"
import { Textarea } from "@/components/ui/Textarea"

const FormulaireVoeux = (props) => {
    const {matiereName,matiereType}=props
    return (
        <div className="FormulaireContainer">
            <div className="row">
                <Label className="ens1">Enseignat : </Label>
                <Label className="ens">Monsieur X </Label>
            </div>

            <div className="row">
                <Label className="mat1">Matiére : </Label>
                <Label className="mat">{matiereName}</Label>
            </div>

            <div className="row">
                <Label className="type1">Type : </Label>
                <Label className="type">{matiereType}</Label>
            </div>

            <div className="row">
                <Label className="mess">Message : </Label>
            </div>
            <div className="row">
                <Textarea type="text" style={{ resize: "none" }} placeholder="laissez votre message ici ..." />
            </div>
        </div>
    )
}

export default FormulaireVoeux
