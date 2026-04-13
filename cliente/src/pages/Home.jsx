import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-accent font-mono mb-4">Bachiller en Ingeniería de Sistemas</h2>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          Diseñando el futuro <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
            con código y sistemas.
          </span>
        </h1>
        <p className="max-w-xl mx-auto text-gray-400 text-lg mb-8">
          Especialista en el Stack MERN, entusiasta de Linux y amante del diseño minimalista.
        </p>

        <Link to="/proyectos">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(56, 189, 248, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent text-primary px-8 py-3 rounded-full font-bold transition-all"
          >
            Ver mis proyectos
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;