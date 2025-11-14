// Base de datos simulada en memoria
const pacientesDB = [
  {
    id: 1,
    numeroPaciente: "P-001",
    nombre: "Juan Pérez García",
    edad: 45,
    genero: "Masculino",
    telefono: "+56 9 8765 4321",
    email: "juan.perez@email.com",
    diagnostico: "Hipertensión",
    ultimaVisita: "2024-11-10"
  },
  {
    id: 2,
    numeroPaciente: "P-002",
    nombre: "María González López",
    edad: 32,
    genero: "Femenino",
    telefono: "+56 9 7654 3210",
    email: "maria.gonzalez@email.com",
    diagnostico: "Control rutinario",
    ultimaVisita: "2024-11-12"
  },
  {
    id: 3,
    numeroPaciente: "P-003",
    nombre: "Carlos Rodríguez Muñoz",
    edad: 58,
    genero: "Masculino",
    telefono: "+56 9 6543 2109",
    email: "carlos.rodriguez@email.com",
    diagnostico: "Diabetes tipo 2",
    ultimaVisita: "2024-11-08"
  },
  {
    id: 4,
    numeroPaciente: "P-004",
    nombre: "Ana Martínez Silva",
    edad: 28,
    genero: "Femenino",
    telefono: "+56 9 5432 1098",
    email: "ana.martinez@email.com",
    diagnostico: "Embarazo - Control prenatal",
    ultimaVisita: "2024-11-13"
  },
  {
    id: 5,
    numeroPaciente: "P-005",
    nombre: "Pedro Sánchez Torres",
    edad: 67,
    genero: "Masculino",
    telefono: "+56 9 4321 0987",
    email: "pedro.sanchez@email.com",
    diagnostico: "Artritis",
    ultimaVisita: "2024-11-09"
  }
]

// Simular delay de red (como una API real)
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

// API Mock - Simula llamadas HTTP
export const mockApi = {
  // GET /pacientes - Obtener todos los pacientes
  async obtenerPacientes() {
    await delay(500) // Simula tiempo de respuesta
    return {
      success: true,
      data: pacientesDB
    }
  },

  // GET /pacientes/:id - Obtener un paciente por ID
  async obtenerPacientePorId(id) {
    await delay(300)
    const paciente = pacientesDB.find(p => p.id === id)
    
    if (paciente) {
      return {
        success: true,
        data: paciente
      }
    } else {
      return {
        success: false,
        error: "Paciente no encontrado"
      }
    }
  },

  // POST /pacientes - Crear nuevo paciente
  async crearPaciente(paciente) {
    await delay(400)
    const nuevoPaciente = {
      id: pacientesDB.length + 1,
      numeroPaciente: `P-${String(pacientesDB.length + 1).padStart(3, '0')}`,
      ...paciente
    }
    pacientesDB.push(nuevoPaciente)
    
    return {
      success: true,
      data: nuevoPaciente
    }
  }
}