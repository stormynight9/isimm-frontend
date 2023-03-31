import { Toaster } from "@/components/ui/Toaster"
import { ProSidebarProvider } from "react-pro-sidebar"
import { Outlet } from "react-router-dom"
import Sidebar from "./components/shared/Sidebar"

function App() {
    return (
        <div>
            <ProSidebarProvider>
                <Sidebar />
            </ProSidebarProvider>
            <main className="ml-64 p-2">
                <Outlet />
            </main>
            <Toaster />
        </div>
    )
}

export default App
