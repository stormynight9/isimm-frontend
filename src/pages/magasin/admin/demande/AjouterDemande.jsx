import { useEffect, useState } from "react";
import FormDemande from "./FromDemande";

export default function AjouterDemande() {
    const [products, setProducts] = useState([{id: 1, tva: 19, ref: 'P-0001', name: 'Brosse'}]);

    const [records, setRecords] = useState([{id: 1, quantite: 1, product: 1}]);

    useEffect(() => {
        console.log(records);
    }, [records]);

    return <FormDemande title="Ajouter une Demande"/>
}