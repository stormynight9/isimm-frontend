import { verifyProductRecord } from '@/lib/magasin/verify';
import { useState, useEffect } from 'react';
import InputLabel from './InputLabel';
import Records from './Records';

function ProductRecord({initialValues, onChange, id}) {
    const [key, setKey] = useState(initialValues?.key || '');
    const [value, setValue] = useState(initialValues?.value || '');

    useEffect(() => {
        onChange({id, key, value});
    }, [key, value, id, onChange]);

    return <>
        <InputLabel className="mx-3" name="key" label="Nom de l'attribut" value={key} onChange={setKey} />
        <InputLabel className="mx-3" name="value" label="Valeur de l'attribut" value={value} onChange={setValue} />
    </>
}

export default function ProductRecords({records, onChange}) {
    return <Records records={records} onChange={onChange} RenderItem={ProductRecord} defaultRecordValues={{key: '', value: ''}} verify={verifyProductRecord} />
}