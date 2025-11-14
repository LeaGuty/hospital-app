import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function Layout() {
  return (
    <div className="min-h-screen bg-red-200">
      {/* Navbar siempre visible */}
      <Navbar />

      {/* Contenido de cada página */}
      <main className="py-8 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>

      {/* Footer siempre visible */}
      <footer className="bg-gradient-to-r from-hospital-darkRed via-black   to-hospital-darkRed border-t-2 border-hospital-primary py-6 mt-12 shadow-dark-red">
        <div className="max-w-7xl mx-auto px-4 text-center text-red-400">
          <p className="horror-text">🩸 © 2024 Hospital del Terror - Sistema de Almas Malditas 💀</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout