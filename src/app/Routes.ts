import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Hero } from "../pages/Hero";
import { About } from "../pages/About";
import { Translator } from "../pages/Translator";
import { Fundacion } from "../pages/Foundation";
import { CoursesView as Cursos } from "../pages/CoursesView";
import { EnglishCourse } from "../pages/courses/InglishCourse";
import { Level1InfoView } from "../pages/courses/InfoLevel1";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Hero },
      { path: "about", Component: About },
      { path: "translator", Component: Translator },
      { path: "fundacion", Component: Fundacion },
      { path: "cursos", Component: Cursos },
      { path: "curso/ingles", Component: EnglishCourse },
      { path: "curso/ingles/nivel-1", Component: Level1InfoView },
    ],
  },
]);
