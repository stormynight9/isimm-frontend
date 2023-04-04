import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Label } from "@radix-ui/react-dropdown-menu"
import { ArrowRightIcon } from "lucide-react"
import { CreateCalendarSchema } from "../schemas"
import { useFormik } from "formik"

const CreateCalendarForm = () => {
    const { values, handleChange, handleBlur, errors, touched, handleSubmit } = useFormik({
        initialValues: {
            title: "",
            numberOfSessions: 0,
            startDate: "",
            endDate: "",
        },
        validationSchema: CreateCalendarSchema,
        onSubmit: async (values) => {
            console.log(values)
        },
    })

    return (
        <form className="mt-8 flex max-w-3xl flex-col space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col items-baseline justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                <div className="grid w-full items-center gap-1.5 md:max-w-sm">
                    <Label htmlFor="title">
                        Titre<span className="text-red-600">*</span>
                    </Label>
                    <Input id="title" placeholder="Examen Semestre 1 - 2022/2023" name="title" onChange={handleChange} value={values.title} onBlur={handleBlur} />
                    {errors.title && touched.title && <p className="text-sm text-red-600">{errors.title}</p>}
                </div>
                <div className="grid w-full items-center gap-1.5 md:max-w-sm">
                    <Label htmlFor="number_of_sessions">
                        Nombre des séancees<span className="text-red-600">*</span>
                    </Label>
                    <Input type="number" id="number_of_sessions" placeholder="4" name="numberOfSessions" onChange={handleChange} value={values.numberOfSessions} onBlur={handleBlur} />
                    {errors.numberOfSessions && touched.numberOfSessions && <p className="text-sm text-red-600">{errors.numberOfSessions}</p>}
                </div>
            </div>
            <div className="flex flex-col items-baseline justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                <div className="grid w-full items-center gap-1.5 md:max-w-sm">
                    <Label htmlFor="start-date">
                        Date de début<span className="text-red-600">*</span>
                    </Label>
                    <Input type="date" id="start-date" placeholder="4" name="startDate" onChange={handleChange} value={values.startDate} onBlur={handleBlur} />
                    {errors.startDate && touched.startDate && <p className="text-sm text-red-600">{errors.startDate}</p>}
                </div>
                <div className="grid w-full items-center gap-1.5 md:max-w-sm">
                    <Label htmlFor="end-date">
                        Date de fin<span className="text-red-600">*</span>
                    </Label>
                    <Input type="date" id="end-date" placeholder="4" name="endDate" onChange={handleChange} value={values.endDate} onBlur={handleBlur} />
                    {errors.endDate && touched.endDate && <p className="text-sm text-red-600">{errors.endDate}</p>}
                </div>
            </div>
            <div>
                <Button type="submit">
                    Suivant <ArrowRightIcon className="ml-2" size={20} />
                </Button>
            </div>
        </form>
    )
}

export default CreateCalendarForm
