import BaseForm from "@/components/magasin/BaseForm";
import InputLabel from "@/components/magasin/InputLabel";
import ProductRecords from "@/components/magasin/ProductRecords";
import Select from "@/components/magasin/Select";
import { transpileVat } from "@/lib/magasin/transpiler";
import { useState } from "react";

export default function FormProduit({title, initialValues, type, id}) {
    const [vatList, setVatList] = useState([19, 7]);

    const [label, setLabel] = useState(initialValues?.label || null);
    const [refProduct, setRefProduct] = useState(initialValues?.refProduct || null);
    const [vat, setVat] = useState(initialValues?.vat || null);
    const [keyValues, setKeyValues] = useState(initialValues?.keyValues || [{id: 0}]);

    function handleSave() {

    }

    return <BaseForm title={title} onSave={handleSave}>
        <div className="flex flex-row my-2">
            <InputLabel className="flex-1 mr-2" name="label" label="Libellé Produit" value={label} onChange={setLabel} />
            <InputLabel className="flex-1 ml-2" name="ref" label="Réf Produit" value={refProduct} onChange={setRefProduct} />
        </div>
        <Select className="my-2" items={transpileVat(vatList)} name="vat" label="TVA" value={vat} onChange={setVat} />
        
        <ProductRecords records={keyValues} onChange={setKeyValues} />
    </BaseForm>
}