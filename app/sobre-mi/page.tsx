"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function SobreMi() {
  return (
    <main className="min-h-screen bg-[#a8e0ec] text-[#0a3039]">
      <header className="p-6 md:p-10 flex items-center">
        <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
          <ArrowLeft size={20} /> Volver
        </Link>
      </header>

      <section className="p-6 md:p-10 max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-medium mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Sobre Mí
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Foto de perfil"
              width={600}
              height={600}
              className="w-full h-auto rounded-lg mb-6"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <p className="text-lg">
              Soy un diseñador y desarrollador digital con más de 8 años de experiencia creando soluciones digitales
              para marcas y empresas de diversos sectores.
            </p>
            <p>
              Mi enfoque combina diseño centrado en el usuario con desarrollo técnico sólido, creando experiencias
              digitales que no solo son visualmente atractivas sino también funcionales y efectivas.
            </p>
            <p>
              He trabajado con clientes desde startups hasta grandes corporaciones, ayudándoles a transformar sus ideas
              en realidades digitales que impulsan sus objetivos de negocio.
            </p>
            <p>
              Cuando no estoy diseñando o programando, me encontrarás explorando nuevas tecnologías, leyendo sobre
              diseño o disfrutando de la naturaleza.
            </p>

            <div className="mt-6">
              <h2 className="text-xl font-medium mb-4">Habilidades</h2>
              <ul className="grid grid-cols-2 gap-2">
                <li>Diseño UI/UX</li>
                <li>Desarrollo Frontend</li>
                <li>React & Next.js</li>
                <li>Diseño Responsivo</li>
                <li>Animaciones Web</li>
                <li>Estrategia Digital</li>
                <li>Identidad de Marca</li>
                <li>Accesibilidad Web</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="p-6 md:p-10 text-sm">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div>© {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.</div>
          <div className="flex gap-6">
            <Link href="https://twitter.com" className="hover:opacity-70 transition-opacity">
              Twitter
            </Link>
            <Link href="https://instagram.com" className="hover:opacity-70 transition-opacity">
              Instagram
            </Link>
            <Link href="https://linkedin.com" className="hover:opacity-70 transition-opacity">
              LinkedIn
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}

