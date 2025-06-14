import React from 'react';
import TitleHeader from '../components/TitleHeader';
import { techStackIcons, techStackImgs } from '../constants'; // Data: your tools, libs, and tech stack
import TechIcon from '../components/Models/TechLogos/TechIcon'; // For rendering 3D/animated tech icons
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap/gsap-core';

const TechStack = () => {
  // GSAP Animation: slide-in + fade on scroll into view
  useGSAP(() => {
    gsap.fromTo(
      '.tech-card',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power1.inOut',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '#skills',
          start: 'top center',
        },
      }
    );
  });

  return (
    <div id='skills' className='flex-centre section-padding'>
      <div className='w-full h-full md:px-10 px-5'>
        
        {/* Section Title */}
        <TitleHeader
          title='My Preferred Tech Stack'
          sub='🤝The skills I bring to the table'
        />

        {/* Tech Cards Grid */}
        <div className='tech-grid'>
          {/* 
          Alternate rendering: 3D or animated icons via model viewer
          Uncomment below to use TechIcon component instead of static images
          */}
          {/* {techStackIcons.map((icon) => (
            <div key={icon.name} className='card-border tech-card overflow-hidden group xl:rounded-full rounded-lg'>
              <div className='tech-card-animated-bg' />
              <div className='tech-card-content'>
                <div className='tech-icon-wrapper'>
                  <TechIcon model={icon} />
                </div>
                <div className='padding-x w-full'>
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))} */}

          {/* Static Image Tech Stack Rendering */}
          {techStackImgs.map((icon) => (
            <div
              key={icon.name}
              className='card-border tech-card overflow-hidden group xl:rounded-full rounded-lg'
            >
              <div className='tech-card-animated-bg' />
              <div className='tech-card-content'>
                <div className='tech-icon-wrapper'>
                  {/* Tech Logo */}
                  <img
                    src={icon.imgPath}
                    alt={icon.name}
                    className='w-full h-full object-contain'
                  />
                </div>
                <div className='padding-x w-full'>
                  {/* Tech Name */}
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TechStack;
