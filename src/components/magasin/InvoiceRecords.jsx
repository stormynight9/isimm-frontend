import { transpileProducts, transpileVat } from "@/lib/magasin/transpiler";
import { verifyInvoiceRecord } from "@/lib/magasin/verify";
import { useState } from "react";
import InputLabel from "./InputLabel";
import Records from "./Records";
import Select from "./Select";
import { transformInvoiceRecord } from "@/lib/magasin/transform";
import { roundTo3 } from "@/lib/magasin/math";

// les enregistrements de facture
function InvoiceRecord({products, initialValues, onChange, id, type}) {
    const [values, setValues] = useState(initialValues || {id, quantity: 1, product: 1, unit_price: 10, vat: 7});
    const vatList = [19, 7];

    async function handleChange(e) {
        if(e?.target?.name) {
            setValues(values => transformInvoiceRecord({...values, [e.target.name]: e.target.value}));
            onChange(transformInvoiceRecord({...values, [e.target.name]: e.target.value}));
        } else {}
    }

    function handleProductChange(id) {
        setValues(values => transformInvoiceRecord({...values, product: id}));
        onChange(transformInvoiceRecord({...values, product: id}));
    }
    
    function handleVatChange(vat) {
        vat = parseInt(vat);
        setValues(values => transformInvoiceRecord({...values, vat}));
        onChange(transformInvoiceRecord({...values, vat}));
    }

    const totalht = roundTo3(values.unit_price * values.quantity);
    const totaltva = roundTo3(totalht * values.vat / 100);
    const total = roundTo3(totalht + totaltva);
    return <>
        <Select className="flex-1 grow w-full mx-3" items={transpileProducts(products)} disabled={type === 'add' ? undefined : true} name="product" accessor='id' label="Produit" value={values.product} onChange={handleProductChange} newButton />
        <InputLabel className="w-28 mx-3" name="quantity" label="Quantité" type="number" disabled={type === 'add' ? undefined : true} value={values.quantity} onChange={handleChange} />
        <InputLabel className="w-28 mx-3" name="unit_price" label="Prix Unitaire" type="number" disabled={type === 'add' ? undefined : true} value={values.unit_price} onChange={handleChange} />
        <Select className="mx-3" items={transpileVat(vatList)} name="vat" label="TVA" accessor='id' disabled={type === 'add' ? undefined : true} value={values.vat} onChange={handleVatChange} />
        {/* { values.quantity && values.unit_price && <small className="text-sm font-medium leading-none flex-1 self-center mx-3">{values.quantity * values.unit_price} DT</small> } */}
        <InputLabel className="w-28 mx-3" disabled label="Sous-total HT" type="number" value={totalht} onChange={() => {}} />
        <InputLabel className="w-28 mx-3" disabled label="Sous-total TVA" type="number" value={totaltva} onChange={() => {}} />
        <InputLabel className="w-28 mx-3" disabled label="Sous-total TTC" type="number" value={total} onChange={() => {}} />
    </>
}

export default function InvoiceRecords({products, records, onChange, type}) {
    return <Records records={records} onChange={onChange} componentParams={{products}} RenderItem={InvoiceRecord} defaultRecordValues={{quantity: 1, unit_price: 10}} verify={verifyInvoiceRecord} type={type} />
}