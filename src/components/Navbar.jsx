import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()
  
  // Función para saber si un link está activo
  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-3xl">🏥</span>
            <span className="text-xl font-bold text-hospital-primary">
              Hospital San Parche Curita
            </span>
          </Link>

          {/* Links de navegación */}
          <div className="flex space-x-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                isActive('/') 
                  ? 'bg-hospital-primary text-white' 
                  : 'text-gray-700 hover:bg-blue-50'
              }`}
            >
              🏠 Inicio
            </Link>
            
            <Link
              to="/pacientes"
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                isActive('/pacientes') 
                  ? 'bg-hospital-primary text-white' 
                  : 'text-gray-700 hover:bg-blue-50'
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