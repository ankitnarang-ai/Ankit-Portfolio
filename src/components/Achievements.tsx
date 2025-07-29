import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Users, PlayCircle, ExternalLink } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: 'Coding Competition Excellence',
      description: 'Achieved Rank 75 and 91 out of 2000 participants in Coding Ninja Weekly Contest 193 and 196',
      icon: <Trophy className="w-6 h-6" />,
      color: 'bg-yellow-500'
    },
    {
      title: 'Top Educator at Unacademy',
      description: 'Achieved Rank 1 in November and Rank 2 in October among all instructors',
      icon: <Award className="w-6 h-6" />,
      color: 'bg-green-500'
    },
    {
      title: 'YouTube Content Creator',
      description: 'Managed a YouTube channel with 1.2K+ subscribers and 50K+ watch hours from 20 videos',
      icon: <PlayCircle className="w-6 h-6" />,
      color: 'bg-red-500',
      link: 'https://www.youtube.com/@ShortNotes4u'
    }
  ];

  const certifications = [
    {
      title: 'AWS Cloud Foundation',
      issuer: 'Amazon Web Services',
      link: 'https://www.credly.com/badges/b58bf20a-db90-4dc5-b370-18fad26da206/linked_in_profile'
    },
    {
      title: 'Microsoft Azure Fundamentals',
      issuer: 'Microsoft',
      link: 'https://www.credly.com/badges/2756093d-db8f-4a72-b575-312a348db5d3/linked_in_profile'
    },
    {
      title: 'Microsoft Power Platforms',
      issuer: 'Microsoft',
      link: 'https://www.credly.com/badges/c96a0fe0-4477-49fd-9f91-a4aaea406bf4/linked_in_profile'
    },
    {
      title: 'JavaScript Certification',
      issuer: 'GiveMyCertificate',
      link: 'https://certificate.givemycertificate.com/c/5c0a067a-a78c-431a-acf7-a9c1da2b092d'
    },
    {
      title: 'Wipro Certification',
      issuer: 'Wipro',
      link: 'https://cert.diceid.com/csr/cid/Ifh93q'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Achievements & Certifications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognition for excellence in competitive programming, education, and continuous learning
          </p>
        </motion.div>

        {/* Achievements */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-gray-900 mb-8 text-center"
          >
            Key Achievements
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className={`${achievement.color} text-white p-3 rounded-lg mr-4`}>
                    {achievement.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 flex-1">{achievement.title}</h4>
                  {achievement.link && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-800 transition-colors"
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  )}
                </div>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Professional Certifications</h3>
          
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.a
                  key={cert.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 block group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {cert.title}
                    </h4>
                    <ExternalLink size={16} className="text-gray-400 group-hover:text-primary-600 transition-colors" />
                  </div>
                  <p className="text-sm text-gray-600">{cert.issuer}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
