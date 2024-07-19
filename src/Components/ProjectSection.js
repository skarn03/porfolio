import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { SiShopify, SiGooglechat, SiWorkplace, SiDiscord } from 'react-icons/si';

const techIcons = {
    React: <SiShopify />,
    'Node.js': <SiGooglechat />,
    Express: <SiWorkplace />,
    MongoDB: <SiDiscord />,
    'Tailwind CSS': <SiWorkplace />,
};

const projects = [
    {
        title: 'E-commerce Platform',
        description: 'A platform to build and manage e-commerce websites with no coding skills required.',
        techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
        githubUrl: 'https://github.com/username/ecommerce-platform',
        liveDemoUrl: 'https://ecommerce-platform.demo',
        images: ['ecommerce1.jpg', 'ecommerce2.jpg', 'ecommerce3.jpg'],
        icon: <SiShopify />,
    },
    {
        title: 'Project Collaboration',
        description: 'A platform for project collaboration and sharing.',
        techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
        githubUrl: 'https://github.com/username/project-collaboration',
        liveDemoUrl: 'https://project-collaboration.demo',
        images: ['project1.jpg', 'project2.jpg', 'project3.jpg'],
        icon: <SiWorkplace />,
    },
    {
        title: 'Social Media',
        description: 'A social media platform to connect with friends and family.',
        techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
        githubUrl: 'https://github.com/username/social-media',
        liveDemoUrl: 'https://social-media.demo',
        images: ['social1.jpg', 'social2.jpg', 'social3.jpg'],
        icon: <SiGooglechat />,
    },
    {
        title: 'Live Chat Group',
        description: 'A live chat discussion group project.',
        techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
        githubUrl: 'https://github.com/username/live-chat-group',
        liveDemoUrl: 'https://live-chat-group.demo',
        images: ['chat1.jpg', 'chat2.jpg', 'chat3.jpg'],
        icon: <SiDiscord />,
    },
];

const ProjectSection = () => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [activeProject, setActiveProject] = useState(null);
    const [fullScreenImage, setFullScreenImage] = useState(null);
    const [expanded, setExpanded] = useState(false);

    const openOverlay = (project) => {
        setActiveProject(project);
        setShowOverlay(true);
    };

    const closeOverlay = () => {
        setShowOverlay(false);
        setActiveProject(null);
    };

    const openFullScreen = (image) => {
        setFullScreenImage(image);
    };

    const closeFullScreen = () => {
        setFullScreenImage(null);
    };

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    const maxDescriptionLength = 100;

    return (
        <section className="bg-[#F5EFE6] py-6 relative">
            <div className="retro-bg absolute inset-0 opacity-20 pointer-events-none"></div>
            <div className="container mx-auto px-4 ">
                <motion.h1
                    className="text-3xl font-bold mb-6 text-center text-[#322C2B] drop-shadow-lg flex justify-center items-center space-x-2"
                    style={{ fontFamily: 'AnimeAce' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <span className=' text-[#4F4A45] text-4xl text-bold font-Saira'>My Projects</span>
                </motion.h1>
                <div className="grid font-Montserrat grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-M">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#322C2B] text-[#F5EFE6] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform relative mt-10"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="flex items-center space-x-2 mb-4">
                                {project.icon}
                                <h3 className="text-xl font-semibold mb-1 text-[#FFF2E3]">{project.title}</h3>
                            </div>
                            <p className="mb-4 text-[#FFF2E3]">
                                {expanded ? project.description : `${project.description.substring(0, maxDescriptionLength)}...`}
                            </p>
                            <div className="mb-4 my-2">
                                <h4 className="font-semibold text-[#FFF2E3] underline">Tech Stack:</h4>
                                <ul className="flex flex-wrap space-x-2 space-y-2 text-[#FFF2E3] break-words">
                                    {project.techStack.map((tech, idx) => (
                                        <li key={idx} className="flex items-center space-x-1">
                                            {techIcons[tech]}<span>{tech}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#F5EFE6] text-[#322C2B] px-3 py-2 rounded-lg flex items-center justify-center hover:bg-[#FFC947] transition-colors"
                                >
                                    <FaGithub className="mr-2" /> GitHub
                                </a>
                                <a
                                    href={project.liveDemoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#F5EFE6] text-[#322C2B] px-3 py-2 rounded-lg flex items-center justify-center hover:bg-[#FFC947] transition-colors"
                                >
                                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                                </a>
                                <button
                                    onClick={() => openOverlay(project)}
                                    className="bg-[#F5EFE6] text-[#322C2B] px-3 py-2 rounded-lg flex items-center justify-center hover:bg-[#FFC947] transition-colors"
                                >
                                    <FaExternalLinkAlt className="mr-2" /> Read More
                                </button>
                            </div>
                            {/* <div className="flex space-x-2 mt-4 overflow-x-auto">
                                {project.images.map((image, idx) => (
                                    <img
                                        key={idx}
                                        src={image}
                                        alt={`${project.title} ${idx + 1}`}
                                        className="w-20 h-20 object-cover rounded cursor-pointer"
                                        onClick={() => openFullScreen(image)}
                                    />
                                ))}
                            </div> */}
                        </motion.div>
                    ))}
                </div>
            </div>

            {showOverlay && activeProject && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg max-w-lg mx-auto text-[#322C2B]">
                        <h2 className="text-2xl font-bold mb-2">{activeProject.title}</h2>
                        <p className="mb-2">{activeProject.description}</p>
                        <div className="mb-2">
                            <h4 className="font-semibold">Tech Stack:</h4>
                            <ul className="flex space-x-2">
                                {activeProject.techStack.map((tech, idx) => (
                                    <li key={idx} className="flex items-center space-x-1">
                                        {techIcons[tech]}<span>{tech}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex items-center space-x-4">
                            <a
                                href={activeProject.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#322C2B] hover:text-[#FF7F50] flex items-center transition-colors"
                            >
                                <FaGithub className="mr-2" /> GitHub
                            </a>
                            <a
                                href={activeProject.liveDemoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#322C2B] hover:text-[#FF7F50] flex items-center transition-colors"
                            >
                                <FaExternalLinkAlt className="mr-2" /> Live Demo
                            </a>
                        </div>
                        <button
                            onClick={closeOverlay}
                            className="mt-4 bg-[#322C2B] text-[#F5EFE6] px-4 py-2 rounded-lg hover:bg-[#FFC947] transition-colors"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {fullScreenImage && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                    <img src={fullScreenImage} alt="Full screen" className="max-w-full max-h-full" />
                    <button
                        onClick={closeFullScreen}
                        className="absolute top-4 right-4 text-white text-2xl"
                    >
                        &times;
                    </button>
                </div>
            )}
        </section>
    );
};

export default ProjectSection;
