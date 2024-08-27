import React from 'react'
import { CONTACT } from '../constants';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 py-40'>
      <motion.h1 
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0 }}
        className='my-20 text-center text-4xl'
      >Contact Me
      </motion.h1>

      <div className="text-center tracking-tighter">
        <motion.p 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0 }}
          className='my-4 cursor-pointer'
        >
          {CONTACT.address}
        </motion.p>

        <motion.p 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0 }}
          className='my-4 cursor-pointer'
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a href="#" className='border-b'>{CONTACT.email}</a>
      </div>
    </div>
  )
}

export default Contact;