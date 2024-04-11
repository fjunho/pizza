import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/theme-provider'
import { router } from './rotas'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizzacom-theme" default-theme="dark">
        <Helmet titleTemplate="%s | PIZZA.COM" />
        <Toaster richColors />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}
