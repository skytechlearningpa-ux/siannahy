import { Link } from "react-router-dom";
import { GraduationCap, ArrowRight, Users, Globe } from "lucide-react";
import { ImageWithFallback } from "../components/ui/ImageWithFallback";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { useLanguage } from "../context/LanguageContext";

export function CoursesView() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-400 via-cyan-300 to-teal-400 py-12 sm:py-16">

      <div className="max-w-7xl mx-auto px-6">

        {/* Hero */}
        <div className="text-center mb-12">

          <img
            src="/imagenes/Ynsy.png"
            alt="Yansy Academy"
            className="h-32 sm:h-40 mx-auto mb-4 object-contain drop-shadow-lg"
          />

          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            {t.cursosDiseno}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 max-w-3xl mx-auto">
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-1">500+</div>
            <div className="text-gray-600">{t.estudiantesActivos}</div>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
            <div className="text-3xl font-bold text-green-600 mb-1">95%</div>
            <div className="text-gray-600">{t.satisfaccion}</div>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
            <div className="text-3xl font-bold text-purple-600 mb-1">4.8</div>
            <div className="text-gray-600">{t.ratingPromedio}</div>
          </div>
        </div>

        {/* Title */}
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-white mb-2">
            {t.cursosDisponibles}
          </h3>
          <p className="text-white/80">
            {t.seleccionaCurso}
          </p>
        </div>

        {/* Courses */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* English Course */}
          <Link
            to="/curso/ingles"
            className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-blue-500"
          >

            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1673515334717-da4d85aaf38b"
                alt={t.cursoIngles}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                <Badge className="bg-blue-600 text-white">
                  {t.masPopular}
                </Badge>
                <Badge className="bg-green-600 text-white">
                  Inicia 3 Mayo
                </Badge>
              </div>

              {/* Flag */}
              <div className="absolute top-4 right-4 text-5xl">
                🇺🇸
              </div>
            </div>

            {/* Content */}
            <div className="p-8">

              <div className="flex items-center gap-2 mb-3">
                <Globe className="w-5 h-5 text-blue-600" />
                <h4 className="text-2xl font-bold text-gray-900">
                  {t.cursoIngles}
                </h4>
              </div>

              <p className="text-gray-600 mb-6">
                {t.inglesDesc}
              </p>

              <div className="flex items-center gap-6 mb-6 text-sm text-blue-600">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>4 {t.niveles}</span>
                </div>

                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  <span>{t.nivelesRango}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-600">Desde</div>
                  <div className="text-2xl font-bold text-blue-600">
                    Nivel A1
                  </div>
                </div>

                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 flex items-center gap-2">
                  {t.verNiveles}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

            </div>
          </Link>

          {/* Coming Soon */}
          <div className="relative bg-white rounded-3xl shadow-lg border-2 border-dashed border-gray-300 opacity-60 overflow-hidden">

            <div className="h-64 flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100">
              <div className="text-6xl mb-4">🚀</div>
              <Badge className="bg-purple-600 text-white">
                {t.proximamente}
              </Badge>
            </div>

            <div className="p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-3">
                {t.masCursos}
              </h4>

              <p className="text-gray-600 mb-6">
                Estamos trabajando en nuevos cursos de idiomas y habilidades profesionales
              </p>

              <Button disabled className="w-full rounded-xl">
                Notifícame
              </Button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}