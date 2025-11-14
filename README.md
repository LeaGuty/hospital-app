# 💀 Hospital del Terror - App de Práctica React

## Descripción

Este proyecto es un desarrollo de práctica educativa para aprender React y su integración con backend. Se trata de una aplicación web de gestión hospitalaria con una temática terrorífica, diseñada para practicar conceptos fundamentales de desarrollo frontend moderno.

## Objetivo del Proyecto

Proyecto de aprendizaje que integra:
- **Frontend**: React + Vite + Tailwind CSS
- **Backend simulado**: MSW (Mock Service Worker) para simular API REST
- **Routing**: React Router para navegación entre páginas
- **Estado**: React Hooks (useState, useEffect)
- **Validación de formularios**: Validación manual de datos
- **Estilizado**: Tailwind CSS con tema personalizado

## Características

- Sistema de gestión de pacientes (CRUD simulado)
- Navegación con React Router
- Tema visual terrorífico con tonalidades rojas
- Formularios con validación
- Dashboard con estadísticas
- API simulada con MSW para desarrollo sin backend real
- Animaciones y efectos visuales CSS

## Tecnologías Utilizadas

- **React 18** - Librería de UI
- **Vite** - Build tool y dev server
- **React Router** - Navegación
- **Tailwind CSS** - Framework CSS
- **MSW (Mock Service Worker)** - Simulación de API REST
- **ESLint** - Linter para calidad de código

## Instalación

```bash
# Clonar el repositorio
git clone [url-del-repositorio]

# Navegar al directorio
cd hospital-app

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## Estructura del Proyecto

```
src/
├── components/        # Componentes reutilizables
│   ├── Card.jsx
│   ├── FormularioPaciente.jsx
│   ├── Layout.jsx
│   ├── Navbar.jsx
│   ├── PageSection.jsx
│   └── StatCard.jsx
├── pages/            # Páginas de la aplicación
│   ├── Home.jsx
│   ├── NotFound.jsx
│   └── Pacientes.jsx
├── mocks/            # Configuración MSW para API simulada
│   ├── browser.js
│   ├── data.js
│   └── handlers.js
├── services/         # Servicios de API
│   └── api.js
├── App.jsx           # Componente principal
├── main.jsx          # Punto de entrada
└── index.css         # Estilos globales
```

## Rutas de la Aplicación

- `/` - Página principal (Dashboard)
- `/pacientes` - Gestión de pacientes
- `*` - Página 404 (no encontrado)

## Funcionalidades Implementadas

### Dashboard (Inicio)
- Estadísticas visuales del hospital
- Botones de acciones rápidas
- Tarjetas con información resumida

### Gestión de Pacientes
- Listar todos los pacientes
- Agregar nuevos pacientes
- Validación de formularios
- Mensajes de éxito/error
- Loading states

### Características Técnicas
- API REST simulada con MSW
- Manejo de estados de carga y error
- Validación de formularios en el cliente
- Diseño responsive
- Tema oscuro con efectos visuales

## Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview de build
npm run preview

# Lint
npm run lint
```

## Aprendizajes Clave

Este proyecto de práctica permite aprender:

1. **Componentes React**: Creación y reutilización de componentes
2. **Hooks**: useState, useEffect para manejo de estado
3. **Routing**: Navegación con React Router
4. **Forms**: Validación y manejo de formularios
5. **API Integration**: Consumo de APIs (simuladas con MSW)
6. **Styling**: Tailwind CSS y estilos personalizados
7. **Estado de UI**: Loading, error y success states
8. **Estructura de proyecto**: Organización de archivos y carpetas

## Notas de Desarrollo

- El backend es simulado mediante MSW, por lo que no requiere servidor real
- Los datos se almacenan en memoria y se reinician al recargar la página
- El proyecto usa Vite para desarrollo rápido con HMR (Hot Module Replacement)
- Tailwind CSS está configurado con tema personalizado para el estilo terrorífico

## Licencia

Proyecto educativo de práctica - Libre uso para aprendizaje

## Autor

Proyecto de práctica para aprendizaje de React y desarrollo web frontend
