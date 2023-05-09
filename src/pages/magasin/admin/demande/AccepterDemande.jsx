import { useParams } from "react-router-dom";
import FormDemande from "./FormDemande";
import useDemande from "@/hooks/magasin/useDemande";

export default function AccepterDemande() {
    const { id } = useParams()
    const demande = useDemande(id);
    return <FormDemande title="Ajouter une Demande" type="accepter" initialValues={demande} />
}