import { Toaster } from "@/components/ui/Toaster"
import { ProSidebarProvider } from "react-pro-sidebar"
import { Outlet } from "react-router-dom"
import Sidebar from "./components/shared/Sidebar"

function App() {
    return (
        <div className="flex h-screen">
            <ProSidebarProvider>
                <Sidebar />
            </ProSidebarProvider>
            {/* <div className="p-2 w-full"> */}
            <div className="p-2">
                <Outlet />
            </div>
            <Toaster />
        </div>
    )
}

export default App
