import BaseForm from "@/components/magasin/BaseForm";
import InputLabel from "@/components/magasin/InputLabel";
import InvoiceRecords from "@/components/magasin/InvoiceRecords";
import Select from "@/components/magasin/Select";
import useFetch from "@/hooks/magasin/useFetch";
import useProducts from "@/hooks/magasin/useProducts";
import { transpileFournisseurs } from "@/lib/magasin/transpiler";
import { useEffect, useState } from "react";

export default function FormFacture({title, initialValues, type, id}) {
    const [products, setProducts] = useState()
    useProducts({setProducts});
    const [fournisseurs, setFournisseurs] = useState([{id: 1, ref: 'F-0001', name: 'Ste Plus'}]);

    const [dateFacturation, setDateFacturation] = useState(initialValues?.dateFacturation || null);
    const [fournisseur, setFournisseur] = useState(initialValues?.fournisseur || null);
    const [records, setRecords] = useState([{id: 0, quantite: 1, prix_unitaire: 10, product: 1}]);

    // useEffect(() => {
    //     console.log(records);
    // }, [records]);

    function handleSave() {
        // useFetch({});
    }

    return <BaseForm title={title} onSave={handleSave}>
        <div className="flex flex-row my-2">
            <InputLabel className="flex-1 mr-1" name="date" label="Date" type="date" value={dateFacturation} onChange={setDateFacturation} />
            <Select className="flex-1 ml-1" items={transpileFournisseurs(fournisseurs)} name="fournisseur" label="Fournisseur" value={fournisseur} onChange={setFournisseur} />
        </div>
        <InvoiceRecords products={products} records={records} onChange={setRecords} />
    </BaseForm>
}