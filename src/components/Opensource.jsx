import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCode, FaPalette, FaUserCircle, FaBell, FaCalendarAlt } from 'react-icons/fa';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { BiGitPullRequest } from 'react-icons/bi';
import { 
  SiReact, SiJavascript, SiPython, SiTailwindcss, 
  SiNodedotjs, SiMongodb, SiPostgresql, SiDocker, 
 SiTypescript, SiFlask, SiExpress, 
  SiRedis, SiGit, SiD3Dotjs, SiHtml5, 
  SiCss3, SiMysql, SiKubernetes, SiTensorflow
} from 'react-icons/si';

function Opensource() {
  const contributions = [
    {
      title: "SWOC 2024 Contributions",
      event: "Social Winter of Code",
      period: "Jan 2024 - Mar 2024",
      projects: [
        {
          name: "Beautify Project",
          icon: <FaPalette className="text-purple-400" />,
          description: "Enhanced UI components and animation system",
          contributions: [
            "Created reusable dynamic background components reducing code duplication by 25%",
            "Implemented smooth animations and transitions for better user experience",
            "Optimized component reusability across the application"
          ],
          techStack: ["React", "TailwindCSS", "Framer Motion"]
        },
        {
          name: "Palettgram Project",
          icon: <FaUserCircle className="text-purple-400" />,
          description: "Improved user authentication and profile features",
          contributions: [
            "Integrated automatic avatar generation system",
            "Enhanced user profile customization options",
            "Implemented efficient state management for user sessions"
          ],
          techStack: ["React", "Node.js", "Appwrite"]
        }
      ]
    },
    {
      title: "Hacktoberfest 2023",
      event: "NOSC Website Enhancement",
      period: "October 2023",
      projects: [
        {
          name: "NOSC Official Website",
          icon: <FaBell className="text-purple-400" />,
          description: "Enhanced user interface and notification system",
          contributions: [
            "Developed alert notification system for important announcements",
            "Created dynamic upcoming events section with interactive features",
            "Implemented responsive design for better mobile experience"
          ],
          techStack: ["React", "TailwindCSS", "JavaScript"]
        }
      ]
    }
  ];

  const techStack = [
    { icon: <SiReact />, name: 'React' },
    { icon: <SiJavascript />, name: 'JavaScript' },
    { icon: <SiPython />, name: 'Python' },
    { icon: <SiTailwindcss />, name: 'Tailwind' },
    { icon: <SiNodedotjs />, name: 'Node.js' },
    { icon: <SiMongodb />, name: 'MongoDB' },
    { icon: <SiPostgresql />, name: 'PostgreSQL' },
    { icon: <SiDocker />, name: 'Docker' },
    
    { icon: <SiTypescript />, name: 'TypeScript' },
    { icon: <SiFlask />, name: 'Flask' },
    { icon: <SiExpress />, name: 'Express' },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-purple-900 min-h-screen py-16 px-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl font-bold text-white mb-4"
          >
            Open Source Contributions
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-purple-200"
          >
            Building and contributing to the open source community
          </motion.p>
        </div>

        {/* Contributions */}
        {contributions.map((contribution, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 * index }}
            className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 mb-8"
          >
            {/* Contribution header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <h3 className="text-2xl font-bold text-white">{contribution.title}</h3>
                <span className="px-4 py-2 bg-purple-900/50 rounded-full text-purple-200 text-sm">
                  {contribution.period}
                </span>
              </div>
            </div>

            {/* Projects grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {contribution.projects.map((project, idx) => (
    <motion.div
      key={idx}
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.4 + (idx * 0.2) }}
      className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300"
    >
      {/* Project Header */}
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-2 bg-purple-900/50 rounded-lg">
          {project.icon}
        </div>
        <h4 className="text-xl font-semibold text-white">{project.name}</h4>
      </div>

      {/* Project Description */}
      <p className="text-purple-200 mb-4">{project.description}</p>

      {/* Project Contributions */}
      <div className="space-y-3 mb-6">
        {project.contributions.map((item, i) => (
          <motion.div
            key={i}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 + (i * 0.1) }}
            className="flex items-start space-x-3"
          >
            <HiOutlineLightBulb className="text-purple-400 mt-1 flex-shrink-0" />
            <p className="text-gray-300 text-sm">{item}</p>
          </motion.div>
        ))}
      </div>

      {/* Tech Stack Tags */}
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-purple-900/40 text-purple-200 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  ))}
</div>
          </motion.div>
        ))}

        {/* Tech Stack Infinite Scroll */}
        <div className="mt-20 mb-12">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Technologies I Work With</h3>
          
          <div className="relative">
            <div className="flex overflow-hidden">
              <motion.div
                className="flex gap-8 py-4"
                animate={{
                  x: [0, -1920],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                }}
              >
                {[...techStack, ...techStack].map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center min-w-[100px] bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm hover:bg-purple-900/50 transition-all duration-300"
                  >
                    <div className="text-4xl text-purple-400 hover:text-purple-300 transition-colors">
                      {tech.icon}
                    </div>
                    <span className="text-purple-200 text-sm mt-2">{tech.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
          <div className="relative mt-8">
            <div className="flex overflow-hidden">
              <motion.div
                className="flex gap-8 py-4"
                animate={{
                  x: [-1920, 0],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                }}
              >
                {[...techStack, ...techStack].map((tech, index) => (
                  <div
                    key={`reverse-${index}`}
                    className="flex flex-col items-center justify-center min-w-[100px] bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm hover:bg-purple-900/50 transition-all duration-300"
                  >
                    <div className="text-4xl text-purple-400 hover:text-purple-300 transition-colors">
                      {tech.icon}
                    </div>
                    <span className="text-purple-200 text-sm mt-2">{tech.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* GitHub Link */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a 
            href="https://github.com/DaSeeker67" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 transition-colors duration-300 rounded-full text-white font-medium"
          >
            <FaGithub className="text-xl" />
            <span>View More on GitHub</span>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Opensource;