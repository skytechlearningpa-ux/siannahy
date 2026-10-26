import { Link } from "react-router-dom";
import {
  ArrowLeft,
  MessageCircle,
  Globe,
  Clock,
  Users,
  Star,
  Sparkles,
  Calendar,
  Zap,
  BookOpen,
  Play,
  Target,
  X,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Award,
  BookMarked,
  Headphones,
  MessageSquare,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { InscriptionModal } from "../../components/InscriptionModal";
import { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";

export interface CourseUnit {
  id: number;
  unitTitle: string;
  unitName: string;
  pages: string;
  hours: string;
  icon: string;
  badge: string;
  milestone?: string;
  isProgressCheck?: boolean;
  topics: string;
  grammar: string;
  communication: string;
  skills: string;
  interchange: string;
  outcomes: string[];
}

export function getUnits(isEn: boolean): CourseUnit[] {
  return [
    {
      id: 1,
      unitTitle: "Unit 1 – What’s Your Name?",
      unitName: "What’s Your Name?",
      pages: isEn ? "Textbook pages 2–7" : "Textbook págs. 2–7",
      hours: isEn ? "18 instructional hours" : "18 horas de instrucción",
      icon: "👋",
      badge: isEn ? "Foundations & Greetings" : "Fundamentos y Saludos",
      milestone: isEn ? "Unit review" : "Repaso de unidad",
      topics:
        "Alphabet; greetings and leave-takings; names and titles of address; numbers 0–10; phone numbers and email addresses.",
      grammar:
        "Possessive adjectives my, your, his, her; verb be in affirmative statements and contractions.",
      communication: isEn
        ? "Introduce yourself and friends; say hello and goodbye; ask for names and phone numbers."
        : "Presentarte a ti mismo y a tus amigos; decir hola y adiós; pedir nombres y números de teléfono.",
      skills: isEn
        ? "Linked sounds; listening for names, phone numbers, and email addresses; writing names and contact details."
        : "Sonidos enlazados; audición de nombres, teléfonos y correos; redacción de datos de contacto.",
      interchange: "“Celebrity Classmates” (p. 114)",
      outcomes: isEn
        ? [
            "Introduce yourself and another person.",
            "Use basic greetings and leave-takings.",
            "Ask for and provide names and contact details.",
            "Use my, your, his, her and affirmative forms of be.",
          ]
        : [
            "Presentarte a ti mismo y a otra persona.",
            "Usar saludos y despedidas básicas.",
            "Pedir y proporcionar nombres y datos de contacto.",
            "Usar my, your, his, her y formas afirmativas del verbo be.",
          ],
    },
    {
      id: 2,
      unitTitle: "Unit 2 – Where Are My Keys?",
      unitName: "Where Are My Keys?",
      pages: isEn ? "Textbook pages 8–13" : "Textbook págs. 8–13",
      hours: isEn ? "18 instructional hours" : "18 horas de instrucción",
      icon: "🔑",
      badge: isEn ? "Objects & Locations" : "Objetos y Ubicación",
      milestone: isEn
        ? "Progress Check 1 | Review of units completed to date"
        : "Progress Check 1 | Evaluación y repaso de unidades completadas",
      isProgressCheck: true,
      topics:
        "Possessions, classroom objects, personal items, and locations in a room.",
      grammar:
        "Articles a, an, the; this, that, these, those; plural nouns; questions with be; prepositions of place: in, in front of, behind, on, next to, under.",
      communication: isEn
        ? "Name objects; ask for and give the locations of objects."
        : "Nombrar objetos cotidianos; preguntar y responder dónde están ubicados.",
      skills: isEn
        ? "Plural -s endings; listening for object locations; writing location descriptions."
        : "Terminación plural -s; audición de ubicaciones; redacción de descripciones de lugares.",
      interchange: "“Find the Differences” (p. 115)",
      outcomes: isEn
        ? [
            "Name common personal and classroom objects.",
            "Ask and answer where an object is located.",
            "Use articles, demonstratives, plurals, and basic prepositions of place.",
          ]
        : [
            "Nombrar objetos personales y del aula comunes.",
            "Preguntar y responder dónde está ubicado un objeto.",
            "Usar artículos, demostrativos, plurales y preposiciones básicas de lugar.",
          ],
    },
    {
      id: 3,
      unitTitle: "Unit 3 – Where Are You From?",
      unitName: "Where Are You From?",
      pages: isEn ? "Textbook pages 16–21" : "Textbook págs. 16–21",
      hours: isEn ? "18 instructional hours" : "18 horas de instrucción",
      icon: "🌎",
      badge: isEn ? "Countries & Descriptions" : "Países y Descripciones",
      milestone: isEn ? "Unit review" : "Repaso de unidad",
      topics:
        "Cities and countries; adjectives of personality and appearance; numbers 11–103; languages.",
      grammar:
        "Verb be in affirmative and negative statements; yes/no questions and short answers; Wh-questions.",
      communication: isEn
        ? "Talk about cities and countries; ask for and give information about origin, nationality, first language, and age; describe people."
        : "Hablar sobre ciudades y países; dar y pedir información sobre origen, nacionalidad, idioma y edad; describir personas.",
      skills: isEn
        ? "Syllable stress; listening for countries, cities, languages, and descriptions of people; writing questions for personal information."
        : "Acentuación silábica; audición de países, ciudades, idiomas y descripciones; redacción de preguntas para información personal.",
      interchange: "“Let’s Talk!” (p. 118)",
      outcomes: isEn
        ? [
            "Ask and answer where people are from.",
            "Give basic information about nationality, language, and age.",
            "Describe selected personal characteristics.",
            "Form basic affirmative, negative, and question patterns with be.",
          ]
        : [
            "Preguntar y responder de dónde son las personas.",
            "Dar información básica sobre nacionalidad, lengua y edad.",
            "Describir características personales clave.",
            "Formar oraciones afirmativas, negativas y patrones de preguntas con be.",
          ],
    },
    {
      id: 4,
      unitTitle: "Unit 4 – Is This a T-Shirt?",
      unitName: "Is This a T-Shirt?",
      pages: isEn ? "Textbook pages 22–27" : "Textbook págs. 22–27",
      hours: isEn ? "18 instructional hours" : "18 horas de instrucción",
      icon: "👕",
      badge: isEn ? "Clothing, Colors & Weather" : "Ropa, Colores y Clima",
      milestone: isEn
        ? "Progress Check 2 | Review of units completed to date"
        : "Progress Check 2 | Evaluación y repaso de unidades completadas",
      isProgressCheck: true,
      topics: "Clothing, colors, weather, and seasons.",
      grammar:
        "Possessive adjectives our and their; possessive pronouns; names and whose; present continuous statements and yes/no questions; and, but, so; adjective placement before nouns.",
      communication: isEn
        ? "Ask about and describe clothing and colors; talk about weather and seasons; identify owners of objects."
        : "Preguntar y describir ropa y colores; hablar sobre el clima y las estaciones; identificar dueños de objetos.",
      skills: isEn
        ? "The letters s and sh; listening for clothing and color descriptions; writing questions about what people are wearing."
        : "Pronunciación de letras s y sh; audición de ropa y colores; redacción de preguntas sobre vestimenta.",
      interchange: "“Celebrity Fashions” (pp. 116–117)",
      outcomes: isEn
        ? [
            "Identify common clothing items and colors.",
            "Describe what people are wearing.",
            "Ask who owns an item and use basic possessive forms.",
            "Describe simple weather and seasonal conditions.",
          ]
        : [
            "Identificar prendas cotidianas y colores.",
            "Describir la vestimenta de las personas.",
            "Preguntar de quién es un objeto y usar formas posesivas básicas.",
            "Describir condiciones meteorológicas y estacionales simples.",
          ],
    },
    {
      id: 5,
      unitTitle: "Unit 5 – What Time Is It?",
      unitName: "What Time Is It?",
      pages: isEn ? "Textbook pages 30–35" : "Textbook págs. 30–35",
      hours: isEn ? "18 instructional hours" : "18 horas de instrucción",
      icon: "⏰",
      badge: isEn ? "Time & Activities" : "La Hora y Actividades",
      milestone: isEn ? "Unit review" : "Repaso de unidad",
      topics: "Clock time, times of day, and everyday activities.",
      grammar:
        "Time expressions including o’clock, A.M., P.M., noon, midnight, in the morning/afternoon/evening, at 7:00, and at night; present continuous; Wh-questions.",
      communication: isEn
        ? "Ask for and tell the time; ask about and describe current activities."
        : "Preguntar y decir la hora; consultar y describir actividades actuales.",
      skills: isEn
        ? "Rising and falling intonation; listening for times and actions; writing times of day; reading “Message Me!”."
        : "Entonación ascendente y descendente; audición de horarios y acciones; escritura de horas del día; lectura de “Message Me!”.",
      interchange: "“What’s Wrong with This Picture?” (p. 119)",
      outcomes: isEn
        ? [
            "Ask for and tell the time.",
            "Identify common times of day.",
            "Ask and answer questions about current activities.",
            "Use present continuous forms to describe actions in progress.",
          ]
        : [
            "Preguntar y decir la hora con precisión.",
            "Identificar momentos comunes del día.",
            "Preguntar y responder sobre actividades en curso.",
            "Usar formas del presente continuo para describir acciones en progreso.",
          ],
    },
    {
      id: 6,
      unitTitle: "Unit 6 – I Ride My Bike to School",
      unitName: "I Ride My Bike to School",
      pages: isEn ? "Textbook pages 36–41" : "Textbook págs. 36–41",
      hours: isEn ? "18 instructional hours" : "18 horas de instrucción",
      icon: "🚲",
      badge: isEn ? "Routines & Transportation" : "Rutinas y Transporte",
      milestone: isEn
        ? "Progress Check 3 | Review of units completed to date"
        : "Progress Check 3 | Evaluación y repaso de unidades completadas",
      isProgressCheck: true,
      topics:
        "Transportation, family relationships, daily routines, and days of the week.",
      grammar:
        "Simple present statements with regular and irregular verbs; simple present yes/no and Wh-questions; time expressions such as early, late, every day, on Sundays, weekends, and weekdays.",
      communication: isEn
        ? "Ask how people go to work or school; talk about family members; describe daily and weekly routines."
        : "Preguntar cómo va la gente al trabajo o a la escuela; hablar sobre miembros de la familia; describir rutinas diarias y semanales.",
      skills: isEn
        ? "Third-person singular -s endings; listening for activities and days; writing about a weekly routine; reading “What’s Your Schedule Like?”."
        : "Terminaciones -s en tercera persona; audición de actividades y días; redacción de rutina semanal; lectura de “What’s Your Schedule Like?”.",
      interchange: "“Class Survey” (p. 120)",
      outcomes: isEn
        ? [
            "Describe transportation methods and routines.",
            "Ask and answer questions about daily and weekly activities.",
            "Use simple present statements and basic questions.",
            "Practice third-person singular -s endings.",
          ]
        : [
            "Describir medios de transporte y rutinas.",
            "Preguntar y responder sobre actividades cotidianas y semanales.",
            "Usar oraciones afirmativas y preguntas en presente simple.",
            "Practicar terminaciones en tercera persona (-s).",
          ],
    },
    {
      id: 7,
      unitTitle: "Unit 7 – Does It Have a View?",
      unitName: "Does It Have a View?",
      pages: isEn ? "Textbook pages 44–49" : "Textbook págs. 44–49",
      hours: isEn ? "18 instructional hours" : "18 horas de instrucción",
      icon: "🏡",
      badge: isEn ? "Homes & Furniture" : "Hogar y Habitaciones",
      milestone: isEn ? "Unit review" : "Repaso de unidad",
      topics: "Houses and apartments, rooms, and furniture.",
      grammar:
        "Simple present short answers; there is, there are, there isn’t, there aren’t any.",
      communication: isEn
        ? "Ask about and describe houses and apartments; talk about furniture in a room."
        : "Preguntar y describir casas y apartamentos; hablar sobre los muebles de una habitación.",
      skills: isEn
        ? "Words with th; listening to descriptions of homes and furniture shopping; writing about a dream home; reading “Unique Hotels!”."
        : "Palabras con sonido th; audición de descripciones de viviendas y compras de muebles; redacción de la casa soñada; lectura de “Unique Hotels!”.",
      interchange: "“Find the Differences” (p. 121)",
      outcomes: isEn
        ? [
            "Identify common rooms and furniture.",
            "Describe a home using there is/there are and negative forms.",
            "Ask and answer questions about housing features.",
            "Compare two room or apartment pictures.",
          ]
        : [
            "Identificar habitaciones y mobiliario común.",
            "Describir una vivienda usando there is/there are y formas negativas.",
            "Preguntar y responder sobre características de la vivienda.",
            "Comparar imágenes de dos habitaciones o apartamentos.",
          ],
    },
    {
      id: 8,
      unitTitle: "Unit 8 – Where Do You Work?",
      unitName: "Where Do You Work?",
      pages: isEn ? "Textbook pages 50–55" : "Textbook págs. 50–55",
      hours: isEn ? "18 instructional hours" : "18 horas de instrucción",
      icon: "💼",
      badge: isEn ? "Jobs & Workplaces" : "Trabajos y Profesiones",
      milestone: isEn
        ? "Progress Check – Final | Comprehensive final level review"
        : "Progress Check – Final | Evaluación integral final del nivel",
      isProgressCheck: true,
      topics: "Jobs and workplaces.",
      grammar:
        "Simple present Wh-questions with do and does; adjective placement after be and before nouns.",
      communication: isEn
        ? "Ask for and give information about work; give opinions about jobs; describe workday routines."
        : "Preguntar y dar información sobre el trabajo; dar opiniones sobre empleos; describir rutinas laborales.",
      skills: isEn
        ? "Reduction of do; listening to people describe jobs; writing about jobs; reading “Dream Jobs”."
        : "Reducción de do; escuchar a personas describir empleos; redacción sobre trabajos; lectura de “Dream Jobs”.",
      interchange: "“The Perfect Job” (p. 122)",
      outcomes: isEn
        ? [
            "Name common jobs and workplaces.",
            "Ask where people work and what they do.",
            "Describe simple work routines and express a basic opinion about a job.",
            "Use Wh-questions with do/does.",
          ]
        : [
            "Nombrar empleos y lugares de trabajo habituales.",
            "Preguntar dónde trabaja la gente y qué hace.",
            "Describir rutinas de trabajo simples y opinar sobre un trabajo.",
            "Usar preguntas con do/does.",
          ],
    },
  ];
}

export function Level1InfoView() {
  const { language } = useLanguage();
  const isEn = language === "en";
  const units = getUnits(isEn);

  const [isInscriptionOpen, setIsInscriptionOpen] = useState(false);
  const [selectedUnitId, setSelectedUnitId] = useState<number | null>(null);

  const selectedUnit =
    selectedUnitId !== null
      ? units.find((u) => u.id === selectedUnitId) || null
      : null;

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedUnitId === null) return;
      if (e.key === "Escape") {
        setSelectedUnitId(null);
      } else if (e.key === "ArrowLeft") {
        if (selectedUnitId > 1) {
          setSelectedUnitId(selectedUnitId - 1);
        }
      } else if (e.key === "ArrowRight") {
        if (selectedUnitId < 8) {
          setSelectedUnitId(selectedUnitId + 1);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedUnitId]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedUnitId !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedUnitId]);

  const handlePrevUnit = () => {
    if (selectedUnitId !== null && selectedUnitId > 1) {
      setSelectedUnitId(selectedUnitId - 1);
    }
  };

  const handleNextUnit = () => {
    if (selectedUnitId !== null && selectedUnitId < 8) {
      setSelectedUnitId(selectedUnitId + 1);
    }
  };

  const achievements = isEn
    ? [
        { icon: MessageCircle, text: "Introduce yourself with confidence" },
        { icon: Clock, text: "Talk about your daily routine" },
        { icon: Users, text: "Ask and answer basic questions" },
        { icon: Globe, text: "Engage in everyday conversations" },
        { icon: Zap, text: "Useful real-world phrases" },
      ]
    : [
        { icon: MessageCircle, text: "Presentarte con confianza" },
        { icon: Clock, text: "Hablar de tu rutina diaria" },
        { icon: Users, text: "Preguntas y respuestas básicas" },
        { icon: Globe, text: "Conversaciones simples del día a día" },
        { icon: Zap, text: "Frases útiles de la vida real" },
      ];

  const valueProps = isEn
    ? [
        { icon: Play, text: "Speak from day 1", color: "from-green-500 to-emerald-600" },
        { icon: Target, text: "Real situations", color: "from-blue-500 to-cyan-500" },
        { icon: MessageCircle, text: "70% conversation", color: "from-purple-500 to-pink-500" },
        { icon: BookOpen, text: "No heavy theory", color: "from-orange-500 to-red-500" },
      ]
    : [
        { icon: Play, text: "Habla desde el día 1", color: "from-green-500 to-emerald-600" },
        { icon: Target, text: "Situaciones reales", color: "from-blue-500 to-cyan-500" },
        { icon: MessageCircle, text: "70% conversación", color: "from-purple-500 to-pink-500" },
        { icon: BookOpen, text: "Sin teoría pesada", color: "from-orange-500 to-red-500" },
      ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50">
      <InscriptionModal
        isOpen={isInscriptionOpen}
        onClose={() => setIsInscriptionOpen(false)}
        courseName={
          isEn
            ? "English Level 1 - Basic Conversational (A1)"
            : "Inglés Nivel 1 - Básico Conversacional (A1)"
        }
        type="inscription"
      />

      {/* HERO */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-blue-600 to-cyan-700" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ0cmFuc3BhcmVudCIvPjwvc3ZnPg==')] opacity-30" />

        <Link
          to="/curso/ingles"
          className="absolute top-4 left-6 z-10 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white hover:bg-white/30 transition text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          {isEn ? "Back to Courses" : "Volver a Cursos"}
        </Link>

        <div className="relative max-w-5xl mx-auto px-6 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-yellow-400 text-yellow-900 text-base md:text-lg px-4 py-1 mb-6 shadow-lg font-bold">
              {isEn ? "🎯 Starts May 3 - Limited spots!" : "🎯 Inicia 3 de mayo - ¡Cupos limitados!"}
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              {isEn ? "Level 1 – Basic Conversational English" : "Nivel 1 – Inglés Básico Conversacional"}
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              {isEn
                ? "Start from scratch and achieve your first real conversations in English. No heavy theory, 100% practical!"
                : "Empieza desde cero y logra tus primeras conversaciones reales en inglés. ¡Sin teoría pesada, 100% práctico!"}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setIsInscriptionOpen(true)}
                className="bg-white text-green-600 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              >
                {isEn ? "Enroll in Level 1" : "Inscribirme al Nivel 1"}
                <Calendar className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* VALUE PROPS */}
      <div className="max-w-6xl mx-auto px-6 mt-8 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {valueProps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-xl text-center hover:shadow-2xl transition-all"
            >
              <div
                className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}
              >
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <p className="font-bold text-gray-800">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* LOGROS */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">
          {isEn
            ? "What you will achieve upon completing the level"
            : "Lo que lograrás al finalizar el nivel"}
        </h2>
        <p className="text-center text-gray-500 mb-10">
          {isEn
            ? "Guaranteed results with the 8-unit curriculum"
            : "Resultados garantizados con el programa de 8 unidades"}
        </p>

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

      {/* CONTENIDO - 8 UNIDADES */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
            <BookMarked className="w-3.5 h-3.5" />
            {isEn ? "Official Curriculum Plan" : "Plan Curricular Oficial"}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {isEn ? "Course Content" : "Contenido del curso"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            <span className="font-semibold text-gray-800">
              {isEn ? "8 structured units" : "8 unidades estructuradas"}
            </span>{" "}
            {isEn
              ? "(18 hrs each • 144 total hrs) based on "
              : "(18 hrs cada una • 144 hrs totales) basadas en "}
            <span className="font-semibold text-cyan-700">Interchange Intro</span>.
          </p>
          <p className="text-sm text-cyan-600 font-medium mt-1 flex items-center justify-center gap-1">
            <Sparkles className="w-4 h-4 text-cyan-500" />
            {isEn
              ? "Tap any card to view its full syllabus and learning outcomes"
              : "Toca cualquier tarjeta para ver su temario completo y objetivos"}
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {units.map((unit, i) => (
            <motion.div
              key={unit.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setSelectedUnitId(unit.id)}
              className="group relative bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-cyan-400 cursor-pointer flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div>
                {/* Header card: Unit badge & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-cyan-50 text-cyan-700 border border-cyan-200">
                    {isEn ? `Unit ${unit.id}` : `Unidad ${unit.id}`}
                  </span>
                  <span className="text-3xl transform group-hover:scale-110 transition-transform">
                    {unit.icon}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-gray-900 text-lg group-hover:text-cyan-600 transition-colors mb-2 leading-snug">
                  {unit.unitTitle}
                </h3>

                {/* Subtitle / badge */}
                <p className="text-xs text-gray-500 font-medium mb-3">
                  {unit.badge}
                </p>
              </div>

              <div>
                {/* Milestone Pill */}
                {unit.isProgressCheck && (
                  <div className="mb-3">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md">
                      <Award className="w-3 h-3 text-amber-600" /> Progress Check
                    </span>
                  </div>
                )}

                {/* Card footer CTA */}
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-cyan-600 group-hover:text-cyan-700">
                  <span>{isEn ? "View syllabus" : "Ver temario"}</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL DETALLES DE LA UNIDAD */}
      <AnimatePresence>
        {selectedUnit && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedUnitId(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.35, bounce: 0.2 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-cyan-100 overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 text-white p-6 sm:p-7 relative flex-shrink-0">
                <button
                  type="button"
                  onClick={() => setSelectedUnitId(null)}
                  className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label={isEn ? "Close modal" : "Cerrar modal"}
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {isEn ? `Unit ${selectedUnit.id} of 8` : `Unidad ${selectedUnit.id} de 8`}
                  </span>
                  <span className="bg-cyan-900/40 text-cyan-100 text-xs font-medium px-3 py-1 rounded-full">
                    {selectedUnit.hours}
                  </span>
                  <span className="bg-cyan-900/40 text-cyan-100 text-xs font-medium px-3 py-1 rounded-full">
                    {selectedUnit.pages}
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-4xl">{selectedUnit.icon}</span>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                      {selectedUnit.unitTitle}
                    </h2>
                    <p className="text-cyan-100 text-sm mt-1">
                      {selectedUnit.badge} • {isEn ? "Reference: Interchange Intro" : "Referencia: Interchange Intro"}
                    </p>
                  </div>
                </div>

                {selectedUnit.milestone && (
                  <div className="mt-4 pt-3 border-t border-white/15 flex items-center gap-2 text-xs text-cyan-100">
                    <Award className="w-4 h-4 text-yellow-300 flex-shrink-0" />
                    <span>
                      <strong className="text-white">
                        {isEn ? "Program milestone: " : "Hito del programa: "}
                      </strong>
                      {selectedUnit.milestone}
                    </span>
                  </div>
                )}
              </div>

              {/* Modal Body - Scrollable */}
              <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-gray-700 flex-1">
                {/* Communication Focus */}
                <div className="bg-cyan-50/70 border border-cyan-200/80 rounded-2xl p-5">
                  <div className="flex items-center gap-2 font-bold text-cyan-900 text-base mb-2">
                    <MessageSquare className="w-5 h-5 text-cyan-600" />
                    <span>{isEn ? "Communication focus" : "Communication focus (Objetivo comunicativo)"}</span>
                  </div>
                  <p className="text-gray-800 text-sm sm:text-base leading-relaxed pl-7">
                    {selectedUnit.communication}
                  </p>
                </div>

                {/* Topics & Grammar 2-column grid */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="bg-gray-50 border border-gray-200/70 rounded-2xl p-5">
                    <div className="flex items-center gap-2 font-bold text-gray-900 text-sm sm:text-base mb-2">
                      <BookOpen className="w-4 h-4 text-blue-600" />
                      <span>{isEn ? "Topics and vocabulary" : "Topics and vocabulary (Temas y vocabulario)"}</span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {selectedUnit.topics}
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200/70 rounded-2xl p-5">
                    <div className="flex items-center gap-2 font-bold text-gray-900 text-sm sm:text-base mb-2">
                      <Zap className="w-4 h-4 text-amber-500" />
                      <span>{isEn ? "Grammar focus" : "Grammar focus (Enfoque gramatical)"}</span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {selectedUnit.grammar}
                    </p>
                  </div>
                </div>

                {/* Language skills & Interchange */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="bg-gray-50 border border-gray-200/70 rounded-2xl p-5">
                    <div className="flex items-center gap-2 font-bold text-gray-900 text-sm sm:text-base mb-2">
                      <Headphones className="w-4 h-4 text-purple-600" />
                      <span>{isEn ? "Language skills & textbook activity" : "Language skills & textbook activity (Habilidades y práctica)"}</span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {selectedUnit.skills}
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200/70 rounded-2xl p-5">
                    <div className="flex items-center gap-2 font-bold text-gray-900 text-sm sm:text-base mb-2">
                      <Sparkles className="w-4 h-4 text-emerald-600" />
                      <span>{isEn ? "Interchange activity" : "Interchange activity (Dinámica interactiva)"}</span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed font-medium text-emerald-950">
                      {selectedUnit.interchange}
                    </p>
                  </div>
                </div>

                {/* Outcomes / By the end of this unit */}
                <div className="bg-gradient-to-br from-emerald-50/60 to-cyan-50/60 border border-emerald-200/80 rounded-2xl p-5">
                  <h4 className="font-bold text-emerald-950 text-base mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    {isEn
                      ? "By the end of this unit, students will work toward being able to:"
                      : "Al finalizar esta unidad, los estudiantes trabajarán para:"}
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedUnit.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-gray-800">
                        <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                          ✓
                        </span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Footer with pagination & CTA */}
              <div className="p-4 sm:p-5 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0">
                <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handlePrevUnit}
                    disabled={selectedUnit.id === 1}
                    className="text-xs sm:text-sm text-gray-700 disabled:opacity-40"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    {isEn ? `Unit ${selectedUnit.id > 1 ? selectedUnit.id - 1 : 1}` : `Unidad ${selectedUnit.id > 1 ? selectedUnit.id - 1 : 1}`}
                  </Button>
                  <span className="text-xs text-gray-500 font-medium px-2">
                    {selectedUnit.id} / 8
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleNextUnit}
                    disabled={selectedUnit.id === 8}
                    className="text-xs sm:text-sm text-gray-700 disabled:opacity-40"
                  >
                    {isEn ? `Unit ${selectedUnit.id < 8 ? selectedUnit.id + 1 : 8}` : `Unidad ${selectedUnit.id < 8 ? selectedUnit.id + 1 : 8}`}
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Button
                    onClick={() => {
                      setSelectedUnitId(null);
                      setIsInscriptionOpen(true);
                    }}
                    className="w-full sm:w-auto bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold px-6 py-2.5 rounded-xl shadow-md text-sm"
                  >
                    {isEn ? "Enroll in this level" : "Inscribirme a este nivel"}
                    <Calendar className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ESTADÍSTICAS */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          {isEn ? "Course Experience" : "Experiencia del curso"}
        </h2>

        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              icon: BookOpen,
              value: "8",
              label: isEn ? "structured units" : "unidades estructuradas",
              color: "cyan",
            },
            {
              icon: Clock,
              value: "144",
              label: isEn ? "instructional hours" : "horas de formación total",
              color: "blue",
            },
            {
              icon: Users,
              value: "100%",
              label: isEn ? "conversational focus" : "enfoque conversacional",
              color: "green",
            },
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {isEn ? "Starts May 3rd!" : "¡Empieza el 3 de mayo!"}
          </h2>
          <p className="text-xl text-white/90 mb-2">
            {isEn
              ? "Limited spots - Join our WhatsApp group"
              : "Cupos limitados - Únete al grupo de WhatsApp"}
          </p>
          <p className="text-white/70 mb-8">
            {isEn
              ? "We guarantee your learning or your money back"
              : "Garantizamos tu aprendizaje o te devolvemos el dinero"}
          </p>

          <Button
            onClick={() => setIsInscriptionOpen(true)}
            className="bg-white !text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
          >
            <Sparkles className="w-5 h-5 mr-2 text-green-600" />
            {isEn ? "Enroll now" : "Inscribirme ahora"}
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
            {isEn
              ? '"In just 2 weeks I was already speaking basic English. The methodology is super dynamic and practical. Highly recommended!"'
              : '"En solo 2 semanas ya hablaba inglés básico. La metodología es súper dinámica y práctica. ¡Totalmente recomendado!"'}
          </p>

          <div className="flex items-center justify-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
              M
            </div>
            <div className="text-left">
              <p className="font-bold text-gray-900">María Contreras</p>
              <p className="text-gray-500 text-sm">
                {isEn ? "Level 1 Student" : "Estudiante del Nivel 1"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
