import React from 'react'
import { faq } from '../constants'
// faq

const Faq = () => {
  const data = faq[0];

  return (
    <>
      <div className='py-10'>

        <span>
          {/* title */}
          <div className=''>
            <h1>{data.h1}</h1>
            <p>{data.abt}</p>
          </div>

          {/* question section */}
          <div>
            {data.questions.map((item, idx)=>(
              <div key={idx}>
                <head>
                  <h1>{item.title}</h1>
                </head>

                <div>
                  <p>{}</p>
                </div>
              </div>
            ))
            }
          </div>

        </span>
      </div>
      
    </>
  )
}

export default Faq