import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Code2, Users, MessageSquare } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tu.email@ejemplo.com",
      href: "mailto:tu.email@ejemplo.com"
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+1 (123) 456-7890",
      href: "tel:+11234567890"
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Tu Ciudad, País",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Code2,
      label: 'GitHub',
      href: 'https://github.com/tuusuario',
      color: 'hover:text-gray-300'
    },
    {
      icon: Users,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/tuusuario',
      color: 'hover:text-blue-400'
    },
    {
      icon: MessageSquare,
      label: "Twitter",
      href: "https://twitter.com/tuusuario",
      color: "hover:text-blue-300"
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
          <span className="text-accent">Contacto</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Información de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold text-white mb-6">Hablemos</h2>
            <p className="text-gray-400 mb-8">
              Estoy interesado en oportunidades de trabajo y proyectos colaborativos.
              No dudes en contactarme si crees que podemos trabajar juntos.
            </p>

            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-accent transition-colors group"
              >
                <info.icon className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-gray-400 text-sm">{info.label}</p>
                  <p className="text-white">{info.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Redes Sociales */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold text-white mb-6">Redes Sociales</h2>
            <p className="text-gray-400 mb-8">
              Conecta conmigo en mis redes sociales para ver mis últimos proyectos
              y pensamientos sobre tecnología.
            </p>

            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-accent transition-colors group ${social.color}`}
                >
                  <social.icon className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                  <span className="text-white">{social.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Formulario de Contacto */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 bg-gray-800/50 rounded-lg p-8 border border-gray-700"
        >
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">
            Envía un mensaje
          </h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-400 mb-2">Nombre</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-accent focus:outline-none transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-accent focus:outline-none transition-colors"
                  placeholder="tu.email@ejemplo.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Asunto</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-accent focus:outline-none transition-colors"
                placeholder="Asunto del mensaje"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Mensaje</label>
              <textarea
                rows="5"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-accent focus:outline-none transition-colors resize-none"
                placeholder="Tu mensaje..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-primary py-3 px-6 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Enviar Mensaje
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;