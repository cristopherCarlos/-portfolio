import { motion } from 'framer-motion';
import ProjectGrid from '../components/ProjectGrid';

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Mis <span className="text-accent">Proyectos</span>
        </h1>
        <ProjectGrid />
      </div>
    </motion.div>
  );
};

export default Projects;