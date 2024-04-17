import { Sidebar } from "@/components"
import Image from "next/image"

const Dashboardlayout = ({ children }: { children: React.ReactNode }) => 
{
    return (
        <div className="bg-slate-100 overflow-x-scroll h-screen antialiased text-slate-300
        selection:bg-blue-600 selection:text-white" style={{ scrollbarColor: '#4a5568 #1a202c' }}>
            <div className="flex">
                <Sidebar />
                <div className="p-2 w-full text-slate-900">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Dashboardlayout
