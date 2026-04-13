import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Desarrollador Full Stack",
      company: "Empresa XYZ",
      period: "2023 - Presente",
      description: "Desarrollo de aplicaciones web utilizando el stack MERN, implementación de APIs RESTful y optimización de rendimiento.",
      technologies: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      title: "Desarrollador Frontend",
      company: "Startup ABC",
      period: "2022 - 2023",
      description: "Creación de interfaces de usuario modernas y responsivas, integración con APIs y mejora de la experiencia del usuario.",
      technologies: ["React", "JavaScript", "CSS", "Tailwind"]
    },
    {
      title: "Prácticas Profesionales",
      company: "Tech Solutions",
      period: "2021 - 2022",
      description: "Desarrollo de componentes reutilizables, testing y documentación de código.",
      technologies: ["JavaScript", "HTML", "CSS", "Git"]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Mi <span className="text-accent">Experiencia</span>
        </h1>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                <span className="text-accent font-mono text-sm">{exp.period}</span>
              </div>
              <p className="text-gray-300 mb-2">{exp.company}</p>
              <p className="text-gray-400 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;