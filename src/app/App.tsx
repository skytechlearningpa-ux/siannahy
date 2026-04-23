import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { AnimatePresence } from "framer-motion";

export default function App() {
  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  );
}