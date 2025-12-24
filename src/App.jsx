import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import Home from "./pages/Home.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";

const pageTransition = {
  initial: {
    opacity: 0,
    y: 20,
    filter: "blur(4px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    filter: "blur(6px)",
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
};

const App = () => {
  const location = useLocation();

  return (
    <div className="relative flex min-h-screen flex-col bg-slate-950 text-slate-100 overflow-hidden">

      {/* 🔼 Smooth scroll + fade sync */}
      <ScrollToTop />

      {/* 🔥 Floating Background Gradient */}
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.32] blur-3xl">
        <div className="absolute top-10 left-1/3 h-80 w-80 bg-blue-600/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 h-72 w-72 bg-purple-500/30 rounded-full animate-pulse delay-700"></div>
      </div>

      {/* NAVBAR */}
      <Navbar />

      {/* PAGE TRANSITIONS */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
          className="flex-1"
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default App;
