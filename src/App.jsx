import CradSection from "./components/CradSection"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Services from "./components/Services"


const App = () => {
  return (
    <div className=" main z-10 overflow-x-hidden  w-full flex flex-col bg-gradient-to-tl  to-orange-400  from-violet-600  text-black">
        
        <Navbar/>
        <Header/>
        <CradSection/>
        <Services/>
        <Projects/>
        <Footer/>
    {/* from-[#203A43] to-[#2C5364] */}
    </div>
  )
}

export default App
