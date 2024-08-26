import aboutImg from '../assets/about.jpg';
import { aboutContent } from '../constants';
import { motion } from 'framer-motion';

function About() {
  return (
    <div id='about' className="border-b border-neutral-900 py-40">
        <h1 className="my-20 text-center text-4xl">About
            <span className="text-neutral-500"> Me</span>
        </h1>
        <div className="flex flex-wrap">
            <motion.div 
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x:0, opacity: 1 }}
                transition={{ duration:0.5, delay: 0 }}
                className="w-full lg:w-1/2 lg:p-8"
            >
                <div className="flex items-center justify-center">
                    <img className='rounded-2xl' src={aboutImg} alt="About Image" />
                </div>           
            </motion.div>
            <motion.div 
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x:0, opacity: 1 }}
                transition={{ duration:0.5, delay: 0 }}
                className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className='my-2 max-w-xl py-6'>{aboutContent}</p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About;