import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const AboutMe = () => {
  const contactInfo = [
    {
      icon: <FaPhone className="text-xl" />,
      text: "+91-9140459357",
      link: "tel:+919140459357"
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      text: "amitmishra4447@gmail.com",
      link: "mailto:amitmishra4447@gmail.com"
    },
    {
      icon: <FaGithub className="text-xl" />,
      text: "GitHub",
      link: "https://github.com/DaSeeker67"
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      text: "LinkedIn",
      link: "https://www.linkedin.com/in/amitmishrar2d2/"
    }
  ];

  const education = {
    institution: "National Institute of Technology, Raipur",
    degree: "B.Tech in Electrical Engineering",
    period: "2022-2026",
    cgpa: "7.62 (5th sem)",
    coursework: [
      "Machine Learning",
      "Data Science",
      "Artificial Intelligence",
      "Big Data Analytics",
      "Database Management Systems"
    ]
  };

  const achievements = [
    "Smart India Hackathon 2024 Finalist - Created predictive models for faculty career advancement platform",
    "Bank of Baroda x Microsoft Hackathon 2024 National Select - Designed and implemented a role-based dashboard with KPI tracking",
    "Buisness case study - Top 3  in two competitions focusing on predictive modeling and NLP"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 py-16 px-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header Section */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Amit Mishra
          </h1>
          <p className="text-xl text-purple-200 mb-8">
            Aspiring Software Development Engineer & Machine Learning Enthusiast
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            {contactInfo.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300 hover:text-purple-100 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {contact.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* About Section */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm"
          >
            <h2 className="text-2xl font-bold text-white mb-4">About Me</h2>
            <p className="text-purple-200 leading-relaxed">
              Software Development Engineer with a strong foundation in Computer Science and Electrical Engineering. 
              Experienced in full-stack web development, data structures, and algorithms, with a proven track record 
              of solving 500+ DSA questions. Passionate about software design and development, contributing to 
              innovative projects, and collaborating with cross-functional teams.
            </p>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Education</h2>
            <div className="text-purple-200">
              <h3 className="text-xl font-semibold mb-2">{education.institution}</h3>
              <p className="mb-2">{education.degree}</p>
              <p className="mb-4">CGPA: {education.cgpa} | {education.period}</p>
              <p className="font-semibold mb-2">Relevant Coursework:</p>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-900/40 rounded-full text-sm"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm md:col-span-2"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Achievements</h2>
            <div className="grid gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <span className="text-purple-400 text-2xl">•</span>
                  <p className="text-purple-200">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm md:col-span-2"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Additional Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-purple-300 font-semibold mb-2">Soft Skills</h3>
                <p className="text-purple-200">
                  Problem-solving, Communication, Teamwork, Time Management
                </p>
              </div>
              <div>
                <h3 className="text-purple-300 font-semibold mb-2">Languages</h3>
                <p className="text-purple-200">
                  English (Fluent), Hindi (Native)
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;