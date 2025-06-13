"use client"

import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="/" className="text-xl font-bold">ChatFolders</a>
        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <li><a href="#features" className="hover:text-black">Características</a></li>
          <li><a href="#faq" className="hover:text-black">FAQ</a></li>
          <li><a href="#pricing" className="hover:text-black">Precios</a></li>
        </ul>
        <Button variant="gradient" className="text-lg px-6 py-4">
            Instalar gratis
        </Button>
      </nav>
    </header>
  )
}
