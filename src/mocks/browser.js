import { setupWorker } from 'msw/browser'
import { handlers } from './handlers'

// Crea el service worker con los handlers
export const worker = setupWorker(...handlers)