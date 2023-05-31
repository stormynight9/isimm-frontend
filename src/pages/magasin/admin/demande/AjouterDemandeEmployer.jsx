import AjouterDemande from "./AjouterDemande";

// ajouter une demande par l'employer
export default function AjouterDemandeEmployer() {
    return <AjouterDemande type="service" employer={1} />
}