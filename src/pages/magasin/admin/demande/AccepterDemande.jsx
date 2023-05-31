import { useParams } from "react-router-dom";
import FormDemande from "./FormDemande";
import useDemande from "@/hooks/magasin/useDemande";

// accepter une demande
export default function AccepterDemande({type, source, editQte, service, employer, magasin}) {
    const { id } = useParams()
    const {demande, isLoading} = useDemande(id, source);
    if(isLoading || demande === undefined) return <h1>Loading...</h1>
    return <FormDemande title={`Accepter demande d'un ${source}`} type="accepter" source={source} initialValues={demande} editQte={editQte} service={service} employer={employer} magasin={magasin}/>
}