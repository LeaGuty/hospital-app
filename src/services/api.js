// URL base de la API
const API_URL = 'http://localhost:3000/api'

// Helper para manejar respuestas
const handleResponse = async (response) => {
  const data = await response.json()
  
  if (!response.ok) {
    throw new Error(data.error || 'Error en la petición')
  }
  
  return data
}

// Cliente API
export const api = {
  // Obtener todos los pacientes
  async obtenerPacientes() {
    const response = await fetch(`${API_URL}/pacientes`)
    return handleResponse(response)
  },

  // Obtener un paciente por ID
  async obtenerPacientePorId(id) {
    const response = await fetch(`${API_URL}/pacientes/${id}`)
    return handleResponse(response)
  },

  // Crear nuevo paciente
  async crearPaciente(paciente) {
    const response = await fetch(`${API_URL}/pacientes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paciente)
    })
    return handleResponse(response)
  },

  // Actualizar paciente
  async actualizarPaciente(id, datos) {
    const response = await fetch(`${API_URL}/pacientes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datos)
    })
    return handleResponse(response)
  },

  // Eliminar paciente
  async eliminarPaciente(id) {
    const response = await fetch(`${API_URL}/pacientes/${id}`, {
      method: 'DELETE'
    })
    return handleResponse(response)
  }
}