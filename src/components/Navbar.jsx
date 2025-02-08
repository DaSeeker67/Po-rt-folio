// Navbar.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BiHomeAlt, BiUser, BiCode, BiTrophy, BiEnvelope } from 'react-icons/bi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "About Me", icon: <BiUser className="text-xl" /> },
    { title: "Projects", icon: <BiCode className="text-xl" /> },
    { title: "Open Source", icon: <FaGithub className="text-xl" /> },
    { title: "CP Profiles", icon: <BiTrophy className="text-xl" /> },
    { title: "Contact", icon: <BiEnvelope className="text-xl" /> },
  ];

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 100,
      },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-white text-2xl font-bold flex items-center gap-2"
          >
            
            <span className=" text-white md:text-purple-500  ">
              @ Batman 
            </span>
            <span className=" text-purple-500  md:text-white bg-clip-text">
              Codes 
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <a
                  href={`#${item.title.toLowerCase().replace(" ", "-")}`}
                  className="text-white hover:text-purple-500 flex items-center gap-2 transition-colors duration-300"
                >
                  {item.icon}
                  <span>{item.title}</span>
                </a>
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <FaGithub className="text-2xl" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -10 }}
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <FaLinkedin className="text-2xl" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 focus:outline-none"
            >
              <div className="w-6 h-6 relative">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className="absolute w-full h-0.5 bg-white transform transition-transform duration-300"
                />
                <motion.span
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="absolute w-full h-0.5 bg-white top-2.5"
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className="absolute w-full h-0.5 bg-white top-5"
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden"
            >
              <div className="px-4 py-5 space-y-4">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href={`#${item.title.toLowerCase().replace(" ", "-")}`}
                    className="block text-gray-300 hover:text-white transition-colors duration-300"
                    whileHover={{ x: 10 }}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span>{item.title}</span>
                    </div>
                  </motion.a>
                ))}
                <div className="flex space-x-4 pt-4">
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <FaGithub className="text-2xl" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <FaLinkedin className="text-2xl" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;