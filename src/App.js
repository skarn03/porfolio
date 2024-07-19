import React, { useRef } from "react";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import AboutMePage from "./Components/Aboutme";
import SkillSection from "./Components/SkillSection";
import ProjectSection from "./Components/ProjectSection";
import ExperienceSection from "./Components/Employment";
function App() {
  const bannerRef = useRef(null);
  const helloRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const experienceRef = useRef(null);

  return (
    <div className="App">
      <Navbar bannerRef={bannerRef} helloRef={helloRef} skillRef={skillRef} projectRef={projectRef} experienceRef={experienceRef}></Navbar>
      <div ref={bannerRef}>
        <Banner></Banner>
      </div>
      <div ref={helloRef} className="h-screen bg-[#DAD3BE]  flex justify-center item-center">
        <AboutMePage></AboutMePage>
      </div>
      <div ref={skillRef}>
        <SkillSection></SkillSection>
      </div>
      <div ref={projectRef}>
        <ProjectSection></ProjectSection>
      </div>
      <div ref={experienceRef}>
        <ExperienceSection></ExperienceSection>
      </div>
    </div>
  );
}

export default App;
