import React from 'react';
import TitleHeader from '../components/TitleHeader'; // Reusable section header
import { testimonials } from '../constants'; // Testimonial data (name, image, feedback, etc.)
import GlowCard from '../components/GlowCard';

const Testimonials = () => {
  return (
    <section id='testimonials' className='flex-centre section-padding'>
      <div className='w-full h-full md:px-10 px-5'>
        
        {/* Section Title */}
        <TitleHeader 
          title='What People Say About Me?' 
          sub='🌟Client Feedback Highlights' 
        />
        
        {/* Testimonial Cards Layout */}
        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map((testimonial, index) => (
            <GlowCard card={testimonial} key={index} index={index}>
              
              {/* Testimonial Content */}
              <div className="flex items-center gap-3">
                
                {/* Profile Image */}
                <div>
                  <img src={testimonial.imgPath} alt={`${testimonial.name}'s profile`} />
                </div>
                
                {/* Name & Title */}
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-white-50">{testimonial.mentions}</p>
                </div>
              </div>

            </GlowCard>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Testimonials;
