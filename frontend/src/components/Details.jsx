import React from 'react'
import { partners } from './constants'



const Details = () => {
  return (
    <>
    <div>
       {partners.map((index, item)=>(
        <div key={index}>
            <h1 className='text-white'>
                {item.title}</h1>
            
            <div className=''>
                <img src={partners} alt="" className='w-10'/>
            </div>
        </div>

       ))} 
    </div>

    <div></div>
    </>
  )
}

export default Details