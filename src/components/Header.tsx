import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Language } from "../i18n/translations";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    setIsLangMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-cyan-400 via-cyan-300 to-teal-400 shadow-md transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">

          {/* LOGO */}
          <Link to="/">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center">
                <BookOpen className="text-white w-6 h-6" />
              </div>

              <div className="flex flex-col">
              <span className="font-semibold text-white">{t.draSiannah}</span>
              <span className="text-xs text-white/80">{t.especialistaEnsenanza}</span>
              </div>
            </motion.div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-8 items-center">
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={item.href}
                  className={`font-medium transition relative ${
                    isActive(item.href)
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

            {/* LANGUAGE SELECTOR */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/20 hover:bg-white/30 transition"
              >
                <span className="text-2xl">{language === 'es' ? '🇪🇸' : '🇺🇸'}</span>
              </button>
              
              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg overflow-hidden z-50"
                  >
                    <button
                      onClick={() => changeLanguage('es')}
                      className={`flex items-center gap-2 px-4 py-3 w-full hover:bg-gray-100 transition ${language === 'es' ? 'bg-gray-100' : ''}`}
                    >
                      <span className="text-xl">🇪🇸</span>
                      <span className="text-gray-900">Español</span>
                    </button>
                    <button
                      onClick={() => changeLanguage('en')}
                      className={`flex items-center gap-2 px-4 py-3 w-full hover:bg-gray-100 transition ${language === 'en' ? 'bg-gray-100' : ''}`}
                    >
                      <span className="text-xl">🇺🇸</span>
                      <span className="text-gray-900">English</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gradient-to-r from-cyan-400 to-teal-400 border-t"
          >
            <nav className="flex flex-col p-4 gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium ${
                    isActive(item.href)
                      ? "text-white"
                      : "text-white/80"
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