import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Inicializa MSW en desarrollo
async function enableMocking() {
  // Solo en desarrollo
  if (import.meta.env.MODE !== 'development') {
    return
  }

  const { worker } = await import('./mocks/browser')

  // Inicia el service worker
  return worker.start({
    onUnhandledRequest: 'bypass', // Ignora peticiones no mockeadas
  })
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
})