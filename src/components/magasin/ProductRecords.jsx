import { verifyProductRecord } from '@/lib/magasin/verify';
import { useState } from 'react';
import InputLabel from './InputLabel';
import Records from './Records';

function ProductRecord({initialValues, onChange, id, type}) {
    const [values, setValues] = useState(initialValues || {id, key: '', value: ''});

    function handleChange(e) {
        setValues(values => ({...values, [e.target.name]: e.target.value}));
        onChange({...values, [e.target.name]: e.target.value});
    }

    return <>
        <InputLabel className="mx-3" name="key" label="Nom de l'attribut" disabled={type === 'add' ? undefined : true} value={values.key} onChange={handleChange} />
        <InputLabel className="mx-3" name="value" label="Valeur de l'attribut" disabled={type === 'add' ? undefined : true} value={values.value} onChange={handleChange} />
    </>
}

export default function ProductRecords({records, onChange, type}) {
    return <Records records={records} onChange={onChange} RenderItem={ProductRecord} defaultRecordValues={{key: '', value: ''}} verify={verifyProductRecord} type={type} />
}