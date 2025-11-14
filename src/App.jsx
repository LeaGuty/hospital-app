import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Pacientes from './pages/Pacientes'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas con Layout (navbar + footer) */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pacientes" element={<Pacientes />} />
        </Route>

        {/* Ruta 404 sin Layout */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App