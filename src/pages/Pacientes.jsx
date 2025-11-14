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
      <PageSection title="Lista de Pacientes" icon="👥">
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-hospital-primary"></div>
          <p className="ml-4 text-gray-600">Cargando pacientes...</p>
        </div>
      </PageSection>
    )
  }

  if (error) {
    return (
      <PageSection title="Lista de Pacientes" icon="👥">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">❌ {error}</p>
          <button 
            onClick={cargarPacientes}
            className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Reintentar
          </button>
        </div>
      </PageSection>
    )
  }

  return (
    <div className="space-y-6">
      {/* Mensaje de éxito */}
      {mensajeExito && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 animate-pulse">
          <p className="text-green-800 font-medium">{mensajeExito}</p>
        </div>
      )}

      <PageSection 
        title="Lista de Pacientes" 
        subtitle={`Total: ${pacientes.length} pacientes registrados`}
        icon="👥"
      >
        {/* Botón para mostrar/ocultar formulario */}
        <div className="mb-6">
          <button
            onClick={() => setMostrarFormulario(!mostrarFormulario)}
            className="bg-hospital-primary hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            {mostrarFormulario ? '❌ Cancelar' : '➕ Agregar Nuevo Paciente'}
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
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  N° Paciente
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nombre
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Edad
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Diagnóstico
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Última Visita
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {pacientes.map((paciente) => (
                <tr key={paciente.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-hospital-primary">
                      {paciente.numeroPaciente}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {paciente.nombre}
                    </div>
                    <div className="text-sm text-gray-500">
                      {paciente.email}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {paciente.edad} años
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {paciente.diagnostico}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
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