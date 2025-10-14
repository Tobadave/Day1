import React from 'react'
import { footer, navbar } from '../constants'
import { NavLink } from 'react-router-dom';

const Footer = () => {

    const data  = footer[0]; 

  return (
    <>
        <footer>
            <div className='justify-center'>
                <h1>{data.h1}</h1>
                <h1>{data.details}</h1>

                <button className='btn'>
                    {data.btnText}
                </button>

            <hr className="w-3/4 my-6 border-gray-500" />
            </div>

            {/* icons */}
            <div className='flex md:flex-row lg:w-2/4 h-auto gap-2'>

                <span className='flex flex-col
                justify-between flex-1'>
                    <img src="" alt="Logo" />
                    <h1 className='text-sm'>{data.info}</h1>
                    
                    <div className='flex flex-row gap-2'>
                        {data.down.map((item, idx)=>(
                            <div key={idx}>
                                <item.icons size={25} />
                            </div>
                        ))}
                    </div>
                </span>

                <span className='flex flex-col flex-1'>
                    <h1 className='font-bold md:text-lg mb-3'>{data.h2}</h1>
                    {navbar.map((item, idx)=>(
                        <NavLink
                            key={idx}
                            to={item.path}
                            
                            className='hover:underline'
                            >
                                {item.name}
                        </NavLink>
                    ))}
                </span>
            </div>
        
        </footer>
    </>
  )
}

export default Footer