import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SiLeetcode, SiCodechef, SiCodeforces } from 'react-icons/si';
import { FaTrophy, FaMedal, FaChartLine } from 'react-icons/fa';
import axios from 'axios';

const api_base_url = "https://backend-prt.vercel.app";

function Cp() {
  const [platformData, setPlatformData] = useState({
    leetcode: { loading: true, data: null, error: null },
    codechef: { loading: true, data: null, error: null }
  });
  const [totalSolved, setTotalSolved] = useState("500+"); // Default value until API data is loaded

  // LeetCode username
  const leetcodeUsername = "amitmishra4447";
  // CodeChef username
  const codechefUsername = "batman76";

  useEffect(() => {
    // Fetch LeetCode data
    const fetchLeetCodeData = async () => {
      try {
        const response = await axios.get(`${api_base_url}/leetcode/${leetcodeUsername}`);
        setPlatformData(prev => ({
          ...prev,
          leetcode: {
            loading: false,
            data: response.data,
            error: null
          }
        }));
      } catch (error) {
        console.error("Error fetching LeetCode data:", error);
        setPlatformData(prev => ({
          ...prev,
          leetcode: {
            loading: false,
            data: null,
            error: "Failed to load LeetCode data"
          }
        }));
      }
    };

    // Fetch CodeChef data
    const fetchCodeChefData = async () => {
      try {
        const response = await axios.get(`${api_base_url}/codechef/${codechefUsername}`);
        setPlatformData(prev => ({
          ...prev,
          codechef: {
            loading: false,
            data: response.data,
            error: null
          }
        }));
      } catch (error) {
        console.error("Error fetching CodeChef data:", error);
        setPlatformData(prev => ({
          ...prev,
          codechef: {
            loading: false,
            data: null,
            error: "Failed to load CodeChef data"
          }
        }));
      }
    };

    fetchLeetCodeData();
    fetchCodeChefData();
  }, []);

  useEffect(() => {
    if (!platformData.leetcode.loading && platformData.leetcode.data) {
      const leetcodeSolved = platformData.leetcode.data.totalSolved || 400;
      const codechefSolved = 100; 
      
      setTotalSolved(`${leetcodeSolved + codechefSolved}+`);
    }
  }, [platformData.leetcode.data]);

  const getPlatforms = () => {
    return [
      {
        name: "LeetCode",
        icon: <SiLeetcode className="text-4xl text-yellow-500" />,
        rating: Math.round(platformData.leetcode.data?.contestRating )|| 1645,
        solved: platformData.leetcode.data?.totalSolved ? `${platformData.leetcode.data.totalSolved}+` : "400+",
        loading: platformData.leetcode.loading,
        error: platformData.leetcode.error,
        achievements: [
          `Solved ${platformData.leetcode.data?.totalSolved || "500+"} DSA problems`,
          "Strong problem-solving skills in algorithms",
          "Regular participant in weekly contests"
        ],
        color: "yellow",
        link: "https://leetcode.com/amitmishra4447"
      },
      {
        name: "CodeChef",
        icon: <SiCodechef className="text-4xl text-brown-500" />,
        rating: platformData.codechef.data?.rating || 1613,
        maxRating: platformData.codechef.data?.maxRating || 1613,
        solved: "100+",
        loading: platformData.codechef.loading,
        error: platformData.codechef.error,
        achievements: [
          `Max rating: ${platformData.codechef.data?.maxRating || 1613}`,
          "Solved 100+ problems",
          "Ranked 19 in Starters 153"
        ],
        color: "brown",
        link: "https://www.codechef.com/users/batman76"
      },
    ];
  };

  const platforms = getPlatforms();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 py-16 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Competitive Programming
          </h2>
          <p className="text-xl text-purple-200">
            Solving complex problems across multiple platforms
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-purple-500/30">
            <div className="flex items-center justify-between mb-4">
              <FaChartLine className="text-3xl text-purple-400" />
              <span className="text-2xl font-bold text-white">{totalSolved}</span>
            </div>
            <p className="text-purple-200">Total Problems Solved</p>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-purple-500/30">
            <div className="flex items-center justify-between mb-4">
              <FaTrophy className="text-3xl text-yellow-400" />
              <span className="text-2xl font-bold text-white">
                {platformData.leetcode.data?.contestRating || 1645}
              </span>
            </div>
            <p className="text-purple-200">Highest LeetCode Rating</p>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-purple-500/30">
            <div className="flex items-center justify-between mb-4">
              <FaMedal className="text-3xl text-orange-400" />
              <span className="text-2xl font-bold text-white">Top 13%</span>
            </div>
            <p className="text-purple-200">Leetcode Ranking</p>
          </div>
        </motion.div>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                {platform.icon}
                <h3 className="text-2xl font-bold text-white">{platform.name}</h3>
              </div>

              {platform.loading ? (
                <div className="flex justify-center items-center py-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
                </div>
              ) : platform.error ? (
                <div className="text-red-400 text-center py-2">
                  Could not load data
                </div>
              ) : (
                <>
                  {platform.rating && (
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-purple-200">Rating</span>
                        <span className="text-xl font-bold text-white">
                          {platform.rating}
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className={`bg-${platform.color}-500 h-2 rounded-full`}
                          style={{ width: `${(platform.rating / 3000) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  {platform.maxRating && platform.name === "CodeChef" && (
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-purple-200">Max Rating</span>
                        <span className="text-xl font-bold text-white">
                          {platform.maxRating}
                        </span>
                      </div>
                    </div>
                  )}

                  {platform.solved && (
                    <div className="mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-purple-200">Problems Solved</span>
                        <span className="text-xl font-bold text-white">
                          {platform.solved}
                        </span>
                      </div>
                    </div>
                  )}
                </>
              )}

              <div className="space-y-2">
                {platform.achievements.map((achievement, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: (index * 0.2) + (idx * 0.1) }}
                    className="flex items-start space-x-2"
                  >
                    <span className="text-purple-400">•</span>
                    <p className="text-purple-200 text-sm">{achievement}</p>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block w-full text-center py-2 px-4 rounded-lg bg-purple-600/30 hover:bg-purple-600/50 text-purple-200 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Profile
              </motion.a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Cp;