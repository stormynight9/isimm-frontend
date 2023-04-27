import BaseForm from "@/components/magasin/BaseForm";
import DemandeRecords from "@/components/magasin/DemandeRecords";
import { useEffect, useState } from "react";

export default function FormDemande({title, type, id}) {
    const [products, setProducts] = useState([{id: 1, tva: 19, ref: 'P-0001', name: 'Brosse'}]);

    const [records, setRecords] = useState([{id: 1, quantite: 1, product: 1}]);

    useEffect(() => {
        console.log(records);
    }, [records]);

    function handleSave() {

    }

    return <BaseForm title={title} onSave={handleSave}>
        <DemandeRecords products={products} records={records} onChange={setRecords} />
    </BaseForm>
}