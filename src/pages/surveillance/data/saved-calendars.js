export const savedCalendars = [
    {
        id: 1,
        title: "Examen Semestre 2 - 2022/2023",
        createdAt: "21 avril 2023",
        status: true,
    },
    {
        id: 2,
        title: "Devoir surveillé Semestre 1 - 2022/2023",
        createdAt: "23 avril 2023",
        status: false,
    },
    {
        id: 3,
        title: "Examen Semestre 1 - 2022/2023",
        createdAt: "29 avril 2023",
        status: false,
    },
    {
        id: 4,
        title: "Devoir surveillé Semestre 2 - 2022/2023",
        createdAt: "30 avril 2023",
        status: false,
    },
    {
        id: 5,
        title: "Examen Semestre 2 - 2022/2023",
        createdAt: "21 juin 2023",
        status: false,
    },
    {
        id: 6,
        title: "Devoir surveillé Semestre 1 - 2022/2023",
        createdAt: "23 juin 2023",
        status: false,
    },
]

// object example
const object = {
    title: "Examen Semestre 2 - 2022/2023",
    startDate: "21 avril 2023",
    endDate: "29 avril 2023",
    numberOfSessions: 4,
    sessions: [
        {
            id: 1,
            name: "L1-MATH",
            section: [
                {
                    id: 1,
                    name: "Conception et analyse d’algorithmes",
                    date: "21 avril 2023",
                    section: 1,
                    state: true,
                },
                {
                    id: 2,
                    name: "Algèbre linéaire",
                    date: "22 avril 2023",
                    section: 2,
                    state: true,
                },
                {
                    id: 3,
                    name: "Algèbre linéaire",
                    state: false,
                },
            ],
        },
        {
            id: 2,
            name: "ING1-INFO",
            section: [
                {
                    id: 1,
                    name: "Frama-C et la preuve de programmes",
                    date: "21 avril 2023",
                    section: 3,
                    state: true,
                },
                {
                    id: 2,
                    name: "Optimisation combinatoire",
                    date: "22 avril 2023",
                    section: 2,
                    state: true,
                },
                {
                    id: 3,
                    name: "Algorithmes d’apprentissage automatique",
                    state: false,
                },
            ],
        },
    ],
}
