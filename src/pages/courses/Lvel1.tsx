import { Clock, MessageCircle, Lock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Level = {
  id: number;
  number: number;
  title: string;
  description: string;
  status: "available" | "coming-soon";
  badge?: string;
  badgeColor?: string;
  sessions?: number;
  liveHours?: number;
  practiceHours?: number;
  conversation?: number;
  structure?: number;
  highlights?: string[];
};

type Props = {
  level: Level;
  isFirst?: boolean;
};

export function LevelCard({ level, isFirst }: Props) {
  const isAvailable = level.status === "available";

  return (
    <div
      className={`relative bg-white rounded-2xl p-6 shadow-lg border transition ${
        isAvailable
          ? "border-blue-200 hover:shadow-xl"
          : "opacity-60 border-gray-200"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900">
            Nivel {level.number}
          </h3>
          <p className="text-gray-600">{level.title}</p>
        </div>

        {level.badge && (
          <Badge className="bg-green-600 text-white">
            {level.badge}
          </Badge>
        )}
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-4">{level.description}</p>

      {/* Info */}
      {isAvailable && (
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {level.sessions} sesiones
          </span>

          <span className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4" />
            {level.conversation}% conversación
          </span>
        </div>
      )}

      {/* Highlights */}
      {level.highlights && (
        <ul className="space-y-2 mb-4">
          {level.highlights.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-sm text-gray-700"
            >
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              {item}
            </li>
          ))}
        </ul>
      )}

      {/* CTA */}
      <div className="mt-4">
        {isAvailable ? (
          <Button className="w-full bg-blue-600 text-white rounded-xl">
            {isFirst ? "Comenzar ahora" : "Inscribirme"}
          </Button>
        ) : (
          <Button disabled className="w-full rounded-xl flex items-center gap-2 justify-center">
            <Lock className="w-4 h-4" />
            Próximamente
          </Button>
        )}
      </div>
    </div>
  );
}