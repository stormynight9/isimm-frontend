import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Calendar from './pages/surveillance/Calendar';
import Complaints from './pages/surveillance/Complaints';
import CreateCalendar from './pages/surveillance/CreateCalendar';
import SavedCalendars from './pages/surveillance/SavedCalendars';

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
                    { // surveillance
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
                            }
                        ]
                    },
                    { // notes
                        path: "notes",
                        children: [

                        ]
                    },
                    { // magasin
                        path: "magasin",
                        children: [
                            { // magasinier
                                path: "magasinier",
                                children: [

                                ]
                            },
                            { // enseignant
                                path: "enseignant",
                                children: [

                                ]
                            },
                            { // service
                                path: "service",
                                children: [

                                ]
                            }
                        ]
                    },
                    { // charge
                        path: "charge",
                        children: [

                        ]
                    },
                    { // conge
                        path: "conge",
                        children: [
                            { // admin
                                path: "admin",
                                children: [

                                ]
                            },
                            { // enseignant
                                path: "enseignant",
                                children: [

                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
]);

export default router