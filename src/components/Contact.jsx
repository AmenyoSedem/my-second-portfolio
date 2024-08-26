import React from 'react'
import { CONTACT } from '../constants';

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 py-40'>
      <h1 className='my-20 text-center text-4xl'>Contact Me</h1>
      <div className="text-center tracking-tighter">
        <p className='my-4 cursor-pointer'>{CONTACT.address}</p>
        <p className='my-4 cursor-pointer'>{CONTACT.phoneNo}</p>
        <a href="#" className='border-b'>{CONTACT.email}</a>
      </div>
    </div>
  )
}

export default Contact;