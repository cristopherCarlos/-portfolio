import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react'; //poner logo de github luego

const ProjectGrid = () => {
  const projects = useSelector((state) => state.projects.items);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="proyectos" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Proyectos <span className="text-accent">Destacados</span></h2>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-accent/50 transition-colors"
          >
            <div className="h-48 bg-gray-800 relative group">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] bg-accent/10 text-accent px-2 py-1 rounded-md border border-accent/20">
                    {t}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between">    
                {/* <a href={project.link} className="flex items-center gap-2 text-sm hover:text-accent"><GitLogo size={18}/> Code</a> */}
                <a href={project.link} className="flex items-center gap-2 text-sm hover:text-accent"><ExternalLink size={18}/> Demo</a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectGrid;