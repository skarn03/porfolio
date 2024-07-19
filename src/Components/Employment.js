import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaSyncAlt } from 'react-icons/fa';
import { SiJavascript, SiReact, SiCss3 } from 'react-icons/si';
import { GiGraduateCap, GiOfficeChair, GiTechnoHeart, GiAchievement } from 'react-icons/gi';

const experienceData = [
    {
        stage: 'Amateur',
        avatar: GiGraduateCap,
        company: 'First Company',
        role: 'Intern',
        location: 'Remote',
        period: 'Jan 2015 - Dec 2016',
        description: [
            'Assisted in developing web applications.',
            'Learned about industry standards.',
            'Gained hands-on experience with HTML, CSS, and JavaScript.',
        ],
        skills: [SiJavascript, SiCss3],
        projects: [
            'Developed a personal blog using HTML/CSS.',
            'Contributed to open-source projects.'
        ],
        technologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
        stage: 'Junior',
        avatar: GiOfficeChair,
        company: 'Second Company',
        role: 'Junior Developer',
        location: 'Remote',
        period: 'Jan 2017 - Dec 2018',
        description: [
            'Worked on small-scale projects.',
            'Improved coding skills and practices.',
            'Collaborated with senior developers.',
        ],
        skills: [SiJavascript, SiReact, SiCss3],
        projects: [
            'Built a responsive website for a local business.',
            'Implemented interactive features using JavaScript.'
        ],
        technologies: ['JavaScript', 'React', 'CSS']
    },
    {
        stage: 'Mid-level',
        avatar: GiTechnoHeart,
        company: 'Third Company',
        role: 'Mid-level Developer',
        location: 'Remote',
        period: 'Jan 2019 - Dec 2020',
        description: [
            'Led project teams for web development.',
            'Enhanced performance of existing applications.',
            'Mentored junior developers.',
        ],
        skills: [SiJavascript, SiReact, SiCss3],
        projects: [
            'Oversaw the development of an e-commerce platform.',
            'Optimized existing web applications for performance.'
        ],
        technologies: ['JavaScript', 'React', 'CSS', 'Node.js']
    },
    {
        stage: 'Professional',
        avatar: GiAchievement,
        company: 'Current Company',
        role: 'Senior Developer',
        location: 'Remote',
        period: 'Jan 2021 - Present',
        description: [
            'Leading major projects.',
            'Defining architecture and best practices.',
            'Driving innovation and development.',
        ],
        skills: [SiJavascript, SiReact, SiCss3],
        projects: [
            'Architected and developed a large-scale web application.',
            'Implemented a scalable and efficient codebase.'
        ],
        technologies: ['JavaScript', 'React', 'CSS', 'TypeScript']
    },
];

const LifecycleExperience = () => {
    const [selected, setSelected] = useState(3);
    const [rotation, setRotation] = useState(0);
    const controls = useAnimation();
    const containerRef = useRef(null);

    useEffect(() => {
        controls.start({
            rotate: rotation,
            transition: { type: 'spring', stiffness: 300, damping: 30 },
        });
    }, [rotation, controls]);

    const circleRadius = 180;

    const positions = experienceData.map((_, index) => {
        const angle = (index / experienceData.length) * 2 * Math.PI;
        return {
            x: circleRadius * Math.cos(angle),
            y: circleRadius * Math.sin(angle),
        };
    });

    const handleClick = (index) => {
        const stepAngle = 360 / experienceData.length;
        setRotation(stepAngle * index);
        setSelected(index);
    };

    const rotateClockwise = () => {
        const newIndex = (selected + 1) % experienceData.length;
        setSelected(newIndex);
        setRotation((prevRotation) => prevRotation - 360 / experienceData.length);
    };

    return (
        <section className="px-4 py-12 md:px-16 lg:px-32 bg-[#F5EFE6] text-[#4F4A45] overflow-hidden h-full">
            <h2 className="relative z-10 text-4xl font-bold text-center mb-20 font-saira">Lifecycle Experience</h2>
            <div className="flex flex-col md:flex-row justify-center items-center">
                <motion.div
                    ref={containerRef}
                    className="relative mx-10 w-60 h-60 md:w-96 md:h-96 flex items-center justify-center mb-36 mt-16 md:mb-0"
                    animate={controls}
                >
                    <div className="absolute w-full h-full border-2 border-solid border-[#4F4A45] bg-[#F5EFE6] rounded-full" />
                    <motion.div
                        className="absolute cursor-pointer hover:rotate-90 transition-transform duration-500"
                        style={{
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                        }}
                        onClick={rotateClockwise}
                    >
                        <FaSyncAlt className="text-6xl text-[#4F4A45] mb-2 z-10" />
                    </motion.div>
                    {experienceData.map((experience, index) => {
                        const isSelected = selected === index;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isSelected ? 1 : 0.5 }}
                                transition={{ duration: 0.5 }}
                                className="absolute cursor-pointer hover:scale-110 transition-transform duration-500 flex justify-center flex-col items-center"
                                style={{
                                    top: `calc(50% + ${positions[index].y}px)`,
                                    left: `calc(50% + ${positions[index].x}px)`,
                                    transform: `translate(-50%, -50%) rotate(${-rotation}deg)`,
                                }}
                                onClick={() => handleClick(index)}
                            >
                                <experience.avatar className="text-2xl md:text-6xl text-[#4F4A45] mb-2 z-10" />
                                <p className="text-center bg-[#4F4A45] text-[#F5EFE6] rounded-full px-2 py-1">{experience.stage}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
                <div className="relative z-10 p-6 bg-[#322C2B] bg-opacity-90 shadow-lg rounded-lg text-[#f4e2d1] w-full md:w-3/4 lg:w-1/2 mx-auto">
                    <h3 className="text-2xl font-semibold mb-2">{experienceData[selected].role}</h3>
                    <p className="text-lg flex items-center mb-2">
                        <FaBriefcase className="mr-2 text-[#d3bda5]" /> {experienceData[selected].company}
                    </p>
                    <p className="text-sm flex items-center mb-2">
                        <FaMapMarkerAlt className="mr-2 text-[#d3bda5]" /> {experienceData[selected].location}
                    </p>
                    <p className="text-sm flex items-center mb-4">
                        <FaCalendarAlt className="mr-2 text-[#d3bda5]" /> {experienceData[selected].period}
                    </p>
                    <div className="mb-4">
                        <h4 className="text-lg font-semibold mb-2">Projects:</h4>
                        <ul className="list-disc list-inside mb-4">
                            {experienceData[selected].projects.map((project, i) => (
                                <li key={i} className="text-sm">{project}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h4 className="text-lg font-semibold mb-2">Technologies:</h4>
                        <p className="text-sm">{experienceData[selected].technologies.join(', ')}</p>
                    </div>
                    <ul className="list-disc list-inside mb-4">
                        {experienceData[selected].description.map((item, i) => (
                            <li key={i} className="text-sm">{item}</li>
                        ))}
                    </ul>
                    <div className="flex flex-wrap gap-4 mb-4">
                        {experienceData[selected].skills.map((SkillIcon, i) => (
                            <SkillIcon key={i} className={`text-3xl ${SkillIcon === SiJavascript ? 'text-yellow-500' : SkillIcon === SiReact ? 'text-blue-500' : 'text-blue-300'}`} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LifecycleExperience;
