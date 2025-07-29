import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Brain, Cloud, Wrench } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Technical Languages',
      icon: <Code className="w-6 h-6" />,
      skills: ['JavaScript', 'TypeScript', 'Python', 'C++'],
      color: 'bg-blue-500'
    },
    {
      title: 'Frontend',
      icon: <Code className="w-6 h-6" />,
      skills: ['Angular', 'React.js', 'Redux', 'HTML5', 'CSS3'],
      color: 'bg-green-500'
    },
    {
      title: 'Backend/Database',
      icon: <Database className="w-6 h-6" />,
      skills: ['Node.js', 'Express.js', 'Fast API', 'MongoDB', 'Qdrant', 'Neo4j'],
      color: 'bg-purple-500'
    },
    {
      title: 'AI/ML',
      icon: <Brain className="w-6 h-6" />,
      skills: ['GenAI', 'Retrieval Augmented Generation (RAG)'],
      color: 'bg-pink-500'
    },
    {
      title: 'DevOps/Tools',
      icon: <Cloud className="w-6 h-6" />,
      skills: ['AWS', 'Docker', 'NGINX', 'REDIS', 'GIT'],
      color: 'bg-orange-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern web applications and AI-powered solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className={`${category.color} text-white p-3 rounded-lg mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Core Competencies</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Wrench className="w-8 h-8 text-primary-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Performance Optimization</h4>
              <p className="text-gray-600 text-sm">Optimizing applications for speed and efficiency</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Brain className="w-8 h-8 text-primary-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">AI Integration</h4>
              <p className="text-gray-600 text-sm">Building GenAI-powered solutions and RAG systems</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Cloud className="w-8 h-8 text-primary-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Scalable Architecture</h4>
              <p className="text-gray-600 text-sm">Designing microservices and cloud-native solutions</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
