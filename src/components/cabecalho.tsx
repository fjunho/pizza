import { Home, Pizza, UtensilsCrossed } from 'lucide-react'
import { NavLink } from 'react-router-dom'

import { MenuConta } from './menu-conta'
import { ThemeToggle } from './theme/theme-toggle'
import { Separator } from './ui/separator'

export function Cabecalho() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Pizza className="h-4 w-4" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <Home className="h-4 w-4" />
            Inicio
          </NavLink>
          <NavLink to="/pedidos">
            <UtensilsCrossed className="h-4 w-4" />
            Pedidos
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <MenuConta />
        </div>
      </div>
    </div>
  )
}
