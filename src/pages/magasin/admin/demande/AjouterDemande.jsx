import FormDemande from "./FormDemande";

// ajouter une demande
export default function AjouterDemande({type, service, employer, magasin}) {
    return <FormDemande title={`Demander du ${type}`} type="add" service={service} employer={employer} magasin={magasin} />
}