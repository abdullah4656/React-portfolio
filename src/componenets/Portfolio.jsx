import React from 'react'

const Portfolio = () => {
  return (
    <><div className="  font-serif p-5 flex flex-wrap items-center justify-center font-bold text-5xl  mb-6">

    Portfolio
</div>
    <div className='flex gap-10 p-5 font-nunito portfolio-cards '>
        
        <div className='card bg-slate-50 text-black rounded-md shadow-2xl hover:bg-indigo-700 hover:text-slate-50 cursor-pointer'>
        <h2 className=' text-4xl p-5 font-semibold font-nunito'>Blogs Project</h2>
          <img className='p-3' src="./src/images/blogs.png" alt="" />
          <p className='p-3 '>
            A blogs project  where users can post  blogs by signing in.
          </p>
          <p className='p-3 text-xl'>Made with Django Template Engine</p>
      
        </div>
        <div className='card bg-slate-50 text-black fomt  rounded-md shadow-2xl  hover:bg-indigo-700 hover:text-slate-50 cursor-pointer '>
        <h2 className='text-4xl p-5 font-semibold font-nunito'>API Project</h2>
          <img className='p-3' src="./src/images/adv.png" alt="" />
          <p className='p-3 '> Advocate profile project where different advocates can mae their profiles share their social links  </p>
           <p className='p-3 text-xl'>Made with Django Rest API</p>       
        </div>
        <div className='card bg-slate-50 text-black rounded-md shadow-2xl  hover:bg-indigo-700 hover:text-slate-50 cursor-pointer'>
         <h2 className=' text-4xl p-5 font-semibold font-nunito'>Crud Project</h2>
          <img className='p-3' src="./src/images/curd.png" alt="" />
          <p className='p-3 '>Simple crud project  where users can create, edit, delete and view data</p>
          <p className='p-3 text-xl'>Made with Django and its Template Engine</p>
        </div>

        </div>
        
        </>
    
  )
}

export default Portfolio