import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs"
import { Input } from "@/components/ui/Input"
import "./Tab.css"
import { Button } from "@/components/ui/Button"
import EditIcon from "../EditIcon/EditIcon"
import React, { useState,useEffect } from "react"
import { ToastAction } from "@/components/ui/Toast"
import { useToast } from "@/hooks/useToast"

const Tab = () => {
    const [nom, setNom] = useState({ value: "", disabled: true })
    const [prenom, setPrenom] = useState({ value: "", disabled: true })
    const [email, setEmail] = useState({ value: "", disabled: true })
    const [enseignantId, setenseignantId] = useState({ value: "1", disabled: true })
    const { toast } = useToast()
    function showToast(message) {
        showCustomToast(toast, message)
    }
    useEffect(() => {
        const getEnseignant = async () => {
            const response = await fetch("http://localhost:8090/api/isimm/distributionCharge/enseignant/1", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const responseJson = await response.json()
            console.log(responseJson)

        }
        getEnseignant()
    }, [])
    const handleClickEdit = async () => {
        console.log('helllo1')
        const responseAdd = await fetch(`http://localhost:8090/api/isimm/distributionCharge/enseignant/updateEnseignant?enseignantId=${enseignantId.value}&nom=${nom.value}&prenom=${prenom.value}&email=${email.value}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
        })
        console.log('helllo2')

        if (responseAdd.ok) {
            showToast(" Edited")
        }
    }
    return (
        <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
                <TabsTrigger value="account">Information de compte</TabsTrigger>
                <TabsTrigger value="security">Securité</TabsTrigger>
            </TabsList>

            <TabsContent value="account">
                <div className="TabsContent">
                    <p className="text-sm text-slate-500 dark:text-slate-400">Make changes to your account here. Click save when you&apos;re done.</p>

                    <h1>Nom</h1>

                    <div className="pen">
                        <Input
                            type="String"
                            placeholder="Nom"
                            onChange={(evt) => {
                                setNom({ value: evt.target.value, disabled: nom.disabled })
                            }}
                            value={nom.value}
                            disabled={nom.disabled}
                        />
                        <div
                            className="icon"
                            onClick={() => {
                                console.log("ajfnlakfn")
                                setNom({ value: nom.value, disabled: false })
                            }}
                        >
                            <EditIcon />
                        </div>
                    </div>

                    <h1>Prenom</h1>
                    <div className="pen">
                        <Input
                            type="String"
                            placeholder="Prenom"
                            onChange={(evt) => {
                                setPrenom({ value: evt.target.value, disabled: prenom.disabled })
                            }}
                            value={prenom.value}
                            disabled={prenom.disabled}
                        />
                        <div
                            className="icon"
                            onClick={() => {
                                console.log("ajfnlakfn")
                                setPrenom({ value: prenom.value, disabled: false })
                            }}
                        >
                            <EditIcon />
                        </div>
                    </div>

                    <h1>Email</h1>
                    <div className="pen">
                        <Input
                            type="email"
                            placeholder="Email"
                            onChange={(evt) => {
                                setEmail({ value: evt.target.value, disabled: email.disabled })
                            }}
                            value={email.value}
                            disabled={email.disabled}
                        />
                        <div
                            className="icon"
                            onClick={() => {
                                console.log("ajfnlakfn")
                                setEmail({ value: email.value, disabled: false })
                            }}
                        >
                            <EditIcon />
                        </div>
                    </div>
                    <div className="pen button">
                        <Button className="BoutonEdit" onClick={handleClickEdit} >Edit</Button>
                    </div>
                </div>
            </TabsContent>
            <TabsContent value="security">
                <div className="TabsContent">
                    <p className="text-sm text-slate-500 dark:text-slate-400">Make changes to your account here. Click save when you&apos;re done.</p>
                    <h1>Password</h1>
                    <div className="pen">
                        <Input
                            type="String"
                            placeholder="Ancien mot de passe"
                            onChange={(evt) => {
                                setPassword({ value: evt.target.value, disabled: Password.disabled })
                            }}
                            value={Password.value}
                            disabled={Password.disabled}
                        />
                        <div
                        onClick={() => {
                                console.log("ajfnlakfn")
                                setPassword({ value: Password.value, disabled: false })
                            }}>
                            <EditIcon />
                        </div>
                        
                    </div>

                    <h1>New Password</h1>
                    <div className="pen">
                        <Input
                            type="String"
                            placeholder="Nouveau mot de passe"
                            onChange={(evt) => {
                                setNPassword({ value: evt.target.value, disabled: NPassword.disabled })
                            }}
                            value={NPassword.value}
                            disabled={NPassword.disabled}
                        />
                        <div
                        onClick={() => {
                                console.log("ajfnlakfn")
                                setNPassword({ value: NPassword.value, disabled: false })
                            }}
                            >
                        <EditIcon />
                        </div>
                       
                    </div>

                    <div className="pen button">
                        <Button className="BoutonEdit"  >Edit</Button>
                    </div>
                </div>
            </TabsContent>
        </Tabs>
    )
}
export default Tab
export function showCustomToast(toast, message) {
    toast({
        title: message,
        action: <ToastAction altText="Dismiss">D'accord</ToastAction>,
    })
}
