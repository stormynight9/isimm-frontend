import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs"
import { Input } from "@/components/ui/Input"
import "./Tab.css"
import { Button } from "@/components/ui/Button"
import EditIcon from "../EditIcon/EditIcon"
import React from 'react';




const Tab = () => {
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
                        <Input type="String" placeholder="Nom" />
                        <EditIcon />
               
                    </div>

                    <h1>Prenom</h1>
                    <div className="pen">
                        <Input type="String" placeholder="Prenom" />
                        <EditIcon />
                    </div>

                    <h1>Email</h1>
                    <div className="pen">
                        <Input type="email" placeholder="Email" />
                        <EditIcon />
                    </div>
                    <div className="pen button">
                        <Button className="BoutonEdit">Edit</Button>
                    </div>
                </div>
            </TabsContent>
            <TabsContent value="security">
                <div className="TabsContent">
                    <p className="text-sm text-slate-500 dark:text-slate-400">Make changes to your account here. Click save when you&apos;re done.</p>
                    <h1>Password</h1>
                    <div className="pen">
                        <Input type="String" placeholder="Ancien mot de passe" />
                        <EditIcon />
                    </div>

                    <h1>New Password</h1>
                    <div className="pen">
                        <Input type="String" placeholder="Nouveau mot de passe" />
                        <EditIcon />
                    </div>

                    <div className="pen button">
                        <Button className="BoutonEdit">Edit</Button>
                    </div>
                </div>
            </TabsContent>
        </Tabs>
    )


    
}
export default Tab
