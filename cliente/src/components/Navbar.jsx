import { motion, AnimatePresence } from 'framer-motion';
import { Home, Briefcase, Folder, Wrench, Mail } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

// Constants
const ICON_SIZE = 20;
const ANIM_DURATION = 0.3;
const LABEL_RADIUS = '10.5306% / 40%';
const ACCENT_COLOR = '#38bdf8';
const SLATE_COLOR = '#94a3b8';

// Animation Variants
const navbarVariants = {
  hidden: { y: -20, opacity: 0, x: "-50%" },
  visible: {
    y: 0,
    opacity: 1,
    x: "-50%",
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const NavItem = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.li
      className="relative flex flex-col items-center justify-center  list-none cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Label - Tooltip arriba del icono */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 44, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            transition={{ duration: ANIM_DURATION, ease: "easeOut" }}
            className="absolute bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-medium text-white whitespace-nowrap pointer-events-none border border-white/20"
            style={{ borderRadius: LABEL_RADIUS }}
          >
            {item.name}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Icon Button */}
      <motion.div
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center w-12 h-12"
        aria-label={item.name}
      >
        <Link to={item.to}>
          <motion.div
            animate={{ color: isHovered ? ACCENT_COLOR : SLATE_COLOR }}
            transition={{ duration: 0.2 }}
          >
            {item.icon}
          </motion.div>
        </Link>
      </motion.div>

      {/* Indicador de punto inferior */}
      {/* <AnimatePresence>
        {isHovered && (
          <motion.div
            layoutId={`dot-${item.name}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="absolute -bottom-1 w-1 h-1 bg-sky-400 rounded-full"
          />
        )}
      </AnimatePresence> */}
    </motion.li>
  );
};

const Navbar = () => {
  const navItems = useMemo(() => [
    { name: 'Inicio', icon: <Home size={ICON_SIZE} />, to: '/' },
    { name: 'Proyectos', icon: <Folder size={ICON_SIZE} />, to: '/proyectos' },
    { name: 'Experiencia', icon: <Briefcase size={ICON_SIZE} />, to: '/experiencia' },
    { name: 'Herramientas', icon: <Wrench size={ICON_SIZE} />, to: '/herramientas' },
    { name: 'Contacto', icon: <Mail size={ICON_SIZE} />, to: '/contacto' },
  ], []);

  return (
    <motion.nav
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-2 left-1/2 z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl  shadow-lg border border-white/10">
        <ul className="flex items-center justify-center">
          {navItems.map((item) => (
            <NavItem key={item.name} item={item} />
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;