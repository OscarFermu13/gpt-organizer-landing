'use client'

import { motion } from "framer-motion";
import { FeatureShowcase } from "@/components/featureShowcase";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-white via-white to-sky-50 text-gray-900 py-16">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      {/* Hero */}
      <motion.section
        className="pt-50 max-w-4xl mx-auto text-center space-y-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-4xl font-bold md:text-6xl leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Organiza tus{" "}
          <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
            chats
          </span>{" "}
          de forma{" "}
          <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            inteligente
          </span>{" "}
          y{" "}
          <span className="bg-gradient-to-r from-cyan-500 to-sky-500 bg-clip-text text-transparent">
            rápida
          </span>
        </motion.h1>

        <motion.p
          className="text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          ChatFolders te permite crear carpetas, mover chats y encontrar lo que
          buscas sin perder tiempo.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button variant="gradient" className="text-lg px-6 py-4">
            🗂️ Instalar gratis
          </Button>
        </motion.div>
      </motion.section>

      {/* Feature Showcase interactivo */}
      <FeatureShowcase />

      {/* Planes y precios */}
      <motion.section
        id="pricing"
        className="mt-32 max-w-4xl mx-auto text-center space-y-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold">💸 Planes y precios</h2>
        <p className="text-gray-600">
          Prueba gratis durante 14 días. Luego paga solo si lo necesitas.
        </p>

        <div className="mt-10 border border-gray-200 rounded-2xl p-8 shadow-xl bg-gradient-to-br from-blue-50 to-white">
          <h3 className="text-2xl font-bold">ChatFolders Pro</h3>
          <p className="text-lg mt-2 text-gray-700">€4,99 / mes</p>
          <ul className="mt-6 space-y-2 text-center text-gray-700 text-md">
            <li>✅ Carpetas ilimitadas</li>
            <li>✅ Sincronización entre dispositivos</li>
            <li>✅ Copias de seguridad automáticas</li>
            <li>✅ Soporte prioritario</li>
            <li>✅ Cancela en cualquier momento</li>
          </ul>
           <Button variant="gradient" className="mt-6 text-lg px-6 py-4 ">
            Empezar prueba gratis de 14 días
          </Button>
          <p className="text-xs text-gray-500 mt-2">
            No se requiere tarjeta para comenzar
          </p>
        </div>
      </motion.section>

      {/* Preguntas frecuentes */}
      <section id="faq" className="mt-24 max-w-2xl mx-auto space-y-6">
        <h2 className="text-3xl font-semibold text-center">❓ Preguntas frecuentes</h2>
        <Accordion type="single" collapsible className="w-full mt-4">
          <AccordionItem value="item-1">
            <AccordionTrigger>¿ChatFolders es gratuito?</AccordionTrigger>
            <AccordionContent>
              Sí, puedes usar la versión básica con hasta 3 carpetas.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>¿Qué incluye la versión Pro?</AccordionTrigger>
            <AccordionContent>
              Carpetas ilimitadas, etiquetas, sincronización, búsqueda avanzada y más.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>¿Accede a mis conversaciones?</AccordionTrigger>
            <AccordionContent>
              No. Todo se guarda localmente o en tu cuenta si usas sincronización. No leemos el contenido de tus chats.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>¿Funciona con ChatGPT Plus?</AccordionTrigger>
            <AccordionContent>
              Sí, es totalmente compatible con la versión gratuita y Plus.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Testimonios */}
      <section className="mt-24 max-w-5xl mx-auto space-y-6">
        <h2 className="text-3xl font-semibold text-center">💬 Lo que dicen nuestros usuarios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Ana, investigadora</CardTitle>
            </CardHeader>
            <CardContent>
              “Tenía más de 100 chats sin orden… ahora trabajo como si tuviera un asistente personal.”
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Tomás, desarrollador</CardTitle>
            </CardHeader>
            <CardContent>
              “Tan simple y tan útil. No puedo volver atrás. Esta extensión me ahorra tiempo todos los días.”
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-32 text-center text-sm text-gray-400 px-4 md:px-8">
        © {new Date().getFullYear()} ChatFolders. Todos los derechos reservados.
      </footer>
    </main>
  );
}
