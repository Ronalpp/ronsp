import { Instagram, LucideGithub, Menu, X } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [send, setSend] = useState(false);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const hadleSumbit = async (e) => {
    setSend(true);
    try {
      e.preventDefault();
      await fetch("https://server-six-alpha-58.vercel.app/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, email, msg }),
      });
    } catch (error) {
      console.error(error);
    } finally {
      setSend(false);
      setNombre("");
      setEmail("");
      setMsg("");
    }
  };

  const hadle = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <div className="max-w-6xl mx-auto py-0 px-4 sm:px-8 md:px-20 lg:px-30 font-mono ">
        <header>
          <nav className="w-full text-white/50 h-30  md:flex sm:flex lg:flex  hidden items-center justify-end gap-5">
            <div className="w-full h-full  flex flex-row   items-center justify-end gap-4 ">
              <button className="cursor-pointer " onClick={() => hadle("home")}>
                Inicio
              </button>
              <button className="cursor-pointer" onClick={() => hadle("about")}>
                About
              </button>
              <button
                className="cursor-pointer"
                onClick={() => hadle("experience")}
              >
                Experiencia
              </button>
              <button
                className="cursor-pointer"
                onClick={() => hadle("habilidades")}
              >
                Habilidades
              </button>
              <button
                className="cursor-pointer"
                onClick={() => hadle("proyectos")}
              >
                Proyectos
              </button>
              <button
                className="cursor-pointer"
                onClick={() => hadle("contactame")}
              >
                Contactame
              </button>
            </div>
          </nav>
          <div className=" w-full flex items-center justify-end md:hidden sm:hidden lg:hidden py-6 px-3 fixed top-0 right-0 ">
            <div className="bg-neutral-800 p-3 rounded-2xl">
              {isOpen ? (
                <X
                  className="text-white cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                />
              ) : (
                <Menu
                  className="text-white cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                />
              )}
            </div>
          </div>
          {isOpen === false ? (
            ""
          ) : (
            <div className="bg-neutral-700 fixed inset-0 text-4xl gap-5  md:hidden sm:hidden lg:hidden   text-white/80 ">
              <div className=" w-full flex items-center justify-end md:hidden sm:hidden lg:hidden py-6 px-7  fixed top-0 right-0 ">
                <div className="bg-neutral-800 p-3 rounded-2xl">
                  {isOpen ? (
                    <X
                      className="text-white cursor-pointer"
                      onClick={() => setIsOpen(!isOpen)}
                    />
                  ) : (
                    <Menu
                      className="text-white cursor-pointer"
                      onClick={() => setIsOpen(!isOpen)}
                    />
                  )}
                </div>
              </div>
              <div className="w-full h-full   flex  items-center justify-center gap-4 flex-col ">
                <button
                  className="cursor-pointer "
                  onClick={() => hadle("home") || setIsOpen(false)}
                >
                  Inicio
                </button>
                <button
                  className="cursor-pointer"
                  onClick={() => hadle("about") || setIsOpen(false)}
                >
                  About
                </button>
                <button
                  className="cursor-pointer"
                  onClick={() => hadle("experience") || setIsOpen(false)}
                >
                  Experiencia
                </button>
                <button
                  className="cursor-pointer"
                  onClick={() => hadle("habilidades") || setIsOpen(false)}
                >
                  Habilidades
                </button>
                <button
                  className="cursor-pointer"
                  onClick={() => hadle("proyectos") || setIsOpen(false)}
                >
                  Proyectos
                </button>
                <button
                  className="cursor-pointer"
                  onClick={() => hadle("contactame") || setIsOpen(false)}
                >
                  Contactame
                </button>
              </div>
            </div>
          )}
        </header>
        <div
          id="home"
          className="flex flex-col py-12  sm:flex-row items-center sm:items-center md:items-center gap-6 sm:gap-9"
        >
          <img
            src="./photo.jpeg"
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-3xl object-cover"
          />
          <div className="flex flex-col  gap-1  text-center   sm:text-left">
            <div className="text-xl flex gap-3 sm:text-2xl md:text-3xl text-white">
              <h1> Ronal Pérez</h1>{" "}
              <h1 className="text-white/50 text-xl  sm:text-2xl md:text-3xl">
                (Ronspp)
              </h1>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-white/50">
              Desarrollador full-stack
            </p>
          </div>
        </div>

        <div className="py-10" id="about">
          <h1 className="text-white text-2xl md:text-3xl">About</h1>
          <span className="text-white/50 py-4 text-sm sm:text-base md:text-lg lg:text-xl flex flex-col gap-4 leading-relaxed">
            Desarrollador web full-stack, especializado en JavaScript, React y
            herramientas modernas. Empecé en la programación a los 14 años con
            HTML y CSS.
            <div className="border-neutral-800"></div> He desarrollado sitios
            empresariales, combinando diseño, lógica y desarrollo. Me interesa
            crear soluciones útiles, bien estructuradas y fáciles de mantener.
            <div className="border-neutral-800"></div> He desarrollado sitios
            Actualmente me dedico como freelancer, pero siempre estoy disponible
            para una propuesta laborar. Valoro el código limpio, productos bien
            diseñados y el trabajo en equipo.👾
          </span>
        </div>

        <div id="experience">
          <h1 className="text-white text-2xl md:text-3xl">Experiencia</h1>

          {[
            {
              years: "2025 - Now",
              title: "Freelancer",
              p: "Me dedico al desarrollo web tanto estático como dinámico, además de trabajar en el desarrollo backend. Durante este tiempo he perfeccionado mis habilidades técnicas y mi capacidad de gestionar proyectos de manera autónoma.",
            },
            {
              years: "2024 - 2025",
              title: "Xstar",
              p: "Trabajé a medio tiempo como desarrollador front-end en una empresa dedicada a la venta de VPS y hosting de videojuegos. Más adelante, participé como uno de los desarrolladores principales en la creación de un servicio de almacenamiento, lo que me permitió adquirir experiencia en proyectos escalables e innovadores.",
            },
            {
              years: "2023 - 2024",
              title: "Desarrollador Web",
              p: "Diseñé y desarrollé páginas web estáticas para pequeños negocios, ayudando a mejorar su presencia digital y generar mayor confianza en sus clientes. Esta etapa me permitió consolidar mis conocimientos en diseño, estructura y metodologías de desarrollo web.",
            },
          ].map((i) => (
            <div
              key={i.years}
              className="w-full flex flex-col sm:flex-row justify-between items-start text-amber-50 py-8 border-b border-neutral-800 last:border-none gap-6 lg:gap-20"
            >
              <h1 className="text-sm sm:text-base md:text-xl lg:text-2xl shrink-0">
                {i.years}
              </h1>
              <div className="flex flex-col gap-2 max-w-4xl">
                <h2 className="text-lg sm:text-xl md:text-2xl">{i.title}</h2>
                <p className="text-white/50 text-sm sm:text-base md:text-lg leading-relaxed">
                  {i.p}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div id="habilidades">
          <h1 className="text-white text-2xl md:text-3xl py-6">Habilidades</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-3 gap-6">
            {[
              {
                title: "FRONTEND",
                items: [
                  "HTML & CSS",
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Tailwind CSS",
                ],
              },
              {
                title: "BACKEND",
                items: ["NodeJS", "Rest APIs", "Prisma", "Pg"],
              },
              {
                title: "DISEÑO",
                items: ["Canva", "Framer", "PhotoShop"],
              },
              {
                title: "Bases de Datos",
                items: ["PostgreSQL"],
              },
              {
                title: "FRAMEWORKS",
                items: ["Express", "Hono", "Astro", "NextJS"],
              },
              {
                title: "Herramientas",
                items: [
                  "Git",
                  "GitHub",
                  "Docker",
                  "Vercel",
                  "SupaBase",
                  "Railway",
                ],
              },
            ].map((skill, i) => (
              <div key={i} className="flex flex-col gap-3 py-4">
                <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-white/50">
                  {skill.title}
                </h2>
                <ul className="text-white/50 text-sm sm:text-base md:text-lg flex flex-col gap-1">
                  {skill.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div id="proyectos">
          <h1 className="text-white text-2xl md:text-3xl">Proyectos</h1>
          {[
            {
              title: "Insomma",
              href: "https://github.com/Ronalpp/insomma_db/tree/main",
              p: "Insomma es una herramienta CLI que permite crear bases de datos en tu VPS utilizando Docker. Una vez configuradas, te devuelve automáticamente la cadena de conexión para PostgreSQL y MySQL.",
              stack: "TypeScript · NodeJS · Hono · Docker",
            },
            {
              title: "InsTok",
              href: "https://github.com/Ronalpp/InsTok",
              p: "Aplicación web de imágenes desarrollada con la API de Unsplash. Fue uno de mis primeros proyectos dinámicos, con el que aprendí a integrar servicios externos en una interfaz interactiva.",
              stack: "JavaScript · React · Unsplash API",
            },
            {
              title: "Celety",
              href: "https://github.com/Ronalpp/celety",
              p: "Un gestor de paquetes basado en la API de NPM. Representó una gran experiencia, ya que fue uno de mis primeros proyectos orientados a herramientas y no directamente al desarrollo web.",
              stack: "TypeScript · Vitest · NodeJS",
            },
            {
              title: "GredQR",
              href: "https://github.com/Ronalpp/GredQR",
              p: "Un generador de codigos QR",
              stack: "JavaScript · Tailwindcss · React",
            },
          ].map((i) => (
            <div
              className="w-full flex-row  sm:flex-row  text-amber-50 py-6 border-b  border-neutral-800 last:border-none  lg:gap-20"
              key={i.title}
            >
              <div className="flex items-center  max-w-4xl justify-between ">
                <h1 className="text-lg sm:text-base md:text-xl lg:text-2xl shrink-0">
                  {i.title}
                </h1>
                <div className="gap-4 flex">
                  <a href={i.href}>
                    <LucideGithub size={20} />
                  </a>
                </div>
              </div>
              <div className="flex flex-col py-3 max-w-4xl">
                <p className="text-white/50 text-sm sm:text-base md:text-lg leading-relaxed">
                  {i.p}
                </p>
              </div>
              <div>
                <h1 className="text-white/50 text-sm sm:text-base md:text-lg leading-relaxed">
                  {i.stack}
                </h1>
              </div>
            </div>
          ))}
        </div>

        <form
          id="contactame"
          className="w-full h-full flex flex-col items-center justify-center py-10 px-5"
          onSubmit={hadleSumbit}
        >
          <h1 className="text-2xl font-bold text-white">Contactame</h1>

          <div className="flex flex-col justify-center items-center gap-4 py-5">
            <input
              type="text"
              name="name"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Nombre"
              className="border border-white/50 text-white w-80 sm:w-120 md:w-120 lg:w-140 px-4 h-10"
              required
            />
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Correo Electrónico"
              className="border border-white/50 text-white w-80 px-4 h-10 sm:w-120 md:w-120 lg:w-140"
              required
            />
          </div>

          <textarea
            name="message"
            onChange={(e) => setMsg(e.target.value)}
            value={msg}
            className="border border-white/50 text-white w-80 h-50 resize-none px-4 py-4 sm:w-120 md:w-120 lg:w-140"
            placeholder="Texto"
            required
          />

          <button
            className="border border-white/50 bg-white/10 hover:bg-white/30 text-white w-80 sm:w-120 md:w-120 lg:w-140 my-5 h-10"
            type="submit"
          >
            {send ? "Enviando..." : "Enviar"}
          </button>
        </form>

        <div className="text-white/50 flex justify-between py-8">
          <h1 className="text-lg md:text-2xl flex gap-3">
            © {new Date().getFullYear()} Ronal Pérez
          </h1>
          <div className="cursor-pointer flex text-white/50 gap-3">
            <a href="https://github.com/Ronalpp ">
              <LucideGithub className="hover:text-white/80" size={30} />
            </a>
            <a
              className="text-white "
              href="https://www.instagram.com/ronalperezrd/"
            >
              <Instagram
                size={30}
                className="text-white/50 hover:text-white/80"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
