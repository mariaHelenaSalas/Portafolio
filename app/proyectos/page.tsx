"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function Proyectos() {
  const proyectos = [
    {
      id: 1,
      titulo: "Rediseño de Marca",
      cliente: "Empresa Innovadora",
      descripcion: "Un rediseño completo de marca para una empresa tecnológica emergente.",
      imagen: "/placeholder.svg?height=600&width=800",
      año: "2023",
    },
    {
      id: 2,
      titulo: "Aplicación Web",
      cliente: "Startup Financiera",
      descripcion: "Desarrollo de una aplicación web para gestión financiera personal.",
      imagen: "/placeholder.svg?height=600&width=800",
      año: "2022",
    },
    {
      id: 3,
      titulo: "Campaña Digital",
      cliente: "Marca de Moda",
      descripcion: "Estrategia y ejecución de campaña digital para lanzamiento de producto.",
      imagen: "/placeholder.svg?height=600&width=800",
      año: "2023",
    },
    {
      id: 4,
      titulo: "Sitio E-commerce",
      cliente: "Tienda Artesanal",
      descripcion: "Diseño y desarrollo de plataforma de comercio electrónico.",
      imagen: "/placeholder.svg?height=600&width=800",
      año: "2021",
    },
  ]

  return (
    <main className="min-h-screen bg-[#a8e0ec] text-[#0a3039]">
      <header className="p-6 md:p-10 flex items-center">
        <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
          <ArrowLeft size={20} /> Volver
        </Link>
      </header>

      <section className="p-6 md:p-10">
        <motion.h1
          className="text-4xl md:text-5xl font-medium mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Proyectos
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {proyectos.map((proyecto, index) => (
            <motion.div
              key={proyecto.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Link href={`/proyectos/${proyecto.id}`} className="block group">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={proyecto.imagen || "/placeholder.svg"}
                    alt={proyecto.titulo}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h2 className="text-2xl font-medium">{proyecto.titulo}</h2>
                <p className="text-lg opacity-80">{proyecto.cliente}</p>
                <p className="mt-2">{proyecto.descripcion}</p>
                <p className="mt-4 text-sm opacity-60">{proyecto.año}</p>
              </Link>
            </motion.div>
          ))}
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

