import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useState } from 'react';
import { myProjects } from '../constants/index.js';
import TitleHeader from '../components/TitleHeader';

// Count of all available projects
const projectCount = myProjects.length;

const Projects = () => {
  // Track which project is currently selected
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  // Navigation function to cycle through projects
  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  // Fade-in animation when the selected project changes
  useGSAP(() => {
    gsap.fromTo(
      `.animatedText`,
      { opacity: 0 },
      { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' }
    );
  }, [selectedProjectIndex]);

  // Get the currently selected project
  const currentProject = myProjects[selectedProjectIndex];

  return (
    <section
      id="work"
      className="app-showcase relative flex flex-col items-center justify-center w-full h-full overflow-hidden"
    >

      {/* Section Header */}
      <TitleHeader
        title="Projects – My Work Showcase"
        sub="🚀 A glimpse into my projects and the tech behind them"
      />

      {/* Project Display Card */}
      <div className="gmy-20 mt-12 w-full flex justify-center">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 max-w-[950px] w-full">

          {/* Project Logo Display */}
          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              className="w-10 h-10 shadow-sm"
              src={currentProject.logo}
              alt="logo"
            />
          </div>

          {/* Project Title and Description */}
          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          {/* Tags (Tech Stack Icons) + GitHub Link */}
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index}>
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>

            {/* GitHub link to project */}
            <a
              className="flex items-center gap-2 cursor-pointer text-white-600"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
            >
              <p>GitHub</p>
              <img
                src="/assets/arrow-up.png"
                alt="arrow"
                className="w-3 h-3"
              />
            </a>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mt-7">
            {/* Previous Project */}
            <button
              className="w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full arrow-gradient"
              onClick={() => handleNavigation('previous')}
            >
              <img src="/assets/left-arrow.png" alt="left arrow" />
            </button>

            {/* Next Project */}
            <button
              className="w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full arrow-gradient"
              onClick={() => handleNavigation('next')}
            >
              <img
                src="/assets/right-arrow.png"
                alt="right arrow"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
