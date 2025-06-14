import { useState } from 'react';
import Globe from 'react-globe.gl';

import AboutButton from '../components/AboutButton.jsx';
import TitleHeader from '../components/TitleHeader.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false); // State to show copy feedback

  // Function to handle copying email to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(' arvind.titiyal00@gmail.com'); // Copies email
    setHasCopied(true); // Trigger feedback icon

    // Reset copy icon after 2 seconds
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  // Uncomment and use if you want to add GSAP animations in the future
  // useGSAP(() => {
  //   gsap.fromTo('c-space my-20', {y: 50, opacity:0}, {
  //     y: 0,
  //     opacity: 1,
  //     duration: 1,
  //     ease: 'power1.inOut',
  //     stagger: 0.2,
  //     scrollTrigger:{
  //       trigger: '#skills',
  //       start: 'top center'
  //     }
  //   });
  // });

  return (
    <section id="about" className="relative flex flex-col items-center justify-center mt-20 w-full h-full overflow-hidden">
      
      {/* Section Heading */}
      <TitleHeader
        title="About Me"
        sub="👋 A little bit about me and my journey"
      />

      {/* Main Grid Layout */}
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 mt-10 h-full">

        {/* Left Grid - Introduction */}
        <div className="col-span-1 xl:row-span-3">
          <div className="w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <img src="assets/grid.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="text-xl font-semibold mb-2 text-white font-generalsans">Hi, I’m Arvind</p>
              <p className="text-[#afb0b6] font-generalsans">
                With 3+ years of experience, I have honed my skills in both frontend and backend dev, creating dynamic
                and responsive websites.
              </p>
            </div>
          </div>
        </div>

        {/* Left Grid - Tech Stack */}
        <div className="col-span-1 xl:row-span-3">
          <div className="w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="text-xl font-semibold mb-2 text-white font-generalsans">Tech Stack</p>
              <p className="text-[#afb0b6] text-base font-generalsans">
                I specialize in a variety of languages, frameworks, LLM's and AI tools that allow me to build robust and scalable
                applications
              </p>
            </div>
          </div>
        </div>

        {/* Center Grid - Interactive Globe & Location Info */}
        <div className="col-span-1 xl:row-span-4">
          <div className="w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            
            {/* Interactive Globe */}
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
            </div>

            {/* Location & Contact Button */}
            <div>
              <p className="text-xl font-semibold mb-2 text-white font-generalsans">
                I’m very flexible with time zone communications & locations
              </p>
              <p className="text-[#afb0b6] text-base font-generalsans">
                I&apos;m based in Bengaluru, India 🏔️ and open to remote work worldwide.
              </p>
              <AboutButton name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        {/* Bottom Grid - Passion Statement */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="text-xl font-semibold mb-2 text-white font-generalsans">My Passion for Coding</p>
              <p className="text-[#afb0b6] text-base font-generalsans">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Right - Email Copy Box */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            {/* Copy to Clipboard Email */}
            <div className="space-y-2">
              <p className="text-[#afb0b6] text-base font-generalsans text-center" href="#contact">Contact me</p>
              <div className="cursor-pointer flex justify-center items-center gap-2" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  arvind.titiyal00@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
