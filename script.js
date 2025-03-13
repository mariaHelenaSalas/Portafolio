// Elementos DOM
const themeToggle = document.getElementById("theme-toggle")
const mobileMenuToggle = document.getElementById("mobile-menu-toggle")
const closeMenu = document.getElementById("close-menu")
const mobileMenu = document.getElementById("mobile-menu")
const navLinks = document.querySelectorAll(".nav-link")
const contactForm = document.getElementById("contact-form")
const particlesCanvas = document.getElementById("particles-canvas")

// Tema oscuro/claro
function setTheme(theme) {
  if (theme === "dark") {
    document.documentElement.classList.add("dark")
    localStorage.setItem("theme", "dark")
  } else {
    document.documentElement.classList.remove("dark")
    localStorage.setItem("theme", "light")
  }
}

// Inicializar tema
const savedTheme = localStorage.getItem("theme")
if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  setTheme("dark")
} else {
  setTheme("light")
}

// Cambiar tema
themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.classList.contains("dark")
  setTheme(isDark ? "light" : "dark")
})

// Menú móvil
mobileMenuToggle.addEventListener("click", () => {
  mobileMenu.classList.add("open")
  document.body.style.overflow = "hidden"
})

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("open")
  document.body.style.overflow = ""
})

// Cerrar menú al hacer clic en un enlace
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open")
    document.body.style.overflow = ""
  })
})

// Resaltar enlace activo al desplazarse
function highlightActiveLink() {
  const sections = document.querySelectorAll("section[id]")
  const scrollPosition = window.scrollY + 100

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute("id")

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active")
        }
      })
    }
  })
}

window.addEventListener("scroll", highlightActiveLink)
highlightActiveLink()

// Formulario de contacto
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value

    // Redirigir al cliente de correo
    window.location.href = `mailto:mariahelenasalas@example.com?subject=Contacto desde Portafolio&body=Nombre: ${name}%0D%0AEmail: ${email}%0D%0AMensaje: ${message}`

    // Mostrar mensaje de éxito (puedes implementar un sistema de notificaciones)
    alert("¡Mensaje enviado! Gracias por contactarme.")

    // Resetear formulario
    contactForm.reset()
  })
}

// Animación de partículas
function setupParticles() {
  if (!particlesCanvas) return

  const ctx = particlesCanvas.getContext("2d")
  const particles = []
  const particleCount = 100

  // Ajustar tamaño del canvas
  function resizeCanvas() {
    particlesCanvas.width = window.innerWidth
    particlesCanvas.height = window.innerHeight
  }

  window.addEventListener("resize", resizeCanvas)
  resizeCanvas()

  // Crear partículas
  for (let i = 0; i < particleCount; i++) {
    const isDark = document.documentElement.classList.contains("dark")
    particles.push({
      x: Math.random() * particlesCanvas.width,
      y: Math.random() * particlesCanvas.height,
      size: Math.random() * 3 + 1,
      speedX: Math.random() * 1 - 0.5,
      speedY: Math.random() * 1 - 0.5,
      color: isDark ? "rgba(100, 200, 255, 0.3)" : "rgba(100, 200, 255, 0.5)",
    })
  }

  // Dibujar partículas
  function drawParticles() {
    ctx.clearRect(0, 0, particlesCanvas.width, particlesCanvas.height)
    const isDark = document.documentElement.classList.contains("dark")

    // Actualizar y dibujar cada partícula
    particles.forEach((particle, index) => {
      particle.x += particle.speedX
      particle.y += particle.speedY

      // Rebotar en los bordes
      if (particle.x > particlesCanvas.width || particle.x < 0) {
        particle.speedX = -particle.speedX
      }

      if (particle.y > particlesCanvas.height || particle.y < 0) {
        particle.speedY = -particle.speedY
      }

      // Dibujar partícula
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fillStyle = isDark ? "rgba(100, 200, 255, 0.3)" : "rgba(100, 200, 255, 0.5)"
      ctx.fill()

      // Conectar partículas cercanas
      particles.forEach((otherParticle, otherIndex) => {
        if (index !== otherIndex) {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = isDark
              ? `rgba(100, 200, 255, ${0.2 - distance / 500})`
              : `rgba(100, 200, 255, ${0.3 - distance / 500})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
          }
        }
      })
    })

    requestAnimationFrame(drawParticles)
  }

  drawParticles()
}

// Iniciar animación de partículas cuando se carga la página
window.addEventListener("load", setupParticles)

// Actualizar color de partículas cuando cambia el tema
themeToggle.addEventListener("click", () => {
  if (particlesCanvas) {
    const ctx = particlesCanvas.getContext("2d")
    ctx.clearRect(0, 0, particlesCanvas.width, particlesCanvas.height)
  }
})

