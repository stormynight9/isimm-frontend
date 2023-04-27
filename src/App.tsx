import { Toaster } from "@/components/ui/Toaster"
import { ProSidebarProvider } from "react-pro-sidebar"
import { Outlet } from "react-router-dom"
import Sidebar from "./components/shared/Sidebar"
import { useState } from "react"
import { cn } from "./lib/utils"

function App() {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

    return (
        <div>
            <ProSidebarProvider>
                <Sidebar isCollapsed={isSidebarCollapsed} CollapseSidebar={setIsSidebarCollapsed} />
            </ProSidebarProvider>
            <main className={cn("w-full p-2 transition-all duration-200", isSidebarCollapsed ? "lg:pl-[5.5rem]" : "lg:pl-[16.5rem]")}>
                <Outlet />
            </main>
            <Toaster />
        </div>
    )
}

export default App
