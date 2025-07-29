import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-gray-900 cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            Ankit Narang
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex space-x-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://github.com/ankitnarang-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://www.linkedin.com/in/ankitnarang1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://x.com/Ankit_narang_07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Twitter size={20} />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-gray-200 py-4"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50"
              >
                {item.name}
              </button>
            ))}
            <div className="flex space-x-4 px-4 pt-4 border-t border-gray-200 mt-4">
              <a
                href="https://github.com/ankitnarang-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ankitnarang1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/Ankit_narang_07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <Twitter size={20} />
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
