import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle, Globe, Clock, Users, Star, Sparkles, Calendar, Zap, BookOpen, Play, Target } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { InscriptionModal } from "../../components/InscriptionModal";
import { CourseCalendar } from "../../components/CourseCalendar";
import { useState } from "react";

const achievements = [
  { icon: MessageCircle, text: "Presentarte con confianza" },
  { icon: Clock, text: "Hablar de tu rutina diaria" },
  { icon: Users, text: "Preguntas básicas" },
  { icon: Globe, text: "Conversaciones simples" },
  { icon: Zap, text: "Frases útiles reales" },
];

const content = [
  { title: "Verb to be", subtitle: "Sin complicaciones", icon: "✅" },
  { title: "Presente simple", subtitle: "Hablar de tu día", icon: "☀️" },
  { title: "There is / There are", subtitle: "Describir lugares", icon: "🏠" },
  { title: "Can / Can't", subtitle: "Habilidades", icon: "💪" },
  { title: "Preposiciones", subtitle: "In, on, at", icon: "📍" },
  { title: "Some / Any", subtitle: "Cantidades", icon: "🔢" },
];

export function Level1InfoView() {
  const [isInscriptionOpen, setIsInscriptionOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50">
      <InscriptionModal
        isOpen={isInscriptionOpen}
        onClose={() => setIsInscriptionOpen(false)}
        courseName="Inglés Nivel 1 - Básico Conversacional (A1)"
        type="inscription"
      />
      <InscriptionModal
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
        type="calendar"
      />
      {/* HERO */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-blue-600 to-cyan-700" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ0cmFuc3BhcmVudCIvPjwvc3ZnPg==')] opacity-30" />

        <Link to="/curso/ingles" className="absolute top-4 left-6 z-10 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white hover:bg-white/30 transition">
          <ArrowLeft className="w-5 h-5" />
          Volver
        </Link>

        <div className="relative max-w-5xl mx-auto px-6 py-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="bg-yellow-400 text-yellow-900 text-lg px-4 py-1 mb-6 shadow-lg">
              🎯 Inicia 3 de mayo - ¡Cupos limitados!
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              Nivel 1 – Inglés Básico Conversacional
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Empieza desde cero y logra tus primeras conversaciones reales en inglés. ¡Sin teoría pesada, 100% práctico!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setIsInscriptionOpen(true)}
                className="bg-white text-green-600 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              >
                Inscribirme al Nivel 1
                <Calendar className="w-5 h-5 ml-2" />
              </Button>
              <Button
                onClick={() => setIsCalendarOpen(true)}
                className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Ver calendario
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* VALUE PROPS */}
      <div className="max-w-6xl mx-auto px-6 mt-8 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Play, text: "Habla desde el día 1", color: "from-green-500 to-emerald-600" },
            { icon: Target, text: "Situaciones reales", color: "from-blue-500 to-cyan-500" },
            { icon: MessageCircle, text: "70% conversación", color: "from-purple-500 to-pink-500" },
            { icon: BookOpen, text: "Sin teoría pesada", color: "from-orange-500 to-red-500" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-xl text-center hover:shadow-2xl transition-all"
            >
              <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <p className="font-bold text-gray-800">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* LOGROS */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">Lo que lograrás al finalizar el nivel</h2>
        <p className="text-center text-gray-500 mb-10">Resultados garantizados en solo 8 semanas</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border-l-4 border-cyan-500"
              >
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-cyan-600" />
                </div>
                <p className="font-bold text-lg text-gray-800">{a.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* CONTENIDO */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">Contenido del curso</h2>
        <p className="text-center text-gray-500 mb-10">6 temas fundamentales para tu inglés básico</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="text-4xl mb-3">{c.icon}</div>
              <h4 className="font-bold text-gray-900 text-lg">{c.title}</h4>
              <p className="text-gray-500">{c.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ESTADÍSTICAS */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Experiencia del curso</h2>

        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { icon: Calendar, value: "8", label: "sesiones en vivo", color: "cyan" },
            { icon: Clock, value: "16+", label: "horas de práctica", color: "blue" },
            { icon: Users, value: "70%", label: "conversación", color: "green" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-xl text-center border border-gray-100"
            >
              <stat.icon className={`w-10 h-10 mx-auto mb-4 text-${stat.color}-500`} />
              <div className="text-5xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-500 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>


      {/* CTA FINAL */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 bg-[length:200%_200%] animate-gradient text-white text-center py-12 px-8 rounded-3xl shadow-2xl">
          <div className="bg-white/10 backdrop-blur-sm inline-block p-4 rounded-full mb-4">
            <Sparkles className="w-12 h-12" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¡Empieza el 3 de mayo!</h2>
          <p className="text-xl text-white/90 mb-2">Cupos limitados - Únete al grupo de WhatsApp</p>
          <p className="text-white/70 mb-8">Garantizamos tu aprendizaje o te devolvemos el dinero</p>

          <Button
            onClick={() => setIsInscriptionOpen(true)}
            className="bg-white !text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
          >
            <Sparkles className="w-5 h-5 mr-2 text-green-600" />
            Inscribirme ahora
          </Button>
        </div>
      </div>

      {/* TESTIMONIO */}
      <div className="max-w-3xl mx-auto px-6 mb-20 text-center">
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-cyan-100">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
            ))}
          </div>

          <p className="text-2xl italic text-gray-700 mb-6">
            "En solo 2 semanas ya hablaba inglés básico. La metodología es súper dinámica y práctica. ¡Totalmente recomendado!"
          </p>

          <div className="flex items-center justify-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
              M
            </div>
            <div className="text-left">
              <p className="font-bold text-gray-900">María Contreras</p>
              <p className="text-gray-500 text-sm">Estudiante del Nivel 1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
