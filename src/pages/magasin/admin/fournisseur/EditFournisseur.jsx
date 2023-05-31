import { useParams } from "react-router-dom";
import FormFournisseur from "./FormFournisseur";
import useFournisseur from "@/hooks/magasin/useFournisseur";

export default function EditFournisseur() {
    const { id } = useParams();
    const {fournisseur, isLoading} = useFournisseur(id);
    if(isLoading) return <div>Loading...</div>;
    return <FormFournisseur type="edit" initialValues={fournisseur}/>
}