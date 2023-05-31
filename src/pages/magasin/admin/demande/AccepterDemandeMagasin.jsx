import AccepterDemande from "./AccepterDemande";

// accepter demande magasin
// accessible par l'admin magasin
export default function AccepterDemandeMagasin() {
    return <AccepterDemande source="service" editQte type="accepter" magasin />
}