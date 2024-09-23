import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


const Navbar = ({ contactFormRef }) => {
  const handleGetInTouchClick = () => {

      contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
    
  };

  return (
    <nav className='flex justify-between m-2 items-center'>
      
    <a href="#">  <img className='logo-img' src="./src/images/name-logo.png" alt="Logo img" /></a>
      <div className="flex gap-6 mr-10 items-center">
      
        <a href="https://wa.me/923054619558" className='text-2xl nav-icons'>
        <FontAwesomeIcon icon={faWhatsapp} bounce size='xl' />
        </a>
        <a  href="tel:+923054619558" className='text-2xl nav-icons'>
        <FontAwesomeIcon icon={faPhone} shake size="xl" />
        </a>
        <button  onClick={handleGetInTouchClick} className='getin font-semibold shadow-2xl flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg focus:ring-2 focus:ring-indigo-600 transition-transform duration-300 hover:scale-105 focus:outline-none'>
        Get in Touch
      </button>
      <div className='hidden getin2'>
      <button onClick={handleGetInTouchClick} className=' rounded-md mx-auto bg-indigo-500 text-white font-nunito p-4 hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-600 transition-transform duration-300 hover:scale-105 focus:outline-none '>Get in Touch</button>
      <a href="https://wa.me/923054619558" className='text-2xl nav-icons2'>
        <FontAwesomeIcon icon={faWhatsapp} bounce size='xl' />
        </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
