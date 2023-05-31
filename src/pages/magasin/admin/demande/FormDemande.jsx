import BaseForm from "@/components/magasin/BaseForm";
import DemandeBadge from "@/components/magasin/DemandeBadge";
import DemandeRecords from "@/components/magasin/DemandeRecords";
import TextAreaLabel from "@/components/magasin/TextAreaLabel";
import { Button } from "@/components/ui/Button";
import useProducts from "@/hooks/magasin/useProducts";
import { fetchData } from "@/lib/magasin/fetchData";
import { transpilePostDemandeBody } from "@/lib/magasin/requestBodyTranspiler";
import { useEffect, useState } from "react";

export default function FormDemande({title, type, employer, service, magasin, source, initialValues, id, editQte}) {
    const {isLoading, products} = useProducts();
    if(initialValues) {
        initialValues.records = initialValues?.records?.map(record => {
            return {...record, availableQuantity: 0}
        });
    }
    
    const [values, setValues] = useState(initialValues || {description: '', records: [{id: 1, quantity: 1, product: 1}]});
    const [records, setRecords] = useState(values.records);

    function showAccept() {
        return (type === 'accepter' && ((source==='employer' && values.status === 'pending' && service) || (source==='employer' && values.status === 'approved' && employer) || (source==='service' && values.status === 'pending' && magasin) || (source==='service' && values.status === 'approved' && service)))
    }

    function showQuantity() {
        return (type === 'accepter' && ((source==='employer' && values.status === 'pending' && service) || (source==='service' && values.status === 'pending' && magasin)))
    }

    function nextStatus() {
        if(source === 'employer') {
            if(values.status === 'pending') return 'approved';
            if(values.status === 'approved') return 'fullfield';
        } else if(source === 'service') {
            if(values.status === 'pending') return 'approved';
            if(values.status === 'approved') return 'fullfield';
        }
    }

    useEffect(() => {
        const propes = (source === 'employer') ? {employer : 1, magasin: 1} : (source === 'service' ? {service: 1, magasin: 1} : {magasin: 1});
        setValues({...values, ...propes})
    }, [])

    function init() {
        setValues({description: '', records: [{id: 1, quantity: 1, product: 1}]});
    }

    useEffect(() => {
        if(showQuantity() && isLoading === false) {
            const records = values.records?.map(record => {
                const product = products.find(product => product.id === record.product);
                return {...record, availableQuantity: product?.quantity}
            });
            setValues(values => ({...values, records}));
            setRecords(records);
        }
    }, [isLoading])

    function handleChange(e) {
        setValues(values => ({...values, [e.target.name]: e.target.value}));
    }

    function handleRecordsChange(records) {
        setValues(values => ({...values, records}));
        setRecords(records)
    }

    function handleSave() {
        fetchData(
            'POST',
            `${
                import.meta.env.VITE_API_URL
            }/api/isimm/gestionMagasin/magasin/DemandeStockable`,
            transpilePostDemandeBody({typeDemande: employer ? 'employer' : 'service', status: 'pending', employer, service, ...values}),
        );
        init();
    }

    function handleAccepter() {
        fetchData(
            'PUT',
            `${
                import.meta.env.VITE_API_URL
            }/api/isimm/gestionMagasin/magasin/DemandeStockable/${values.id}`,
            transpilePostDemandeBody({...values, status: nextStatus()})
        );
    }

    function handleRefuser() {
        fetchData(
            'PUT',
            `${
                import.meta.env.VITE_API_URL
            }/api/isimm/gestionMagasin/magasin/DemandeStockable/${values.id}`,
            transpilePostDemandeBody({...values, status: 'rejected'})
        );
    }

    if(isLoading || products === undefined) return <div>Loading...</div>;

    return <BaseForm title={title} onSave={handleSave} type={type}>
        {values.status && <div className="flex flex-row justify-end"><DemandeBadge status={values.status} /></div>}
        {/* <TextAreaLabel disabled={(editQte || type !== "add" || type !== "edit") ? true : undefined} name="description" label="Description" value={values.description} onChange={handleChange}/> */}
        <TextAreaLabel disabled={type === 'add' ? undefined : true} name="description" label="Description" value={values.description} onChange={handleChange}/>
        <DemandeRecords products={products} records={records} onChange={handleRecordsChange} type={type} editQte={showQuantity()} />
        {/* <Input type="hidden" name="typeDemande" value={employer ? employer : 'service'} /> */}
        {showAccept() && <div className="flex flex-row justify-end my-2">
            <Button variant='destructive' className="m-3" onClick={handleRefuser}>Refuser</Button>
            <Button onClick={handleAccepter} className="m-3">Accepter</Button>
        </div>}
    </BaseForm>
}