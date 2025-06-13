'use client'

import { useRouter } from 'next/navigation'

const API_URL = 'https://gpt-organizer-backend.onrender.com'

export function LogoutButton() {
  const router = useRouter()

  async function handleLogout() {
    try {
      await fetch(`${API_URL}/auth/logout`, {
        method: 'POST',
        credentials: 'include'
      })
      router.push('/auth')
    } catch (err) {
      console.error('Error logging out:', err)
    }
  }

  return (
    <button
      onClick={handleLogout}
      className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition"
    >
      Cerrar sesión
    </button>
  )
}
