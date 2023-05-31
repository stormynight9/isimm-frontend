import BaseForm from "@/components/magasin/BaseForm";
import InputLabel from "@/components/magasin/InputLabel";
import { fetchData } from "@/lib/magasin/fetchData";
import { transpileFournisseur } from "@/lib/magasin/requestBodyTranspiler";
import { useState } from "react";

export default function FormFournisseur({title, initialValues, type, id}) {
    const [values, setValues] = useState(initialValues || {name: '', ref: '', address: '', phone: ''});

    function handleChange(e) {
        setValues(values => ({...values, [e.target.name]: e.target.value}));
    }

    function init() {
        setValues({name: '', ref: '', address: '', phone: ''});
    }

    function handleSave() {
        if(type==="add") {
            fetchData('POST', `${
                import.meta.env.VITE_API_URL
            }/api/isimm/gestionMagasin/magasin/Fournisseur`, transpileFournisseur(values));
            init();

        } else if(type==="edit") {
            fetchData('PUT', `${
                import.meta.env.VITE_API_URL
            }/api/isimm/gestionMagasin/magasin/Fournisseur/${values.id}`, transpileFournisseur(values));
        }
    }

    return <BaseForm title={title} onSave={handleSave} type={type}>
        <div className="flex flex-row my-2">
            <InputLabel disabled={(type === "add" || type === "edit") ? undefined : true} className="flex-1 mr-2" name="label" label="Libellé" value={values.label} onChange={handleChange} />
            <InputLabel disabled={(type === "add" || type === "edit") ? undefined : true} className="flex-1 ml-2" name="email" label="Adresse Email" value={values.email} onChange={handleChange} />
        </div>
        <div className="flex flex-row my-2">
            <InputLabel disabled={(type === "add" || type === "edit") ? undefined : true} className="flex-1 mr-2" name="address" label="Adresse" value={values.address} onChange={handleChange} />
            <InputLabel disabled={(type === "add" || type === "edit") ? undefined : true} className="flex-1 ml-2" name="phone" label="Numéro Télephone" value={values.phone} onChange={handleChange} />
        </div>
    </BaseForm>
}