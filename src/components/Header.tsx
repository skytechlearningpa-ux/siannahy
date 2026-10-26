import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

// Vector SVG Flags for crisp rendering on all devices & OS (avoids OS emoji font rendering issues)
export function SpainFlag({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 480" className={`${className} inline-block rounded-[3px] shadow-xs overflow-hidden flex-shrink-0`}>
      <path fill="#c60b1e" d="M0 0h640v480H0z" />
      <path fill="#ffc400" d="M0 120h640v240H0z" />
      <g fill="#c60b1e">
        <circle cx="160" cy="240" r="26" opacity="0.85" />
      </g>
    </svg>
  );
}

export function UsaFlag({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 480" className={`${className} inline-block rounded-[3px] shadow-xs overflow-hidden flex-shrink-0`}>
      <g fill="#bd3d44">
        <path d="M0 0h640v480H0z" />
      </g>
      <path stroke="#fff" strokeWidth="37" d="M0 55h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640" />
      <path fill="#192f5d" d="M0 0h260v258H0z" />
      <g fill="#fff">
        <circle cx="45" cy="45" r="9" />
        <circle cx="130" cy="45" r="9" />
        <circle cx="215" cy="45" r="9" />
        <circle cx="87" cy="90" r="9" />
        <circle cx="172" cy="90" r="9" />
        <circle cx="45" cy="135" r="9" />
        <circle cx="130" cy="135" r="9" />
        <circle cx="215" cy="135" r="9" />
        <circle cx="87" cy="180" r="9" />
        <circle cx="172" cy="180" r="9" />
        <circle cx="45" cy="225" r="9" />
        <circle cx="130" cy="225" r="9" />
        <circle cx="215" cy="225" r="9" />
      </g>
    </svg>
  );
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: t.inicio, href: "/" },
    { name: t.sobreMi, href: "/about" },
    { name: t.traduccion, href: "/translator" },
    { name: t.fundacion, href: "/fundacion" },
    { name: t.cursos, href: "/cursos" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-cyan-600 via-teal-600 to-cyan-700 shadow-lg border-b border-white/10 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">

          {/* LOGO */}
          <Link to="/">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-12 h-12 bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-md">
                <BookOpen className="text-white w-6 h-6" />
              </div>

              <div className="flex flex-col">
                <span className="font-bold text-white text-lg tracking-tight group-hover:text-cyan-100 transition-colors">
                  {t.draSiannah}
                </span>
                <span className="text-xs text-white/80 font-medium">
                  {t.especialistaEnsenanza}
                </span>
              </div>
            </motion.div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-7 items-center">
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={item.href}
                  className={`text-sm font-semibold transition-all relative py-1.5 px-3 rounded-full ${
                    isActive(item.href)
                      ? "text-white bg-white/20 shadow-xs"
                      : "text-white/85 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

            {/* MODERN SEGMENTED LANGUAGE TOGGLE */}
            <div className="flex items-center bg-cyan-950/35 backdrop-blur-md p-1 rounded-full border border-white/25 shadow-inner">
              <button
                type="button"
                onClick={() => setLanguage("es")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                  language === "es"
                    ? "bg-white text-cyan-900 shadow-md transform scale-102"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
                title="Cambiar a Español"
                aria-label="Español"
              >
                <SpainFlag className="w-4 h-3" />
                <span>ES</span>
              </button>

              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                  language === "en"
                    ? "bg-white text-cyan-900 shadow-md transform scale-102"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
                title="Switch to English"
                aria-label="English"
              >
                <UsaFlag className="w-4 h-3" />
                <span>EN</span>
              </button>
            </div>
          </nav>

          {/* MOBILE CONTROLS (Flag toggle + Hamburger button) */}
          <div className="flex md:hidden items-center gap-2">
            <div className="flex items-center bg-cyan-950/35 backdrop-blur-md p-0.5 rounded-full border border-white/20">
              <button
                type="button"
                onClick={() => setLanguage("es")}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold transition-all ${
                  language === "es" ? "bg-white text-cyan-900 shadow-xs" : "text-white/80"
                }`}
                aria-label="Español"
              >
                <SpainFlag className="w-3.5 h-2.5" />
                <span>ES</span>
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold transition-all ${
                  language === "en" ? "bg-white text-cyan-900 shadow-xs" : "text-white/80"
                }`}
                aria-label="English"
              >
                <UsaFlag className="w-3.5 h-2.5" />
                <span>EN</span>
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white hover:bg-white/15 rounded-xl transition"
              aria-label="Abrir menú de navegación"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gradient-to-b from-cyan-700 to-teal-800 border-t border-white/15 shadow-2xl"
          >
            <nav className="flex flex-col p-5 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-semibold py-2.5 px-4 rounded-xl text-sm transition ${
                    isActive(item.href)
                      ? "bg-white/20 text-white shadow-xs"
                      : "text-white/85 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}