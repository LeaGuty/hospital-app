import { http, HttpResponse, delay } from 'msw'
import { db } from './data'

// URL base de tu API (puedes cambiarla)
const API_URL = 'http://localhost:3000/api'

export const handlers = [
  // GET /api/pacientes - Obtener todos los pacientes
http.get(`${API_URL}/pacientes`, async () => {
  await delay(500)
  
  // 30% de probabilidad de error
  if (Math.random() < 0.1) {
    return HttpResponse.json({
      success: false,
      error: 'Error del servidor'
    }, { status: 500 })
  }
  
  return HttpResponse.json({
    success: true,
    data: db.getPacientes()
  })
}),

  // GET /api/pacientes/:id - Obtener un paciente específico
  http.get(`${API_URL}/pacientes/:id`, async ({ params }) => {
    await delay(300)
    
    const { id } = params
    const paciente = db.getPacienteById(id)
    
    if (!paciente) {
      return HttpResponse.json({
        success: false,
        error: 'Paciente no encontrado'
      }, { status: 404 })
    }
    
    return HttpResponse.json({
      success: true,
      data: paciente
    }, { status: 200 })
  }),

  // POST /api/pacientes - Crear nuevo paciente
  http.post(`${API_URL}/pacientes`, async ({ request }) => {
    await delay(400)
    
    // Lee el body de la petición
    const nuevoPaciente = await request.json()
    
    // Validaciones básicas
    if (!nuevoPaciente.nombre || !nuevoPaciente.edad) {
      return HttpResponse.json({
        success: false,
        error: 'Nombre y edad son obligatorios'
      }, { status: 400 })
    }
    
    const pacienteCreado = db.createPaciente(nuevoPaciente)
    
    return HttpResponse.json({
      success: true,
      data: pacienteCreado,
      message: 'Paciente creado exitosamente'
    }, { status: 201 })
  }),

  // PUT /api/pacientes/:id - Actualizar paciente
  http.put(`${API_URL}/pacientes/:id`, async ({ params, request }) => {
    await delay(400)
    
    const { id } = params
    const datosActualizados = await request.json()
    
    const pacienteActualizado = db.updatePaciente(id, datosActualizados)
    
    if (!pacienteActualizado) {
      return HttpResponse.json({
        success: false,
        error: 'Paciente no encontrado'
      }, { status: 404 })
    }
    
    return HttpResponse.json({
      success: true,
      data: pacienteActualizado,
      message: 'Paciente actualizado exitosamente'
    }, { status: 200 })
  }),

  // DELETE /api/pacientes/:id - Eliminar paciente
  http.delete(`${API_URL}/pacientes/:id`, async ({ params }) => {
    await delay(300)
    
    const { id } = params
    const pacienteEliminado = db.deletePaciente(id)
    
    if (!pacienteEliminado) {
      return HttpResponse.json({
        success: false,
        error: 'Paciente no encontrado'
      }, { status: 404 })
    }
    
    return HttpResponse.json({
      success: true,
      data: pacienteEliminado,
      message: 'Paciente eliminado exitosamente'
    }, { status: 200 })
  }),

  // Simular un error 500 (útil para testing)
  http.get(`${API_URL}/error`, async () => {
    await delay(200)
    return HttpResponse.json({
      success: false,
      error: 'Error interno del servidor'
    }, { status: 500 })
  })
]