import { motion } from "framer-motion";
import { Award, Users, Heart, Briefcase, Calendar } from "lucide-react";
import { PageTransition } from "../components/PageTransition";
import { ImageWithFallback } from "../components/ui/image-with-fallback";
import { useLanguage } from "../context/LanguageContext";

const experiences = [
  {
    year: "1997 - 1998",
    title: "Asistente Administrativa",
    place: "Pan USA School - Albrook, Panama",
    description: "Apoyo en procesos internos, gestión de documentación y actividades operativas.",
    category: "Administración",
    image: "/imagenes/panusa.webp"
  },
  {
    year: "1998 - 1999",
    title: "Agente de Ventas",
    place: "Distribuidora LatinAmerican S.A - Panama",
    description: "Gestión de ventas y atención al cliente.",
    category: "Ventas",
    image: "/imagenes/LAVendedora.jpg"
  },
  {
    year: "1999 - 2000",
    title: "Cajera",
    place: "Domino's Pizza - Ave. Balboa, Panama",
    description: "Atención al cliente, manejo de caja y procesamiento de pedidos.",
    category: "Servicio",
    image: "/imagenes/pizza.png"
  },
  {
    year: "2000 - 2001",
    title: "Docente de Inglés",
    place: "Saint George International School of Panama",
    description: "Enseñanza del inglés en nivel escolar.",
    category: "Docencia",
    image: "/imagenes/SaintJORGE.webp"
  },
  {
    year: "2007 - Actualidad",
    title: "Profesora de Inglés Titular",
    place: "UNACHI - Volcan y Rio Sereno, Chiriquí",
    description: "Enseñanza de cursos especializados en inglés, metodología y formación docente.",
    category: "Docencia Universitaria",
    image: "/imagenes/unachi.jpg"
  }
];

const education = [
  {
    school: "Colegio Félix Olivares Contreras",
    title: "Educación Secundaria - Bachillerato",
    image: "/imagenes/felix.webp"
  },
  {
    school: "PanUSA School - Albrook, Panamá",
    title: "Técnico en Enseñanza del Inglés",
    image: "/imagenes/panusa.webp"
  },
  {
    school: "Universidad Autónoma de Chiriquí (UNACHI)",
    title: "Licenciatura en Humanidades con especialización en Inglés (TESOL)",
    image: "/imagenes/unachi.jpg"
  },
  {
    school: "Lindenwood University - Missouri, EE. UU.",
    title: "Maestría en Educación con énfasis en Enseñanza del Inglés",
    image: "/imagenes/lindewood.jpg"
  },
  {
    school: "Atlantic International University - Miami, EE. UU.",
    title: "Maestría en Inglés como Lengua Extranjera (TESOL)",
    image: "/imagenes/aiu.png"
  },
  {
    school: "Atlantic International University - Miami, EE. UU.",
    title: "Doctorado en Enseñanza del Inglés como Lengua Extranjera (TESOL)",
    image: "/imagenes/aiu.png"
  }
];

const categoryColors: Record<string, string> = {
  "Administración": "bg-purple-500",
  "Ventas": "bg-pink-500",
  "Servicio": "bg-green-500",
  "Docencia": "bg-blue-500",
  "Docencia Universitaria": "bg-indigo-500"
};

export function About() {
  const { t } = useLanguage();
  const stats = [
    { icon: Users, value: "20+", label: t.anosExperiencia },
    { icon: Briefcase, value: "15+", label: t.rolesDesempenados },
    { icon: Award, value: "4", label: t.areasEspecializacion },
    { icon: Heart, value: "100%", label: t.dedicacion }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-cyan-400 via-cyan-300 to-teal-400">
        {/* Hero Section */}
        <section className="py-20 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.sobreMiTitle}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-teal-600 mx-auto" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <ImageWithFallback
                      src="/imagenes/siannah-portrait.jpeg"
                      alt="Dra. Siannah Yánguez"
                      className="w-full h-[800px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/50 to-transparent" />
                  </div>
                </motion.div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl -z-10" />
              </div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-bold text-white">{t.pasionEnsenanza}</h3>
                <p className="text-white/80 text-lg leading-relaxed">
                 A lo largo de más de 20 años, he construido una trayectoria basada en la precisión, la consistencia y el compromiso con la calidad en el uso del idioma inglés. Mi experiencia abarca distintos ámbitos, permitiéndome adaptarme a diversos tipos de contenido y necesidades específicas.

Como profesional en lengua inglesa, entiendo que cada palabra importa. Por eso, cada servicio es desarrollado con un enfoque analítico y detallado, asegurando que el mensaje final sea claro, coherente y adecuado para su contexto.
                </p>
                <p className="text-white/80 text-lg leading-relaxed">
                  Como Doctora en Lengua Inglesa, mi misión es proporcionar servicios
                  de traducción de alta calidad y programas educativos que empoderan
                  a estudiantes a alcanzar sus metas.
                </p>
                <div className="flex flex-wrap gap-4 mt-6">
                  <span className="bg-cyan-600 text-white px-4 py-2 rounded-full font-medium">{t.phD}</span>
                  <span className="bg-teal-600 text-white px-4 py-2 rounded-full font-medium">{t.traductoraCertificada}</span>
                  <span className="bg-cyan-500 text-white px-4 py-2 rounded-full font-medium">{t.educadoraExcelencia}</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="text-center bg-white/90 backdrop-blur p-6 rounded-xl shadow-lg hover:shadow-xl transition"
                  >
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-full mb-4">
                      <Icon className="text-white" size={28} />
                    </div>
                    <div className="text-2xl font-bold text-cyan-900 mb-1">{stat.value}</div>
                    <div className="text-cyan-900/70 text-sm">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.experienciaLaboral}</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {t.experienciaDesc}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="grid grid-cols-1 gap-4">
                  <div className="stat-card-modern bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-xl text-white">
                    <span className="text-3xl font-bold">20+</span>
                    <span className="block text-sm">{t.anosExperiencia}</span>
                  </div>
                  <div className="stat-card-modern bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl text-white">
                    <span className="text-3xl font-bold">15+</span>
                    <span className="block text-sm">{t.rolesDesempenados}</span>
                  </div>
                  <div className="stat-card-modern bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-xl text-white">
                    <span className="text-3xl font-bold">4</span>
                    <span className="block text-sm">{t.areasEspecializacion}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-bold text-gray-900 mb-4">{t.areas}:</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                    <strong>{t.docividad}</strong> 📚
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                    <strong>{t.administracion}</strong> 💼
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    <strong>{t.servicios}</strong> 🤝
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                    <strong>{t.traduccionArea}</strong> 🌐
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-2 space-y-4"
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition flex gap-4"
                >
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={exp.image} alt={exp.place} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-sm text-gray-500 flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.year}
                      </span>
                      <span className={`px-2 py-0.5 rounded-full text-xs text-white ${categoryColors[exp.category] || "bg-gray-500"}`}>
                        {exp.category}
                      </span>
                    </div>
                    <h4 className="font-bold text-gray-900">{exp.title}</h4>
                    <p className="text-sm text-blue-600 font-medium">{exp.place}</p>
                    <p className="text-sm text-gray-600">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.formacionAcademica}</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {t.formacionDesc}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/90 backdrop-blur rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <div className="h-40 overflow-hidden">
                  <img src={edu.image} alt={edu.school} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-cyan-900 mb-2">{edu.school}</h4>
                  <p className="text-cyan-900/70 text-sm">{edu.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </PageTransition>
  );
}
