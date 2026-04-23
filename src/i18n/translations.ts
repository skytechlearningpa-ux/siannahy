export type Language = 'es' | 'en';

export interface Translations {
  // Nav
  inicio: string;
  sobreMi: string;
  traduccion: string;
  fundacion: string;
  cursos: string;
  especialistaEnsenanza: string;
  draSiannah: string;
  // About
  sobreMiTitle: string;
  pasionEnsenanza: string;
  aboutDescription1: string;
  aboutDescription2: string;
  phD: string;
  traductoraCertificada: string;
  educadoraExcelencia: string;
  anosExperiencia: string;
  rolesDesempenados: string;
  areasEspecializacion: string;
  dedicacion: string;
  experienciaLaboral: string;
  experienciaDesc: string;
  formacionAcademica: string;
  formacionDesc: string;
  anos: string;
  areas: string;
  docividad: string;
  administracion: string;
  servicios: string;
  traduccionArea: string;
  // Courses
  yansyAcademy: string;
  cursosDiseno: string;
  estudiantesActivos: string;
  satisfaccion: string;
  ratingPromedio: string;
  cursosDisponibles: string;
  seleccionaCurso: string;
  cursoIngles: string;
  inglesDesc: string;
  niveles: string;
  nivelesRango: string;
  verNiveles: string;
  masPopular: string;
  proximamente: string;
  masCursos: string;
  // Translator
  serviciosTraduccion: string;
  traduccionDesc: string;
  traduccionDocs: string;
  traduccionDocsDesc: string;
  interpretacion: string;
  interpretacionDesc: string;
  revisionCorreccion: string;
  revisionDesc: string;
  servicioExpress: string;
  expressDesc: string;
  docsLegales: string;
  articulosAcademicos: string;
  manualesTecnicos: string;
  eventosCorp: string;
  conferencias: string;
  reuniones: string;
  proofreading: string;
  edicionEstilo: string;
  correccionGramatical: string;
  urgente: string;
  altaPrioridad: string;
  entregaRapida: string;
  carnetTraductora: string;
  carnetDesc: string;
  nombre: string;
  especialidad: string;
  serviciosDoc: string;
  rolActual: string;
  necesitasTraduccion: string;
  chatWhatsApp: string;
  // Foundation
  fundamir: string;
  fundamirDesc: string;
  transformandoVidas: string;
  mision: string;
  becasEducativas: string;
  becasDesc: string;
  talleresComunitarios: string;
  talleresDesc: string;
  capacitacionDocente: string;
  capacitacionDesc: string;
  becasOtorgadas: string;
  comunidades: string;
  docentes: string;
  // Hero
  heroSaludo: string;
  heroTitulo: string;
  heroDesc: string;
  exploraServicios: string;
}

