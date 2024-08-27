import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <div className='border-t border-neutral-700 text-center py-10 sm:py-20'>
        <p className='text-xl text-neutral-400'>&copy; {new Date().getFullYear()} Amenyo Sedem</p>
    </div>
  )
}

export default Footer;