'use client'

import { motion } from "framer-motion";
import { useEffect, useState } from "react"
import Image from "next/image"
import clsx from "clsx"

const features = [
  {
    id: 0,
    title: "Crea carpetas personalizadas",
    description: "Organiza tus chats como quieras, con colores y nombres personalizados.",
    media: "/media/folder-creation.png",
  },
  {
    id: 1,
    title: "Arrastra y suelta chats",
    description: "Agrupa conversaciones fácilmente con solo arrastrarlas.",
    media: "/media/drag-drop.gif",
  },
  {
    id: 2,
    title: "Sincronización automática",
    description: "Tus carpetas se sincronizan en todos tus dispositivos.",
    media: "/media/sync.png",
  },
  {
    id: 3,
    title: "Acceso rápido a tus favoritos",
    description: "Encuentra rápidamente tus chats más importantes.",
    media: "/media/favorites.png",
  },
]

export function FeatureShowcase() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % features.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.section
      id="features-showcase"
      className="mt-32 max-w-6xl mx-auto px-6 space-y-12"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
    >
      {/* Título principal */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-semibold">
          Descubre cómo <span className="bg-gradient-to-r from-sky-500 to-blue-600 text-transparent bg-clip-text">ChatFolders</span> transforma tu experiencia
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Cada funcionalidad está pensada para que ahorres tiempo y trabajes mejor.
        </p>
      </div>

      {/* Contenido dividido en dos columnas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Lista de funcionalidades */}
        <ul className="space-y-4">
          {features.map((f, idx) => (
            <li
              key={f.id}
              onClick={() => setActive(idx)}
              className={clsx(
                "cursor-pointer p-4 rounded-xl transition-all",
                idx === active
                  ? "bg-gradient-to-r from-sky-100 to-blue-100 border-l-4 border-sky-500"
                  : "hover:bg-gray-100"
              )}
            >
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.description}</p>
            </li>
          ))}
        </ul>

        {/* Media asociada */}
        <div className="rounded-xl overflow-hidden border shadow bg-white flex items-center justify-center p-4">
          <Image
            src={features[active].media}
            alt={features[active].title}
            width={600}
            height={400}
            className="rounded-lg object-contain max-h-[400px]"
          />
        </div>
      </div>
    </motion.section>
  )
}
