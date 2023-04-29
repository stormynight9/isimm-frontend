import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Label } from "@radix-ui/react-dropdown-menu"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { ArrowRightIcon } from "lucide-react"
import { CreateCalendarSchema } from "../schemas"

const CreateCalendarForm = ({ setShowSections }) => {
    return (
        <Formik
            initialValues={{
                title: "",
                numberOfSessions: 0,
                startDate: "",
                endDate: "",
            }}
            validationSchema={CreateCalendarSchema}
            onSubmit={async (values) => {
                setShowSections({
                    isShowing: true,
                    ...values,
                })
            }}
        >
            {() => {
                return (
                    <Form className="mt-8 flex max-w-3xl flex-col space-y-6">
                        <div className="flex flex-col items-baseline justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                            <div className="grid w-full items-center gap-1.5 md:max-w-sm">
                                <Label htmlFor="title">
                                    Titre<span className="text-red-600">*</span>
                                </Label>
                                <Field name="title">{({ field, form }) => <Input id="number_of_sessions" placeholder="Examen Semestre 1 - 2022/2023" {...field} />}</Field>
                                <ErrorMessage name="title" component="div" className="text-sm text-red-600" />
                            </div>
                            <div className="grid w-full items-center gap-1.5 md:max-w-sm">
                                <Label htmlFor="number_of_sessions">
                                    Nombre des séancees<span className="text-red-600">*</span>
                                </Label>
                                <Field name="numberOfSessions">{({ field, form }) => <Input type="number" id="number_of_sessions" placeholder="4" {...field} />}</Field>
                                <ErrorMessage name="numberOfSessions" component="div" className="text-sm text-red-600" />
                            </div>
                        </div>
                        <div className="flex flex-col items-baseline justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                            <div className="grid w-full items-center gap-1.5 md:max-w-sm">
                                <Label htmlFor="start-date">
                                    Date de début<span className="text-red-600">*</span>
                                </Label>
                                <Field name="startDate">{({ field, form }) => <Input type="date" id="start-date" {...field} />}</Field>
                                <ErrorMessage name="startDate" component="div" className="text-sm text-red-600" />
                            </div>
                            <div className="grid w-full items-center gap-1.5 md:max-w-sm">
                                <Label htmlFor="end-date">
                                    Date de fin<span className="text-red-600">*</span>
                                </Label>
                                <Field name="endDate">{({ field, form }) => <Input type="date" id="end-date" {...field} />}</Field>
                                <ErrorMessage name="endDate" component="div" className="text-sm text-red-600" />
                            </div>
                        </div>
                        <div>
                            <Button type="submit">
                                Suivant <ArrowRightIcon className="ml-2" size={20} />
                            </Button>
                        </div>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default CreateCalendarForm
