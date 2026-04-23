import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">

      {/* Header */}
      <Header />

      {/* Content */}
      <AnimatePresence mode="wait">
        <main key={location.pathname} className="flex-1 pt-20">
          <Outlet />
        </main>
      </AnimatePresence>

      {/* Footer */}
      <Footer />

    </div>
  );
}