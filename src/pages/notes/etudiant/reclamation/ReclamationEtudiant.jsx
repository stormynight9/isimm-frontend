import ReclamationTable from "../components/ReclamationTable"
import { Button } from "@/components/ui/Button"
import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/Dialog"
import { Input } from "@/components/ui/Input"
import { Label } from "@/components/ui/Label"
import { Textarea } from "@/components/ui/Textarea"
import { ToastAction } from "@/components/ui/Toast"
import { useToast } from "@/hooks/useToast"

const ReclamationNote = () => {
    const [isReclamationDialogVisible, setReclamationDialogVisible] = useState(false)
    const [responseJson, setResponseJson] = useState([])
    const [refreshing, setRefreshing] = useState(true)
    const [deatilsVisible, setDetailsVisible] = useState(false)

    const [agreement, setAgreement] = useState(false)

    const [detailsJson, setDetailsJson] = useState([])

    const handleChange = (event) => {
        setAgreement(event.target.checked)
    }

    const changeDialogVisibility = () => {
        setDetailsVisible(true)
    }

    const { toast } = useToast()

    function showToast(message) {
        showCustomToast(toast, message)
    }

    const handleClick = () => {
        setReclamationDialogVisible(true)
    }

    useEffect(() => {
        if (refreshing) chargeReclamations()
    })

    const updateParent = () => {
        setRefreshing(true)
    }

    const chargeReclamations = async () => {
        try {
            const response = await fetch(import.meta.env.VITE_API_URL + "/api/isimm/chargeNote/EtudiantReclamation/etudiant/15", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            const json = await response.json()
            setResponseJson(json)
            setRefreshing(false)
        } catch (error) {
            console.error(error)
        }
    }

    const handleSave = (codeMatiere, typeDevoir, message) => {
        fetch(import.meta.env.VITE_API_URL + "/api/isimm/chargeNote/EtudiantReclamation/addReclamation", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                codeMatiere: codeMatiere,
                typeNote: typeDevoir,
                message: message,
                statut: "Envoyée",
                idEtudiant: "15",
            }),
        })
            .then((response) => {
                if (response.status === 200) {
                    setReclamationDialogVisible(false)
                    updateParent()
                    showToast("Reclamation Ajoutée avec succées")
                }
                return response.json()
            })
            .then((data) => {
                showToast(data.message)
            })
            .catch((error) => {
                console.error("Error:", error)
            })
    }

    const addReclamation = () => {
        const code = document.getElementById("name").value
        const typeNote = document.querySelector('input[name="R1"]:checked')
        const message = document.getElementById("msg").value

        if (code === "") showToast("Code Matiére est Obligatoire !")
        else if (isNaN(code) || code.length !== 4) showToast("Code Matiére doit être numérique et du taille 4 !")
        else if (typeNote === null) showToast("Choisir le type Note SVP !")
        else if (!agreement) showToast("Accepter les terms et les conditions !")

        handleSave(code, typeNote.value, message)
    }

    return (
        <div className=".block mx-auto  justify-center p-9">
            <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">Notes {`>`} Reclamation</h3>
            <br></br>
            <Dialog open={isReclamationDialogVisible}>
                <DialogTrigger asChild>
                    <Button onClick={handleClick} className="mb-6 bg-[#334155]">
                        Créer une Réclamation
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] ">
                    <DialogHeader>
                        <DialogTitle>Créer Réclamation</DialogTitle>
                        <DialogDescription className="text-gray-500">(*) Champ Obligatoire !</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="codeMatiere" className="whitespace-nowrap text-right">
                                Code Matiére
                            </Label>
                            <Input id="name" pattern="[0-9]{4}" placeholder="0000" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="whitespace-nowrap text-right">
                                Type Devoir
                            </Label>
                            <div className="whitespace-nowrap">
                                <input className="mr-2" type="radio" value={"2"} name="R1" />
                                TP
                                <input className="mr-2 ml-9" type="radio" value={"0"} name="R1" />
                                DS
                                <input className="mr-2 ml-9" type="radio" value={"1"} name="R1" />
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
                            <Textarea required type="text" id="msg" placeholder="Type Your Message Here" className="col-span-3" />
                        </div>
                    </div>
                    <div className="mb-4 flex items-center">
                        <input id="default-checkbox" type="checkbox" onChange={handleChange} className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600" />
                        <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Accept terms and conditions
                        </label>
                    </div>
                    <DialogFooter>
                        <Button
                            type="reset"
                            onClick={() => {
                                setReclamationDialogVisible(false)
                            }}
                            className="mt-2 inline-flex h-10 items-center justify-center rounded-md border border-slate-200 bg-transparent py-2 px-4 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-700 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 sm:mt-0"
                        >
                            Annuler
                        </Button>
                        <Button type="submit" onClick={addReclamation}>
                            Save changes
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* details Dialog */}
            <Dialog open={deatilsVisible}>
                <DialogTrigger></DialogTrigger>
                <DialogContent className="sm:max-w-[800px] ">
                    <DialogHeader>
                        <DialogTitle>Détails Reclamation</DialogTitle>
                    </DialogHeader>
                    {detailsJson &&
                        detailsJson.map((item, index) => (
                            <table className="w-full table-fixed">
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="bg-gray-200 px-4 py-2 font-bold">ID Reclamation:</td>
                                        <td className="px-4 py-2">{item.idReclamation}</td>
                                    </tr>
                                    <tr>
                                        <td className="bg-gray-200 px-4 py-2 font-bold">Nom Etudiant:</td>
                                        <td className="px-4 py-2">
                                            {item.prenomEtudiant} {item.nomEtudiant}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="bg-gray-200 px-4 py-2 font-bold">Code Matiere</td>
                                        <td className="px-4 py-2">{item.codeMatiere}</td>
                                    </tr>
                                    <tr>
                                        <td className="bg-gray-200 px-4 py-2 font-bold">Nom Enseignant</td>
                                        <td className="px-4 py-2">
                                            {item.prenomEnseignant} {item.nomEnseignant}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-no-wrap w-full bg-gray-200 px-4 py-2 font-bold">Nom Matiere:</td>
                                        <td className="px-4 py-2">{item.nomMatiere}</td>
                                    </tr>
                                    <tr>
                                        <td className="bg-gray-200 px-4 py-2 font-bold">Email etudiant:</td>
                                        <td className="px-4 py-2">{item.emailEtudiant}</td>
                                    </tr>
                                    <tr>
                                        <td className="bg-gray-200 px-4 py-2 font-bold">Type devoir:</td>
                                        <td className="px-4 py-2">{item.typeNote}</td>
                                    </tr>
                                    <tr>
                                        <td className="bg-gray-200 px-4 py-2 font-bold">Message:</td>
                                        <td className="px-4 py-2">{item.message}</td>
                                    </tr>
                                    <tr>
                                        <td className="bg-gray-200 px-4 py-2 font-bold">Date Reclamation:</td>
                                        <td className="px-4 py-2">{item.dateCreation.slice(0, 10)}</td>
                                    </tr>
                                    <tr>
                                        <td className="bg-gray-200 px-4 py-2 font-bold">Statut</td>
                                        <td className="px-4 py-2">{item.statut === "Acceptée" ? <span className="rounded-full bg-green-500 px-2 py-1 text-white">{item.statut}</span> : item.statut === "Refusée" ? <span className="rounded-full bg-red-500 px-2 py-1 text-white">{item.statut}</span> : <span className="rounded-full bg-yellow-500 px-2 py-1 text-white">{item.statut}</span>}</td>
                                    </tr>
                                </tbody>
                            </table>
                        ))}
                    <DialogFooter>
                        <Button
                            type="reset"
                            className="mt-2 inline-flex h-10 items-center justify-center rounded-md border border-slate-200 bg-transparent py-2 px-4 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-700 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 sm:mt-0"
                            onClick={() => setDetailsVisible(false)}
                        >
                            Close
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            <ReclamationTable responseJson={responseJson} changeDialogVisibility={changeDialogVisibility} setDetailsJson={setDetailsJson}></ReclamationTable>
        </div>
    )
}

export default ReclamationNote

export function showCustomToast(toast, message) {
    toast({
        title: message,
        action: <ToastAction altText="Dismiss">D'accord</ToastAction>,
    })
}
