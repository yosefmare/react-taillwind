import {useState} from 'react'
import CardComponent from "./components/CardComponent"
import HeroComponent from "./components/HeroComponent"
import Buttons from "./components/navbar/Buttons"
import NavBarComponent from "./components/navbar/NavBarComponent"
import navContext  from "./context/navbar-context"


const App = () => {
  const [viability, setViability] = useState<boolean>(false)


  return (
    <div>
      <navContext.Provider value = {{viability, setViability}}>
      <NavBarComponent />
      <div className={viability ? 'absolute lg:hidden sm: block my-3' : 'absolute sm: hidden my-3'}>
        <Buttons />
      </div>
      <HeroComponent />
      <div className=" my-10 grid lg:grid-cols-3 md:grid-cols-2 sm: grid-cols-1 gap-10 mx-5">
        <CardComponent />
      </div>
      </navContext.Provider>
    </div>
  )
}

export default App
