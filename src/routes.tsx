import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import DemandeConge from "./pages/conge/enseignant/DemandeConge"
import MesDemandes from "./pages/conge/enseignant/MesDemandes"
import Lesdemandes from "./pages/conge/admin/Lesdemandes"
import Statistiques from "./pages/conge/admin/Statistiques"
import ErrorPage from "./pages/ErrorPage"
import Home from "./pages/Home"
import Section from "./pages/notes/enseignant/section/Section"
import Calendar from "./pages/surveillance/Calendar"
import Complaints from "./pages/surveillance/Complaints"
import CreateCalendar from "./pages/surveillance/CreateCalendar"
import SavedCalendars from "./pages/surveillance/SavedCalendars"
import ChargeNote from "./pages/notes/enseignant/charge-note/ChargeNote"
import ReclamationNote from "./pages/notes/etudiant/reclamation/ReclamationEtudiant"
import Semester from "./pages/notes/etudiant/semester/Semester"
import ReclamationEnseignant from "./pages/notes/enseignant/reclamation/ReclamationEnseignant"

import DiplomePathing from "./pages/charge/chef-departement/GestionDiplomes/DiplomePathing/DiplomePathing"
import ConsultationVoeux from "./pages/charge/chef-departement/GestionVoeux/ConsultationVoeux"
import RechercherEnseignant from "./pages/charge/chef-departement/RechercherEnseignant/RechercherEnseignant"
import ConsultationEnseignant from "./pages/charge/chef-departement/ConsultationEnseignant/ConsultationEnseignant"
import ProfileInformation from "./pages/charge/enseignant/ProfileInformation/ProfileInformation"

import DemandeProduit from "./pages/magasin/ensignant/DemandeProduit"
import ConsulterDemandes from "./pages/magasin/ensignant/ConsulterDemandes"
import AjouterProduit from "./pages/magasin/service/AjouterProduit"
import ConsulterProduits from "./pages/magasin/service/ConsulterProduits"
import GenerateCalendars from "./pages/surveillance/GenerateCalendars"
import UpdateDemande from "./pages/conge/enseignant/UpdateDemande"

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
