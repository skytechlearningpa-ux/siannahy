import { Calendar, Clock, MapPin, Video } from "lucide-react";
import { motion } from "framer-motion";

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

export function CourseCalendar() {
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
    <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-cyan-100 rounded-xl">
          <Calendar className="w-6 h-6 text-cyan-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">Fechas de Inicio</h3>
          <p className="text-gray-500 text-sm">Próximas inscripciones abiertas</p>
        </div>
      </div>

      <div className="space-y-4">
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
              className="relative bg-gradient-to-br from-gray-50 to-white p-5 rounded-xl border border-gray-200 hover:border-cyan-300 hover:shadow-md transition-all"
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

      <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="text-xs text-gray-500 text-center">
          ¿No puedes en estas fechas? Contáctanos para crear un grupo especial
        </p>
      </div>
    </div>
  );
}