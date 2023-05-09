// import { transpileProducts } from "@/lib/magasin/transpiler";
// import { verifyDemandeRecord } from "@/lib/magasin/verify";
// import { useEffect, useState } from "react";
// import InputLabel from "./InputLabel";
// import Records from "./Records";
// import Select from "./Select";

// function DemandeRecord({products, initialValues, onChange}) {
//     const [product, setProduct] = useState(initialValues?.product || null);
//     const [quantite, setQuantite] = useState(initialValues?.quantite || 1);

//     useEffect(() => {
//         onChange({product, quantite: parseInt(quantite)});
//     }, [product, quantite]);

//     return <>
//         <Select className="flex-1 m-3" items={transpileProducts(products)} name="produit" label="Produit" value={product} onChange={setProduct}/>
//         <InputLabel name="quantite m-3" label="Quantité" value={quantite} onChange={setQuantite} />
//     </>
// }

// export default function DemandeRecords({products, records, onChange}) {
//     return <Records records={records} onChange={onChange} componentParams={{products}} RenderItem={DemandeRecord} defaultRecordValues={{quantite: 1, prix_unitaire: 10}} verify={verifyDemandeRecord} />
// }

import { transpileProducts } from "@/lib/magasin/transpiler";
import { verifyDemandeRecord } from "@/lib/magasin/verify";
import { useState } from "react";
import InputLabel from "./InputLabel";
import Records from "./Records";
import Select from "./Select";
import { transformDemandeRecord } from "@/lib/magasin/transform";

function DemandeRecord({products, initialValues, onChange, id, type}) {
    const [values, setValues] = useState(initialValues || {id, quantity: 1, product: 1});

    // useEffect(() => {
    //     console.log(values);
    // }, [values]);

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
        <InputLabel className="w-28 mx-3" name="quantity" label="Quantité" type="number" value={values.quantity} onChange={handleChange} />    
    </>
}

export default function DemandeRecords({products, records, onChange, type}) {
    return <Records records={records} onChange={onChange} componentParams={{products}} RenderItem={DemandeRecord} defaultRecordValues={{product: 1, quantity: 1}} verify={verifyDemandeRecord} type={type} />
}