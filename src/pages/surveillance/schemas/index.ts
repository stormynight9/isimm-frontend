import { date, number, object, string } from "yup"

export const CreateCalendarSchema = object().shape({
    title: string().required("Titre est obligatoire"),
    numberOfSessions: number()
        .min(1, "Nombre de séances est obligatoire")
        .required("Nombre de séances est obligatoire"),
    from: date().required("Date de début est obligatoire"),
    to: date().required("Date de fin est obligatoire"),
})
