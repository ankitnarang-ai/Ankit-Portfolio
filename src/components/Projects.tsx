import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Brain, ShoppingBag, Music, Calendar, FileText, Layout } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Hire Catalyze',
      description: 'AI-Powered Recruitment Transformation Platform - End-to-end recruitment platform automating resume screening, candidate matching, and interviews. Features an AI-based interview system using LLMs to generate candidate response summaries.',
      tech: ['Angular', 'Node.js', 'Express.js', 'Python', 'MongoDB', 'Qdrant', 'Docker', 'GenAI (RAG)'],
      icon: <Brain className="w-6 h-6" />,
      links: {
        github: 'https://github.com/ankitnarang-ai/hirecatalyze-website',
        live: 'https://www.hirecatalyze.com'
      },
      featured: true
    },
    {
      title: 'Gemini Clone',
      description: 'Chat application built with MERN stack, providing an intuitive interface for conversational AI interactions.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      icon: <Brain className="w-6 h-6" />,
      links: {
        github: 'https://github.com/ankitnarang-ai/gemini',
        live: 'https://chat.hirecatalyze.com'
      }
    },
    {
      title: 'Rekha Boutique',
      description: 'E-commerce website for family business - A complete online shopping platform with modern design and user-friendly interface.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      icon: <ShoppingBag className="w-6 h-6" />,
      links: {
        github: 'https://github.com/ankitnarang-ai/rekha-boutique',
        live: 'https://www.rekhaboutique.shop/'
      }
    },
    {
      title: 'Music Therapy',
      description: 'A therapeutic music application designed to provide relaxation and wellness through curated music experiences.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      icon: <Music className="w-6 h-6" />,
      links: {
        github: 'https://github.com/ankitnarang-ai/AnkitNarang-MusicTherapy',
        live: 'https://ankitnarang-ai.github.io/AnkitNarang-MusicTherapy/'
      }
    },
    {
      title: 'Todo App',
      description: 'Full-featured task management application with intuitive design and real-time updates.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      icon: <FileText className="w-6 h-6" />,
      links: {
        github: 'https://github.com/ankitnarang-ai/todo',
        live: 'https://chat.shortcomponents4u.com'
      }
    },
    {
      title: 'Angular Kanban',
      description: 'Reusable Angular UI library for Kanban boards, published on npm for community use.',
      tech: ['Angular', 'TypeScript', 'CSS3'],
      icon: <Layout className="w-6 h-6" />,
      links: {
        github: 'https://github.com/ankitnarang-ai/Angular-Kanban',
        live: 'https://www.npmjs.com/package/angular-kanban'
      }
    },
    {
      title: 'Resume Generator',
      description: 'Dynamic resume generation tool with customizable templates and export functionality.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      icon: <FileText className="w-6 h-6" />,
      links: {
        github: 'https://github.com/ankitnarang-ai/Resume-generator',
        live: 'https://ankitnarang-ai.github.io/Resume-generator/'
      }
    },
    {
      title: 'Automated Timetable',
      description: 'MERN stack application for automated timetable generation with constraint handling.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      icon: <Calendar className="w-6 h-6" />,
      links: {
        github: 'https://github.com/ankitnarang-ai/Automated-Time-Table-MERN',
        live: null
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of innovative solutions spanning AI-powered platforms, web applications, and developer tools
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                project.featured ? 'md:col-span-2 lg:col-span-1 border-2 border-primary-200' : ''
              }`}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 text-primary-600 p-3 rounded-lg mr-4">
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{project.title}</h3>
                    {project.featured && (
                      <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex gap-4">
                  {project.links.github && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </motion.a>
                  )}
                  {project.links.live && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary-600 hover:text-primary-800 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
