import React from 'react';
import { delay, motion } from 'framer-motion';

const headVariants = (duration) => ({
    initial: {x: -10},
    animate: {
        x: [20, -20],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const QuickChat = () => {
  return (
    <div id='chat' className='border-b border-neutral-900 py-40'>
      <motion.h1 
        variants={headVariants(2)}
        initial="initial"
        animate="animate"
        className='bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text tracking-tight text-transparent my-20 text-center text-4xl'
      >
        Quick Chat
      </motion.h1>
      <div className="">
            <form className='mt-40 mb-20 text-center justify-center' action="https://formspree.io/f/mvgpdoaz" method='post'>
                <div className="my-10">
                    <label htmlFor="name" hidden>Name</label>
                    <input className='text-xl text-neutral-400 bg-transparent border border-neutral-500 rounded-2xl p-2 pl-5 py-3 h-20 sm:h-14' type="text" name='name' id='name'  placeholder='Name' required/>
                </div>

                <div className="py-10">
                    <label htmlFor="name" hidden>Email</label>
                    <input className='text-xl text-neutral-400 bg-transparent border border-neutral-500 rounded-2xl pl-5 py-3 h-20 sm:h-14' type="Email" name='email' id='email'  placeholder='Email' required/>
                </div>

                <div className="py-10">
                    <label className='' htmlFor="name" hidden>Message</label>
                    <textarea className='text-xl text-neutral-400 bg-transparent border border-neutral-500 rounded-2xl pl-5 pt-3 h-80 sm:h-60' name='message' id='message'  placeholder='Message' required></textarea>
                </div>
                <input className="my-10 border border-neutral-600 py-4 px-8 rounded-2xl cursor-pointer" id='submit' type="submit" value="Submit"/>
            </form>
      </div>
    </div>
  )
}

export default QuickChat;