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
            <main className="w-full p-2 lg:pl-[16.5rem]">
                <Outlet />
            </main>
            <Toaster />
        </div>
    )
}

export default App
