"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import clsx from "clsx"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header 
      className={clsx(
        "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500",
        "w-full max-w-4xl ",
        scrolled 
          ? "backdrop-blur-sm bg-white/50 border border-gray-200 rounded-full shadow-lg"
          : "bg-transparent"
      )}
    >
      <nav className="flex items-center justify-between px-6 py-3 relative">
        <a 
          href="/" 
          className={clsx(
            "text-xl font-bold absolute left-6 transition-all duration-500"
          )}
        >
          ChatFolders
        </a>

        <ul className={clsx(
          "hidden md:flex gap-6 text-sm font-medium text-gray-700 mx-auto transition-all duration-500",
          scrolled ? "translate-y-0 opacity-100" : "translate-y-0 opacity-100"
        )}>
          <li><a href="#features" className="hover:text-black">Características</a></li>
          <li><a href="#faq" className="hover:text-black">FAQ</a></li>
          <li><a href="#pricing" className="hover:text-black">Precios</a></li>
        </ul>

        <Button 
          variant="gradient" 
          className={clsx(
            "text-lg px-6 py-3 transition-all duration-500"
          )}
        >
          Instalar gratis
        </Button>
      </nav>
    </header>
  )
}
