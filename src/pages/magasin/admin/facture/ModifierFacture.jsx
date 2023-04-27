import { useState } from "react";
import { useParams } from "react-router-dom";
import FormFacture from "./FormFacture";

export default function ModifierFacture() {
    const { id } = useParams()
    // const product = useQuery(['product', id], () => getProduct(id))
    const [product, setProduct] = useState({});
    // product
    // return <FormFacture title="Modifier Facture" initialValues={} onChange={}/>
    return <FormFacture title="Modifier Facture" />
}