"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight, Menu, X } from "lucide-react"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    // Simular tiempo de carga
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen bg-[#a8e0ec] text-[#0a3039] flex flex-col">
      {loading ? (
        <motion.div
          className="flex items-center justify-center h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex gap-2">
            <motion.div
              className="w-3 h-3 rounded-full bg-[#0a3039]"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, delay: 0 }}
            />
            <motion.div
              className="w-3 h-3 rounded-full bg-[#0a3039]"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, delay: 0.2 }}
            />
            <motion.div
              className="w-3 h-3 rounded-full bg-[#0a3039]"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, delay: 0.4 }}
            />
          </div>
        </motion.div>
      ) : (
        <>
          <header className="p-6 md:p-10 flex justify-between items-center">
            <Link href="/" className="text-xl font-medium">
              Tu Nombre
            </Link>
            <button
              onClick={() => setMenuOpen(true)}
              className="flex items-center gap-2 hover:opacity-70 transition-opacity"
            >
              Menú <Menu size={20} />
            </button>
          </header>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                className="fixed inset-0 bg-[#a8e0ec] z-50 flex flex-col"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="p-6 md:p-10 flex justify-between items-center">
                  <Link href="/" className="text-xl font-medium">
                    Tu Nombre
                  </Link>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 hover:opacity-70 transition-opacity"
                  >
                    Cerrar <X size={20} />
                  </button>
                </div>
                <nav className="flex flex-col items-center justify-center flex-grow gap-6 text-2xl md:text-4xl">
                  <Link
                    href="/proyectos"
                    className="hover:opacity-70 transition-opacity flex items-center gap-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    Proyectos <ArrowUpRight size={24} />
                  </Link>
                  <Link
                    href="/sobre-mi"
                    className="hover:opacity-70 transition-opacity flex items-center gap-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    Sobre Mí <ArrowUpRight size={24} />
                  </Link>
                  <Link
                    href="/contacto"
                    className="hover:opacity-70 transition-opacity flex items-center gap-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    Contacto <ArrowUpRight size={24} />
                  </Link>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>

          <section className="flex-grow flex flex-col justify-center p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-6xl font-medium mb-6">Diseñador & Desarrollador Digital</h1>
              <p className="text-xl md:text-2xl mb-8">
                Creando experiencias digitales atractivas y funcionales para marcas y empresas.
              </p>
              <Link
                href="/proyectos"
                className="inline-flex items-center gap-2 border-b-2 border-[#0a3039] pb-1 hover:opacity-70 transition-opacity text-lg"
              >
                Ver proyectos <ArrowUpRight size={20} />
              </Link>
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
        </>
      )}
    </main>
  )
}

