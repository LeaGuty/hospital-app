import StatCard from '../components/StatCard'
import PageSection from '../components/PageSection'

function Home() {
  return (
    <div>
      <PageSection
        title="Dashboard del Terror"
        subtitle="Resumen de actividades macabras"
        icon="💀"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            icon="🩸"
            title="Almas Perdidas"
            value="1,234"
            bgColor="bg-red-200"
            iconColor="text-red-900"
          />
          <StatCard
            icon="⚰️"
            title="Médicos Malditos"
            value="89"
            bgColor="bg-red-200"
            iconColor="text-red-900"
          />
          <StatCard
            icon="🔪"
            title="Rituales Hoy"
            value="42"
            bgColor="bg-red-200"
            iconColor="text-red-900"
          />
        </div>
      </PageSection>

      <PageSection
        title="Acciones Oscuras"
        icon="⚠️"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="bg-hospital-primary hover:bg-hospital-secondary text-white font-semibold py-4 px-6 rounded-xl transition-all shadow-red-glow hover:shadow-dark-red border-2 border-hospital-accent">
            🧟 Registrar Nueva Víctima
          </button>
          <button className="bg-hospital-blood hover:bg-hospital-primary text-white font-semibold py-4 px-6 rounded-xl transition-all shadow-red-glow hover:shadow-dark-red border-2 border-hospital-accent">
            📅 Agendar Ritual
          </button>
        </div>
      </PageSection>
    </div>
  )
}

export default Home