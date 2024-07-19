import React, { useState } from "react";

export default function Navbar({ bannerRef, helloRef, skillRef, projectRef }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const scrollToRef = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="bg-[#3E3838] md:w-1/2 font-Montserrat flex flex-row justify-between items-center mt-2 p-4  shadow-md rounded-l-full rounded-r-full w-full fixed top-0 left-0 right-0 mx-auto z-50 ">
            <div className="pl-8 text-[#F8FAE5]">Web Developer</div>

            <div className="block sm:hidden">
                <button onClick={toggleMenu} className="text-[#F8FAE5] focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
                {isOpen && (
                    <div className="absolute right-4 mt-5 bg-[#322C2B] p-2 rounded-md shadow-md">
                        <ul className="flex flex-col text-[#F8FAE5]">
                            <li className="mx-2 my-1" onClick={() => scrollToRef(bannerRef)}>Home</li>
                            <li className="mx-2 my-1" onClick={() => scrollToRef(helloRef)}>About</li>
                            <li className="mx-2 my-1" onClick={() => scrollToRef(skillRef)}>Skills</li>
                            <li className="mx-2 my-1" onClick={() => scrollToRef(projectRef)}>Projects</li>


                            {/* Add more list items here as needed */}
                        </ul>
                    </div>
                )}
            </div>

            <ul className="hidden sm:flex justify-center text-[#F8FAE5]">
                <li className="mx-2 sm:mx-4 cursor-pointer " onClick={() => scrollToRef(bannerRef)}>Home</li>
                <li className="mx-2 sm:mx-4 cursor-pointer" onClick={() => scrollToRef(helloRef)}>About</li>
                <li className="mx-2 sm:mx-4 cursor-pointer" onClick={() => scrollToRef(skillRef)}>Skills</li>
                <li className="mx-2 sm:mx-4 cursor-pointer" onClick={() => scrollToRef(projectRef)}>Projects</li>


                {/* Add more list items here as needed */}
            </ul>
        </nav>
    );
}
