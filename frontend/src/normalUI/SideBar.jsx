import {
    Home,
    Landmark,
    Menu,
    NotebookTabs,
    PhoneCall,
    PhoneOutgoing,
    Users,
    LogOut,
    FileText,
    Cloud,
    CloudOff,
    CloudLightning,
    Bell,
    ChartNoAxesColumn
} from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const SIDEBAR_ITEMS = [
    { name: "Home", icon: Home, color: "#F59EB7", href: "/dashboard" },
    { name: "Bills", icon: FileText, color: "#8B5CF6", href: "/dashboard/bills" },
    { name:"Usage", icon: ChartNoAxesColumn, color: "#EC4899", href: "/dashboard/usage" },
    { name: "Notifications", icon: Bell, color: "#6EE7B7", href: "/dashboard/notifications" },
    { name: "Logout", icon: LogOut, color: "#FF0233", href: "/login" },
];

export const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <motion.div
            className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${isSidebarOpen ? "w-64" : "w-20"
                }`}
            animate={{ width: isSidebarOpen ? 256 : 80 }}
        >
            <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
                {/* Toggle Button */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit hover:cursor-pointer"
                >
                    <Menu size={24} color="#9CA3AF" />
                </motion.button>

                {/* Navigation */}
                <nav className="mt-8 flex-grow">
                    {SIDEBAR_ITEMS.map((item) => (
                        <Link key={item.href} to={item.href}>
                            <motion.div
                                className="group flex items-center p-4 text-sm font-medium rounded-lg transition-all mb-2"
                            >
                                <item.icon
                                    size={20}
                                    style={{ color: item.color, minWidth: "20px" }}
                                    className="transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_currentColor] group-hover:brightness-150"
                                />
                                <AnimatePresence>
                                    {isSidebarOpen && (
                                        <motion.span
                                            className="ml-4 whitespace-nowrap text-gray-400 transition duration-300 group-hover:text-gray-100 group-hover:drop-shadow-[0_0_8px_#ffffff]"
                                            initial={{ opacity: 0, width: 0 }}
                                            animate={{ opacity: 1, width: "auto" }}
                                            exit={{ opacity: 0, width: 0 }}
                                            transition={{ duration: 0.2, delay: 0.3 }}
                                        >
                                            {item.name}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </Link>


                    ))}
                </nav>
            </div>
        </motion.div>
    );
};
