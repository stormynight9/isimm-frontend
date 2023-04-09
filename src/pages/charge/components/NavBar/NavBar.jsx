import { Input } from "@/components/ui/Input"
import "./NavBar.css"
import { SearchIcon } from "lucide-react"

function NavBar() {
    return (
        <nav>
            <div className="ChargeNavBarContainerStyle">
                <Input type="Text" placeholder="search" className="ChargeNavBarInputStyle" />
            </div>
        </nav>
    )
}

export default NavBar
