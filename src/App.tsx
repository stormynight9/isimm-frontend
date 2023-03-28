import { Toaster } from "@/components/ui/Toaster";
import { ProSidebarProvider } from 'react-pro-sidebar';
import Sidebar from "./components/shared/Sidebar";

function App() {

  return (
    <div className="h-screen">
      <ProSidebarProvider>
        <Sidebar />
        <Toaster />
      </ProSidebarProvider>
    </div>
  )
}

export default App
