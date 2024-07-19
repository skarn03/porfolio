import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";

export default function Banner() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    // Increase the range of the y transformation for a more noticeable parallax effect
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);

    // Transformations for fading out "Sahil Karn"
    const sahilKarnOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

    // Adjust these to make "My Portfolio" appear at the right time
    const portfolioTextOpacity = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
    const portfolioTextY = useTransform(scrollYProgress, [0.2, 0.5], [30, 40]);

    return (
        <div
            ref={ref}
            className=" bg-[#F5EFE6] w-full h-screen overflow-hidden relative grid place-items-center"
        >
            <motion.h1
                initial={{ opacity: 1, y: 50 }} // Initial state with fade effect
                animate={{ opacity: 1, y: 0 }} // Final state with fade effect
                transition={{ duration: 1, ease: "easeOut" }} // Duration and easing of the animation
                style={{ opacity: sahilKarnOpacity, y: textY }}
                className="font-bold font-Saira flex items-center justify-center text-center text-[#4e4d4c] text-7xl md:text-9xl relative z-10   "
            >
                Sahil Karn
            </motion.h1>

            <motion.h1
                transition={{ duration: 1, ease: "easeOut" }} // Duration and easing of the animation
                style={{ opacity: portfolioTextOpacity, y: portfolioTextY }}
                className="absolute font-Saira   transform -translate-x-1/2 font-bold font-Poppins text-[#4F4A45] text-7xl md:text-9xl mt-60   z-20"
            >
                My Portfolio
            </motion.h1>

            <motion.div
                className="absolute inset-0 z-0 pt-30"
                style={{
                    backgroundImage: `url("https://i.pinimg.com/originals/38/5b/e5/385be5861cc8475fe78683b161fec4ce.gif")`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    opacity: '95%',
                    y: backgroundY,
                }}
            />
            
        </div>
    );
}
