import { words } from '../constants'
import Button from '../components/Button'
import HeroExperience from '../components/Models/HeroModels/HeroExperience'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import AnimatedCounter from '../components/AnimatedCounter';


const Hero = () => {
    useGSAP(() => {
      gsap.fromTo(".hero-text h1",
                    { 
                        y: 50, 
                        opacity: 0 
                    },
                    { 
                        y: 0, 
                        opacity: 1, 
                        stagger: 0.2, 
                        duration: 1, 
                        ease: "power2.inOut" 	
                    }
                );
    });
  return (
    <section id="hero" className='relative overflow-hidden'>
        <div className='absolute top-0 left-0 z-10'>
            <img src="/images/bg.png" alt="background" />
        </div>

        <div className='hero-layout'>
            {/*left: Hero Content */}
            <header className='flex flex-col justify-centre md: w-full w-screen md:px-20 px-5'>
                <div className='flex flex-col gap-7 max-w-[600px]'>
                    <div className='hero-text'>
                        <h1>
                            Shaping 
                            <span className='slide'>
                                <span className='wrapper'>
                                    {words.map((word, index) => (
                                        <span key={index} className='flex items-centre md:gap-3 gap-1 pb-2'>
                                            <img 
                                                src={word.imgPath} 
                                                alt='person'
                                                className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50' />
                                                <span>
                                                    {word.text}
                                                </span>
                                        </span>
                                    ))}
                                </span>
                            </span>
                        </h1>
                        <h1>with GenAI</h1>
                        <h1>into Real Projects</h1>
                        <h1>that Deliver Results</h1>
                    </div>
                    <p className='text-white-50 md:text-xl relative z-10 pointer-events-none'>
                        Hi, I am Arvind — a passionate software developer from India, building clean, scalable, and user-focused web experiences.
                        From writing elegant C# backend logic to crafting seamless React UIs. Now bringing GenAI into the mix to build stuff that actually thinks.
                    </p>
                    
                    <Button 
                        text='See My Work'
                        className='md:w-80 md:h-16 w-60 h-12'
                        id= 'counter'
                    />
                </div>
            </header>

            {/*Right: 3D Model*/}
            <figure> 
                <div className='hero-3d-layout'>
                    <HeroExperience />                         
                </div>
            </figure>
        </div>
        <AnimatedCounter />
    </section>
  )
}

export default Hero