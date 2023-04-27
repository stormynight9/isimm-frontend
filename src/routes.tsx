import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import ErrorPage from "./pages/ErrorPage"
import Home from "./pages/Home"
import AjouterDemande from "./pages/magasin/admin/demande/AjouterDemande"
import ListeDemandeService from "./pages/magasin/admin/demande/ListeDemandeService"
import AjouterFacture from "./pages/magasin/admin/facture/AjouterFacture"
import ModifierFacture from "./pages/magasin/admin/facture/ModifierFacture"
import AjouterProduit from "./pages/magasin/admin/produit/AjouterProduit"
import Calendar from "./pages/surveillance/Calendar"
import Complaints from "./pages/surveillance/Complaints"
import CreateCalendar from "./pages/surveillance/CreateCalendar"
import SavedCalendars from "./pages/surveillance/SavedCalendars"

const router = createBrowserRouter([
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
                                // TODO: should be changed to employee
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
                        children: [],
                    },
                    {
                        path: "conge",
                        children: [
                            {
                                path: "admin",
                                children: [],
                            },
                            {
                                path: "enseignant",
                                children: [],
                            },
                        ],
                    },
                ],
            },
        ],
    },
])

export default router
