import { useState } from 'react';
import CardComponent from './components/CardComponent';
import HeroComponent from './components/HeroComponent';
import Buttons from './components/navbar/Buttons';
import NavBarComponent from './components/navbar/NavBarComponent';
import navContext from './context/navbar-context';
import './App.scss'; // Import your CSS file where the transition effect is defined
import TestimonialsComponent from './components/TestimonialsComponent';
import Footer from './components/footer/Footer';

const App = (): JSX.Element => {
  const [viability, setViability] = useState<boolean>(false);

  return (
    <div>
      <navContext.Provider value={{ viability, setViability }}>
        <NavBarComponent />
        <div className=" lg:hidden sm:block my-3 sticky top-[100px]">
          <div className={`transition-div ${viability ? 'show' : 'hide'} `}>
            <Buttons linkType="btn" style="btn-primary" />
          </div>
        </div>
        <HeroComponent />
        <div className="my-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mx-5">
          <CardComponent />
        </div>
        <TestimonialsComponent />
        <Footer/>
      </navContext.Provider>
    </div>
  );
};

export default App;
