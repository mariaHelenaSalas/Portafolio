"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Send } from "lucide-react"

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  })
  const [enviando, setEnviando] = useState(false)
  const [enviado, setEnviado] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEnviando(true)

    // Simulación de envío
    setTimeout(() => {
      setEnviando(false)
      setEnviado(true)
      setFormData({ nombre: "", email: "", mensaje: "" })

      // Resetear el estado después de 5 segundos
      setTimeout(() => {
        setEnviado(false)
      }, 5000)
    }, 1500)
  }

  return (
    <main className="min-h-screen bg-[#a8e0ec] text-[#0a3039]">
      <header className="p-6 md:p-10 flex items-center">
        <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
          <ArrowLeft size={20} /> Volver
        </Link>
      </header>

      <section className="p-6 md:p-10 max-w-2xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-medium mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Contacto
        </motion.h1>

        <motion.p
          className="text-lg mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          ¿Tienes un proyecto en mente? Estoy disponible para nuevas oportunidades y colaboraciones. Envíame un mensaje
          y te responderé lo antes posible.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          {enviado ? (
            <div className="bg-[#0a3039] text-white p-6 rounded-lg">
              <h2 className="text-xl font-medium mb-2">¡Mensaje enviado!</h2>
              <p>Gracias por contactarme. Te responderé lo antes posible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block mb-2 font-medium">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-white bg-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a3039]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-white bg-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a3039]"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block mb-2 font-medium">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full p-3 bg-white bg-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a3039]"
                />
              </div>

              <button
                type="submit"
                disabled={enviando}
                className="flex items-center gap-2 bg-[#0a3039] text-white py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors disabled:opacity-70"
              >
                {enviando ? "Enviando..." : "Enviar mensaje"} {!enviando && <Send size={18} />}
              </button>
            </form>
          )}
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div>
            <h2 className="text-xl font-medium mb-2">Email</h2>
            <a href="mailto:tu@email.com" className="hover:opacity-70 transition-opacity">
              tu@email.com
            </a>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-2">Redes Sociales</h2>
            <div className="flex flex-col gap-2">
              <a href="https://twitter.com" className="hover:opacity-70 transition-opacity">
                Twitter
              </a>
              <a href="https://instagram.com" className="hover:opacity-70 transition-opacity">
                Instagram
              </a>
              <a href="https://linkedin.com" className="hover:opacity-70 transition-opacity">
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
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

