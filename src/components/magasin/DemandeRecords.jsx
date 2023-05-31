import { transpileProducts } from "@/lib/magasin/transpiler";
import { verifyDemandeRecord } from "@/lib/magasin/verify";
import { useState } from "react";
import InputLabel from "./InputLabel";
import Records from "./Records";
import Select from "./Select";
import { transformDemandeRecord } from "@/lib/magasin/transform";

// les enregistrements de demande
function DemandeRecord({products, initialValues, onChange, id, type, editQte}) {
    const [values, setValues] = useState(initialValues || {id, quantity: 1, product: 1});

    function handleChange(e) {
        setValues(values => transformDemandeRecord({...values, [e.target.name]: e.target.value}));
        onChange(transformDemandeRecord({...values, [e.target.name]: e.target.value}));
    }

    function handleProductChange(id) {
        setValues(values => transformDemandeRecord({...values, product: id}));
        onChange(transformDemandeRecord({...values, product: id}));
    }

    return <>
        <Select className="flex-1 grow w-full mx-3" items={transpileProducts(products)} disabled={type === 'add' ? undefined : true} name="product" label="Produit" value={values.product} accessor='id' onChange={handleProductChange}/>
        <InputLabel disabled={(editQte || type === "add") ? undefined : true} className="w-28 mx-3" name="quantity" label="Quantité" type="number" value={values.quantity} onChange={handleChange} />    
        {(values.availableQuantity || values.availableQuantity !== undefined) && <>
            <InputLabel disabled className="text-red-500 text-sm" label='Quantité disponible' value={values.availableQuantity} onChange={() => {}} />
            <InputLabel disabled className="text-red-500 text-sm" label='Quantité restante' value={values.availableQuantity - values.quantity} onChange={() => {}} />
        </>}
    </>
}

export default function DemandeRecords({products, records, onChange, type, editQte}) {
    return <Records records={records} onChange={onChange} componentParams={{products, editQte}} RenderItem={DemandeRecord} defaultRecordValues={{product: 1, quantity: 1}} verify={verifyDemandeRecord} type={type} />
}