import { object, string } from "yup"

export const CreateCalendarSchema = object().shape({
    title: string().required("titre est obligatoire"),
})
