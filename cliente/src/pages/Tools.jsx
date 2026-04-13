import { motion } from 'framer-motion';

const Tools = () => {
  const toolCategories = [
    {
      category: "Frontend",
      tools: [
        { name: "React", level: "Avanzado", icon: "⚛️" },
        { name: "JavaScript", level: "Avanzado", icon: "🟨" },
        { name: "TypeScript", level: "Intermedio", icon: "🔷" },
        { name: "HTML/CSS", level: "Avanzado", icon: "🌐" },
        { name: "Tailwind CSS", level: "Avanzado", icon: "🎨" }
      ]
    },
    {
      category: "Backend",
      tools: [
        { name: "Node.js", level: "Avanzado", icon: "🟢" },
        { name: "Express.js", level: "Avanzado", icon: "🚀" },
        { name: "MongoDB", level: "Intermedio", icon: "🍃" },
        { name: "PostgreSQL", level: "Básico", icon: "🐘" },
        { name: "REST APIs", level: "Avanzado", icon: "🔗" }
      ]
    },
    {
      category: "Herramientas",
      tools: [
        { name: "Git", level: "Avanzado", icon: "📚" },
        { name: "VS Code", level: "Avanzado", icon: "💻" },
        { name: "Linux", level: "Intermedio", icon: "🐧" },
        { name: "Docker", level: "Básico", icon: "🐳" },
        { name: "Figma", level: "Intermedio", icon: "🎯" }
      ]
    }
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case "Avanzado": return "bg-green-500";
      case "Intermedio": return "bg-yellow-500";
      case "Básico": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Mis <span className="text-accent">Herramientas</span>
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
            >
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                {category.category}
              </h3>

              <div className="space-y-4">
                {category.tools.map((tool, toolIndex) => (
                  <div key={toolIndex} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{tool.icon}</span>
                      <span className="text-gray-300">{tool.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${getLevelColor(tool.level)}`}></div>
                      <span className="text-sm text-gray-400">{tool.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Tools;