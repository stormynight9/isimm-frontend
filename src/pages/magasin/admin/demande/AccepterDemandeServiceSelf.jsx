import AccepterDemande from "./AccepterDemande";

// accepter demande de service
// accessible par le service
export default function AccepterDemandeServiceSelf() {
    return <AccepterDemande source="service" type="accepter" service />
}