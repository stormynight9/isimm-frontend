import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import DemandeConge from "./pages/conge/enseignant/DemandeConge"
import MesDemandes from "./pages/conge/enseignant/MesDemandes"
import Lesdemandes from "./pages/conge/admin/Lesdemandes"
import Statistiques from "./pages/conge/admin/Statistiques"
import ErrorPage from "./pages/ErrorPage"
import Home from "./pages/Home"
import Calendar from "./pages/surveillance/Calendar"
import Complaints from "./pages/surveillance/Complaints"
import CreateCalendar from "./pages/surveillance/CreateCalendar"
import SavedCalendars from "./pages/surveillance/SavedCalendars"
import GestionDiplomes from "./pages/charge/chef-departement/GestionDiplomes"
import ConsultationVoeux from "./pages/charge/chef-departement/ConsultationVoeux"
import ConsultationEnseignant from "./pages/charge/chef-departement/ConsultationEnseignant"
import SoumettreVoeux from "./pages/charge/enseignant/SoumettreVoeux"
import ProfileInformation from "./pages/charge/enseignant/ProfileInformation"
import path from "path"
import DemandeProduit from "./pages/magasin/ensignant/DemandeProduit"
import ConsulterDemandes from "./pages/magasin/ensignant/ConsulterDemandes"
import AjouterProduit from "./pages/magasin/service/AjouterProduit"
import ConsulterProduits from "./pages/magasin/service/ConsulterProduits"

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
                                    path: "reclamations",
                                    element: <Complaints />,
                                },
                            ],
                        },
                        {
                            path: "notes",
                            children: [],
                        },
                        {
                            path: "magasin",
                            children: [
                                {
                                    path: "magasinier",
                                    children: [],
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
                                            path: "Ajouter-produit(service)",
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
