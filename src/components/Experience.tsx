import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Associate Software Engineer',
      company: 'Relinns Technologies Pvt Ltd',
      location: 'Mohali, India',
      period: 'January 2024 - Present',
      achievements: [
        'Led frontend development of an internal Project Management Tool (PMT) using Angular, replacing Zoho and saving costs',
        'Designed PMT to support white-labeling and subscriptions for future monetization',
        'Built a reusable Angular UI library for internal projects to speed up development and ensure consistency',
        'Managed the entire AppsRhino backend, developing and maintaining RESTful APIs',
        'Integrated Razorpay and PayPal payment gateways',
        'Optimized 14 microservices within AppsRhino, fixing critical bugs and enhancing system reliability by approximately 15%'
      ],
      current: true
    },
    {
      title: 'Educator Intern',
      company: 'Unacademy',
      location: 'Remote',
      period: 'October 2023 - January 2024',
      achievements: [
        'Mentored developers in C Programming, DSA, and Competitive Programming',
        'Achieved Rank 1 in November and Rank 2 in October among all instructors',
        'Conducted live classes and maintained an active profile'
      ],
      link: 'https://unacademy.com/@unacademy-user-0BQKSYLMLDYB/special-classes?type=latest',
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building innovative solutions and mentoring developers across diverse projects
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-1 bg-primary-200"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              {/* Timeline Dot */}
              <div className={`absolute w-6 h-6 bg-primary-600 rounded-full border-4 border-white shadow-lg ${
                index % 2 === 0 
                  ? 'left-1 md:right-[-12px] md:left-auto' 
                  : 'left-1 md:left-[-12px]'
              }`}>
                {experience.current && (
                  <div className="absolute inset-0 bg-primary-600 rounded-full animate-ping opacity-75"></div>
                )}
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`bg-white p-8 rounded-xl shadow-lg border border-gray-100 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-5 h-5 text-primary-600" />
                  <h3 className="text-xl font-bold text-gray-900">{experience.title}</h3>
                  {experience.current && (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                      Current
                    </span>
                  )}
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-primary-600">{experience.company}</span>
                    {experience.link && (
                      <a
                        href={experience.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-800 transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{experience.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <motion.li
                      key={achievementIndex}
                      initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.2) + (achievementIndex * 0.1) }}
                      viewport={{ once: true }}
                      className="text-gray-700 flex items-start gap-2"
                    >
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-gray-50 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Education</h3>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="w-5 h-5 text-primary-600" />
              <h4 className="text-xl font-semibold text-gray-900">Bachelor of Technology (B.Tech)</h4>
            </div>
            <p className="text-primary-600 font-medium mb-2">Computer Science and Engineering</p>
            <div className="flex flex-col md:flex-row md:items-center gap-2 text-gray-600 text-sm">
              <span>Meerut Institute of Engineering and Technology</span>
              <span className="hidden md:inline">•</span>
              <span>Meerut, India</span>
              <span className="hidden md:inline">•</span>
              <span>2020-2024</span>
              <span className="hidden md:inline">•</span>
              <span className="font-semibold text-primary-600">GPA: 8.24/10</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
