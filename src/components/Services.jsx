import { motion } from "framer-motion"


const Services = () => {
  return (
    <section id="services" className=" w-full mt-10 px-4 py-8 gap-40 flex flex-col items-center justify-center">

        <div className=" items-center justify-center flex">
            <h1 className="sm:text-6xl text-3xl font-bold ">OUR SERVICES</h1>
        </div>

        <div className=" w-full flex gap-4 flex-col ">

          <motion.div
             initial={{ opacity: 0, x: -50  }}
             whileInView={{ opacity: 1, x:0 }}
             transition={{delay: 0.0}}
             className=" bg-black p-1 flex items-center rounded-2xl justify-start sm:w-1/2 w-auto">
            <h1 className=" sm:text-xl md:text-2xl xl:text-4xl lg:text-3xl text-white font-semibold p-4">IT INFRASTRUCTURE SERVICES</h1>
          </motion.div>

          {/* image*/}
          <div className=" h-[30rem]"></div>
          
          <motion.div
            initial={{ opacity: 0, x: 50  }}
            whileInView={{ opacity: 1, x:0 }}
            transition={{delay: 0.2}}
           className=" w-full flex justify-end">
                 <div className=" bg-black sm:w-1/2 w-full rounded-2xl flex justify-centre items-center">
                 <h1 className=" sm:text-xl md:text-2xl xl:text-4xl lg:text-3xl text-white font-semibold p-4">NETWORK INFRASTRUCTURE</h1>
                 </div>
          </motion.div>

          <motion.div
                   initial={{ opacity: 0, x: 50  }}
                   whileInView={{ opacity: 1, x:0 }}
                   transition={{delay: 0.4}}
           className=" bg- flex items-center p-4 overflow-hidden justify-center bg-black h-[20rem] w-full mt-2 rounded-2xl  sm:overflow-hidden overflow-y-scroll">

              <p className="sm:px-10 p-0  text-start text-white sm:font-semibold font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Quibusdam vitae dolores officiis accusamus illum sapiente,
                  cum et numquam tenetur ut, natus, id distinctio ullam? 
                  Eligendi ea quo expedita iure necessitatibus?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Fugiat provident ea molestiae cum neque expedita iste assumenda 
                   fuga eaque necessitatibus quasi esse, corrupti ipsa minus nulla Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Dignissimos fugiat quisquam atque quae enim.
                
              </p>
          </motion.div>
    

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

              <div className="flex flex-wrap w-full gap-4 items-center justify-center">

             <div className=" px-4 flex flex-col gap-4 items-center justify-center sm:w-1/2 xl:w-1/4">
               <button className="btn btn-ghost text-xl sm:text-2xl"><i className="fa-solid fa-route fa-xl"></i></button>
               <span className="sm:text-lg font-semibold">Routing & <br /> Switching</span>
             </div>

             <div className="p-4 flex flex-col gap-4 items-center justify-center sm:w-1/2 xl:w-1/4">
               <button className=" btn btn-ghost text-xl sm:text-2xl"><i className="fa-solid fa-gear"></i></button>
               <span className="sm:text-xl font-semibold">NMS</span>
             </div>

             <div className="p-4 flex flex-col gap-4 items-center justify-center sm:w-1/2 xl:w-1/4">
               <button className="btn btn-ghost text-xl sm:text-2xl"><i className="fa-solid fa-network-wired"></i></button>
               <span className="sm:text-xl font-semibold">Network <br /> Security</span>
             </div>

             <div className="p-4 flex flex-col gap-4 items-center justify-center sm:w-1/2 xl:w-1/4">
               <button className="text-xl btn btn-ghost sm:text-2xl"><i className="fa-solid fa-globe"></i></button>
               <span className="sm:text-xl font-semibold">Wireless <br /> Solutions</span>
             </div>

             <div className="p-4 flex flex-col gap-4 items-center justify-center sm:w-1/2 xl:w-1/4">
               <button className="text-xl btn btn-ghost sm:text-2xl"><i className="fa-solid fa-wifi"></i></button>
               <span className="sm:text-xl font-semibold">Wifi Guest <br /> Management <br />Solution</span>
             </div>

            <div className="p-4 flex flex-col gap-4 items-center justify-center sm:w-1/2 xl:w-1/4">
              <button className="text-xl btn btn-ghost sm:text-2xl"><i className="fa-solid fa-plug"></i></button>
              <span className="sm:text-xl font-semibold">Cabling <br /> Services</span>
            </div>

            </div>

         </div>



        </div>


        {/* AV Integration And Solution */}
          
          <div className=" w-full flex gap-10 flex-col lg:flex-row">

            <div className=" lg:w-1/2 w-full">
          <motion.div
             initial={{ opacity: 0, x: -50  }}
             whileInView={{ opacity: 1, x:0 }}
             transition={{delay: 0.2}}
             className=" bg-black p-1 flex items-center justify-start w-full rounded-2xl">
            <h1 className=" sm:text-xl md:text-2xl xl:text-4xl lg:text-3xl text-white font-semibold p-4">AV INTEGRATION & AUTOMATION</h1>
          </motion.div>
            <motion.div
               initial={{ opacity: 0, x: -50  }}
               whileInView={{ opacity: 1, x:0 }}
               transition={{delay: 0.3}}
             className=" bg-black flex justify-center px-10 w-full mt-4 rounded-2xl  items-center text-white h-[20rem] sm:h-[20rem] sm:overflow-hidden overflow-y-scroll">
                <p className="sm:mt-0 mt-auto text-start sm:font-semibold font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci tenetur
                   consequatur, maiores explicabo esse unde, itaque iure deserunt numquam corrupti
                    labore quas ipsum blanditiis cumque omnis, quibusdam exercitationem. Numquam optio
                     debitis ipsum ab fugit obcaecati voluptates minus ipsam autem aut ad magni, quibusdam,
                      ea assumenda, blanditiis deserunt! Vero cum, recusandae incidunt earum dolorum dignissimos 
                      quos, minima assumenda quidem voluptate ipsum, architecto asperiores. Porro, explicabo. Possimus 
                      suscipit esse dicta neque sint laudantium reiciendis illo asperiores cupiditate quo consequuntur 
                      fugiat numquam dolores quae, soluta cum temporibus qui ratione, 
                  necessitatibus iste accusantium officia. Tempore quis nisi animi veniam aperiam reprehenderit dolorem vero eveniet.</p>
            </motion.div>
          </div>
             
            <motion.div
             initial={{ opacity: 0, x: -50  }}
             whileInView={{ opacity: 1, x:0 }}
             transition={{delay: 0.7}}
            className=" lg:w-1/2 w-full flex flex-col h-auto justify-start px-10">
              <h1 className=" text-3xl font-semibold text-center lg:text-start mb-12">Solutions</h1>
             <ul className="steps steps-vertical  font-semibold text-lg">
              <li className="step">Corporate Office Space Like Board rooms</li>
              <li className="step">Command & Control Rooms, NOC & Socs</li>
              <li className="step">Audio Visual Systems for Stadium, Aduitoriums & Theaters</li>
              <li className="step">Tele-Medicine Solution</li>
              <li className="step">Retail Segment Digital Sinages</li>
              <li className="step">Distance Learning Solution</li>
              <li className="step">Way Finding & Navigation System</li>
            </ul>
           </motion.div>    
          </div>


           {/* SAFETY AND SECURITY  */}


          <div className=" w-full flex-col">

          <div className="w-full">
          <motion.div
             initial={{ opacity: 0, x: -50  }}
             whileInView={{ opacity: 1, x:0 }}
             transition={{delay: 0.2}}
             className=" bg-black p-1 flex items-center justify-start md:w-1/2 w-full rounded-2xl">
            <h1 className=" sm:text-xl md:text-2xl xl:text-4xl lg:text-3xl text-white font-semibold p-4">SAFETY & SECURITY </h1>
          </motion.div>
            <motion.div
               initial={{ opacity: 0, x: -50  }}
               whileInView={{ opacity: 1, x:0 }}
               transition={{delay: 0.3}}
             className=" bg-black flex justify-center px-0 sm:px-10 w-full mt-4 rounded-2xl  items-center text-white h-[20rem] sm:h-[20rem] sm:overflow-auto overflow-y-scroll">
                <p className=" sm:mt-0 mt-auto text-start sm:font-semibold font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci tenetur
                   consequatur, maiores explicabo  esse unde, itaque iure deserunt numquam corrupti
                    labore quas ipsum blanditiis cumque omnis, quibusdam exercitationem. Numquam optio
                     debitis ipsum ab fugit obcaecati voluptates minus ipsam autem aut ad magni, quibusdam,
                      ea assumenda, blanditiis deserunt! Vero cum, recusandae incidunt earum dolorum dignissimos 
                      quos, minima assumenda quidem voluptate ipsum, architecto asperiores. Porro, explicabo. Possimus 
                      suscipit esse dicta neque sint laudantium reiciendis illo asperiores cupiditate quo consequuntur 
                      fugiat numquam dolores quae, soluta cum temporibus qui ratione, 
                 </p>
            </motion.div>
          </div>
              {/* safety and security solutions */}

          <div className=" w-full flex md:flex-row gap-10 flex-col p-4 mt-20">

              <div className=" lg:w-4/12 w-full flex flex-col items-center md:justify-start justify-center">
              <h1 className=" bg-black text-white rounded-2xl p-4 text-3xl font-semibold text-center lg:text-start mb-5">Solutions</h1>
             <ul className="steps steps-vertical font-semibold text-lg">
              <li className="step">CCT & Surveillance</li>
              <li className="step">Infrastructure Surveillance</li>
              <li className="step">City Surveillance</li>
              <li className="step">Transport Surveillance</li>
              <li className="step">Parking Management</li>
            </ul>
            </div>

               
               
              <div className=" lg:w-4/12 w-full flex flex-col items-center md:justify-start justify-center">
              <h1 className=" bg-black text-white rounded-2xl p-4 text-3xl font-semibold text-center lg:text-start mb-5">Biometric Solutions</h1>
             <ul className="steps steps-vertical font-semibold text-lg">
              <li className="step">Access Control: Human, Vechile</li>
              <li className="step">Time $ Attendence</li>
              <li className="step">Visitor Management</li>
              <li className="step">Workforce Management</li>
              <li className="step">Cantine Management</li>
            </ul>
            </div>

            
            <div className=" lg:w-4/12 w-full flex flex-col items-center md:justify-start justify-center">
              <h1 className=" bg-black text-white rounded-2xl p-4 text-3xl font-semibold text-center lg:text-start mb-5">IP Video Door Phone Solution</h1>
             <ul className="steps steps-vertical font-semibold text-lg">
              <li className="step">Multi Appartment</li>
              <li className="step">Villa</li>
            </ul>
            </div>


          </div>


          </div>

          {/* Enterprise Communication */}

          <div className=" w-full flex flex-col">
                
          <div className="w-full">
          <motion.div
             initial={{ opacity: 0, x: -50  }}
             whileInView={{ opacity: 1, x:0 }}
             transition={{delay: 0.2}}
             className=" bg-black p-1 flex items-center justify-start md:w-1/2 w-full rounded-2xl">
            <h1 className=" sm:text-xl md:text-2xl xl:text-4xl lg:text-3xl text-white font-semibold p-4">ENTERPRISE COMMUNICATION </h1>
          </motion.div>
            <motion.div
               initial={{ opacity: 0, x: -50  }}
               whileInView={{ opacity: 1, x:0 }}
               transition={{delay: 0.3 }}
             className=" bg-black flex justify-center px-10 w-full mt-4 rounded-2xl  items-center text-white h-[20rem] sm:h-[20rem] sm:overflow-hidden overflow-y-scroll">
                <p className=" sm:mt-0 mt-auto text-start sm:font-semibold font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci tenetur
                   consequatur, maiores explicabo  esse unde, itaque iure deserunt numquam corrupti
                    labore quas ipsum blanditiis cumque omnis, quibusdam exercitationem. Numquam optio
                     debitis ipsum ab fugit obcaecati voluptates minus ipsam autem aut ad magni, quibusdam,
                      ea assumenda, blanditiis deserunt! Vero cum, recusandae incidunt earum dolorum dignissimos 
                      quos, minima assumenda quidem voluptate ipsum, architecto asperiores. Porro, explicabo. Possimus 
                      suscipit esse dicta neque sint laudantium reiciendis illo asperiores cupiditate quo consequuntur 
                      fugiat numquam dolores quae, soluta cum temporibus qui ratione, 
                 </p>
            </motion.div>
          </div>

          <div className=" w-full flex flex-col items-center justify-center mt-20">
          <div className="w-full flex flex-col items-center md:justify-start justify-center">
              <h1 className=" bg-black text-white rounded-2xl p-4 text-3xl font-semibold text-center lg:text-start mb-5">Solutions</h1>
             <ul className="steps steps-vertical font-semibold text-lg">
              <li className="step">Enterprise grade communication Platforms with full High availablity </li>
              <li className="step">Unified Communication & Collaboration Solution</li>
              <li className="step">Contact centre Solution - Inbound, Outbound, Blended</li>
              <li className="step">Audio - Video Conferencing / Bridge</li>
              <li className="step">Distance Learning Solution</li>
            </ul>
            </div>

            </div>

          </div>

    </section>
  )
}

export default Services