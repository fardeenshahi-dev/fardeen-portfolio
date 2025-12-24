import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smooth scroll with easing (Apple-like)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Optional subtle fade animation for body
    const body = document.body;
    body.style.opacity = "0";
    body.style.transition = "opacity 0.45s ease";

    requestAnimationFrame(() => {
      body.style.opacity = "1";
    });

  }, [pathname]);

  return null;
};

export default ScrollToTop;
