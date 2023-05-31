import ListeDemandes from "./ListeDemande";

export default function ListeDemandeServiceSelf() {
    return <ListeDemandes role="service" type="service" title="Nos Demandes" ajouter={true} service={true} />;
    // return <ListeDemandes role="service" type="service" title="Mes Demandes" ajouter/>;
}