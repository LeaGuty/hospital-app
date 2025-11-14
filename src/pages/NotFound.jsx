import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="text-9xl mb-4">🏥</div>
      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        404 - Página no encontrada
      </h1>
      <p className="text-gray-600 mb-8">
        La página que buscas no existe
      </p>
      <Link 
        to="/" 
        className="bg-hospital-primary hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
      >
        🏠 Volver al Inicio
      </Link>
    </div>
  )
}

export default NotFound