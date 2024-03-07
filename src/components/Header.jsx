import { motion } from "framer-motion"
// import tech from "../assets/tech.png"
// import circle from "../assets/circle.png"
// import globe from "../assets/globe.png"
import circit from "../assets/circit.png"

const Header = () => {

    const textVariants = {
        hidden: { x: -30, opacity: 0 },
        visible: { x: 0, opacity: 1 }
      };
      const imgVariants = {
        hidden: { x: 30, opacity: 0 },
        visible: { x: 0, opacity: 1 }
      };


  return (
    <section className=" px-10 flex gap-4 w-full sm:h-screen h-auto "id="home">
        {/* text container */}
       <motion.div       
        initial="hidden"
      animate="visible"
      variants={textVariants}
      transition={{ ease: "easeOut", duration: 1 }}
        className="sm:w-full md:w-full lg:w-full xl:w-1/2 lg:h-full  gap-5 flex flex-col justify-center">
        <h1 className=" text-3xl sm:text-5xl font-bold ">The Complete Electrical And IT Infrastructure Services Company</h1>
         <p className=" sm:text-xl text-xs">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod aspernatur reprehenderit, in unde voluptates consectetur consequatur, 
        fugiat iusto quisquam voluptas ducimus cumque ullam, omnis adipisci eligendi voluptatem. Saepe, minus suscipit!</p>
       </motion.div>

       {/* image container */}

       <motion.div
             initial="hidden"
             animate="visible"
             variants={imgVariants}
             transition={{ ease: "easeOut", duration: 1 }}
        className="w-1/2 hidden lg:flex h-full p-10 items-center justify-center">
          <img src={circit} width={500} height={500} alt="" />
       </motion.div>
    </section>
  )
}

export default Header