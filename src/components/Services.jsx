import { motion } from "framer-motion"
import circle from "../assets/circle.png"

const Services = () => {
  return (
    <div className=" w-full mt-10 px-4 py-8 gap-40 flex flex-col items-center justify-center">

        <div className=" items-center justify-center flex">
            <h1 className="sm:text-6xl text-3xl font-bold ">Our Services</h1>
        </div>

        <div className=" w-full flex gap-4 flex-col ">

          <motion.div
             initial={{ opacity: 0, x: -50  }}
             whileInView={{ opacity: 1, x:0 }}
             transition={{delay: 0.2}}
             className=" bg-black p-1 flex items-center justify-start sm:w-1/3 w-full"style={{ clipPath: 'polygon(0 0, 90% 0%, 100% 100%, 0% 100%)' }}>
            <h1 className=" sm:text-4xl text-xl text-white font-semibold p-4">IT Infrastructure Services</h1>
          </motion.div>

          {/* image*/}
          <div className=" h-[30rem]"></div>
          
          <motion.div
            initial={{ opacity: 0, x: 50  }}
            whileInView={{ opacity: 1, x:0 }}
            transition={{delay: 0.2}}
           className=" w-full flex justify-end">
                 <div className=" bg-black sm:w-1/3 w-full p-1 flex justify-end"style={{ clipPath: 'polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)' }}>
                 <h1 className=" sm:text-4xl text-xl text-white font-semibold p-4">IT Infrastructure Services</h1>
                 </div>
          </motion.div>

          <div className=" bg- flex items-center overflow-hidden justify-center w-full mt-10">
              <motion.div className=" relative"
                  animate={{ rotate: 360 }}
                  initial={{opacity: 0.5}}
                  transition={{ ease: "linear", duration: 30, repeat: Infinity }}>
                <img src={circle} width={600}  alt="" />
              </motion.div>
              <div className=" absolute sm:w-3/4 px-2 w-full sm:text-2xl  items-center justify-center flex text-center text-white sm:font-semibold ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Quibusdam vitae dolores officiis accusamus illum sapiente,
                  cum et numquam tenetur ut, natus, id distinctio ullam? 
                  Eligendi ea quo expedita iure necessitatibus?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Fugiat provident ea molestiae cum neque expedita iste assumenda 
                   fuga eaque necessitatibus quasi esse, corrupti ipsa minus nulla Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Dignissimos fugiat quisquam atque quae enim.
                
              </div>
          </div>
    

         </div>

        <div className=" w-full flex justify-center items-center flex-col gap-10">

         <h1 className=" text-4xl font-semibold ">Solutions</h1> 
         <ul className="steps w-3/4 steps-vertical lg:steps-horizontal">
             <li data-content="O" className="step">Network Management Solution</li>
             <li data-content="O" className="step">Enterprise converge Management Solution</li>
             <li data-content="O" className="step">BYOD & GUEST Management</li>
             <li data-content="O" className="step">LBS & LOT</li>
             <li data-content="O" className="step">Data Center & Storage</li>
             <li data-content="O" className="step">GPON Solutions</li>
         </ul>

         <div className=" flex flex-col gap-10 mt-10 w-full">
              <div className=" flex flex-col items-center justify-center">
                <h1 className="sm:text-4xl text-2xl font-semibold">Network Management Solutions</h1>
                <hr className=" w-72 text-center border border-gray-700 mt-5" />
              </div>

              <div className=" flex flex-wrap w-full items-center p-8 justify-center">

                <div className="p-10 flex flex-col gap-4 items-center justify-center">
                <button className="btn btn-ghost text-3xl sm:text-2xl"><i className="fa-solid fa-route fa-xl"></i></button>
                  <span className="sm:text-xl font-semibold">Routing & Switching</span>
                </div>

                <div className="p-10 flex flex-col gap-4 items-center justify-center">
                <button className=" btn btn-ghost text-3xl sm:text-2xl"><i className="fa-solid fa-gear"></i></button>
                  <span className="sm:text-xl font-semibold">NMS</span>
                </div>

                <div className="p-10 flex flex-col gap-4 items-center justify-center">
                <button className="btn btn-ghost text-3xl sm:text-2xl"><i className="fa-solid fa-network-wired"></i></button>
                  <span className="sm:text-xl font-semibold">Network Security</span>
                </div>

                <div className="p-10 flex flex-col gap-4 items-center justify-center">
                <button className="text-3xl btn btn-ghost sm:text-2xl"><i className="fa-solid fa-globe"></i></button>
                  <span className="sm:text-xl font-semibold">Wireless Solutions</span>
                </div>

                
                <div className="p-10 flex flex-col gap-4 items-center justify-center">
                <button className="text-3xl btn btn-ghost sm:text-2xl"><i className="fa-solid fa-wifi"></i></button>
                  <span className="sm:text-xl font-semibold">Wifi Guest Management Solution</span>
                </div>
                 
                 
                <div className="p-10 flex flex-col gap-4 items-center justify-center">
                  <button className="text-3xl btn btn-ghost sm:text-2xl"><i className="fa-solid fa-plug"></i></button>
                  <span className="sm:text-xl font-semibold">Cabeling Services</span>
                </div>

              </div>
         </div>

      </div>
    </div>
  )
}

export default Services