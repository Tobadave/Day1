import { heroData } from "../constants";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center py-25 text-center bg-white 
      [background-image:linear-gradient(to_right,rgba(0,0,0,0.05)_2px,transparent_2px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] 
      [background-size:100px_100px]">

      {heroData.map((item, index)=>(
        <div key={index} className="flex flex-col items-center font-normal pt-20">     
        <div 
          className="bg-green-100 text-gray-800 border-1
          text-sm rounded-sm p-2 border-gray-300">
            {item.info}</div>  

        <span className="uppercase text-6xl my-5 font-semibold">
          <h1 className="text-gray-900 mb-2">
            {item.title}
          </h1>
          <h2 className="text-blue-600 m-0">
            {item.title2}
          </h2>
        </span>
          
          <p className="mt-4 text-gray-600 max-w-2xl">
            {item.subtitle}
          </p>

        <div className="flex gap-1 my-5">
        {item.btnText.map((btn, index)=>(
          <button key={index} className="btn">
            {btn}
          </button>
        ))}
          <button className=""></button>
        </div>
        </div>
      ))}
    </section>
  );
}

export default HeroSection
