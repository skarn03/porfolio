import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDocker, FaAws, FaPython, FaGithub } from 'react-icons/fa';

const ProjectDetails = ({ project, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <motion.div
                className="bg-[#F5EFE6] p-8 rounded-lg max-w-2xl w-full"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">{project.name}</h2>
                    <button onClick={onClose} className="text-[#322C2B] font-bold text-xl">
                        &times;
                    </button>
                </div>
                <img src={project.imageUrl} alt={project.name} className="rounded-lg mb-4" />
                <p>{project.details}</p>
                <div className="flex justify-between mt-4">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-[#322C2B] text-[#F8FAE5] py-2 px-4 rounded-md flex items-center">
                        <FaGithub className="mr-2" /> GitHub
                    </a>
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="bg-[#322C2B] text-[#F8FAE5] py-2 px-4 rounded-md flex items-center">
                        Live Demo
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectDetails;
