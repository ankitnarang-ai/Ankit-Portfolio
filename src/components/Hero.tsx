import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Hi, I'm{' '}
              <span className="text-primary-600">Ankit Narang</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-600 mb-8"
            >
              Full Stack Developer & AI Enthusiast
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 mb-8 max-w-2xl"
            >
              Passionate about building scalable web applications and GenAI-powered solutions.
              Experienced in performance optimization and creating innovative digital experiences
              that drive business growth.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-8 text-sm text-gray-600"
            >
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary-600" />
                <a href="mailto:ankitnarang.dev@gmail.com" className="hover:text-primary-600 transition-colors">
                  ankitnarangwork@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary-600" />
                <span>+91 7668484155</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
              >
                <Mail size={18} />
                Get In Touch
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://drive.google.com/uc?export=download&id=1bzw4PMHb0jTErSKnAKEIvPTY0K5fRWM4"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors flex items-center justify-center gap-2"
              >
                <Download size={18} />
                Download CV
              </motion.a>

            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="w-80 h-80 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full shadow-2xl flex items-center justify-center">
                <div className="w-72 h-72 bg-white rounded-full overflow-hidden flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/dm2wxjddh/image/upload/v1753348884/ankit_pic_kbklai.jpg"
                    alt="Ankit Narang"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -z-10 w-80 h-80 bg-primary-200 rounded-full blur-3xl opacity-30"></div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
