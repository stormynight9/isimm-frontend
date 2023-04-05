import ReclamationTable from "./ReclamationTable"
import { Button } from "@/components/ui/Button"
import { useState } from "react"
//import { ReclamationInsertDialog } from "./components/ReclamationInsertDialog"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/Dialog"
import { Input } from "@/components/ui/Input"
import { Label } from "@/components/ui/Label"
import { Textarea } from "@/components/ui/Textarea"

const ReclamationNote = () => {
    const [isReclamationDialogVisible, setReclamationDialogVisible] = useState(false)

    const handleClick = () => {
        setReclamationDialogVisible(!isReclamationDialogVisible)
    }

    return (
        <div className=".block mx-auto  justify-center p-9">
            <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">Notes {`>`} Reclamation</h3>
            <br></br>
            <Dialog>
                <DialogTrigger asChild>
                    <Button onClick={handleClick} className="mb-6 ">
                        Créer une Réclamation
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] ">
                    <DialogHeader>
                        <DialogTitle>Créer Réclamation</DialogTitle>
                        <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="codeMatiere" className="whitespace-nowrap text-right">
                                Code Matiére
                            </Label>
                            <Input id="name" placeholder="0000" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="whitespace-nowrap text-right">
                                Type Devoir
                            </Label>
                            <div className="whitespace-nowrap">
                                <input className="mr-2" type="radio" value={"tp"} name="R1" />
                                TP
                                <input className="mr-2 ml-9" type="radio" value={"ds"} name="R1" />
                                DS
                                <input className="mr-2 ml-9" type="radio" value={"exam"} name="R1" />
                                Exam
                            </div>
                        </div>

                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="codeMatiere" className="whitespace-nowrap text-right">
                                Mot de Passe
                            </Label>
                            <Input type="password" id="password" placeholder="***********" className="col-span-3" />
                        </div>

                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="codeMatiere" className="whitespace-nowrap text-right">
                                Message
                            </Label>
                            <Textarea type="text" id="msg" placeholder="Type Your Message Here" className="col-span-3" />
                        </div>
                    </div>
                    <div className="mb-4 flex items-center">
                        <input id="default-checkbox" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600" />
                        <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Accept terms and conditions
                        </label>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            <ReclamationTable></ReclamationTable>
        </div>
    )
}

export default ReclamationNote
