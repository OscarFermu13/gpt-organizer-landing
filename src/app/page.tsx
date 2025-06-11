import { Button } from "@/components/ui/button";
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
    <main className="min-h-screen bg-white text-gray-900 px-4 md:px-8 py-16">
      {/* Hero */}
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Organiza tus conversaciones con ChatGPT en segundos
        </h1>
        <p className="text-lg text-gray-600">
          ChatFolders te permite crear carpetas, mover chats y encontrar lo que buscas sin perder tiempo.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <Button className="text-lg px-6 py-4">🗂️ Instalar gratis</Button>
          <Button variant="outline" className="text-lg px-6 py-4">
            <Link href="/login">🔍 Ver demo</Link>
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="mt-24 max-w-3xl mx-auto space-y-8">
        <h2 className="text-3xl font-semibold text-center">Características principales</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          <li>🔹 Crea carpetas personalizadas</li>
          <li>🔹 Arrastra y suelta chats fácilmente</li>
          <li>🔹 Etiquetas y colores</li>
          <li>🔹 Búsqueda instantánea</li>
          <li>🔹 Sincronización en la nube (Pro)</li>
          <li>🔹 Diseño limpio e intuitivo</li>
        </ul>
      </section>

      {/* FAQ con acordeón  */}
      <section className="mt-24 max-w-2xl mx-auto space-y-6">
        <h2 className="text-3xl font-semibold text-center">Preguntas frecuentes</h2>
        <Accordion type="single" collapsible className="w-full">
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
        <h2 className="text-3xl font-semibold text-center">Lo que dicen nuestros usuarios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Ana, investigadora</CardTitle>
            </CardHeader>
            <CardContent>
              “Tenía más de 100 chats sin orden… ahora trabajo como si tuviera un asistente personal.”
            </CardContent>
          </Card>
          <Card>
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
      <footer className="mt-32 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ChatFolders. Todos los derechos reservados.
      </footer>
    </main>
  );
}
