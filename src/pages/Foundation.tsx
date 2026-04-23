import { motion } from "framer-motion";
import { Users, BookOpen, Target } from "lucide-react";

import { ImageWithFallback } from "../components/ui/ImageWithFallback";
import { PageTransition } from "../components/PageTransition";
import { useLanguage } from "../context/LanguageContext";

export function Fundacion() {
  const { t } = useLanguage();
  const initiatives = [
    {
      icon: BookOpen,
      title: t.becasEducativas,
      description: t.becasDesc,
    },
    {
      icon: Users,
      title: t.talleresComunitarios,
      description: t.talleresDesc,
    },
    {
      icon: Target,
      title: t.capacitacionDocente,
      description: t.capacitacionDesc,
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-cyan-400 via-cyan-300 to-teal-400 py-20 flex items-center">

        <div className="max-w-7xl mx-auto px-6 w-full">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
           

            <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-widest mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              {t.fundamir}
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-teal-600 mx-auto mb-6" />

              <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {t.fundamirDesc}
            </p>
          </motion.div>

          {/* CONTENT */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src="/imagenes/Logocomplet.png"
                alt="Fundación Educativa"
                className="w-full h-[400px] object-contain"
              />
            </motion.div>

            {/* TEXT + LIST */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-white">
                {t.transformandoVidas}
              </h3>

              <p className="text-white/80 text-lg">
                {t.mision}
              </p>

              <div className="space-y-4">
                {initiatives.map((item, i) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="flex gap-4 bg-white/90 backdrop-blur p-5 rounded-xl shadow hover:shadow-lg transition border-l-4 border-cyan-500"
                    >
                      <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center">
                        <Icon className="text-white" size={22} />
                      </div>

                      <div>
                        <h4 className="font-bold text-cyan-900">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

          </div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              { number: "200+", label: t.becasOtorgadas },
              { number: "15", label: t.comunidades },
              { number: "50+", label: t.docentes },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="bg-gradient-to-br from-cyan-600 to-teal-600 text-white p-8 rounded-xl text-center shadow-lg"
              >
                <div className="text-3xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-cyan-100">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </PageTransition>
  );
}