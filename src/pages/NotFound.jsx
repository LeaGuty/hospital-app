import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20 min-h-screen bg-black">
      <div className="text-9xl mb-4 filter drop-shadow-[0_0_30px_rgba(220,20,60,1)] animate-pulse">💀</div>
      <h1 className="text-4xl font-bold text-hospital-secondary mb-2 horror-text">
        666 - Alma Perdida
      </h1>
      <p className="text-red-400 mb-8 text-center max-w-md">
        Esta página ha sido consumida por las sombras... No existe en este plano de la realidad
      </p>
      <Link
        to="/"
        className="bg-hospital-primary hover:bg-hospital-secondary text-white font-semibold py-3 px-6 rounded-lg transition-all shadow-red-glow hover:shadow-dark-red border-2 border-hospital-accent"
      >
        🩸 Regresar al Infierno
      </Link>
    </div>
  )
}

export default NotFound