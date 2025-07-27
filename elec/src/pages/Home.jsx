import { Sidebar } from '@/normalUI/Sidebar'
import React from 'react'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div>
        <Sidebar />
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default Home