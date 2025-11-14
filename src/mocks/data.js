// Base de datos en memoria
let pacientesDB = [
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

// Funciones helper para manipular los datos
export const db = {
  // Obtener todos los pacientes
  getPacientes: () => pacientesDB,
  
  // Obtener paciente por ID
  getPacienteById: (id) => {
    return pacientesDB.find(p => p.id === parseInt(id))
  },
  
  // Crear nuevo paciente
  createPaciente: (paciente) => {
    const nuevoPaciente = {
      id: pacientesDB.length + 1,
      numeroPaciente: `P-${String(pacientesDB.length + 1).padStart(3, '0')}`,
      ...paciente,
      ultimaVisita: new Date().toISOString().split('T')[0]
    }
    pacientesDB.push(nuevoPaciente)
    return nuevoPaciente
  },
  
  // Actualizar paciente
  updatePaciente: (id, datos) => {
    const index = pacientesDB.findIndex(p => p.id === parseInt(id))
    if (index !== -1) {
      pacientesDB[index] = { ...pacientesDB[index], ...datos }
      return pacientesDB[index]
    }
    return null
  },
  
  // Eliminar paciente
  deletePaciente: (id) => {
    const index = pacientesDB.findIndex(p => p.id === parseInt(id))
    if (index !== -1) {
      const paciente = pacientesDB[index]
      pacientesDB = pacientesDB.filter(p => p.id !== parseInt(id))
      return paciente
    }
    return null
  },
  
  // Resetear DB (útil para testing)
  reset: () => {
    pacientesDB = [
      // ... datos originales
    ]
  }
}