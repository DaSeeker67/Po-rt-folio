import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SiLeetcode, SiCodechef } from 'react-icons/si';
import { FaTrophy, FaMedal, FaChartLine } from 'react-icons/fa';
import axios from 'axios';

const api_base_url = "https://backend-prt.vercel.app";

const StatCard = ({ icon, value, label, delay }) => (
    <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay }}
        className="glass-morphism p-6 flex flex-col items-center text-center group hover:border-accent-color/50 transition-all"
    >
        <div className="text-3xl text-accent-color mb-4 group-hover:scale-110 transition-transform">
            {icon}
        </div>
        <div className="text-3xl font-black text-white mb-1 tracking-tighter">
            {value}
        </div>
        <div className="text-[10px] font-black uppercase tracking-widest opacity-40">
            {label}
        </div>
    </motion.div>
);

function Cp() {
  const [platformData, setPlatformData] = useState({
    leetcode: { loading: true, data: null, error: null },
    codechef: { loading: true, data: null, error: null }
  });
  const [totalSolved, setTotalSolved] = useState("500+");

  const leetcodeUsername = "amitmishra4447";
  const codechefUsername = "batman76";

  useEffect(() => {
    const fetchLeetCodeData = async () => {
      try {
        const response = await axios.get(`${api_base_url}/leetcode/${leetcodeUsername}`);
        setPlatformData(prev => ({
          ...prev,
          leetcode: { loading: false, data: response.data, error: null }
        }));
      } catch (error) {
        setPlatformData(prev => ({
          ...prev,
          leetcode: { loading: false, data: null, error: true }
        }));
      }
    };

    const fetchCodeChefData = async () => {
      try {
        const response = await axios.get(`${api_base_url}/codechef/${codechefUsername}`);
        setPlatformData(prev => ({
          ...prev,
          codechef: { loading: false, data: response.data, error: null }
        }));
      } catch (error) {
        setPlatformData(prev => ({
          ...prev,
          codechef: { loading: false, data: null, error: true }
        }));
      }
    };

    fetchLeetCodeData();
    fetchCodeChefData();
  }, []);

  useEffect(() => {
    if (!platformData.leetcode.loading && platformData.leetcode.data) {
      const leetcodeSolved = platformData.leetcode.data.totalSolved || 400;
      setTotalSolved(`${leetcodeSolved + 100}+`);
    }
  }, [platformData.leetcode.data]);

  const platforms = [
    {
      name: "LeetCode",
      icon: <SiLeetcode />,
      rating: Math.round(platformData.leetcode.data?.contestRating) || 1645,
      solved: platformData.leetcode.data?.totalSolved ? `${platformData.leetcode.data.totalSolved}` : "1746",
      link: "https://leetcode.com/u/amitmishra4447/",
      color: "#f59e0b"
    },
    {
      name: "CodeChef",
      icon: <SiCodechef />,
      rating: platformData.codechef.data?.rating || 1613,
      solved: "100+",
      link: "https://www.codechef.com/users/batman76",
      color: "#8b4513"
    }
  ];

  return (
    <section id="cp" className="py-40 px-10 md:px-20 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
            <div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-secondary-accent text-xs font-black uppercase tracking-[0.5em] mb-4"
                >
                    Problem Solving Matrix
                </motion.div>
                <motion.h2 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="text-7xl font-black uppercase tracking-tighter leading-none"
                >
                    DSA & <span className="accent-gradient">ALGORITHMS</span>
                </motion.h2>
            </div>
            <p className="max-w-xs text-xs opacity-50 uppercase font-bold tracking-widest leading-loose text-right">
                Sacrificing 1700+ problems to the LeetCode gods. 3-star witch on CodeChef. Shipping logic with Big O efficiency.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <StatCard icon={<FaChartLine />} value={totalSolved} label="Mission Successful" delay={0.1} />
            <StatCard icon={<FaTrophy />} value={platforms[0].rating} label="Max LeetCode Rating" delay={0.2} />
            <StatCard icon={<FaMedal />} value="Top 13%" label="Global Standings" delay={0.3} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className="glass-morphism p-10 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-10 text-8xl opacity-5 group-hover:opacity-10 transition-opacity">
                {platform.icon}
              </div>
              
              <div>
                <div className="flex items-center gap-4 mb-8">
                    <div className="text-4xl" style={{ color: platform.color }}>
                        {platform.icon}
                    </div>
                    <h3 className="text-3xl font-black uppercase tracking-tighter">{platform.name}</h3>
                </div>

                <div className="flex gap-10 mb-10">
                    <div>
                        <div className="text-sm font-black uppercase tracking-widest opacity-30">Rating</div>
                        <div className="text-3xl font-black tracking-tighter">{platform.loading ? "..." : platform.rating}</div>
                    </div>
                    <div>
                        <div className="text-sm font-black uppercase tracking-widest opacity-30">Solved</div>
                        <div className="text-3xl font-black tracking-tighter">{platform.loading ? "..." : platform.solved}</div>
                    </div>
                </div>
              </div>

              <motion.a
                href={platform.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 glass-morphism border border-white/10 text-center font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all"
              >
                ACCESS PROTOCOL
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cp;