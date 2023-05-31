import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import ErrorPage from "./pages/ErrorPage"
import Home from "./pages/Home"
import ConsultationEnseignant from "./pages/charge/chef-departement/ConsultationEnseignant/ConsultationEnseignant"
import DiplomePathing from "./pages/charge/chef-departement/GestionDiplomes/DiplomePathing/DiplomePathing"
import ConsultationVoeux from "./pages/charge/chef-departement/GestionVoeux/ConsultationVoeux"
import RechercherEnseignant from "./pages/charge/chef-departement/RechercherEnseignant/RechercherEnseignant"
import ProfileInformation from "./pages/charge/enseignant/ProfileInformation/ProfileInformation"
import Lesdemandes from "./pages/conge/admin/Lesdemandes"
import Statistiques from "./pages/conge/admin/Statistiques"
import DemandeConge from "./pages/conge/enseignant/DemandeConge"
import MesDemandes from "./pages/conge/enseignant/MesDemandes"
import UpdateDemande from "./pages/conge/enseignant/UpdateDemande"
import AccepterDemandeEmployer from "./pages/magasin/admin/demande/AccepterDemandeEmployer"
import AccepterDemandeMagasin from "./pages/magasin/admin/demande/AccepterDemandeMagasin"
import AjouterDemandeEmployer from "./pages/magasin/admin/demande/AjouterDemandeEmployer"
import ListeDemandeMagasin from "./pages/magasin/admin/demande/ListeDemandeMagasin"
import ListeDemandeStaff from "./pages/magasin/admin/demande/ListeDemandeStaff"
import AjouterFacture from "./pages/magasin/admin/facture/AjouterFacture"
import ListeFacture from "./pages/magasin/admin/facture/ListeFacture"
import ModifierFacture from "./pages/magasin/admin/facture/ModifierFacture"
import AjouterFournisseur from "./pages/magasin/admin/fournisseur/AjouterFournisseur"
import EditFournisseur from "./pages/magasin/admin/fournisseur/EditFournisseur"
import ListeFournisseur from "./pages/magasin/admin/fournisseur/ListeFournisseur"
import AjouterProduit from "./pages/magasin/admin/produit/AjouterProduit"
import ListeProduit from "./pages/magasin/admin/produit/ListeProduit"
import ModifierProduit from "./pages/magasin/admin/produit/ModifierProduit"
import ChargeNote from "./pages/notes/enseignant/charge-note/ChargeNote"
import ReclamationEnseignant from "./pages/notes/enseignant/reclamation/ReclamationEnseignant"
import Section from "./pages/notes/enseignant/section/Section"
import ReclamationNote from "./pages/notes/etudiant/reclamation/ReclamationEtudiant"
import Semester from "./pages/notes/etudiant/semester/Semester"
import Calendar from "./pages/surveillance/Calendar"
import Complaints from "./pages/surveillance/Complaints"
import CreateCalendar from "./pages/surveillance/CreateCalendar"
import GenerateCalendars from "./pages/surveillance/GenerateCalendars"
import SavedCalendars from "./pages/surveillance/SavedCalendars"
import DemandeProduitService from "./pages/magasin/ensignant/demandeProduitDeService"
import ConsulterDemandes from "./pages/magasin/ensignant/ConsulterDemandes"
import AjouterProduitService from "./pages/magasin/service/AjouterProduitService"
import ConsulterProduits from "./pages/magasin/service/ConsulterProduits"
import UpdateProduit from "./pages/magasin/components/UpdateProduit"
import UpdateDemandeProduit from "./pages/magasin/components/UpdateDemandeProduit"
import ReviewDemandeProduit from "./pages/magasin/components/ReviewDemandeProduit"

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />,
            children: [
                {
                    errorElement: <ErrorPage />,
                    children: [
                        {
                            index: true,
                            element: <Home />,
                        },
                        {
                            path: "surveillance",
                            children: [
                                {
                                    path: "calendrier",
                                    element: <Calendar />,
                                },
                                {
                                    path: "creer-calendrier",
                                    element: <CreateCalendar />,
                                },
                                {
                                    path: "calendriers-sauvegardes",
                                    element: <SavedCalendars />,
                                },
                                {
                                    path: "calendriers-sauvegardes/:id",
                                    element: <GenerateCalendars />,
                                },
                                {
                                    path: "reclamations",
                                    element: <Complaints />,
                                },
                            ],
                        },
                        {
                            path: "notes",
                            children: [
                                {
                                    path: "section",
                                    element: <Section />,
                                },
                                {
                                    path: "chargeNote",
                                    element: <ChargeNote />,
                                },
                                {
                                    path: "reclamation",
                                    element: <ReclamationNote />, //Changer <ReclamationEnseignant /> pour l'interface de l'enseignant
                                },
                                {
                                    path: "reclamationEnseignant",
                                    element: <ReclamationEnseignant />, //Changer <ReclamationEnseignant /> pour l'interface de l'enseignant
                                },

                                {
                                    path: "semester1",
                                    element: <Semester sem="1" idEtd="15" />,
                                },
                                {
                                    path: "semester2",
                                    element: <Semester sem="2" idEtd="15" />,
                                },
                            ],
                        },
                        {
                            path: "magasin",
                            children: [
                                {
                                    path: "magasinier",
                                    children: [
                                        {
                                            path: "facture",
                                            // element: <ListeFacture />,
                                            children: [
                                                {
                                                    path: "ajouter",
                                                    element: <AjouterFacture />,
                                                },
                                                {
                                                    path: "visit/:id",
                                                    element: <ModifierFacture />,
                                                },
                                                {
                                                    path: "list",
                                                    element: <ListeFacture />,
                                                },
                                            ],
                                        },
                                        {
                                            // element: <ListeProduit />,
                                            path: "produit",
                                            children: [
                                                {
                                                    path: "ajouter",
                                                    element: <AjouterProduit />,
                                                },
                                                {
                                                    path: "modifier/:id",
                                                    element: <ModifierProduit />,
                                                },
                                                {
                                                    path: "list",
                                                    element: <ListeProduit />,
                                                },
                                            ],
                                        },
                                        {
                                            // element: <ListeFournisseur />,
                                            path: "fournisseur",
                                            children: [
                                                {
                                                    path: "ajouter",
                                                    element: <AjouterFournisseur />,
                                                },
                                                {
                                                    path: "modifier/:id",
                                                    element: <EditFournisseur />,
                                                },
                                                {
                                                    path: "list",
                                                    element: <ListeFournisseur />,
                                                },
                                            ],
                                        },
                                        {
                                            // TODO: should have other location
                                            path: "demande",
                                            children: [
                                                {
                                                    path: "accepter/:id",
                                                    element: <AccepterDemandeMagasin />,
                                                },
                                                {
                                                    path: "list",
                                                    element: <ListeDemandeMagasin />,
                                                },
                                            ],

                                            // indexElement: <ListeDemandeService />,
                                        }
                                    ],
                                },
                                {
                                    path: "enseignant",
                                    children: [
                                        {
                                            path: "Demande-Produit",
                                            element: <DemandeProduitService />,
                                        },
                                        {
                                            path: "Consulter-demandes",
                                            element: <ConsulterDemandes />,
                                        },
                                    ],
                                },
                                {
                                    path: "service",
                                    children: [
                                        {
                                            path: "Ajouter-produit",
                                            element: <AjouterProduitService />,
                                        },
                                        {
                                            path: "Consulter-produits",
                                            element: <ConsulterProduits />,
                                        },
                                        {
                                            path: "Update-produits/:id",
                                            element: <UpdateProduit />,
                                        }
                                        ,
                                        {
                                            path: "Update-demandeProduits/:id",
                                            element: <UpdateDemandeProduit />,
                                        }
                                        ,
                                        {
                                            path: "Review-demandeProduits/:id",
                                            element: <ReviewDemandeProduit />,
                                        }
                                    ],
                                },
                                {
                                    path: "employer",
                                    children: [
                                        {
                                            path: "demande",
                                            // element: <AjouterDemandeEmployer />,
                                            children: [
                                                {
                                                    path: "list",
                                                    element: <ListeDemandeStaff />,
                                                },
                                                {
                                                    path: "ajouter",
                                                    element: <AjouterDemandeEmployer />,
                                                },
                                                {
                                                    path: "accepter/:id",
                                                    element: <AccepterDemandeEmployer />,
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            path: "charge",
                            children: [
                                {
                                    path: "gestion-diplomes",
                                    element: <DiplomePathing />,
                                },
                                {
                                    path: "consultation-voeux",
                                    element: <ConsultationVoeux />,
                                },
                                {
                                    path: "rechercher-enseignant",
                                    element: <RechercherEnseignant />,
                                },
                                {
                                    path: "consultation-enseignant",
                                    element: <ConsultationEnseignant />,
                                },
                                {
                                    path: "profile-information",
                                    element: <ProfileInformation />,
                                },
                                {
                                    path: "soumettre-voeux",
                                    element: <DiplomePathing />,
                                },
                            ],
                        },
                        {
                            path: "conge",
                            children: [
                                {
                                    path: "admin",
                                    children: [
                                        {
                                            path: "les-demandes",
                                            element: <Lesdemandes />,
                                        },

                                        {
                                            path: "statistiques",
                                            element: <Statistiques />,
                                        },
                                    ],
                                },
                                {
                                    path: "enseignant",
                                    children: [
                                        {
                                            path: "demande-conge",
                                            element: <DemandeConge />,
                                        },
                                        {
                                            path: "mes-demandes",
                                            element: <MesDemandes />,
                                        },
                                        {
                                            path: ":idDemandeConger",
                                            element: <UpdateDemande />,
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
    {
        // Todo: remove this when ready to deploy to production
        basename: "/isimm-frontend",
    }
)

export default router