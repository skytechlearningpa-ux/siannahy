import { motion } from "framer-motion";
import { Languages, FileText, CheckCircle, Clock, Award, MapPin } from "lucide-react";
import { PageTransition } from "../components/PageTransition";
import { ImageWithFallback } from "../components/ui/image-with-fallback";
import { useLanguage } from "../context/LanguageContext";

const services = [
  {
    icon: FileText,
    title: "Traducción de Documentos",
    description: "Traducción precisa de documentos académicos, legales y técnicos.",
    features: ["Documentos legales", "Artículos académicos", "Manuales técnicos"],
  },
  {
    icon: Languages,
    title: "Interpretación",
    description: "Interpretación simultánea y consecutivos para eventos y reuniones.",
    features: ["Eventos corporativos", "Conferencias", "Reuniones"],
  },
  {
    icon: CheckCircle,
    title: "Revisión y Corrección",
    description: "Corrección profesional para garantizar calidad lingüística.",
    features: ["Proofreading", "Edición de estilo", "Corrección gramatical"],
  },
  {
    icon: Clock,
    title: "Servicio Express",
    description: "Traducciones urgentes con entrega rápida y calidad garantizada.",
    features: ["24/48h", "Alta prioridad", "Entrega rápida"],
  },
];

export function Translator() {
  const { t } = useLanguage();
  const whatsappLink = "https://wa.me/50763155569";

  return (
    <PageTransition>
      {/* Services Section */}
      <div className="min-h-screen bg-gradient-to-b from-cyan-400 via-cyan-300 to-teal-400 py-20 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t.serviciosTraduccion}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-600 mx-auto mb-6" />
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {t.traduccionDesc}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-cyan-200 transition group"
                >
                  <div className="flex gap-4">
                    <div className="w-14 h-14 bg-cyan-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition">
                      <Icon className="text-white" size={26} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-cyan-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center text-gray-700 text-sm">
                            <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Carnet Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {t.carnetTraductora}
              </h2>
              <p className="text-xl text-white/80 mb-6">
                {t.carnetDesc}
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Award className="text-white mt-1 flex-shrink-0" size={20} />
                  <div className="text-white">
                    <strong>{t.nombre}</strong> Dra. Siannah Yanguez B.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Languages className="text-white mt-1 flex-shrink-0" size={20} />
                  <div className="text-white">
                    <strong>{t.especialidad}</strong> Traducción e interpretación inglés - español
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FileText className="text-white mt-1 flex-shrink-0" size={20} />
                  <div className="text-white">
                    <strong>{t.serviciosDoc}</strong> Documentos oficiales, académicos y técnicos
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="text-white mt-1 flex-shrink-0" size={20} />
                  <div className="text-white">
                    <strong>{t.rolActual}</strong> Traductora pública y profesora titular - UNACHI
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full -z-10 opacity-50" />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-full -z-10" />
                <div className="bg-white rounded-2xl shadow-2xl p-2">
                  <ImageWithFallback
                    src="/imagenes/CARNET.png"
                    alt={t.carnetTraductora}
                    className="w-full max-w-sm rounded-xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA with WhatsApp */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-cyan-500 to-green-500 rounded-3xl p-10 text-center shadow-2xl"
          >
          
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t.necesitasTraduccion}
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
              Chatea directamente con nosotros por WhatsApp para obtener una cotización personalizada con calidad garantizada.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-green-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition hover:scale-105 shadow-xl"
            >
              <img src="/imagenes/whatsapp.png" alt="WhatsApp" className="w-8 h-8" />
              {t.chatWhatsApp}
            </a>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
