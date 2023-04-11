import { Input } from "@/components/ui/Input"
import { SearchIcon } from "lucide-react"
import { Label } from "@/components/ui/Label"
import { Switch } from "@/components/ui/Switch"
import"./NavBar2.css"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar"

function NavBar2() {
    return (
        <nav>
            <div className="ChargeNavBarContainerStyle">
                <Input type="Text" placeholder="search" className="ChargeNavBarInputStyle" /> 

                <div className="switch">
                <Switch id="airplane-mode" />
                <Label htmlFor="airplane-mode">Enseignant view</Label>
                </div>

                <Avatar className="avatar">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                
            </div>
            
        </nav>
    )
}

export default NavBar2
