import BaseForm from "@/components/magasin/BaseForm"
import InputLabel from "@/components/magasin/InputLabel"
import InvoiceRecords from "@/components/magasin/InvoiceRecords"
import Select from "@/components/magasin/Select"
import useFournisseurs from "@/hooks/magasin/useFournisseurs"
import useProducts from "@/hooks/magasin/useProducts"
import { fetchData } from "@/lib/magasin/fetchData"
import { roundTo3 } from "@/lib/magasin/math"
import { transpileFacture } from "@/lib/magasin/requestBodyTranspiler"
import { transpileFournisseurs } from "@/lib/magasin/transpiler"
import { useState } from "react"

export default function FormFacture({ title, initialValues, type, id }) {
    const { isLoading: isLoadingProducts, products } = useProducts()
    const { isLoading: isLoadingFournisseurs, fournisseurs } = useFournisseurs()
    const [values, setValues] = useState(
        initialValues || {
            date: "",
            fournisseur: "",
            records: [{ product: 1, quantity: 10, unit_price: 5, vat: 7 }],
        }
    )

    function handleChange(e) {
        setValues((values) => ({ ...values, [e.target.name]: e.target.value }))
    }

    function handleFournisseurChange(fournisseur) {
        fournisseur = parseInt(fournisseur)
        setValues((values) => ({ ...values, fournisseur }))
    }

    function handleRecordsChange(records) {
        // setRecords(records);

        setValues((values) => {
            let nitems = values.records.reduce((acc, record) => acc + record.quantity, 0)
            let nproducts = values.records.length
            let totalht = roundTo3(
                values.records.reduce((acc, record) => acc + record.unit_price * record.quantity, 0)
            )
            let totaltva = roundTo3(
                values.records.reduce(
                    (acc, record) => acc + record.unit_price * record.quantity * (record.vat / 100),
                    0
                )
            )
            let total = roundTo3(
                values.records.reduce(
                    (acc, record) =>
                        acc + record.unit_price * record.quantity * (1 + record.vat / 100),
                    0
                )
            )
            return { ...values, records, totaltva, totalht, total, nitems, nproducts }
            // return {...values, records}
        })
    }

    function handleSave() {
        // useFetch({});
        if (type === "add") {
            fetchData(
                "POST",
                `${import.meta.env.VITE_API_URL}/api/isimm/gestionMagasin/magasin/Facture`,
                transpileFacture({ ...values, fournisseur: 1 })
            )
        }
    }

    if (isLoadingProducts || isLoadingFournisseurs) return <div>Loading...</div>

    return (
        <BaseForm title={title} onSave={handleSave} type={type}>
            <div className="my-2 flex flex-row">
                <InputLabel
                    className="mr-1 flex-1"
                    disabled={type === "visit" ? true : undefined}
                    name="date"
                    label="Date"
                    type="date"
                    value={values.date}
                    onChange={handleChange}
                />
                <Select
                    className="ml-1 flex-1"
                    disabled={type === "add" ? undefined : true}
                    items={transpileFournisseurs(fournisseurs)}
                    accessor="id"
                    name="fournisseur"
                    label="Fournisseur"
                    value={values.fournisseur}
                    onChange={handleFournisseurChange}
                />
            </div>
            <div className="my-2 flex flex-row">
                <InputLabel
                    className="mr-1 flex-1"
                    disabled={type === "visit" ? true : undefined}
                    name="address"
                    label="Adresse Facturation"
                    value={values.address}
                    onChange={handleChange}
                />
            </div>
            <InvoiceRecords
                products={products}
                records={values.records}
                onChange={handleRecordsChange}
                type={type}
            />
            <div className="my-2 flex flex-col">
                <InputLabel
                    className="mr-1 flex-1"
                    disabled
                    label="Nombre de produits"
                    type="number"
                    value={values.nproducts || 0}
                    onChange={() => {}}
                />
                <InputLabel
                    className="ml-1 flex-1"
                    disabled
                    label="Quantité Totale"
                    type="number"
                    value={values.nitems || 0}
                    onChange={() => {}}
                />
                <InputLabel
                    className="mr-1 flex-1"
                    disabled
                    label="Total HT"
                    type="number"
                    value={values.totalht || 0}
                    onChange={() => {}}
                />
                <InputLabel
                    className="ml-1 flex-1"
                    disabled
                    label="TVA"
                    type="number"
                    value={values.totaltva || 0}
                    onChange={() => {}}
                />
                <InputLabel
                    className="ml-1 flex-1"
                    disabled
                    label="Total TTC"
                    type="number"
                    value={values.total || 0}
                    onChange={() => {}}
                />
            </div>
        </BaseForm>
    )
}
