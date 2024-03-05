import CradSection from "./components/CradSection"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Services from "./components/Services"


const App = () => {
  return (
    <div className=" main z-10 overflow-x-hidden  w-full flex flex-col bg-gradient-to-l  to-blue-600  from-blue-900">
        
        <Navbar/>
        <Header/>
        <CradSection/>
        <Services/>
   
    {/* from-[#203A43] to-[#2C5364] */}
    </div>
  )
}

export default App
