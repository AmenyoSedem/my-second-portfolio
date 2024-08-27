import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiDjango } from "react-icons/di";
import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y:0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0 }}
            className="my-20 text-center text-4xl "
        >Technologies</motion.h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate" 
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <RiReactjsLine className="text-4xl text-cyan-400"/>
            </motion.div>

            <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate" 
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <TbBrandNextjs className="text-4xl"/>
            </motion.div>

            <motion.div 
                variants={iconVariants(3.5)}
                initial="initial"
                animate="animate" 
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <DiMongodb className="text-4xl text-green-500"/>
            </motion.div>

            <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate" 
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <DiRedis className="text-4xl text-red-700"/>
            </motion.div>

            <motion.div 
                variants={iconVariants(4.5)}
                initial="initial"
                animate="animate" 
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <FaNodeJs className="text-4xl text-green-500"/>
            </motion.div>

            <motion.div 
                variants={iconVariants(5)}
                initial="initial"
                animate="animate" 
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <BiLogoPostgresql className="text-4xl text-sky-600"/>
            </motion.div>

            <motion.div 
                variants={iconVariants(5.5)}
                initial="initial"
                animate="animate" 
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <DiDjango className="text-4xl text-green-900"/>
            </motion.div>
        </div>
    </div>
  )
}

export default Technologies
