import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Navbar siempre visible */}
      <Navbar />
      
      {/* Contenido de cada página */}
      <main className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
      
      {/* Footer siempre visible */}
      <footer className="bg-white border-t border-gray-200 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
          <p>© 2024 Hospital San Parche Curita - Sistema de Gestión</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout