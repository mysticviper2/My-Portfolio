import LogoSection from './sections/LogoSection.jsx'
import NavBar from './components/NavBar.jsx'
import About from './sections/About.jsx';
import FeatureCards from './sections/FeatureCards.jsx'
import Hero from './sections/Hero.jsx'
import Projects from './sections/Projects.jsx'
import Experience from './sections/Experience.jsx'
import TechStack from './sections/TechStack.jsx'
import Testimonials from './sections/Testimonials.jsx'
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx'

const App = () => {
  return (
    <>
        <NavBar/>
        <Hero/>
        <About />
        <Projects/>
        {/* <LogoSection /> */}
        <FeatureCards />
        <Experience/>
        <TechStack />
        <Testimonials />
        <Contact />
        <Footer />
    </>
  )
}

export default App