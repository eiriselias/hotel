'use client'

import { useAuth } from "@/context/AuthContext"
import DashboardMenu from "./dashboardMenu"

const Dashboard = ({children}:{children: React.ReactNode}) => {

    const { user } = useAuth()

    if (!user) return <>{children}</>

  return (
    <div className="flex w-full h-screen overflow-hidden">
        <aside className="w-[20%] border-r border-gray-200 overflow-y-auto ">
            <DashboardMenu/>
        </aside>
        <main className="w-[80%] h-full overflow-y-auto  relative">
            {children}
        </main>
    </div>
  )
}

export default Dashboard