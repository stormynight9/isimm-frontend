import BaseForm from "@/components/magasin/BaseForm";
import DemandeRecords from "@/components/magasin/DemandeRecords";
import { Input } from "@/components/ui/Input";
import useProducts from "@/hooks/magasin/useProducts";
import { useEffect, useState } from "react";

export default function FormDemande({title, type, employer, id}) {
    const [products, setProducts] = useState([])
    useProducts({setProducts});

    const [formValues, setFormValues] = useState({
        typeDemande: employer ? employer : 'service',
        records: [{id: 1, quantite: 1, product: 1}]
    });

    function handleFormUpdate(e) {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    }

    const [records, setRecords] = useState();

    useEffect(() => {
        console.log(records);
    }, [records]);

    function handleSave() {

    }

    return <BaseForm title={title} onSave={handleSave}>
        <DemandeRecords products={products} records={records} onChange={setRecords} />
        <Input type="hidden" name="typeDemande" value={employer ? employer : 'service'} />
    </BaseForm>
}