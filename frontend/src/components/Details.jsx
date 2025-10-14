import React from 'react'
import { partners } from './constants'



const Details = () => {
  return (
    <>
    <div>
       {partners.map((item, index)=>(
        <div className='flex flex-col'>

            {/* Our partners */}
            <div key={index} className='flex flex-col items-center'>
                <h1 className='text-white text-2xl my-2 font-semibold'>
                    {item.title}</h1>

            {/* the logo's */}
                    <div className='flex flex-row gap-3 justify-evenly my-2'>
                        {item.partners.map((list, index)=>(
                            <div key={index} className='items-center flex'>
                                <img src={list} alt="" className='w-30' />
                            </div>
                        ))}
                    </div>
            </div>

            <hr className='mx-10 my-3' />

            <div className='flex flex-col'>
                <span className='flex flex-row justify-between my-2 gap-4 px-8'>
                    <div className='flex-1 text-xl font-bold'>
                        {item.aboutText}
                    </div>
                    <div className='flex-1 text-justify'>
                        {item.abouth2}
                    </div>
                </span>

                {/* the numbers */}
                <span className='flex flex-row justify-evenly my-8 gap-10'>
                    {item.details.map((list, index)=>(
                        <div key={index} className='flex flex-col items-center'>
                            <h1 className='text-2xl font-bold'>{list.num}</h1>
                            <h1 className='text-sm font-light'>{list.title}</h1>
                        </div>
                    ))}
                </span>  
            </div>
        </div>
       ))} 
    </div>
    </>
  )
}

export default Details