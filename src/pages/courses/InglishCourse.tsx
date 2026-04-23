import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle, Users, Calendar, Video, Sparkles, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { ImageWithFallback } from "../../components/ui/image-with-fallback";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Progress } from "../../components/ui/progress";
import { InscriptionModal } from "../../components/InscriptionModal";
import { useState } from "react";

const levels = [
  {
    id: 1,
    number: 1,
    title: "Básico Conversacional (A1)",
    description: "Aprende a presentarte, hablar de tu rutina y mantener conversaciones simples",
    status: "available" as const,
    badge: "Inicia 3 de mayo",
    badgeColor: "green",
    sessions: 8,
    liveHours: 16,
    practiceHours: 8,
    highlights: ["Presentación personal y saludos", "Rutina diaria", "Vocabulario para viajes", "Expresiones de tiempo"],
  },
  { id: 2, number: 2, title: "Intermedio Inicial (A2)", description: "Mejora tu fluidez en situaciones cotidianas", status: "coming-soon" as const, badge: "Próximamente", badgeColor: "purple" },
  { id: 3, number: 3, title: "Intermedio Avanzado (B1)", description: "Expresa opiniones y argumenta con fluidez", status: "coming-soon" as const, badge: "Próximamente", badgeColor: "purple" },
  { id: 4, number: 4, title: "Avanzado (B2-C1)", description: "Domina el inglés en contextos profesionales", status: "coming-soon" as const, badge: "Próximamente", badgeColor: "purple" },
];

export function EnglishCourse() {
  const [isInscriptionOpen, setIsInscriptionOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50">
      <InscriptionModal
        isOpen={isInscriptionOpen}
        onClose={() => setIsInscriptionOpen(false)}
        courseName="Curso de Inglés - Nivel 1"
      />
      {/* Hero */}
      <div className="relative h-72 overflow-hidden">
        <ImageWithFallback src="https://images.unsplash.com/photo-1673515334717-da4d85aaf38b" alt="English Course" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/90 via-cyan-700/50 to-transparent" />
        <div className="absolute top-20 left-0 right-0">
          <div className="max-w-7xl mx-auto px-6">
            <Link to="/cursos" className="inline-flex items-center text-white/90 hover:text-white mb-4 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a Cursos
            </Link>
          </div>
        </div>
      </div>

      {/* Course Header */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-cyan-100">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-5xl shadow-lg">
              🇺🇸
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Curso de Inglés</h1>
                <Badge className="bg-cyan-100 text-cyan-700">4 niveles</Badge>
              </div>
              <p className="text-gray-600 text-lg mb-4">De cero a conversacional. Aprende inglés con metodología práctica y resultados rápidos.</p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
                  <Video className="w-5 h-5 text-cyan-600" />
                  <span className="font-medium">16+ horas en vivo</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
                  <Users className="w-5 h-5 text-cyan-600" />
                  <span className="font-medium">Clases grupales</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
                  <MessageCircle className="w-5 h-5 text-cyan-600" />
                  <span className="font-medium">Práctica conversacional</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="max-w-7xl mx-auto px-6 mt-8 mb-12">
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-cyan-100">
          <div className="flex justify-between items-center mb-3">
            <span className="font-bold text-lg text-gray-800">Tu progreso</span>
            <span className="text-sm bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full font-medium">1 de 4 niveles</span>
          </div>
          <Progress value={25} className="h-3 mb-3 bg-gray-100" />
          <p className="text-gray-600">Completa cada nivel para avanzar al siguiente. ¡Comenzar con el Nivel 1!</p>
        </div>
      </div>

      {/* Levels */}
      <div className="max-w-5xl mx-auto px-6 mb-16">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">Elige tu nivel</h2>
        <p className="text-center text-gray-500 mb-8">Selecciona el nivel que mejor se adapte a tus necesidades</p>
        <div className="space-y-4">
          {levels.map((level, i) => (
            <motion.div
              key={level.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-white rounded-2xl p-6 shadow-lg transition-all hover:shadow-2xl ${level.status === "available" ? "border-2 border-cyan-200 hover:border-cyan-400" : "border-2 border-gray-100 opacity-60"
                }`}
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold shadow-md ${level.status === "available" ? "bg-gradient-to-br from-cyan-400 to-blue-500 text-white" : "bg-gray-100 text-gray-400"
                  }`}>
                  {level.number}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-1">
                    <h3 className="text-xl font-bold text-gray-900">{level.title}</h3>
                    {level.badge && (
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${level.badgeColor === "green" ? "bg-green-100 text-green-700" : "bg-purple-100 text-purple-700"
                        }`}>
                        {level.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600">{level.description}</p>
                </div>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  {level.status === "available" && (
                    <>
                      <div className="flex items-center gap-1 text-gray-500 bg-gray-50 px-3 py-1 rounded-lg">
                        <Calendar className="w-4 h-4" />
                        <span>{level.sessions} sesiones</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500 bg-gray-50 px-3 py-1 rounded-lg">
                        <Video className="w-4 h-4" />
                        <span>{level.liveHours}h vivo</span>
                      </div>
                    </>
                  )}
                </div>
                <div>
                  {level.status === "available" ? (
                    <Link to="/curso/ingles/nivel-1">
                      <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all">
                        Ver detalle
                      </Button>
                    </Link>
                  ) : (
                    <Button disabled className="px-8 py-3 rounded-xl bg-gray-100 text-gray-400 font-medium">
                      Próximamente
                    </Button>
                  )}
                </div>
              </div>
              {level.highlights && (
                <div className="mt-5 pt-5 border-t border-gray-100">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {level.highlights.map((h) => (
                      <span key={h} className="flex items-center gap-1 text-sm bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full">
                        <CheckCircle className="w-4 h-4 text-cyan-500" />
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-6 mb-20">
        <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 bg-[length:200%_200%] animate-gradient text-white text-center py-12 px-8 rounded-3xl shadow-2xl">
          <div className="bg-white/10 backdrop-blur-sm inline-block p-4 rounded-full mb-4">
            <Sparkles className="w-12 h-12" />
          </div>
          <h3 className="text-3xl font-bold mb-3">¿Listo para empezar tu viaje?</h3>
          <p className="text-white/90 text-lg mb-6 max-w-xl mx-auto">Únete a cientos de estudiantes que ya están mejorando su inglés con nuestra metodología</p>
          <Button
            onClick={() => setIsInscriptionOpen(true)}
            className="bg-white text-green-600 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
          >
            Inscribirme al Nivel 1
            <Calendar className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
