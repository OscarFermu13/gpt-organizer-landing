'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'

const API_URL = 'https://gpt-organizer-backend.onrender.com/auth';

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const router = useRouter()

    useEffect(() => {
        async function checkSession() {
            try {
                const res = await fetch(`${API_URL}/validate`, {
                    credentials: 'include'
                })

                if (res.ok) {
                    router.replace('/dashboard')
                }
            } catch (err) {
                console.error('Error validando sesión:', err)
            }
        }

        checkSession()
    }, [router])

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setError(null)
        setLoading(true)

        const form = event.currentTarget
        const formData = new FormData(form)
        const email = formData.get('email')
        const password = formData.get('password')

        try {
            const res = await fetch(`${API_URL}/${isLogin ? 'login' : 'register'}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ email, password }),
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.error || 'Error al procesar la solicitud')
            }

            router.replace('/dashboard')
        } catch (err: any) {
            setError(err.message || 'Error desconocido')
        } finally {
            setLoading(false)
        }
    }

    return (
        <main className="w-full min-h-screen bg-gradient-to-b from-white via-white to-sky-50 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full space-y-6"
            >
                <h1 className="text-3xl font-bold text-center">
                    {isLogin ? 'Inicia sesión' : 'Crea tu cuenta'}
                </h1>
                <p className="text-center text-gray-500">
                    Organiza tus chats con <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">ChatFolders</span>
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-sky-500 focus:border-sky-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Contraseña</label>
                        <input
                            type="password"
                            name="password"
                            required
                            className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-sky-500 focus:border-sky-500"
                        />
                    </div>

                    {error && (
                        <p className="text-sm text-red-500">{error}</p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition"
                    >
                        {loading ? 'Procesando...' : (isLogin ? 'Entrar' : 'Registrarse')}
                    </button>
                </form>

                <div className="text-center text-sm text-gray-500">
                    {isLogin ? (
                        <>
                            ¿No tienes cuenta?{' '}
                            <button
                                className="text-sky-600 font-medium hover:underline"
                                onClick={() => setIsLogin(false)}
                            >
                                Regístrate
                            </button>
                        </>
                    ) : (
                        <>
                            ¿Ya tienes cuenta?{' '}
                            <button
                                className="text-sky-600 font-medium hover:underline"
                                onClick={() => setIsLogin(true)}
                            >
                                Inicia sesión
                            </button>
                        </>
                    )}
                </div>

                <div className="text-center mt-4">
                    <Link href="/">
                        <span className="text-sm text-gray-400 hover:underline">← Volver al inicio</span>
                    </Link>
                </div>
            </motion.div>
        </main>
    )
}
