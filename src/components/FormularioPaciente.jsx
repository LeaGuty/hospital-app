import { useState } from 'react'

function FormularioPaciente({ onAgregar, onCancelar }) {
  // Estado para cada campo del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    edad: '',
    genero: 'Masculino',
    telefono: '',
    email: '',
    diagnostico: ''
  })

  // Estado para errores de validación
  const [errores, setErrores] = useState({})

  // Maneja cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target
    
    // Actualiza el campo específico en formData
    setFormData({
      ...formData,      // Copia todos los valores anteriores
      [name]: value     // Actualiza solo el campo que cambió
    })
    
    // Limpia el error del campo cuando el usuario empieza a escribir
    if (errores[name]) {
      setErrores({
        ...errores,
        [name]: null
      })
    }
  }

  // Valida el formulario
  const validarFormulario = () => {
    const nuevosErrores = {}

    // Validar nombre
    if (!formData.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es obligatorio'
    } else if (formData.nombre.length < 3) {
      nuevosErrores.nombre = 'El nombre debe tener al menos 3 caracteres'
    }

    // Validar edad
    if (!formData.edad) {
      nuevosErrores.edad = 'La edad es obligatoria'
    } else if (formData.edad < 0 || formData.edad > 120) {
      nuevosErrores.edad = 'Edad no válida'
    }

    // Validar teléfono (opcional pero si está, debe ser válido)
    if (formData.telefono && formData.telefono.length < 8) {
      nuevosErrores.telefono = 'Teléfono no válido'
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email) {
      nuevosErrores.email = 'El email es obligatorio'
    } else if (!emailRegex.test(formData.email)) {
      nuevosErrores.email = 'Email no válido'
    }

    // Validar diagnóstico
    if (!formData.diagnostico.trim()) {
      nuevosErrores.diagnostico = 'El diagnóstico es obligatorio'
    }

    setErrores(nuevosErrores)
    
    // Retorna true si no hay errores
    return Object.keys(nuevosErrores).length === 0
  }

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault() // Evita que la página se recargue
    
    if (validarFormulario()) {
      // Si todo está bien, llamamos a la función que nos pasaron por props
      onAgregar({
        ...formData,
        edad: parseInt(formData.edad), // Convertimos edad a número
        ultimaVisita: new Date().toISOString().split('T')[0] // Fecha actual
      })
    }
  }

  return (
    <div className="bg-gradient-to-br from-black to-hospital-darkRed rounded-xl shadow-dark-red p-6 border-2 border-hospital-primary">
      <h3 className="text-2xl font-bold text-hospital-secondary mb-6 horror-text">
        🧟 Registrar Nueva Víctima
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Campo: Nombre */}
        <div>
          <label className="block text-sm font-medium text-red-300 mb-1">
            Nombre de la Víctima *
          </label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className={`w-full px-4 py-2 bg-black bg-opacity-70 text-red-100 border rounded-lg focus:ring-2 focus:ring-hospital-secondary focus:border-hospital-primary transition-all ${
              errores.nombre ? 'border-hospital-secondary' : 'border-hospital-primary'
            }`}
            placeholder="Ej: Juan Pérez García"
          />
          {errores.nombre && (
            <p className="text-hospital-secondary text-sm mt-1">⚠️ {errores.nombre}</p>
          )}
        </div>

        {/* Campo: Edad y Género (en la misma fila) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-red-300 mb-1">
              Edad *
            </label>
            <input
              type="number"
              name="edad"
              value={formData.edad}
              onChange={handleChange}
              className={`w-full px-4 py-2 bg-black bg-opacity-70 text-red-100 border rounded-lg focus:ring-2 focus:ring-hospital-secondary focus:border-hospital-primary transition-all ${
                errores.edad ? 'border-hospital-secondary' : 'border-hospital-primary'
              }`}
              placeholder="Ej: 45"
              min="0"
              max="120"
            />
            {errores.edad && (
              <p className="text-hospital-secondary text-sm mt-1">⚠️ {errores.edad}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-red-300 mb-1">
              Género *
            </label>
            <select
              name="genero"
              value={formData.genero}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-black bg-opacity-70 text-red-100 border border-hospital-primary rounded-lg focus:ring-2 focus:ring-hospital-secondary focus:border-hospital-primary"
            >
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
        </div>

        {/* Campo: Teléfono */}
        <div>
          <label className="block text-sm font-medium text-red-300 mb-1">
            Teléfono
          </label>
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className={`w-full px-4 py-2 bg-black bg-opacity-70 text-red-100 border rounded-lg focus:ring-2 focus:ring-hospital-secondary focus:border-hospital-primary transition-all ${
              errores.telefono ? 'border-hospital-secondary' : 'border-hospital-primary'
            }`}
            placeholder="Ej: +56 9 8765 4321"
          />
          {errores.telefono && (
            <p className="text-hospital-secondary text-sm mt-1">⚠️ {errores.telefono}</p>
          )}
        </div>

        {/* Campo: Email */}
        <div>
          <label className="block text-sm font-medium text-red-300 mb-1">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 bg-black bg-opacity-70 text-red-100 border rounded-lg focus:ring-2 focus:ring-hospital-secondary focus:border-hospital-primary transition-all ${
              errores.email ? 'border-hospital-secondary' : 'border-hospital-primary'
            }`}
            placeholder="Ej: victima@infierno.com"
          />
          {errores.email && (
            <p className="text-hospital-secondary text-sm mt-1">⚠️ {errores.email}</p>
          )}
        </div>

        {/* Campo: Diagnóstico */}
        <div>
          <label className="block text-sm font-medium text-red-300 mb-1">
            Maldición *
          </label>
          <textarea
            name="diagnostico"
            value={formData.diagnostico}
            onChange={handleChange}
            rows="3"
            className={`w-full px-4 py-2 bg-black bg-opacity-70 text-red-100 border rounded-lg focus:ring-2 focus:ring-hospital-secondary focus:border-hospital-primary transition-all ${
              errores.diagnostico ? 'border-hospital-secondary' : 'border-hospital-primary'
            }`}
            placeholder="Ej: Posesión demoníaca, Maldición ancestral, etc."
          />
          {errores.diagnostico && (
            <p className="text-hospital-secondary text-sm mt-1">⚠️ {errores.diagnostico}</p>
          )}
        </div>

        {/* Botones */}
        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            className="flex-1 bg-hospital-primary hover:bg-hospital-secondary text-white font-semibold py-3 px-6 rounded-lg transition-all shadow-red-glow hover:shadow-dark-red border-2 border-hospital-accent"
          >
            💀 Capturar Alma
          </button>
          <button
            type="button"
            onClick={onCancelar}
            className="flex-1 bg-hospital-blood hover:bg-hospital-darkRed text-white font-semibold py-3 px-6 rounded-lg transition-all border-2 border-hospital-primary"
          >
            ❌ Cancelar
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormularioPaciente