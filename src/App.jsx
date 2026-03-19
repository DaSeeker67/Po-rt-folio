import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Scene from './components/Scene';
import Cp from './components/Cp';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope, FaExternalLinkAlt, FaPalette, FaUserCircle, FaBell, FaPlay } from 'react-icons/fa';
import { BiCodeAlt, BiMessageRoundedDots, BiMoviePlay } from 'react-icons/bi';
import { HiOutlineLightBulb } from 'react-icons/hi';
import confetti from 'canvas-confetti';

const CustomCursor = () => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <>
      <motion.div
        id="custom-cursor"
        animate={{
          x: position.x - 10,
          y: position.y - 10,
          scale: isHovered ? 2.5 : 1,
          backgroundColor: isHovered ? 'rgba(57, 255, 20, 0.3)' : 'white',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
      />
      <div 
        id="custom-cursor-dot" 
        style={{ left: position.x - 2, top: position.y - 2 }}
      />
    </>
  );
};

const MagneticButton = ({ children, className, onClick }) => {
  const ref = useRef(null);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
      onClick={(e) => {
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#39ff14', '#ff1493', '#ffffff']
        });
        if (onClick) onClick(e);
      }}
    >
      {children}
    </motion.button>
  );
};

const projects = [
  { 
    id: 1, 
    title: 'CodiStar', 
    type: 'wizard', 
    desc: 'Collaborative online code editor supporting syntax highlighting and real-time coding.',
    stack: ['React', 'Monaco', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/DaSeeker67/codi_star',
    demo: 'https://codi-star-kl2r0cpr3-daseeker67s-projects.vercel.app/'
  },
  { 
    id: 2, 
    title: 'Zen Chat', 
    type: 'can', 
    desc: 'Privacy-focused real-time chat where chats are cleared once all users leave the room.',
    stack: ['React', 'WebSockets', 'Node.js', 'Express'],
    github: 'https://github.com/DaSeeker67/TheZenChat_backend',
    demo: 'https://the-zen-chat-frontend-63xo.vercel.app/'
  },
  { 
    id: 3, 
    title: 'Vakmitra', 
    type: 'wizard', 
    desc: 'Offline speech translator using Vosk and Marian NMT for low-connectivity areas.',
    stack: ['Python', 'Raspberry Pi', 'Flask', 'Edge AI'],
    github: 'https://github.com/DaSeeker67/vaakmitra',
    demo: 'https://github.com/DaSeeker67/vaakmitra'
  },
  { 
    id: 4, 
    title: 'SaaS Marketplace', 
    type: 'sneaker', 
    desc: 'Comprehensive marketplace with ML-driven features for product management.',
    stack: ['MongoDB', 'Express', 'React', 'Node'],
    github: 'https://github.com/rishabhpathak359/SaaSuJiBuyersFrontend',
    demo: 'https://saa-su-ji-buyers-frontend.vercel.app/'
  },
];

const HorizontalScrollProjects = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-[#0d1117]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-10 px-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative h-[80vh] w-[85vw] md:w-[45vw] flex-shrink-0 glass-morphism overflow-hidden flex flex-col p-1"
            >
              <div className="flex-1 opacity-90 group-hover:opacity-100 transition-opacity relative">
                <Scene modelType={project.type} mainColor={project.type === 'can' ? '#39ff14' : '#1a1a1a'} />
                <div className="absolute top-10 right-10 text-9xl font-black opacity-5 group-hover:opacity-10 transition-opacity italic">
                    {project.id}
                </div>
              </div>
              <div className="p-10 z-10 bg-black/60 backdrop-blur-xl border-t border-white/5">
                <h3 className="text-4xl font-black uppercase mb-2 tracking-tighter text-gradient">{project.title}</h3>
                <p className="opacity-60 uppercase tracking-widest text-xs mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map(s => (
                        <span key={s} className="px-3 py-1 text-[10px] border border-accent-color/30 rounded-full text-accent-color font-black uppercase tracking-widest">
                            {s}
                        </span>
                    ))}
                </div>
                <div className="flex gap-4">
                  <MagneticButton 
                    className="flex-1 py-3 bg-accent-color text-black rounded-lg hover:scale-105 transition-all uppercase text-xs tracking-widest font-black"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    GITHUB
                  </MagneticButton>
                  <MagneticButton 
                    className="flex-1 py-3 border border-white/20 text-white rounded-lg hover:bg-white hover:text-black transition-all uppercase text-xs tracking-widest font-black"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    DEMO
                  </MagneticButton>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Header = () => (
  <header className="fixed top-0 left-0 w-full p-8 z-50 flex justify-between items-center bg-transparent">
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="text-2xl font-black tracking-tighter text-accent-color"
    >
      DA<span className="text-white">SEEKER</span>.SYS
    </motion.div>
    <nav className="flex gap-8">
      {['Work', 'About', 'Contact'].map((item) => (
        <motion.a
          key={item}
          href={`#${item.toLowerCase()}`}
          whileHover={{ scale: 1.1, color: '#39ff14' }}
          className="text-xs font-black tracking-widest uppercase opacity-70 hover:opacity-100 transition-opacity"
        >
          {item}
        </motion.a>
      ))}
    </nav>
  </header>
);

