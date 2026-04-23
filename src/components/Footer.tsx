import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  BookOpen,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Inicio", href: "/" },
    { name: "Sobre Mí", href: "/about" },
    { name: "Traducción", href: "/translator" },
    { name: "Fundación", href: "/fundacion" },
    { name: "Cursos", href: "/cursos" },
  ];

  const socials = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Twitter, href: "#" },
  ];

  return (
    <footer className="bg-gradient-to-b from-cyan-400 via-cyan-300 to-teal-400 text-white pt-3 pb-1">
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* BRAND */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center">
                <BookOpen className="text-white w-6 h-6" />
              </div>

              <div>
                <p className="font-bold text-lg">
                  Dra. Siannah Yánguez
                </p>
                <p className="text-green-300 text-sm">
                  Especialista en Inglés
                </p>
              </div>
            </div>

            <p className="text-white-400 mb-6 max-w-md">
              Transformando vidas a través de la educación en inglés con excelencia y compromiso.
            </p>

            <div className="flex gap-4">
              {socials.map((item, i) => {
                const Icon = item.icon;

                return (
                  <a
                    key={i}
                    href={item.href}
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>

            <ul className="space-y-4 text-white-400">
              <li className="flex gap-3">
                <Mail size={18} className="text-white-400" />
                siannahyanguezb@gmail.com
              </li>

              <li className="flex gap-3">
                <Phone size={18} className="text-white-400" />
                +507 6315-5539
              </li>

              <li className="flex gap-3">
                <MapPin size={18} className="text-white-400" />
                Chiriquí, Panamá.
              </li>
            </ul>
          </div>

        </div>

        </div>
    </footer>
  );
}