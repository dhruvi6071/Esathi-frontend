import { Sidebar } from "@/normalUI/SideBar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return(
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <main className="flex-grow overflow-auto">
                <Outlet />
            </main>
        </div>
    )
}

export default DashboardLayout;