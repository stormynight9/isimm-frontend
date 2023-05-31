import AccepterDemande from "./AccepterDemande";

// accepter demande employer
// accessible par l'employer
export default function AccepterDemandeEmployer() {
    return <AccepterDemande source="employer" type="accepter" employer/>
}