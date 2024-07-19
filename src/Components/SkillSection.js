import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaPython, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaDocker, FaAws, FaLinux, FaJava, FaSpring } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiSpringboot, SiKubernetes, SiJenkins, SiTerraform } from 'react-icons/si';

const skills = {
    languages: [
        { name: 'JavaScript', icon: <FaJs size={40} />, color: '#F7DF1E', specialized: true },
        { name: 'Python', icon: <FaPython size={40} />, color: '#306998', specialized: true },
        { name: 'Java', icon: <FaJava size={40} />, color: '#007396' },
        { name: 'HTML5', icon: <FaHtml5 size={40} />, color: '#E34F26' },
        { name: 'CSS3', icon: <FaCss3Alt size={40} />, color: '#1572B6' },
    ],
    frameworks: [
        { name: 'React', icon: <FaReact size={40} />, color: '#61DBFB', specialized: true },
        { name: 'Node.js', icon: <FaNodeJs size={40} />, color: '#68A063', specialized: true },
        { name: 'Express', icon: <SiExpress size={40} />, color: '#000000' },
        { name: 'Spring Boot', icon: <SiSpringboot size={40} />, color: '#6DB33F' },
    ],
    other: [
        { name: 'MongoDB', icon: <SiMongodb size={40} />, color: '#47A248' },
        { name: 'SQL', icon: <FaDatabase size={40} />, color: '#336791' },
        { name: 'Git', icon: <FaGitAlt size={40} />, color: '#F05032' },
    ],
    devops: [
        { name: 'Docker', icon: <FaDocker size={40} />, color: '#0db7ed' },
        { name: 'Kubernetes', icon: <SiKubernetes size={40} />, color: '#326CE5' },
        { name: 'AWS', icon: <FaAws size={40} />, color: '#FF9900' },
        { name: 'Jenkins', icon: <SiJenkins size={40} />, color: '#D24939' },
        { name: 'Terraform', icon: <SiTerraform size={40} />, color: '#623CE4' },
        { name: 'Linux', icon: <FaLinux size={40} />, color: '#FCC624' },
    ],
};

const SkillSection = () => {
    const [activeTab, setActiveTab] = useState('languages');
    const [showDropdown, setShowDropdown] = useState(false);

    const handleDropdownChange = (e) => {
        setActiveTab(e.target.value);
        setShowDropdown(false);
    };

    return (
        <div className="min-h-screen font-Montserrat bg-[#F5EFE6] flex flex-col justify-center items-center p-10">
            <motion.h1
                className="text-5xl font-bold mb-10 font-Saira"
                style={{ fontFamily: 'AnimeAce' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <span className=' font-Saira text-4xl text-[#4F4A45]'>Skills</span>
                
            </motion.h1>
            <div className="hidden md:flex space-x-4 mb-8">
                {Object.keys(skills).map((tab) => (
                    <motion.button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 rounded-md text-lg ${activeTab === tab ? 'bg-[#322C2B] text-[#FFF2E3]' : 'bg-[#EBE3D5] text-[#322C2B]'} transition-colors duration-300`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </motion.button>
                ))}
            </div>
            <div className="md:hidden w-full mb-8 f">
                <select
                    className="w-full px-4 py-2 rounded-md text-lg bg-[#EBE3D5] text-[#322C2B]"
                    value={activeTab}
                    onChange={handleDropdownChange}
                >
                    {Object.keys(skills).map((tab) => (
                        <option key={tab} value={tab}>
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </option>
                    ))}
                </select>
            </div>
            <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 md:grid-cols-3 gap-10 font-Poppins"
            >
                {skills[activeTab].map((skill) => (
                    <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="relative flex flex-col items-center p-6 bg-[#322C2B] text-[#FFF2E3] rounded-lg shadow-lg border-2 border-[#322C2B] box-shadow-[5px_5px_0px_0px_#322C2B] font-mono"
                    >
                        {skill.specialized && (
                            <span className="absolute top-0 right-4 bg-[#FFF2E3] border-2 border-[#322C2B] text-[#322C2B] text-xs font-bold px-2 py-1 rounded-bl-md transform translate-x-1/2 -translate-y-1/2">
                                Primary
                            </span>
                        )}
                        <motion.div
                            className="mb-4"
                            style={{ color: skill.color }}
                            whileHover={{ scale: 1.2, rotate: -5 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            {skill.icon}
                        </motion.div>
                        <h2 className="text-2xl font-bold">{skill.name}</h2>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default SkillSection;