export const translations: Record<Language, Translations> = {
  es: {
    inicio: "Inicio",
    sobreMi: "Sobre Mí",
    traduccion: "Traducción",
    fundacion: "Fundación",
    cursos: "Cursos",
    especialistaEnsenanza: "Especialista en enseñanza",
    draSiannah: "Dra. Siannah Yánguez",

    sobreMiTitle: "Sobre Mí",
    pasionEnsenanza: "Pasión por la Enseñanza del Inglés",
    aboutDescription1: "Con más de 20 años de experiencia en la enseñanza del idioma inglés, me he dedicado a transformar vidas a través de la educación.",
    aboutDescription2: "Como Doctora en Lengua Inglesa, mi misión es proporcionar servicios de traducción de alta calidad y programas educativos que empoderan a estudiantes a alcanzar sus metas.",
    phD: "Ph.D. en Lengua Inglesa",
    traductoraCertificada: "Traductora Certificada",
    educadoraExcelencia: "Educadora de Excelencia",
    anosExperiencia: "Años de experiencia",
    rolesDesempenados: "Roles desempeñados",
    areasEspecializacion: "Áreas de especialización",
    dedicacion: "Dedicación",
    experienciaLaboral: "Experiencia Laboral",
    experienciaDesc: "Trayectoria profesional en la enseñanza del inglés, la formación de docentes, la investigación educativa y la gestión académica.",
    formacionAcademica: "Formación Académica",
    formacionDesc: "Trayectoria académica que evidencia una sólida formación en instituciones nacionales e internacionales de prestigio.",
    anos: "Años",
    areas: "Áreas",
    docividad: "Docencia",
    administracion: "Administración",
    servicios: "Servicios",
    traduccionArea: "Traducción",

    yansyAcademy: "Yansy Academy",
    cursosDiseno: "Cursos diseñados para llevarte del nivel básico al avanzado con metodología conversacional",
    estudiantesActivos: "Estudiantes activos",
    satisfaccion: "Satisfacción",
    ratingPromedio: "Rating promedio",
    cursosDisponibles: "Cursos disponibles",
    seleccionaCurso: "Selecciona un curso para comenzar tu aprendizaje",
    cursoIngles: "Curso de Inglés",
    inglesDesc: "Aprende inglés desde cero hasta conversacional con práctica real",
    niveles: "niveles",
    nivelesRango: "A1 - C1",
    verNiveles: "Ver niveles",
    masPopular: "Más popular",
    proximamente: "Próximamente",
    masCursos: "Más cursos en camino",

    serviciosTraduccion: "Servicios de Traducción",
    traduccionDesc: "Traducción profesional certificada con precisión y calidad lingüística.",
    traduccionDocs: "Traducción de Documentos",
    traduccionDocsDesc: "Traducción precisa de documentos académicos, legales y técnicos.",
    interpretacion: "Interpretación",
    interpretacionDesc: "Interpretación simultánea y consecutivos para eventos y reuniones.",
    revisionCorreccion: "Revisión y Corrección",
    revisionDesc: "Corrección profesional para garantizar calidad lingüística.",
    servicioExpress: "Servicio Express",
    expressDesc: "Traducciones urgentes con entrega rápida y calidad garantizada.",
    docsLegales: "Documentos legales",
    articulosAcademicos: "Artículos académicos",
    manualesTecnicos: "Manuales técnicos",
    eventosCorp: "Eventos corporativos",
    conferencias: "Conferencias",
    reuniones: "Reuniones",
    proofreading: "Proofreading",
    edicionEstilo: "Edición de estilo",
    correccionGramatical: "Corrección gramatical",
    urgente: "24/48h",
    altaPrioridad: "Alta prioridad",
    entregaRapida: "Entrega rápida",
    carnetTraductora: "Carnet de Traductora",
    carnetDesc: "Credencial oficial que certifica a la Dra. Siannah como traductora pública, especializada en la traducción e interpretación de documentos del inglés al español y del español al inglés.",
    nombre: "Nombre:",
    especialidad: "Especialidad:",
    serviciosDoc: "Servicios:",
    rolActual: "Rol actual:",
    necesitasTraduccion: "¿Necesitas una traducción?",
    chatWhatsApp: "Chatear por WhatsApp",

    fundamir: "FUNDAMIR",
    fundamirDesc: "Impulsamos el acceso a la educación en comunidades vulnerables, brindando oportunidades reales a través del aprendizaje del inglés, becas y programas formativos que transforman vidas.",
    transformandoVidas: "Transformando vidas con educación",
    mision: "Nuestra misión es democratizar el acceso al inglés y crear oportunidades reales.",
    becasEducativas: "Becas Educativas",
    becasDesc: "Programas de becas para estudiantes que desean aprender.",
    talleresComunitarios: "Talleres Comunitarios",
    talleresDesc: "Talleres gratuitos en comunidades para promover la educación.",
    capacitacionDocente: "Capacitación Docente",
    capacitacionDesc: "Formación continua para profesores de inglés en escuelas.",
    becasOtorgadas: "Becas otorgadas",
    comunidades: "Comunidades",
    docentes: "Docentes",

    heroSaludo: "Bienvenido/a",
    heroTitulo: "Dra. Siannah Yánquez",
    heroDesc: "Transformando vidas a través de la educación en inglés con más de 20 años de experiencia.",
    exploraServicios: "Explora sobre mí",
  },
  en: {
    inicio: "Home",
    sobreMi: "About Me",
    traduccion: "Translation",
    fundacion: "Foundation",
    cursos: "Courses",
    especialistaEnsenanza: "Teaching Specialist",
    draSiannah: "Dr. Siannah Yánguez",

    sobreMiTitle: "About Me",
    pasionEnsenanza: "Passion for Teaching English",
    aboutDescription1: "With over 20 years of experience in teaching English, I have dedicated myself to transforming lives through education.",
    aboutDescription2: "As a Doctorate in English Language, my mission is to provide high-quality translation services and educational programs that empower students to achieve their goals.",
    phD: "Ph.D. in English Language",
    traductoraCertificada: "Certified Translator",
    educadoraExcelencia: "Excellence Educator",
    anosExperiencia: "Years of experience",
    rolesDesempenados: "Roles performed",
    areasEspecializacion: "Areas of specialization",
    dedicacion: "Dedication",
    experienciaLaboral: "Work Experience",
    experienciaDesc: "Professional trajectory in English teaching, teacher training, educational research and academic management.",
    formacionAcademica: "Academic Background",
    formacionDesc: "Academic trajectory showing solid training in prestigious national and international institutions.",
    anos: "Years",
    areas: "Areas",
    docividad: "Teaching",
    administracion: "Administration",
    servicios: "Services",
    traduccionArea: "Translation",

    yansyAcademy: "Yansy Academy",
    cursosDiseno: "Courses designed to take you from basic to advanced level with conversational methodology",
    estudiantesActivos: "Active students",
    satisfaccion: "Satisfaction",
    ratingPromedio: "Average rating",
    cursosDisponibles: "Available courses",
    seleccionaCurso: "Select a course to start your learning",
    cursoIngles: "English Course",
    inglesDesc: "Learn English from scratch to conversational with real practice",
    niveles: "levels",
    nivelesRango: "A1 - C1",
    verNiveles: "View levels",
    masPopular: "Most popular",
    proximamente: "Coming soon",
    masCursos: "More courses coming",

    serviciosTraduccion: "Translation Services",
    traduccionDesc: "Certified professional translation with precision and linguistic quality.",
    traduccionDocs: "Document Translation",
    traduccionDocsDesc: "Accurate translation of academic, legal and technical documents.",
    interpretacion: "Interpretation",
    interpretacionDesc: "Simultaneous and consecutive interpretation for events and meetings.",
    revisionCorreccion: "Review and Editing",
    revisionDesc: "Professional correction to ensure linguistic quality.",
    servicioExpress: "Express Service",
    expressDesc: "Urgent translations with fast delivery and guaranteed quality.",
    docsLegales: "Legal documents",
    articulosAcademicos: "Academic articles",
    manualesTecnicos: "Technical manuals",
    eventosCorp: "Corporate events",
    conferencias: "Conferences",
    reuniones: "Meetings",
    proofreading: "Proofreading",
    edicionEstilo: "Style editing",
    correccionGramatical: "Grammar correction",
    urgente: "24/48h",
    altaPrioridad: "High priority",
    entregaRapida: "Fast delivery",
    carnetTraductora: "Translator ID Card",
    carnetDesc: "Official credential that certifies Dr. Siannah as a public translator, specialized in the translation and interpretation of documents from English to Spanish and Spanish to English.",
    nombre: "Name:",
    especialidad: "Specialty:",
    serviciosDoc: "Services:",
    rolActual: "Current role:",
    necesitasTraduccion: "Need a translation?",
    chatWhatsApp: "Chat on WhatsApp",

    fundamir: "FUNDAMIR",
    fundamirDesc: "We promote access to education in vulnerable communities, providing real opportunities through English learning, scholarships and training programs that transform lives.",
    transformandoVidas: "Transforming lives through education",
    mision: "Our mission is to democratize access to English and create real opportunities.",
    becasEducativas: "Educational Scholarships",
    becasDesc: "Scholarship programs for students who want to learn.",
    talleresComunitarios: "Community Workshops",
    talleresDesc: "Free workshops in communities to promote education.",
    capacitacionDocente: "Teacher Training",
    capacitacionDesc: "Continuing education for English teachers in schools.",
    becasOtorgadas: "Scholarships granted",
    comunidades: "Communities",
    docentes: "Teachers",

    heroSaludo: "Welcome",
    heroTitulo: "Dr. Siannah Yánquez",
    heroDesc: "Transforming lives through English education with over 20 years of experience.",
    exploraServicios: "Explore about me",
  },
};
