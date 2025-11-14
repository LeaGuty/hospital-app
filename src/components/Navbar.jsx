import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()
  
  // Función para saber si un link está activo
  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav className="bg-gradient-to-r from-black via-hospital-darkRed to-black shadow-blood border-b-2 border-hospital-primary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <span className="text-3xl filter drop-shadow-[0_0_8px_rgba(220,20,60,0.8)] group-hover:drop-shadow-[0_0_15px_rgba(220,20,60,1)] transition-all">💀</span>
            <span className="text-xl font-bold text-hospital-secondary horror-text">
              Hospital del Terror
            </span>
          </Link>

          {/* Links de navegación */}
          <div className="flex space-x-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive('/')
                  ? 'bg-hospital-primary text-white shadow-red-glow border border-hospital-secondary'
                  : 'text-red-400 hover:bg-hospital-blood hover:text-white hover:shadow-red-glow border border-transparent'
              }`}
            >
              🏠 Inicio
            </Link>

            <Link
              to="/pacientes"
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive('/pacientes')
                  ? 'bg-hospital-primary text-white shadow-red-glow border border-hospital-secondary'
                  : 'text-red-400 hover:bg-hospital-blood hover:text-white hover:shadow-red-glow border border-transparent'
              }`}
            >
              👥 Pacientes
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar