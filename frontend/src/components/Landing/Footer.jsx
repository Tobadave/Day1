import React from 'react'
import { footer, navbar, mainlogo } from '../constants'
import { NavLink } from 'react-router-dom';

const Footer = () => {

    const data  = footer[0]; 

  return (
    <>
        <footer className=''>
            <div className='flex flex-col items-center gap-8'>
                <h1 className='text-3xl font-semibold'>{data.h1}</h1>
                <h1 className='w-3/5 text-center
                text-gray-400'>{data.details}</h1>

                <button className='btn w-fit'>
                    {data.btnText}
                </button>

            <hr className="w-full my-10 border-gray-500" />
            </div>

            {/* icons */}
            <div className='flex md:flex-row lg:w-2/4 md:h-40 
            text-[13px] gap-2 mb-10 font-semibold'>

                <span className='flex flex-col
                justify-between flex-1'>
                    <img src={mainlogo} alt="Logo" className='
                    w-40'/>
                    <h1 className=''>{data.info}</h1>
                    
                    <div className='flex flex-row gap-2'>
                        {data.down.map((item, idx)=>(
                            <div key={idx}>
                                <item.icons size={25} />
                            </div>
                        ))}
                    </div>
                </span>

                <span className='flex flex-col flex-1 justify-between'>
                    <h1 className='font-bold md:text-lg mb-3'>{data.h2}</h1>
                    
                    <div className='flex flex-col'>
                        {navbar.map((item, idx)=>(
                            <NavLink
                                key={idx}
                                to={item.path}
                                
                                className='font-light hover:underline
                                text-gray-200'
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