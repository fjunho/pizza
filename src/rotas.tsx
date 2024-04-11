import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { Dashboard } from './pages/app/Dashboard'
import { Cadastrar } from './pages/auth/cadastro'
import { Entrar } from './pages/auth/Entrar'
import { Pedidos } from './pages/Pedidos/pedidos'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/pedidos', element: <Pedidos /> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/entrar', element: <Entrar /> },
      { path: '/cadastrar', element: <Cadastrar /> },
    ],
  },
])
