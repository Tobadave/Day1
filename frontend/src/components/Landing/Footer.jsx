import React from 'react'
import { footer, navbar, mainlogo } from '../constants'
import { NavLink } from 'react-router-dom';

const Footer = () => {

    const data  = footer[0]; 

  return (
    <>
        <footer className='flex flex-col'>

            {/* powered by */}
            <div className=''>
                <div className='flex flex-col items-center h-80 md:py-10 text-center
                justify-center'>
                    <h1
                    className='text-3xl font-semibold font pb-2
                    tracking-wide'>{data.top}</h1>
                    <h1 className='w-1/2 font-light tracking-tight'>{data.abt}</h1>
                </div>
            </div>
            {/* Ready to Start Your Journey? */}
            <div className='flex flex-col justify-center items-center gap-5 py-10 h-100'>
                <h1 className='text-3xl font-semibold'>{data.h1}</h1>
                <h1 className='w-3/5 text-center
                text-gray-400'>{data.details}</h1>

                <button className='btn w-fit mt-5'>
                    {data.btnText}
                </button>

                {/* <hr className="w-full border-gray-500" /> */}
            </div>




            {/* icons */}
            <div className='flex md:flex-row lg:w-2/4 gap-2 mb-20'>

                <span className='flex flex-col
                justify-between flex-1 gap-7'>
                    {/* logo */}
                    <img src={mainlogo} alt="Logo" className='
                    w-40'/>

                    {/* Empowering */}
                    <h1 className='text-sm w-3/4 text-gray-300'>{data.info}</h1>
                    
                    {/* social links */}
                    <div className='flex flex-row gap-4'>
                        {data.down.map((item, idx)=>(
                            <div key={idx}>
                                <item.icons size={23} />
                            </div>
                        ))}
                    </div>
                </span>


                {/* Quick Links */}
                <span className='flex flex-col flex-1 justify-start'>
                    <h1 className='font-semibold md:text-[16px] mb-3'>{data.h2}</h1>
                    
                    {/* nav lists */}
                    <div className='flex flex-col text-sm md:text-[13.5px] 
                                text-gray-200 font-light'>
                        {navbar.map((item, idx)=>(
                            <NavLink
                                key={idx}
                                to={item.path}
                                
                                className='hover:underline pb-1'
                                >
                                    {item.name}
                            </NavLink>
                        ))}
                    </div>
                </span>
            </div>
        
        </footer>
    </>
  )
}

export default Footer