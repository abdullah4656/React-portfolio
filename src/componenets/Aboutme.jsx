import React, { useState } from 'react';
import { faArrowRight, faArrowLeft, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Aboutme = () => {
  const [isVisible, setVisible] = useState(false);

  const handlePage = () => {
    setVisible(!isVisible);
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <>
      <div className="flex items-center relative">
      {isVisible ? (<></>):( <> <button
          onClick={handlePage}
          className="focus:ring-2 focus:ring-indigo-600 transition-transform duration-300 hover:scale-105 focus:outline-none m-7 flex items-center gap-2 font-semibold z-20 border-indigo-500 bg-indigo-500 p-3 rounded-md text-white hover:bg-indigo-600"
        >
        
            <>
              About me <FontAwesomeIcon icon={faArrowRight} />
            </>
         
        </button></>
 )}
        <div
          className={`fixed top-0 left-0 h-full w-full bg-black bg-opacity-50 z-10 transition-opacity duration-300 ${
            isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={handleClose} // Close when clicking outside the content
        >
          <div
            className={`w-4/5 mx-auto h-full flex items-center justify-center`}
            onClick={(e) => e.stopPropagation()} // Prevent click inside from closing the section
          >
            <div
              className='p-10 h-auto max-w-full bg-slate-950 text-white rounded-md'
              onClick={handleClose} // Close when clicking anywhere inside the About Me content
            >
              <div className='flex justify-between p-4 bg-transparent'>
                <span className='font-nunito p-3 text-2xl font-semibold text-indigo-500 transition-transform  duration-300   hover:scale-105 '>ABOUT ME</span>
                <button onClick={handleClose} className='text-2xl'>
                  <FontAwesomeIcon icon={faXmark} className='focus:ring-2 focus:ring-slate-950 '/>
                </button>
              </div>
              <p className='p-4 font-nunito'>
              I am a software developer proffesional with a strong background in designing and developing web applications.I have experience with a variety of technologies including Html, CSS, Javascript, React, Python,Django,Django Rest Framework,Rest api's,alongwith proficiency in Bootstrap and Tailwind. I've dedicated myself to improve my skills, particularly in building complex front-end and back-end systems, as well as creating reliable and efficient databases. I would like to work in a company where i can apply myself and push myself to grow more professionally and help organizations.
              </p>
              <ul className='list flex gap-3 flex-wrap p-4'>
                <li className='border border-indigo-200 rounded-3xl p-2'>#python</li>
                <li className='border border-indigo-200 rounded-3xl p-2'>#django</li>
                <li className='border border-indigo-200 rounded-3xl p-2'>#djangorestframework</li>
                <li className='border border-indigo-200 rounded-3xl p-2'>#react</li>
                <li className='border border-indigo-200 rounded-3xl p-2'>#html</li>
                <li className='border border-indigo-200 rounded-3xl p-2'>#restapi</li>
                <li className='border border-indigo-200 rounded-3xl p-2'>#css</li>
                <li className='border border-indigo-200 rounded-3xl p-2'>#javascript</li>
                <li className='border border-indigo-200 rounded-3xl p-2'>#bootstrap</li>
                <li className='border border-indigo-200 rounded-3xl p-2'>#tailwind</li>
              </ul>
              <img className='h-32' src="./src/images/pngwing.com.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
