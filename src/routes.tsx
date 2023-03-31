import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Lesdemandes from "./pages/conge/admin/Lesdemandes"
import Statistiques from "./pages/conge/admin/Statistiques"
import ErrorPage from "./pages/ErrorPage"
import Home from "./pages/Home"
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
                        children: [],
                    },
                    {
                        path: "conge",
                        children: [
                            {
                                path: "admin",
                                children: [
                                    {
<<<<<<< HEAD
                                        path: "les-demandes",
=======
                                        path: "lesdemandes",
>>>>>>> 98055512131dd7a924b9e77e65facccc3542e76b
                                        element: <Lesdemandes />,
                                    },

                                    { 
                                        path: "statistiques",
                                        element: <Statistiques />
                                    },
                                ],
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