const Hero = () => (
    <section className="h-screen flex flex-col justify-center items-center relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40">
        <Scene modelType="wizard" />
      </div>
      
      <div className="z-10 text-center pointer-events-none px-4">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 inline-block px-4 py-1 border border-accent-color/30 rounded-full text-accent-color text-[10px] font-black uppercase tracking-[0.3em] bg-black/50"
        >
            Summoning Senior Agent Orchestrator
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[14vw] font-black leading-none tracking-tighter uppercase text-gradient glitch-hover cursor-none"
        >
          AMIT <br /> MISHRA
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-xl opacity-50 font-black tracking-[0.2em] uppercase max-w-2xl mx-auto"
        >
          Fine-Tune Sorcerer · <span className="text-accent-color">Hell Energy</span> Addict
        </motion.p>
      </div>
  
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-accent-color to-transparent" />
      </motion.div>
    </section>
  );

const StatBar = ({ label, value, color }) => (
    <div className="w-full mb-6">
        <div className="flex justify-between mb-2 text-[10px] font-black uppercase tracking-widest opacity-60">
            <span>{label}</span>
            <span>{value}%</span>
        </div>
        <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/10">
            <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${value}%` }}
                transition={{ duration: 1.5, ease: "circOut" }}
                className="h-full"
                style={{ backgroundColor: color }}
            />
        </div>
    </div>
);

const OpenSourceSection = () => {
    const contributions = [
        {
            name: "Beautify Project",
            desc: "Enhanced UI components and animation system for Social Winter of Code 2024.",
            tech: ["React", "Framer Motion"],
            icon: <FaPalette />
        },
        {
            name: "Palettgram",
            desc: "Integrated automatic avatar generation and enhanced user profiles.",
            tech: ["Node.js", "Appwrite"],
            icon: <FaUserCircle />
        },
        {
            name: "NOSC Website",
            desc: "Developed alert system and dynamic events section for Hacktoberfest '23.",
            tech: ["Tailwind", "JavaScript"],
            icon: <FaBell />
        }
    ];

    return (
        <section className="py-40 px-10 md:px-20 bg-[#0d1117]">
            <div className="flex flex-col gap-10 mb-20">
                <div className="text-accent-color text-xs font-black uppercase tracking-[0.5em]">The Common Good</div>
                <h2 className="text-7xl font-black uppercase tracking-tighter">OPEN <span className="text-white/20">SOURCE</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {contributions.map((c, i) => (
                    <motion.div
                        key={c.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-morphism p-8 hover:border-accent-color transition-all"
                    >
                        <div className="text-3xl text-accent-color mb-6">{c.icon}</div>
                        <h3 className="text-xl font-black uppercase mb-3 tracking-tighter">{c.name}</h3>
                        <p className="text-xs opacity-50 uppercase leading-relaxed mb-6">{c.desc}</p>
                        <div className="flex flex-wrap gap-2">
                            {c.tech.map(t => (
                                <span key={t} className="text-[9px] font-black px-2 py-1 bg-white/5 border border-white/10">{t}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

const About = () => {
  return (
    <section id="about" className="py-40 px-10 md:px-20 min-h-screen flex flex-col justify-center bg-[#0d1117] relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative aspect-square glass-morphism overflow-hidden bg-black/40"
        >
          <Scene modelType="can" mainColor="#ff1493" accentColor="#39ff14" />
          <div className="absolute bottom-5 left-5 text-[10px] font-black tracking-[0.5em] opacity-30 uppercase">
            Fuel System Active
          </div>
        </motion.div>
        
        <div className="flex flex-col gap-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-7xl font-black mb-4 uppercase tracking-tighter leading-tight"
          >
            FUELED BY <span className="text-accent-color">HELL</span>, <br /> BUILT BY <span className="text-secondary-accent">EGO</span>
          </motion.h2>
          
          <div className="space-y-6">
            <p className="text-2xl opacity-80 font-black uppercase tracking-tighter italic">
                "MY PRS DON'T NEED REVIEW. (THEY DO)"
            </p>
            <p className="text-lg opacity-60 leading-relaxed font-medium">
                Builder ego level: <span className="text-accent-color font-black italic">ASTRONOMICAL</span>. Triggered by anyone saying "that's impossible to build." Response: ships it by 3am with zero tests and full confidence. Ego lifting at gym, ego shipping in prod.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 p-8 glass-morphism border-accent-color/10 bg-black/20">
            <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-accent-color mb-6 saturate-200 underline decoration-pink-500 underline-offset-8">Bio-Matrix</h4>
                <StatBar label="Hell Energy ⚡" value={82} color="#39ff14" />
                <StatBar label="Coffee ☕" value={30} color="#ff1493" />
                <StatBar label="Gym Lift 🏋️" value={100} color="#fff" />
                <StatBar label="Sleep 💀" value={0} color="#333" />
            </div>
            <div className="space-y-6">
                <h4 className="text-xs font-black uppercase tracking-widest text-secondary-accent mb-6 saturate-200 underline decoration-green-500 underline-offset-8">Dark Arts Stack</h4>
                <div className="flex flex-wrap gap-2 text-[9px] font-black uppercase">
                    {['PyTorch', 'Transformers', 'LoRA', 'LangGraph', 'RAG', 'Kafka', 'Mistral'].map(s => (
                        <span key={s} className="px-3 py-1 bg-white/5 border border-white/10 rounded-sm">
                            {s}
                        </span>
                    ))}
                </div>
                <div className="mt-8">
                    <h4 className="text-xs font-black uppercase tracking-widest opacity-40 mb-4 italic">Recent Summoning:</h4>
                    <p className="text-xs opacity-60 font-medium">"Fine-tuned a model before the pre-workout kicked in."</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main data-scroll-container className="bg-[#0d1117]">
      <CustomCursor />
      <Header />
      
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-accent-color origin-left z-[100]" style={{ scaleX }} />

      <Hero />

      <section id="work" className="py-20 px-10 md:px-20 bg-[#0d1117] flex flex-col gap-4">
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent-color text-xs font-black uppercase tracking-[0.5em]"
        >
            The Sacred Scrolls
        </motion.div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-[10vw] font-black uppercase tracking-tighter leading-none"
            >
            SELECTED <br /> <span className="accent-gradient">ARTIFACTS</span>
            </motion.h2>
            <p className="max-w-xs text-xs opacity-50 uppercase font-bold tracking-widest leading-loose">
                A catalog of experiments in agent orchestration, fine-tuning, and the dark arts of RAG. Enter the crypt at your own risk.
            </p>
        </div>
      </section>

      <HorizontalScrollProjects />

      <OpenSourceSection />

      <Cp />

      <About />

      {/* Footer / Contact */}
      <section id="contact" className="py-40 px-10 md:px-20 text-center flex flex-col items-center justify-center min-h-screen bg-[#0d1117] relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
            <h2 className="text-[30vw] font-black uppercase leading-none text-white overflow-hidden whitespace-nowrap">DASEEKER DASEEKER DASEEKER</h2>
        </div>
        
        <h2 className="text-[14vw] font-black uppercase tracking-tighter mb-10 text-gradient relative z-10 italic">SUMMON ME</h2>
        <motion.div
            className="flex flex-col gap-6 relative z-10"
        >
            <MagneticButton
              className="text-4xl px-16 py-8 glass-morphism border-4 border-accent-color hover:bg-accent-color hover:text-black transition-all font-black uppercase tracking-tighter"
              onClick={() => window.open('mailto:amitmishra4447@gmail.com')}
            >
              SIGNAL THE WIZARD
            </MagneticButton>
            <div className="flex gap-10 justify-center text-4xl opacity-50 mt-10">
              <a href="https://github.com/DaSeeker67" target="_blank" rel="noreferrer" className="hover:text-accent-color hover:scale-125 transition-all"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/amitmishrar2d2/" target="_blank" rel="noreferrer" className="hover:text-secondary-accent hover:scale-125 transition-all"><FaLinkedin /></a>
              <a href="https://twitter.com/idkamit_" target="_blank" rel="noreferrer" className="hover:text-accent-color hover:scale-125 transition-all"><FaTwitter /></a>
            </div>
        </motion.div>
        
        <p className="mt-40 opacity-30 text-[10px] font-black tracking-widest uppercase">© 2026 Crafted by Amit Mishra · FUELED BY HELL ENERGY · BUILT BY EGO</p>
      </section>
    </main>
  );
}

export default App;
