import StatCard from '../components/StatCard'
import PageSection from '../components/PageSection'

function Home() {
  return (
    <div>
      <PageSection 
        title="Dashboard del Hospital" 
        subtitle="Resumen de actividades del día"
        icon="🏥"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            icon="👥"
            title="Total Pacientes"
            value="1,234"
            bgColor="bg-blue-50"
            iconColor="text-blue-600"
          />
          <StatCard
            icon="👨‍⚕️"
            title="Médicos Disponibles"
            value="89"
            bgColor="bg-cyan-50"
            iconColor="text-cyan-600"
          />
          <StatCard
            icon="📋"
            title="Consultas Hoy"
            value="42"
            bgColor="bg-green-50"
            iconColor="text-green-600"
          />
        </div>
      </PageSection>

      <PageSection 
        title="Acciones Rápidas" 
        icon="⚡"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="bg-hospital-primary hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors">
            ➕ Registrar Nuevo Paciente
          </button>
          <button className="bg-hospital-secondary hover:bg-cyan-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors">
            📅 Agendar Consulta
          </button>
        </div>
      </PageSection>
    </div>
  )
}

export default Home