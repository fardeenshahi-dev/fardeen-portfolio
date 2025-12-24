import React, { createContext, useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useState("dark");
  const [transitioning, setTransitioning] = useState(false);

  // Initialize theme with localStorage or system theme
  useEffect(() => {
    const stored = window.localStorage.getItem("theme");

    const initial = stored
      ? stored
      : prefersDark
      ? "dark"
      : "light";

    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggleTheme = () => {
    setTransitioning(true);

    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";

      document.documentElement.classList.toggle("dark", next === "dark");
      window.localStorage.setItem("theme", next);

      // Remove transition overlay after animation completes
      setTimeout(() => setTransitioning(false), 550);

      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* Smooth theme transition overlay */}
      {transitioning && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.55,
            ease: "easeInOut",
          }}
          className="pointer-events-none fixed inset-0 z-[9999] 
          bg-gradient-to-br from-blue-600/40 via-slate-900/60 to-purple-600/40 
          backdrop-blur-3xl"
        />
      )}

      {/* Fade-in animation for the entire layout */}
      <motion.div
        key={theme}
        initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
