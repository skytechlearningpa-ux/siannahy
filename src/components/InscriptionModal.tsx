import { useState } from "react";
import { X, Send, User, CreditCard, Mail, CheckCircle, Loader2, Calendar, Clock, MapPin, Video, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CourseSchedule {
  course: string;
  level: string;
  startDate: string;
  time: string;
  mode: "virtual" | "presencial" | "hibrido";
  spots: number;
}

const schedules: CourseSchedule[] = [
  {
    course: "Inglés",
    level: "Nivel 1 - Básico (A1)",
    startDate: "3 de Mayo, 2026",
    time: "Sábados 9:00 AM",
    mode: "virtual",
    spots: 12,
  },
];

type ModalType = "inscription" | "calendar";

interface InscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseName?: string;
  type?: ModalType;
}

export function InscriptionModal({ isOpen, onClose, courseName, type = "inscription" }: InscriptionModalProps) {
  const [form, setForm] = useState({
    nombre: "",
    cedula: "",
    email: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!form.nombre.trim()) {
      newErrors.nombre = "El nombre es requerido";
    }

    if (!form.cedula.trim()) {
      newErrors.cedula = "La cédula es requerida";
    } else if (!/^\d{7,9}$/.test(form.cedula)) {
      newErrors.cedula = "Ingresa tu número de cédula (7-9 dígitos)";
    }

    if (!form.email.trim()) {
      newErrors.email = "El correo es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Correo inválido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    const phoneNumber = "50763155569";
    const message = encodeURIComponent(
      `Estoy interesado en inscribirme en el curso ${courseName || "Inglés"}\n\n` +

      `Curso: ${courseName || "Inglés"}\n\n` +
      `Nombre: ${form.nombre}\n\n` +
      `Cédula: ${form.cedula}\n\n` +
      `Email: ${form.email}\n\n`
    );

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    await new Promise((resolve) => setTimeout(resolve, 500));

    window.open(whatsappUrl, "_blank");

    setIsSubmitting(false);
    onClose();
    setForm({ nombre: "", cedula: "", email: "" });
  };

  const handleCedulaChange = (value: string) => {
    let formatted = value.replace(/\D/g, "");
    if (formatted.length > 9) formatted = formatted.slice(0, 9);
    setForm((prev) => ({ ...prev, cedula: formatted }));
  };

  const getModeConfig = (mode: CourseSchedule["mode"]) => {
    switch (mode) {
      case "virtual":
        return { icon: Video, label: "Virtual", color: "text-blue-600 bg-blue-100" };
      case "presencial":
        return { icon: MapPin, label: "Presencial", color: "text-green-600 bg-green-100" };
      case "hibrido":
        return { icon: MapPin, label: "Híbrido", color: "text-purple-600 bg-purple-100" };
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50"
          >
            {type === "calendar" ? (
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 p-2 rounded-xl">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Calendario</h3>
                        <p className="text-white/80 text-sm">Fechas de inicio disponibles</p>
                      </div>
                    </div>
                    <button
                      onClick={onClose}
                      className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
                    >
                      <X className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>

                <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
                  {schedules.map((schedule, i) => {
                    const modeConfig = getModeConfig(schedule.mode);
                    const ModeIcon = modeConfig.icon;
                    const isLimited = schedule.spots <= 15;

                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-gradient-to-br from-gray-50 to-white p-5 rounded-xl border border-gray-200"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <span className="text-xs font-medium text-cyan-600 bg-cyan-50 px-2 py-1 rounded-full">
                              {schedule.course}
                            </span>
                            <h4 className="font-bold text-gray-900 mt-1">{schedule.level}</h4>
                          </div>
                          <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${modeConfig.color}`}>
                            <ModeIcon className="w-3 h-3" />
                            {modeConfig.label}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Calendar className="w-4 h-4 text-green-500" />
                            <span className="font-medium">{schedule.startDate}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Clock className="w-4 h-4 text-blue-500" />
                            <span>{schedule.time}</span>
                          </div>
                        </div>

                        {isLimited && (
                          <div className="mt-3 flex items-center gap-2">
                            <div className="h-2 flex-1 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-orange-500 to-red-500"
                                style={{ width: `${(schedule.spots / 20) * 100}%` }}
                              />
                            </div>
                            <span className="text-xs font-medium text-orange-600">
                              {schedule.spots} cupos
                            </span>
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                <div className="p-6 pt-0">
                  <a
                    href="https://wa.me/50763155569?text=Hola!%20Tengo%20una%20consulta%20sobre%20las%20fechas%20de%20los%20cursos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Consultar otras fechas
                  </a>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 p-2 rounded-xl">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Inscripción</h3>
                        <p className="text-white/80 text-sm">{courseName}</p>
                      </div>
                    </div>
                    <button
                      onClick={onClose}
                      className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
                    >
                      <X className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre completo
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={form.nombre}
                        onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                        placeholder="Escribe tu nombre"
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition ${errors.nombre ? "border-red-500" : "border-gray-200"
                          }`}
                      />
                    </div>
                    {errors.nombre && (
                      <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Cédula
                    </label>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={form.cedula}
                        onChange={(e) => handleCedulaChange(e.target.value)}
                        placeholder="0-0000-0000"
                        maxLength={11}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition ${errors.cedula ? "border-red-500" : "border-gray-200"
                          }`}
                      />
                    </div>
                    {errors.cedula && (
                      <p className="text-red-500 text-sm mt-1">{errors.cedula}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Correo electrónico
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="tu@email.com"
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition ${errors.email ? "border-red-500" : "border-gray-200"
                          }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Abriendo WhatsApp...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Continuar en WhatsApp
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-center text-sm text-gray-500">
                    Serás redirigido a WhatsApp para completar tu inscripción
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}