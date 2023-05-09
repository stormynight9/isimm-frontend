import BaseForm from "@/components/magasin/BaseForm";
import InputLabel from "@/components/magasin/InputLabel";
import { useState } from "react";

export default function FormFournisseur({title, initialValues, id}) {
    const [values, setValues] = useState({name: '', ref: '', address: '', phone: '', ...initialValues});

    function handleChange(e) {
        setValues(values => ({...values, [e.target.name]: e.target.value}));
    }

    function handleSave() {
        console.log(values);
    }

    return <BaseForm title={title} onSave={handleSave}>
        <div className="flex flex-row my-2">
            <InputLabel className="flex-1 mr-2" name="label" label="Libellé" value={values.label} onChange={handleChange} />
            <InputLabel className="flex-1 ml-2" name="ref" label="Réference" value={values.ref} onChange={handleChange} />
        </div>
        <div className="flex flex-row my-2">
            <InputLabel className="flex-1 mr-2" name="address" label="Adresse" value={values.address} onChange={handleChange} />
            <InputLabel className="flex-1 ml-2" name="phone" label="Numéro Télephone" value={values.phone} onChange={handleChange} />
        </div>
    </BaseForm>
}