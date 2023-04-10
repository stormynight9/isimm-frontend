
import "./FormulaireVoeux.css"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select"
import { RadioGroup,RadioGroupItem } from "@/components/ui/RadioGroup"
import { Label } from "@/components/ui/Label"

const FormulaireVoeux = () => {
    return (
        <div>
            <Label>Diplome : </Label>
            <Select>
            <SelectTrigger>
                <SelectValue placeholder="Diplome ..." />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="Ingenieur">Ingenieur</SelectItem>
                <SelectItem value="Licence">Licence</SelectItem>
                <SelectItem value="Master">Master</SelectItem>
                <SelectItem value="MasterPro">Master Professionnel</SelectItem>
                
            </SelectContent>
        </Select>

        <Label>Section : </Label>
            <Select>
            <SelectTrigger>
                <SelectValue placeholder="Section ..." />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="TIC">TIC</SelectItem>
                <SelectItem value="Informatique">Informatique</SelectItem>
                <SelectItem value="MicroElectronique">MicroElectronique</SelectItem>
                <SelectItem value="EEA">EEA</SelectItem>
                
            </SelectContent>
        </Select>

        <Label>Niveau : </Label>
            <Select>
            <SelectTrigger>
                <SelectValue placeholder="Niveau ..." />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="1er année">1er année</SelectItem>
                <SelectItem value="2éme année">2éme année</SelectItem>
                <SelectItem value="3éme année">3éme année</SelectItem>
                
            </SelectContent>
        </Select>

        <Label>Matiére : </Label>
            <Select>
            <SelectTrigger>
                <SelectValue placeholder="Matiére ..." />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="Analyse de données">Base de donnée</SelectItem>
                <SelectItem value="Mathématiques des réseaux de neurones">Mathématiques des réseaux de neurones</SelectItem>
                <SelectItem value="Structures de données avancées en Python">Structures de données avancées en Python</SelectItem>
                <SelectItem value="Techniques de construction d’analyseurs lexicosyntaxiques">Techniques de construction d’analyseurs lexicosyntaxiques</SelectItem>
                <SelectItem value="Applications logicielles d'entreprise">Applications logicielles d'entreprise</SelectItem>
                <SelectItem value="Modélisation UML/OCL">Modélisation UML/OCL</SelectItem>
                <SelectItem value="Programmation Web avancée">Programmation Web avancée</SelectItem>
                <SelectItem value="Programmation mobile">Programmation mobile</SelectItem>
                <SelectItem value="Projet Web/mobile">Projet Web/mobile</SelectItem>
                <SelectItem value="Anglais – certification 1">Anglais – certification 1</SelectItem>
                <SelectItem value="Français – certification 2">Français – certification 2</SelectItem>
                <SelectItem value="Techniques de communication 1 : communication et connaissance du soi">Techniques de communication 1 : communication et connaissance du soi</SelectItem>

                
            </SelectContent>
        </Select>

        <Label>Précisez votre choix : </Label>
        <RadioGroup defaultValue="Cours">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="tp" id="r1" />
        <Label htmlFor="r1">Tp</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="Cours" id="r2" />
        <Label htmlFor="r2">Cours</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="TD" id="r3" />
        <Label htmlFor="r3">TD</Label>
      </div>
    </RadioGroup>


        </div>
    )
}

export default FormulaireVoeux