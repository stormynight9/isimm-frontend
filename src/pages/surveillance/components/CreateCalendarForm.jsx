import { Button } from "@/components/ui/Button"
import { Calendar } from "@/components/ui/Calendar"
import { Input } from "@/components/ui/Input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/Popover"
import { cn, formatDate } from "@/lib/utils"
import { Label } from "@radix-ui/react-dropdown-menu"
import { fr } from "date-fns/locale"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { ArrowRightIcon, CalendarIcon } from "lucide-react"
import { useState } from "react"
import { CreateCalendarSchema } from "../schemas"

const CreateCalendarForm = ({ setShowSections, handleFormDataChange }) => {
    const [date, setDate] = useState()

    const handleDateChange = (date, props) => {
        setDate(date)
        // setting them to null because formik doesn't accept undefined values
        props.setFieldValue("from", date.from || null)
        props.setFieldValue("to", date.to || null)
    }

    return (
        <Formik
            initialValues={{
                title: "",
                numberOfSessions: 0,
                from: null,
                to: null,
            }}
            validationSchema={CreateCalendarSchema}
            onSubmit={async (values) => {
                const refactoedValues = {
                    ...values,
                    date: {
                        from: values.from,
                        to: values.to,
                    },
                }
                delete refactoedValues.from
                delete refactoedValues.to
                await handleFormDataChange(refactoedValues)
                setShowSections({
                    isShowing: true,
                })
            }}
        >
            {(props) => {
                return (
                    <Form className="mt-8 flex max-w-3xl flex-col space-y-6">
                        <div className="flex flex-col items-baseline justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                            <div className="grid w-full items-center gap-1.5 md:max-w-sm">
                                <Label htmlFor="title">
                                    Titre<span className="text-red-600">*</span>
                                </Label>
                                <Field name="title">
                                    {({ field, form }) => (
                                        <Input
                                            id="number_of_sessions"
                                            placeholder="Examen Semestre 1 - 2022/2023"
                                            {...field}
                                        />
                                    )}
                                </Field>
                                <ErrorMessage
                                    name="title"
                                    component="div"
                                    className="text-sm text-red-600"
                                />
                            </div>
                            <div className="grid w-full items-center gap-1.5 md:max-w-sm">
                                <Label htmlFor="number_of_sessions">
                                    Nombre des séancees<span className="text-red-600">*</span>
                                </Label>
                                <Field name="numberOfSessions">
                                    {({ field, form }) => (
                                        <Input
                                            type="number"
                                            id="number_of_sessions"
                                            placeholder="4"
                                            {...field}
                                        />
                                    )}
                                </Field>
                                <ErrorMessage
                                    name="numberOfSessions"
                                    component="div"
                                    className="text-sm text-red-600"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col items-end space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                            <div className="grid w-1/2 gap-2">
                                <Popover>
                                    <Label htmlFor="number_of_sessions">
                                        Date
                                        <span className="text-red-600">*</span>
                                    </Label>
                                    <PopoverTrigger asChild>
                                        <Button
                                            id="date"
                                            variant="outline"
                                            className={cn(
                                                "w-full justify-start text-left font-normal",
                                                !date && "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {date?.from ? (
                                                date.to ? (
                                                    <>
                                                        {formatDate(date.from)} -{" "}
                                                        {formatDate(date.to)}
                                                    </>
                                                ) : (
                                                    formatDate(date.from)
                                                )
                                            ) : (
                                                <span>Choisir une date</span>
                                            )}
                                        </Button>
                                    </PopoverTrigger>
                                    <ErrorMessage
                                        name="from"
                                        component="div"
                                        className="text-sm text-red-600"
                                    />
                                    <ErrorMessage
                                        name="to"
                                        component="div"
                                        className="text-sm text-red-600"
                                    />
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            initialFocus
                                            mode="range"
                                            selected={date}
                                            onSelect={(date) => handleDateChange(date, props)}
                                            numberOfMonths={2}
                                            locale={fr}
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>
                        <Button type="submit" className="self-start">
                            Suivant <ArrowRightIcon size={20} />
                        </Button>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default CreateCalendarForm
