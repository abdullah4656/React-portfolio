import React from 'react';

const Into = () => {
  return (
    <div className="flex flex-col items-center   text-center">
      <h2>
        <strong className='font-serif text-6xl text-indigo-500'>Abdullah Yasin</strong>
      </h2>
      <h3 className='text-3xl font-nunito text-indigo-700'>
        Full Stack Developer  
      </h3>  
      <div className="flex flex-col items-center justify-center mt-4">
      <p className="
        p-4 md:p-5         
        w-full md:w-1/2    
        text-base md:text-xl lg:text-2xl 
        font-nunito 
        text-indigo-800 
               /* Hide on small screens, show on medium and larger screens */
      ">
        Make your interactive web applications with backend technology Django or Django REST Framework and frontend with React or Django Template Engine.
      </p>
    </div>
      <br />
      <br />
    </div>
  );
};

export default Into;
