'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from 'framer-motion'

import { LogoutButton } from "@/components/logout";

const API_URL = 'https://gpt-organizer-backend.onrender.com'

export default function Dashboard() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<{ email: string; plan?: string; trialEndsAt?: string } | null>(null)
  const router = useRouter()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`${API_URL}/auth/validate`, {
          credentials: 'include',
        })

        if (!res.ok) throw new Error('No autorizado')

        const data = await res.json()
        setUser(data)
      } catch (error) {
        router.push('/auth')
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [router])

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Cargando...</div>
  }

  const openGumroad = () => {
    window.open('https://oscarfermi.gumroad.com/l/juwkck', '_blank');
  };

  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-white via-white to-sky-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full space-y-6"
      >
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold">Bienvenido{user ? `, ${user.email}` : ''}</h1>
          <p className="text-gray-500 text-sm">Gestiona tu cuenta y suscripción</p>
          <p className="text-gray-500 text-sm">Plan: {user ? `${user.plan}` : ''}</p>
          <p className="text-gray-500 text-sm">Trial ends at: {user ? `${user.trialEndsAt}` : ''}</p>
        </div>

        <div className="space-y-4">
          <LogoutButton />

          <div className="border-t pt-4 space-y-3">
            <h2 className="text-lg font-semibold">Suscripción</h2>
            <button
              onClick={openGumroad}
              className="w-full bg-gradient-to-r from-green-400 to-emerald-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition"
            >
              Pagar suscripción
            </button>
            <button
              onClick={openGumroad}
              className="w-full bg-gradient-to-r from-red-400 to-pink-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition"
            >
              Cancelar suscripción
            </button>
          </div>

          <div className="border-t pt-4 space-y-3">
            <h2 className="text-lg font-semibold">Tu extensión</h2>
            <p className="text-sm text-gray-500">
              Descarga o gestiona tu extensión de navegador desde{' '}
              <a 
                href="https://chrome.google.com/webstore" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sky-600 hover:underline"
              >
                Chrome Web Store
              </a>.
            </p>
          </div>

          <div className="border-t pt-4 space-y-3">
            <h2 className="text-lg font-semibold">¿Necesitas ayuda?</h2>
            <p className="text-sm text-gray-500">
              Escríbenos a{' '}
              <a 
                href="mailto:soporte@chatfolders.com" 
                className="text-sky-600 hover:underline"
              >
                soporte@chatfolders.com
              </a>{' '}
              o revisa nuestra{' '}
              <a 
                href="/faq" 
                className="text-sky-600 hover:underline"
              >
                sección de preguntas frecuentes
              </a>.
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  )
}
