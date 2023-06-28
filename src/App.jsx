import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Socials } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
         <div className="bg-hero-pattern bg-cover bg-no-repeatbg-center">
            <Navbar/>
            <Hero/>
         </div>
           <About />
           <Experience />
           <Tech />
           <Works />
           <Feedbacks />
           <Socials />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
      </div>
    </BrowserRouter>
    
  )
  
}

export default App
