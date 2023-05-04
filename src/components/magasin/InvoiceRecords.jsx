import { transpileProducts } from "@/lib/magasin/transpiler";
import { verifyInvoiceRecord } from "@/lib/magasin/verify";
import { useEffect, useState } from "react";
import InputLabel from "./InputLabel";
import Records from "./Records";
import Select from "./Select";

function InvoiceRecord({products, initialValues, onChange, id}) {
    const [product, setProduct] = useState(initialValues?.product || null);
    const [quantite, setQuantite] = useState(initialValues?.quantite || 1);
    const [prix_unitaire, setPrixUnitaire] = useState(initialValues?.prix_unitaire || null);

    useEffect(() => {
        onChange({id, product, quantite: parseInt(quantite), prix_unitaire: parseInt(prix_unitaire)});
    }, [product, quantite, prix_unitaire, id, onChange]);

    return <>
        <Select className="flex-1 grow w-full mx-3" items={transpileProducts(products)} name="produit" label="Produit" value={product} onChange={setProduct} newButton />
        <InputLabel className="w-28 mx-3" name="quantite" label="Quantité" type="number" value={quantite} onChange={setQuantite} />
        <InputLabel className="w-28 mx-3" name="prix-unitaire" label="Prix Unitaire" type="number" value={prix_unitaire} onChange={setPrixUnitaire} />
        <small className="text-sm font-medium leading-none flex-1 self-center mx-3">{quantite * prix_unitaire} DT</small>
    </>
}

export default function InvoiceRecords({products, records, onChange}) {
    return <Records records={records} onChange={onChange} componentParams={{products}} RenderItem={InvoiceRecord} defaultRecordValues={{quantite: 1, prix_unitaire: 10}} verify={verifyInvoiceRecord} />
}