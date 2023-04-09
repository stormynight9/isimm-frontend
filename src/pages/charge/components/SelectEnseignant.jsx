import React from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select"
const SelectEnseignant = () => {
    return (
        <Select>
            <SelectTrigger>
                <SelectValue placeholder="Enseignat" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="Manel Sekma">Manel Sekma</SelectItem>
                <SelectItem value="Mohamed Graiet">Mohamed Graiet</SelectItem>
                <SelectItem value="Imed Abbassi">Imed Abbassi</SelectItem>
            </SelectContent>
        </Select>
    )
}

export default SelectEnseignant
