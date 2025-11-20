import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Menu, Home, Info, Images, CalendarDays, Mail } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-blue-500/20 text-blue-200' : 'text-blue-100/80 hover:text-white hover:bg-white/5'}`}
  >
    {children}
  </NavLink>
)

function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-slate-950/60 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-blue-100">
            <div className="h-8 w-8 rounded bg-gradient-to-br from-blue-500 to-indigo-600" />
            <span className="font-semibold tracking-wide">Ješenca-Požeg CC</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavItem to="/"><span className="inline-flex items-center gap-2"><Home size={16}/> Home</span></NavItem>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger className="px-3 py-2 rounded-md text-sm font-medium text-blue-100/80 hover:text-white hover:bg-white/5 inline-flex items-center gap-2">
                <Info size={16}/> About
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content sideOffset={8} className="min-w-[180px] rounded-md border border-white/10 bg-slate-900/95 backdrop-blur p-1 shadow-xl">
                  <DropdownMenu.Item asChild>
                    <Link to="/info" className="flex items-center gap-2 px-3 py-2 rounded text-blue-100/90 hover:bg-white/5 hover:text-white">
                      <Info size={16}/> Center Info
                    </Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item asChild>
                    <Link to="/contact" className="flex items-center gap-2 px-3 py-2 rounded text-blue-100/90 hover:bg-white/5 hover:text-white">
                      <Mail size={16}/> Contact
                    </Link>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>

            <DropdownMenu.Root>
              <DropdownMenu.Trigger className="px-3 py-2 rounded-md text-sm font-medium text-blue-100/80 hover:text-white hover:bg-white/5 inline-flex items-center gap-2">
                <CalendarDays size={16}/> What's On
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content sideOffset={8} className="min-w-[180px] rounded-md border border-white/10 bg-slate-900/95 backdrop-blur p-1 shadow-xl">
                  <DropdownMenu.Item asChild>
                    <Link to="/events" className="flex items-center gap-2 px-3 py-2 rounded text-blue-100/90 hover:bg-white/5 hover:text-white">
                      <CalendarDays size={16}/> Events
                    </Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item asChild>
                    <Link to="/gallery" className="flex items-center gap-2 px-3 py-2 rounded text-blue-100/90 hover:bg-white/5 hover:text-white">
                      <Images size={16}/> Gallery
                    </Link>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </nav>

          <div className="md:hidden">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger className="p-2 rounded-md hover:bg-white/5 text-blue-100/80 hover:text-white">
                <Menu size={20} />
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content sideOffset={8} align="end" className="w-56 rounded-md border border-white/10 bg-slate-900/95 backdrop-blur p-1 shadow-xl">
                  <DropdownMenu.Item asChild>
                    <Link to="/" className="flex items-center gap-2 px-3 py-2 rounded text-blue-100/90 hover:bg-white/5 hover:text-white"><Home size={16}/> Home</Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Separator className="my-1 h-px bg-white/10" />
                  <DropdownMenu.Item asChild>
                    <Link to="/info" className="flex items-center gap-2 px-3 py-2 rounded text-blue-100/90 hover:bg-white/5 hover:text-white"><Info size={16}/> Center Info</Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item asChild>
                    <Link to="/contact" className="flex items-center gap-2 px-3 py-2 rounded text-blue-100/90 hover:bg-white/5 hover:text-white"><Mail size={16}/> Contact</Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Separator className="my-1 h-px bg-white/10" />
                  <DropdownMenu.Item asChild>
                    <Link to="/events" className="flex items-center gap-2 px-3 py-2 rounded text-blue-100/90 hover:bg-white/5 hover:text-white"><CalendarDays size={16}/> Events</Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item asChild>
                    <Link to="/gallery" className="flex items-center gap-2 px-3 py-2 rounded text-blue-100/90 hover:bg-white/5 hover:text-white"><Images size={16}/> Gallery</Link>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
