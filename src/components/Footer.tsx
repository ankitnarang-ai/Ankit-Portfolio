import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/ankitnarang-ai',
      icon: <Github className="w-5 h-5" />
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ankitnarang1/',
      icon: <Linkedin className="w-5 h-5" />
    },
    {
      name: 'Twitter',
      url: 'https://x.com/Ankit_narang_07',
      icon: <Twitter className="w-5 h-5" />
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@ShortNotes4u',
      icon: <ExternalLink className="w-5 h-5" />
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <motion.h3
              whileHover={{ scale: 1.05 }}
              onClick={scrollToTop}
              className="text-2xl font-bold mb-4 cursor-pointer"
            >
              Ankit Narang
            </motion.h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Full Stack Developer passionate about building scalable web applications and 
              GenAI-powered solutions. Always learning, always growing.
            </p>
            <div className="flex items-center text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-2 text-red-500" fill="currentColor" />
              <span>and lots of coffee ☕</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 block"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300"
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              Open to collaboration and new opportunities!
            </p>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 mt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Ankit Narang. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Built with React & Tailwind CSS</span>
              <span>•</span>
              <span>Deployed with love 💙</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
