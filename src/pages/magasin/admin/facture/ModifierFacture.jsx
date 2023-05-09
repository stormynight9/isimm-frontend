import { useParams } from "react-router-dom";
import FormFacture from "./FormFacture";
import useFacture from "@/hooks/magasin/useFacture";

export default function ModifierFacture() {
    const { id } = useParams()
    // const product = useQuery(['product', id], () => getProduct(id))
    const facture = useFacture(id);
    // product
    // return <FormFacture title="Modifier Facture" initialValues={} onChange={}/>
    return <FormFacture title="Modifier Facture" initialValues={facture} type="visit"/>
}