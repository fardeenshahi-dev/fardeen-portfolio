import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../theme/ThemeContext.jsx';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'About', to: '/' },
  { label: 'Skills', to: '/skills' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);

  // Add scroll shadow effect
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`sticky top-0 z-50 backdrop-blur-xl transition-all ${
        scrolled
          ? 'bg-slate-950/80 border-b border-slate-800/60 shadow-[0_8px_20px_rgba(0,0,0,0.4)]'
          : 'bg-slate-950/40'
      }`}
    >

      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 relative">

        {/* Floating Glow Ring Behind Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="absolute left-5 top-1/2 -translate-y-1/2 h-20 w-20 bg-blue-600/40 blur-2xl rounded-full pointer-events-none"
        />

        {/* LEFT — Logo */}
        <div className="flex items-center gap-3 relative">
          {/* Glossy FS Badge */}
          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="relative flex h-9 w-9 items-center justify-center 
            rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 
            text-lg font-semibold text-white shadow-lg shadow-blue-500/40
            overflow-hidden"
          >
            FS
            {/* Gloss highlight */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-30 mix-blend-overlay" />
          </motion.div>

          <div className="leading-tight">
            <p className="text-sm font-semibold text-slate-100">Fardeen Shahi</p>
            <p className="text-xs text-slate-400">iOS Developer · SwiftUI · MVVM</p>
          </div>
        </div>

        {/* CENTER — Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">

          {navItems.map((item) => (
            <motion.div
              key={item.to}
              whileHover={{ scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 250 }}
            >
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  [
                    'relative transition-all duration-300 tracking-wide',
                    isActive ? 'text-blue-400 font-semibold' : 'hover:text-slate-100',
                  ].join(' ')
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}

                    {/* Neon underline animation */}
                    {(isActive || location.pathname === item.to) && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-blue-500 shadow-[0_0_8px_rgba(0,135,255,0.8)]"
                      />
                    )}
                  </>
                )}
              </NavLink>
            </motion.div>
          ))}
        </div>

        {/* RIGHT — Theme Toggle + Ultra Hire Buttons */}
        <div className="flex items-center gap-3">

          {/* Theme Toggle Glow */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className="flex h-9 w-9 items-center justify-center rounded-full 
            border border-slate-700/70 bg-slate-900/70 text-slate-300 
            shadow-sm hover:text-slate-100 hover:border-slate-500 transition"
          >
            {theme === 'dark' ? '☾' : '☼'}
          </motion.button>

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/917061629261?text=Hi%20Fardeen,%20I%20am%20interested%20in%20hiring%20you"
            target="_blank"
            whileHover={{ scale: 1.08, boxShadow: '0px 0px 18px rgba(16,185,129,0.6)' }}
            className="hidden md:inline-flex rounded-full bg-green-500 px-4 py-2 text-xs font-semibold 
            text-white shadow-md shadow-green-500/40 hover:bg-green-600 transition"
          >
            WhatsApp
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:fardeenshahi786@gmail.com?subject=Hiring%20Inquiry"
            whileHover={{ scale: 1.08, boxShadow: '0px 0px 18px rgba(59,130,246,0.6)' }}
            className="hidden md:inline-flex rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold 
            text-white shadow-md shadow-blue-600/40 hover:bg-blue-700 transition"
          >
            Email
          </motion.a>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
