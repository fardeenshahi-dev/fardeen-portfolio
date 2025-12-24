import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./theme/ThemeContext.jsx";
import { motion, AnimatePresence } from "framer-motion";

const RootWrapper = ({ children }) => {
  return (
    <AnimatePresence>
      {/* Initial fade-in for whole site */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(8px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <RootWrapper>
          <App />
        </RootWrapper>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
