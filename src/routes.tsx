import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import DemandeConge from "./pages/conge/enseignant/DemandeConge"
import MesDemandes from "./pages/conge/enseignant/MesDemandes"
import Lesdemandes from "./pages/conge/admin/Lesdemandes"
import Statistiques from "./pages/conge/admin/Statistiques"
import ErrorPage from "./pages/ErrorPage"
import Home from "./pages/Home"
import Section from "./pages/notes/section/Section"
import Calendar from "./pages/surveillance/Calendar"
import Complaints from "./pages/surveillance/Complaints"
import CreateCalendar from "./pages/surveillance/CreateCalendar"
import SavedCalendars from "./pages/surveillance/SavedCalendars"
import ConsultationVoeux from "./pages/charge/chef-departement/GestionVoeux/ConsultationVoeux"
import RechercherEnseignant from "./pages/charge/chef-departement/RechercherEnseignant/RechercherEnseignant"
import ConsultationEnseignant from "./pages/charge/chef-departement/ConsultationEnseignant/ConsultationEnseignant"
import ProfileInformation from "./pages/charge/enseignant/ProfileInformation/ProfileInformation"
import ChargeNote from "./pages/notes/charge-note/ChargeNote"
import ReclamationNote from "./pages/notes/reclamation/Reclamation"
import DiplomePathing from "./pages/charge/chef-departement/GestionDiplomes/DiplomePathing/DiplomePathing"

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
                                    children: [],
                                },
                                {
                                    path: "enseignant",
                                    children: [],
                                },
                                {
                                    path: "service",
                                    children: [],
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
