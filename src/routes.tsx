import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import DemandeConge from "./pages/conge/enseignant/DemandeConge"
import MesDemandes from "./pages/conge/enseignant/MesDemandes"
import Lesdemandes from "./pages/conge/admin/Lesdemandes"
import Statistiques from "./pages/conge/admin/Statistiques"
import ErrorPage from "./pages/ErrorPage"
import Home from "./pages/Home"
import AjouterDemande from "./pages/magasin/admin/demande/AjouterDemande"
import ListeDemandeService from "./pages/magasin/admin/demande/ListeDemandeService"
import AjouterFacture from "./pages/magasin/admin/facture/AjouterFacture"
import ModifierFacture from "./pages/magasin/admin/facture/ModifierFacture"
import AjouterProduit from "./pages/magasin/admin/produit/AjouterProduit"
import Section from "./pages/notes/section/Section"
import Calendar from "./pages/surveillance/Calendar"
import Complaints from "./pages/surveillance/Complaints"
import CreateCalendar from "./pages/surveillance/CreateCalendar"
import SavedCalendars from "./pages/surveillance/SavedCalendars"
import GestionDiplomes from "./pages/charge/chef-departement/GestionDiplomes"
import ConsultationVoeux from "./pages/charge/chef-departement/ConsultationVoeux"
import ConsultationEnseignant from "./pages/charge/chef-departement/ConsultationEnseignant"
import SoumettreVoeux from "./pages/charge/enseignant/SoumettreVoeux"
import ProfileInformation from "./pages/charge/enseignant/ProfileInformation"
import ChargeNote from "./pages/notes/charge-note/ChargeNote"
import ReclamationNote from "./pages/notes/reclamation/Reclamation"
import DemandeProduit from "./pages/magasin/ensignant/DemandeProduit"
import ConsulterDemandes from "./pages/magasin/ensignant/ConsulterDemandes"
import ConsulterProduits from "./pages/magasin/service/ConsulterProduits"
import GenerateCalendars from "./pages/surveillance/GenerateCalendars"

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
                                    path: ":section/:td/:tp/:idMatiere",
                                    element: <ChargeNote />,
                                },
                                {
                                    path: ":section/:td/:idMatiere",
                                    element: <ChargeNote />,
                                },
                                {
                                    path: ":section/:idMatiere",
                                    element: <ChargeNote />,
                                },
                                {
                                    path: "reclamation",
                                    element: <ReclamationNote />,
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
                                            children: [
                                                {
                                                    path: "ajouter",
                                                    element: <AjouterFacture />
                                                },
                                                {
                                                    path: "modifier/:id",
                                                    element: <ModifierFacture />
                                                }
                                            ],
                                        },
                                        {
                                            path: "produit",
                                            children: [
                                                {
                                                    path: "ajouter",
                                                    element: <AjouterProduit />
                                                },
                                                {
                                                    path: "modifier/:id",
                                                    element: <ModifierFacture />
                                                }
                                            ],
                                        },
                                        {
                                            // TODO: should have other location
                                            path: "demande",
                                            children: [
                                                {
                                                    path: "ajouter",
                                                    element: <AjouterDemande />
                                                },
                                                {
                                                    path: 'list',
                                                    element: <ListeDemandeService />,
                                                }
                                            ],
                                            // element: <ListeDemandeService />,
                                        },
                                    ],
                                },
                                {
                                    path: "enseignant",
                                    children: [
                                        {
                                            path: "Demande-Produit",
                                            element: <DemandeProduit />,
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
                                            element: <AjouterProduit />,
                                        },
                                        {
                                            path: "Consulter-produits",
                                            element: <ConsulterProduits />,
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
                                    element: <GestionDiplomes />,
                                },
                                {
                                    path: "consultation-voeux",
                                    element: <ConsultationVoeux />,
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
                                    element: <SoumettreVoeux />,
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
