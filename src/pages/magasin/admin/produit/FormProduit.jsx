import BaseForm from "@/components/magasin/BaseForm";
import InputLabel from "@/components/magasin/InputLabel";
import ProductRecords from "@/components/magasin/ProductRecords";
// import Select from "@/components/magasin/Select";
import { fetchData } from "@/lib/magasin/fetchData";
import { transpileProduct } from "@/lib/magasin/requestBodyTranspiler";
// import { transpileVat } from "@/lib/magasin/transpiler";
import { useState } from "react";

export default function FormProduit({title, initialValues, type, id}) {
    // const [vatList, setVatList] = useState([19, 7]);

    // const [label, setLabel] = useState(initialValues?.label || null);
    // const [refProduct, setRefProduct] = useState(initialValues?.refProduct || null);
    // const [vat, setVat] = useState(initialValues?.vat || null);
    // const [keyValues, setKeyValues] = useState(initialValues?.keyValues || [{id: 0}]);
    // const [values, setValues] = useState({label: '', ref: '', vat: '', keyValues: [{id: 0, key: '', value: ''}]});
    const [values, setValues] = useState(initialValues || {label: '', ref: '', vat: '', keyValues: [{id: 0, key: '', value: ''}]});

    function handleChange(e) {
        setValues(values => ({...values, [e.target.name]: e.target.value}));
    }

    // function handleVatChange(vat) {
    //     setValues(values => ({...values, vat}));
    // }

    function handleKeyValuesChange(keyValues) {
        setValues(values => ({...values, keyValues}));
    }

    function handleSave() {
        console.log(values);
        if(type === 'edit') {
            fetchData('PUT', `/api/isimm/gestionMagasin/magasin/Produit/${values.id}`, transpileProduct(values))
        } else if (type === 'add') {
            fetchData('POST', '/api/isimm/gestionMagasin/magasin/Produit', transpileProduct(values))
        }
    }

    return <BaseForm title={title} onSave={handleSave} type={type}>
        <div className="flex flex-row my-2">
            <InputLabel className="flex-1 mr-2" name="label" label="Libellé Produit" value={values.label} onChange={handleChange} />
            <InputLabel className="flex-1 ml-2" name="ref" label="Réf Produit" value={values.ref} onChange={handleChange} />
        </div>
        {/* <Select className="my-2" items={transpileVat(vatList)} name="vat" label="TVA" value={values.vat} onChange={handleVatChange} /> */}
        
        <ProductRecords records={values.keyValues} onChange={handleKeyValuesChange} type={type} />
    </BaseForm>
}