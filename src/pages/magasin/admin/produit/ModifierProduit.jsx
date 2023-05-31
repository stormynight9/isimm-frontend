import { useParams } from "react-router-dom";
import FormProduit from "./FormProduit";
import useProduct from "@/hooks/magasin/useProduct";

export default function ModifierProduit() {
    const { id } = useParams();
    const { product, isLoading } = useProduct(id);
    if(isLoading || product === undefined) return <h1>Loading...</h1>
    return <FormProduit title="Modifier Produit" initialValues={product} type="edit"/>
}