import FormulaireVoeuxStyles from "./FormulaireVoeux.module.css"
import { Label } from "@/components/ui/Label"
import { Textarea } from "@/components/ui/Textarea"

const FormulaireVoeux = (props) => {
    const { matiereName, matiereType } = props
    return (
        <div className={FormulaireVoeuxStyles.FormulaireContainer}>
            <div className={FormulaireVoeuxStyles.row}>
                <Label className={FormulaireVoeuxStyles.ens1}>Enseignat : </Label>
                <Label className={FormulaireVoeuxStyles.ens}>Monsieur X </Label>
            </div>

            <div className={FormulaireVoeuxStyles.row}>
                <Label className={FormulaireVoeuxStyles.mat1}>Matiére : </Label>
                <Label className={FormulaireVoeuxStyles.mat}>{matiereName}</Label>
            </div>

            <div className={FormulaireVoeuxStyles.row}>
                <Label className={FormulaireVoeuxStyles.type1}>Type : </Label>
                <Label className={FormulaireVoeuxStyles.type}>{matiereType}</Label>
            </div>

            <div className={FormulaireVoeuxStyles.row}>
                <Label className={FormulaireVoeuxStyles.mess}>Message : </Label>
            </div>
            <div className={FormulaireVoeuxStyles.row}>
                <Textarea type="text" style={{ resize: "none" }} placeholder="laissez votre message ici ..." />
            </div>
        </div>
    )
}

export default FormulaireVoeux
