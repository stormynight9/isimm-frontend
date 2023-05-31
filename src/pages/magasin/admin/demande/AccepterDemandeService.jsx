import AccepterDemande from "./AccepterDemande";

// accepter demande service
// accessible par l'admin service
export default function AccepterDemandeService() {
    return <AccepterDemande source="employer" editQte type="accepter" service />
}