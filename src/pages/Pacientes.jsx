import { useState, useEffect } from 'react'
import { api } from '../services/api'
import PageSection from '../components/PageSection'
import FormularioPaciente from '../components/FormularioPaciente'

function Pacientes() {
  const [pacientes, setPacientes] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  
  // Nuevo estado: controla si el formulario está visible
  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  
  // Nuevo estado: mensaje de éxito
  const [mensajeExito, setMensajeExito] = useState(null)

  useEffect(() => {
    cargarPacientes()
  }, [])

  const cargarPacientes = async () => {
    try {
      setCargando(true)
      setError(null)
      
      // ✅ Usa el nuevo cliente API
      const respuesta = await api.obtenerPacientes()
      
      if (respuesta.success) {
        setPacientes(respuesta.data)
      } else {
        setError("Error al cargar pacientes")
      }
    } catch (err) {
      setError(err.message || "Error de conexión")
      console.error(err)
    } finally {
      setCargando(false)
    }
  }

  const agregarPaciente = async (nuevoPaciente) => {
    try {
      // ✅ Usa el nuevo cliente API
      const respuesta = await api.crearPaciente(nuevoPaciente)
      
      if (respuesta.success) {
        await cargarPacientes()
        setMostrarFormulario(false)
        setMensajeExito('✅ Paciente registrado exitosamente')
        
        setTimeout(() => {
          setMensajeExito(null)
        }, 3000)
      }
    } catch (err) {
      setError(err.message || "Error al crear paciente")
      console.error(err)
    }
  }

  if (cargando) {
    return (
      <PageSection title="Almas Perdidas" icon="💀">
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-hospital-secondary shadow-red-glow"></div>
          <p className="ml-4 text-red-400">Invocando almas perdidas...</p>
        </div>
      </PageSection>
    )
  }

  if (error) {
    return (
      <PageSection title="Almas Perdidas" icon="💀">
        <div className="bg-gradient-to-r from-hospital-darkRed to-black border-2 border-hospital-secondary rounded-lg p-4 shadow-red-glow">
          <p className="text-red-300">💀 {error}</p>
          <button
            onClick={cargarPacientes}
            className="mt-4 bg-hospital-primary hover:bg-hospital-secondary text-white px-4 py-2 rounded-lg shadow-red-glow transition-all"
          >
            Reinvocar
          </button>
        </div>
      </PageSection>
    )
  }

  return (
    <div className="space-y-6">
      {/* Mensaje de éxito */}
      {mensajeExito && (
        <div className="bg-gradient-to-r from-hospital-darkRed to-hospital-primary border-2 border-hospital-secondary rounded-lg p-4 animate-pulse shadow-blood">
          <p className="text-red-100 font-medium">{mensajeExito}</p>
        </div>
      )}

      <PageSection
        title="Registro de Almas Malditas"
        subtitle={`Total: ${pacientes.length} almas capturadas`}
        icon="💀"
      >
        {/* Botón para mostrar/ocultar formulario */}
        <div className="mb-6">
          <button
            onClick={() => setMostrarFormulario(!mostrarFormulario)}
            className="bg-hospital-primary hover:bg-hospital-secondary text-white font-semibold py-3 px-6 rounded-lg transition-all shadow-red-glow hover:shadow-dark-red border-2 border-hospital-accent"
          >
            {mostrarFormulario ? '❌ Cancelar' : '🧟 Agregar Nueva Víctima'}
          </button>
        </div>

        {/* Formulario (se muestra/oculta según el estado) */}
        {mostrarFormulario && (
          <div className="mb-6">
            <FormularioPaciente
              onAgregar={agregarPaciente}
              onCancelar={() => setMostrarFormulario(false)}
            />
          </div>
        )}

        {/* Tabla de pacientes */}
        <div className="bg-gradient-to-br from-black to-hospital-darkRed rounded-xl shadow-dark-red overflow-hidden border-2 border-hospital-primary">
          <table className="min-w-full divide-y divide-hospital-primary">
            <thead className="bg-gradient-to-r from-hospital-darkRed to-black">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-hospital-secondary uppercase tracking-wider">
                  N° Alma
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-hospital-secondary uppercase tracking-wider">
                  Víctima
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-hospital-secondary uppercase tracking-wider">
                  Edad
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-hospital-secondary uppercase tracking-wider">
                  Maldición
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-hospital-secondary uppercase tracking-wider">
                  Último Ritual
                </th>
              </tr>
            </thead>
            <tbody className="bg-black bg-opacity-50 divide-y divide-hospital-blood">
              {pacientes.map((paciente) => (
                <tr key={paciente.id} className="hover:bg-hospital-blood transition-all hover:shadow-red-glow">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-hospital-secondary">
                      {paciente.numeroPaciente}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-red-200">
                      {paciente.nombre}
                    </div>
                    <div className="text-sm text-red-400">
                      {paciente.email}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-red-300">
                    {paciente.edad} años
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-hospital-primary text-white border border-hospital-secondary">
                      {paciente.diagnostico}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-red-300">
                    {paciente.ultimaVisita}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PageSection>
    </div>
  )
}

export default Pacientes