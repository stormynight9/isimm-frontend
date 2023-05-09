import BaseForm from "@/components/magasin/BaseForm";
import InputLabel from "@/components/magasin/InputLabel";
import InvoiceRecords from "@/components/magasin/InvoiceRecords";
import Select from "@/components/magasin/Select";
import useFetch from "@/hooks/magasin/useFetch";
import useFournisseurs from "@/hooks/magasin/useFournisseurs";
import useProducts from "@/hooks/magasin/useProducts";
import { transpileFournisseurs } from "@/lib/magasin/transpiler";
import { useEffect, useState } from "react";

export default function FormFacture({title, initialValues, type, id}) {
    const {isLoading: isLoadingProducts, products} = useProducts();
    const {isLoading: isLoadingFournisseurs, fournisseurs} = useFournisseurs();

    useEffect(() => {
        console.log(fournisseurs);
    }, [fournisseurs]);

    // const [dateFacturation, setDateFacturation] = useState(initialValues?.dateFacturation || null);
    // const [fournisseur, setFournisseur] = useState(initialValues?.fournisseur || null);
    // const [records, setRecords] = useState([{id: 0, quantite: 1, prix_unitaire: 10, product: 1}]);

    const [values, setValues] = useState(initialValues || {dateFacturation: '', fournisseur: '', records: [{tav: 7}]});

    function handleChange(e) {
        setValues(values => ({...values, [e.target.name]: e.target.value}));
    }

    function handleFournisseurChange(fournisseur) {
        setValues(values => ({...values, fournisseur}));
    }

    function handleRecordsChange(records) {
        // setRecords(records);

        setValues(values => {
            // let nitems = values.records.reduce((acc, record) => acc + record.quantite, 0);
            // let nproducts = values.records.length;
            // let totalht = values.records.reduce((acc, record) => acc + record.ht, 0);
            // let totaltva = values.records.reduce((acc, record) => acc + record.tva, 0);
            // let total = values.records.reduce((acc, record) => acc + record.ttc, 0);
            // return {...values, records, totaltva, totalht, total, nitems, nproducts}
            return {...values, records}
        });
    }

    // useEffect(() => {
    //     console.log(records);
    // }, [records]);

    function handleSave() {
        // useFetch({});
    }

    if(isLoadingProducts || isLoadingFournisseurs) return <div>Loading...</div>;

    // console.log(fournisseurs)

    return <BaseForm title={title} onSave={handleSave}>
        <div className="flex flex-row my-2">
            <InputLabel className="flex-1 mr-1" disabled={type==='visit' ? true : undefined} name="dateFacturation" label="Date" type="date" value={values.dateFacturation} onChange={handleChange} />
            <Select className="flex-1 ml-1" items={transpileFournisseurs(fournisseurs)} accessor="id" name="fournisseur" label="Fournisseur" value={values.fournisseur} onChange={handleFournisseurChange} />
        </div>
        <InvoiceRecords products={products} records={values.records} onChange={handleRecordsChange} type={type}/>
        <div className="flex flex-col my-2">
            <InputLabel className="flex-1 mr-1" disabled label="Nombre de produits" type="number" value={values.nproducts + ""} onChange={() => {}} />
            <InputLabel className="flex-1 ml-1" disabled label="Nombre d'articles" type="number" value={values.nitems} onChange={() => {}} />
        </div>
    </BaseForm>
}