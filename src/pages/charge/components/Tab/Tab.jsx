import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs"
import { Input } from "@/components/ui/Input"
import "./Tab.css"
import { Button } from "@/components/ui/Button"

const Tab =() =>{
    return(
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
        </TabsList>

        <TabsContent value="account">

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Make changes to your account here. Click save when you&apos;re done.
            </p>

            <h1>Name</h1>

            <div className="pen">
            <Input type="String" placeholder="Name" />
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><line x1="18" x2="22" y1="2" y2="6"></line><path d="M7.5 20.5 19 9l-4-4L3.5 16.5 2 22z"></path></svg>
            </div>

            <h1>Cin</h1>
            <div className="pen">
            <Input type="String" placeholder="Cin" />
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><line x1="18" x2="22" y1="2" y2="6"></line><path d="M7.5 20.5 19 9l-4-4L3.5 16.5 2 22z"></path></svg>
            </div>

            <h1>Rapport du charge Horaire</h1>
            <div className="pen">
            <Input type="number" placeholder="0" />
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><line x1="18" x2="22" y1="2" y2="6"></line><path d="M7.5 20.5 19 9l-4-4L3.5 16.5 2 22z"></path></svg>
            </div>
        </TabsContent>

        <Button className="BoutonEdit">Edit</Button>
     
    </Tabs>
    

    )
} 
export default Tab