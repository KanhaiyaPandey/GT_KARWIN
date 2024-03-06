import { motion } from "framer-motion"


const CradSection = () => {



  return (

    <motion.div 
    initial={{ opacity: 0, x:50  }}
    whileInView={{ opacity: 1, x:0 }}
    transition={{duration:1, ease: "easeOut"}}
   className="w-full sm:flex flex-row px-4 ">

       <motion.div 
       className=" w-full p-8  justify-center gap-3 flex-col flex items-center ">
       <div className=" text-center  rounded-lg p-1">
            <h1 className=" text-3xl font-bold">Our Moto</h1>
         </div>
         <div className=" text-center font-semibold text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Tempora iure ea sunt, atque optio ex. Lorem ipsum dolor sit 
            amet consectetur adipisicing elit. Labore unde sit minus ratione 
            accusantium facere?
         </div>
       </motion.div>

 
       <motion.div 
       className=" w-full p-8  justify-center gap-3 flex-col flex items-center ">
       <div className=" text-center  rounded-lg p-1">
            <h1 className=" text-3xl font-bold">Our Mission</h1>
         </div>
         <div className=" text-center font-semibold text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Tempora iure ea sunt, atque optio ex. Lorem ipsum dolor sit 
            amet consectetur adipisicing elit. Labore unde sit minus ratione 
            accusantium facere?
         </div>
       </motion.div>

       <motion.div 
       className=" w-full p-8  justify-center gap-3 flex-col flex items-center ">
       <div className=" text-center  rounded-lg p-1">
            <h1 className=" text-3xl font-bold">We Belive</h1>
         </div>
         <div className=" text-center font-semibold text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Tempora iure ea sunt, atque optio ex. Lorem ipsum dolor sit 
            amet consectetur adipisicing elit. Labore unde sit minus ratione 
            accusantium facere?
         </div>
       </motion.div>

    </motion.div>

  )
}

export default CradSection