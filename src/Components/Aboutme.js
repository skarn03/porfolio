import React from 'react';
import { motion, useInView } from 'framer-motion';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';
import img1 from '../Assets/1.jpg'; // Update this path to the correct image path

const AboutMePage = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: false }); // Update `once` to `false` to enable repeated visibility changes

    return (
        <ParallaxProvider>
            <motion.div
                ref={ref}
                className="bg-[#F5EFE6] flex justify-center items-center min-h-screen p-10 w-screen relative overflow-hidden"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <Parallax y={[-20, 20]} className="absolute top-0 left-0 w-full h-full z-0">
                    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjDN7Fegr0Pc951jQyYtLUNTAJedkLQ7amK88NovZQp8kV19AA0aztII7XhCNxBaZ4unh9uTO5clc9V33QWDJpiLNO7fUM4XQr295mCrwA9sq9fRbVm7yIZrrGHiu9cHesmSHiFgMtJeOcj/s1600/1337598953958.gif" alt="Anime Background" className="w-full h-full object-cover opacity-60" />
                </Parallax>
                <motion.div
                    className="bg-[#322C2B] text-[#FFF2E3] p-10 rounded-lg border-8 border-[#EBE3D5] shadow-lg relative z-10 flex flex-col lg:flex-row"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 1 }}
                >
                    <div className="flex justify-center items-center lg:w-1/3 mb-10 lg:mb-0">
                        <motion.img
                            src={img1}
                            alt="Your Image"
                            className="rounded-full w-48 h-48 lg:w-64 lg:h-64 object-cover border-2 border-[#C7B7A3]"
                            initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
                            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: -15 }}
                            transition={{ delay: 1, duration: 1, type: 'spring' }}
                            whileHover={{ scale: 1.1, rotate: 5, transition: { duration: 0.5 } }}
                        />
                    </div>
                    <div className="lg:w-2/3 lg:pl-10 font-Montserrat">
                        <h1 className="text-4xl lg:text-5xl font-Saira font-bold mb-4" style={{ fontFamily: 'AnimeAce' }}>Hi, I'm [Your Name]</h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="mb-4 text-lg hover:scale-105 transition-transform duration-300"
                        >
                            I'm a Product Designer working remotely for [Your Company] on their mobile products in [Your Location].
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="mb-4 text-lg hover:scale-105 transition-transform duration-300"
                        >
                            I've spent the past 12+ years working across different areas of digital design, front-end development, email design, marketing site pages, app UI/UX, to my current role designing products for mobile platforms.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="mb-4 text-lg hover:scale-105 transition-transform duration-300"
                        >
                            These days my time is spent researching, designing, prototyping, and coding. I also help designers get started with their careers.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="mb-4 text-lg hover:scale-105 transition-transform duration-300"
                        >
                            Out of the office, you'll find me dreaming of soccer, playing bass guitar, and petting all the good dogs.
                        </motion.p>
                        <motion.div
                            className="flex space-x-4 mt-4"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: 1.5, duration: 1 }}
                        >
                            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-[#FFF2E3] hover:text-[#C7B7A3] hover:scale-110 transition-transform duration-300">
                                <FaLinkedin size={30} />
                            </a>
                            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-[#FFF2E3] hover:text-[#C7B7A3] hover:scale-110 transition-transform duration-300">
                                <FaGithub size={30} />
                            </a>
                            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-[#FFF2E3] hover:text-[#C7B7A3] hover:scale-110 transition-transform duration-300">
                                <FaTwitter size={30} />
                            </a>
                            <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer" className="text-[#FFF2E3] hover:text-[#C7B7A3] hover:scale-110 transition-transform duration-300">
                                <FaEnvelope size={30} />
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </ParallaxProvider>
    );
};

export default AboutMePage;
