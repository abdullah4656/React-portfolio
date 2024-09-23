import React from 'react'
import { faGlobe } from '@fortawesome/free-solid-svg-icons' // Corrected import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Services = () => {
  return (
    <div className='services-container p-8 z-0 ' >
      <h1 className='text-5xl font-bold mb-6 font-serif '>Services</h1>
      <div className='service-card bg-slate-50 card  cursor-pointer p-6 rounded-lg shadow-2xl'>
        <div className='icon mb-4'>
          <FontAwesomeIcon icon={faGlobe}  className='text-2xl ' />
        </div>
        <h2 className='text-3xl font-semibold mb-2'>Web Development</h2>
        <p className='mb-4'>
          Highly skilled in both client-side and server-side development, I deliver fast, scalable, and secure web applications that exceed expectations.
        </p>
        <ul className='list-disc list-inside space-y-2'>
          <li>Client-Side: Responsive, interactive React applications with reusable, modular codebases.</li>
          <li>Server-Side: Robust, scalable Python Django applications with high performance and reliability.</li>
          <li>API Development: Scalable, well-documented Django Rest APIs with robust security measures.</li>
        </ul>
      </div>
    </div>
  )
}

export default Services
