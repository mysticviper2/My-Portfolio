import { logoIconsList } from '../constants'; 

// Component for individual logo icon
const LogoIcon = ({ icon }) => {
  return (
    <div className='flex-none flex-centre marquee-item'>
      {/* Render icon image with alt as name */}
      <img src={icon.imgPath} alt={icon.name} />
    </div>
  );
};

// Main LogoSection component with infinite marquee scroll effect
const LogoSection = () => {
  return (
    <div className='md:my-20 my-10 relative'>
      
      {/* Gradient edge overlays for fade-in/out scroll effect */}
      <div className='gradient-edge' />
      <div className='gradient-edge' />
      
      {/* Marquee container for horizontal logo scrolling */}
      <div className='marquee h-52'>
        <div className='marquee-box md:gap-12 gap-5'>

          {/* Render each icon twice for seamless infinite scroll effect */}
          {logoIconsList.map((icon, index) => (
            <LogoIcon key={index} icon={icon} />
          ))}

          {logoIconsList.map((icon, index) => (
            <LogoIcon key={index + '-duplicate'} icon={icon} />
          ))}

          {/* Optional: If you want to use name as key (in case icons are unique), uncomment this */}
          {/* 
          {logoIconsList.map((icon) => (
            <LogoIcon key={icon.name} icon={icon} />
          ))}
          {logoIconsList.map((icon) => (
            <LogoIcon key={icon.name + '-2'} icon={icon} />
          ))} 
          */}

        </div>
      </div>
    </div>
  );
};

export default LogoSection;
