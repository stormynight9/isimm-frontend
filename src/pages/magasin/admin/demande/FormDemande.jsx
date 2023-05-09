import BaseForm from "@/components/magasin/BaseForm";
import DemandeRecords from "@/components/magasin/DemandeRecords";
import TextAreaLabel from "@/components/magasin/TextAreaLabel";
import { Input } from "@/components/ui/Input";
import useFetch from "@/hooks/magasin/useFetch";
import useProducts from "@/hooks/magasin/useProducts";
import { fetchData } from "@/lib/magasin/fetchData";
import { transpilePostDemandeBody } from "@/lib/magasin/requestBodyTranspiler";
import { useEffect, useState } from "react";

export default function FormDemande({title, type, employer, service, initialValues, id}) {
    const {isLoading, products} = useProducts();
    const [values, setValues] = useState(initialValues || {description: '', records: [{id: 1, quantity: 1, product: 1}]});
    // const [records, setRecords] = useState([{id: 1, quantity: 1, product: 1}]);

    function init() {
        setValues({description: '', records: [{id: 1, quantity: 1, product: 1}]});
        // setRecords([{id: 1, quantity: 1, product: 1}]);
    }

    // useEffect(() => {
    //     console.log(records);
    // }, [records]);

    function handleChange(e) {
        setValues(values => ({...values, [e.target.name]: e.target.value}));
    }

    function handleRecordsChange(records) {
        setValues(values => ({...values, records}));
    }

    function handleSave() {
        console.log(transpilePostDemandeBody({typeDemande : employer ? 'employer' : 'service', employer, service, ...values}));
        fetchData(
            'POST',
            'http://localhost:8090/api/isimm/gestionMagasin/magasin/DemandeStockable',
            transpilePostDemandeBody({typeDemande: employer ? 'employer' : 'service', employer, service, ...values}),
        );
        init();
    }

    if(isLoading) return <div>Loading...</div>;

    return <BaseForm title={title} onSave={handleSave} type={type}>
        <TextAreaLabel name="description" label="Description" value={values.description} onChange={handleChange}/>
        <DemandeRecords products={products} records={values.records} onChange={handleRecordsChange} type={type} />
        {/* <Input type="hidden" name="typeDemande" value={employer ? employer : 'service'} /> */}
    </BaseForm>
}