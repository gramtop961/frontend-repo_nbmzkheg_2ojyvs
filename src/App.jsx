import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer className="text-center text-xs text-blue-200/60 py-10">© {new Date().getFullYear()} Ješenca-Požeg Community Center</footer>
    </div>
  )
}

export default App
