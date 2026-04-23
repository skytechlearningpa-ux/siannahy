import { PageTransition } from "../components/PageTransition";
import { ImageWithFallback } from "../components/ui/ImageWithFallback";
import { motion } from "framer-motion";
import { BookOpen, Award, Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Hero() {
  const { t } = useLanguage();
  const items = [
    { icon: BookOpen, text: "Educación" },
    { icon: Globe, text: "Traducción" },
    { icon: Award, text: "Excelencia" },
  ];

  return (
    <PageTransition>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600">
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Image overlay */}
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1771313121019-4d0ce055b9a4"
            alt="Books background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white tracking-tight"
            >
              {t.draSiannah}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
            >
              {t.heroDesc}
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-6 mt-10"
            >
              {items.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20"
                >
                  <item.icon className="text-blue-200" size={24} />
                  <span className="text-white font-medium">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-12"
            >
              <a
                href="/about"
                className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                {t.exploraServicios}
              </a>
            </motion.div>

          </motion.div>

        </div>
      </section>
    </PageTransition>
  );
}