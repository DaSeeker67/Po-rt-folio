import React from 'react';
import { motion } from 'framer-motion';
import { FaRaspberryPi, FaReact, FaDatabase, FaCode, FaGithub, FaPlay } from 'react-icons/fa';
import { SiJavascript, SiPython, SiD3Dotjs, SiStreamlit, SiScikitlearn } from 'react-icons/si';
import { BiMoviePlay,  BiMessageRoundedDots, BiCodeAlt  } from 'react-icons/bi';

function Projects() {
  const projects = [
     {
  title: "CodiStar – Online Code Editor",
  description: "Collaborative online code editor supporting syntax highlighting and real-time coding.",
  tech: "React, Monaco Editor, TypeScript, TailwindCSS, Vite",
  year: "2025",
  icon: <BiCodeAlt className="text-2xl text-blue-500" />,
  details: [
    "Built a fast and responsive code editor using Monaco Editor",
    "Supports multi-language syntax highlighting and real-time editing",
    "Developed with performance-focused stack (Vite + TailwindCSS)",
    "Deployed on Vercel with minimal latency"
  ],
  links: {
    github: "https://github.com/DaSeeker67/codi_star",
    demo: "https://codi-star-kl2r0cpr3-daseeker67s-projects.vercel.app/"
  },
  tags: ["Frontend", "Developer Tools", "React", "Web App"]
},
{
  title: "Zen Chat – Ephemeral Room-Based Chat App",
  description: "Privacy-focused real-time chat app where chats are cleared once all users leave the room.",
  tech: "React, WebSockets, TypeScript, Express.js, Node.js",
  year: "2025",
  icon: <BiMessageRoundedDots className="text-2xl text-green-500" />,
  details: [
    "Built real-time chat using native WebSocket protocol",
    "Implements room-based ephemeral messaging — no storage or history",
    "Frontend in React (TypeScript), backend with Node.js + Express",
    "Focuses on privacy, zero-trace communication model"
  ],
  links: {
    demo: "https://the-zen-chat-frontend-63xo.vercel.app/",
    github: "https://github.com/DaSeeker67/TheZenChat_backend"
  },
  tags: ["Full Stack", "WebSocket", "Privacy", "Real-time App"]
},
    {
      title: "Vakmitra - Offline Speech Translator",
      description: "An offline speech translator using Vosk and Marian NMT for low-connectivity areas.",
      tech: "IoT, Raspberry Pi, Flask",
      year: "2023",
      icon: <FaRaspberryPi className="text-2xl text-pink-500" />,
      details: [
        "Developed speech recognition and translation functionality for offline use",
        "Deployed on Raspberry Pi with Flask-based UI for seamless experience",
        "Supports 10 different languages"
      ],
      links: {
        github: "https://github.com/DaSeeker67/vaakmitra",
        
      },
      tags: ["IoT", "NLP", "Embedded Systems"]
    },
    {
      title: "SaaS Marketplace Platform",
      description: "A comprehensive marketplace platform with ML-driven features for product management.",
      tech: "React, Node.js, Express, PostgreSQL, Razorpay API",
      year: "2023",
      icon: <FaReact className="text-2xl text-blue-500" />,
      details: [
        "Built full-stack marketplace supporting buyer and seller functionalities",
        "Implemented ML-driven web scraping to auto-populate seller forms",
        "Integrated secure payment processing"
      ],
      links: {
        github: "https://github.com/rishabhpathak359/SaaSuJiBuyersFrontend",
        demo: "https://saa-su-ji-buyers-frontend.vercel.app/"
      },
      tags: ["Full Stack", "E-commerce", "Machine Learning"]
    },
     {
      title: "Movie Recommendation System",
      description: "ML-powered movie recommendation engine using TMDb dataset with over 5000 movies.",
      tech: "Python, scikit-learn, Streamlit, TMDb API",
      year: "2024",
      icon: <BiMoviePlay className="text-2xl text-red-500" />,
      details: [
        "Implemented content-based recommendation using cosine similarity",
        "Processed and vectorized movie data using sklearn",
        "Built interactive web interface with Streamlit",
        "Handles dataset of 5000+ English movies"
      ],
      links: {
        github: "https://github.com/DaSeeker67/movie-recommendation",
        demo: "https://movie-recommendation-ndacipzqvwmk9djthnyawl.streamlit.app/"
      },
      tags: ["Machine Learning", "Web App", "Data Science"]
    },
    {
      title: "Dijkstra Algorithm Visualizer",
      description: "Interactive visualization tool for Dijkstra's pathfinding algorithm.",
      tech: "HTML, CSS, Javascript, D3.js",
      year: "2022",
      icon: <SiD3Dotjs className="text-2xl text-orange-500" />,
      details: [
        "Created interactive visualization of algorithm steps",
        "Optimized performance using priority queues, reducing computation by 50%",
        "Built responsive and intuitive user interface"
      ],
      links: {
        github: "https://github.com/DaSeeker67/djikstra",
        demo: "dijikstra.vercel.app/"
      },
      tags: ["Algorithms", "Visualization", "Educational"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-black/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-purple-500 mb-4">FEATURED PROJECTS</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A collection of projects showcasing my expertise in full-stack development, 
          machine learning, and software engineering.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  {project.icon}
                  <h3 className="text-xl font-bold ml-3 text-gray-800">{project.title}</h3>
                </div>
                <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {project.year}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="mb-4">
                <div className="text-sm font-medium text-gray-500 mb-2">Tech Stack</div>
                <div className="text-sm text-gray-600">{project.tech}</div>
              </div>
              
              <div className="space-y-2">
                {project.details.map((detail, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.2) + (idx * 0.1) }}
                    className="flex items-start text-sm text-gray-600"
                  >
                    <span className="text-green-500 mr-2">✓</span>
                    {detail}
                  </motion.div>
                ))}
              </div>
              
              {project.links && (
                <div className="mt-6 flex space-x-4">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-gray-600 hover:text-gray-800"
                    >
                      <FaGithub className="mr-2" /> GitHub
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-gray-600 hover:text-gray-800"
                    >
                      <FaPlay className="mr-2" /> Live Demo
                    </a>
                  )}
                </div>
              )}
              
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
