import React from 'react'
import CarPng from "../../assets/car1.png";

function About() {
  return (
    <div className="dark:bg:dark bg-slate-100 dark:text-yellow-900 sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
    <div className="container">
     <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">

      
      
      <div data-aos="slide-right" data-aos-duration="1500">
        
      <img 
src={CarPng}
alt=""
className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadw-[2px_10px_6px_rgba(0,0,0,0.50)]"

/>
</div>
<div>
  <div className="space-y-5 p-6">
<h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold font-erif sm:pb-6 text-yellow-700">
ABOUT US
</h1>
<p data-aos="fade-up" className="leading-8 tracking-wide-1">
  Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat natus corrupti cupiditate, accusamus fuga facere, ipsam odit exercitationem sit rerum assumenda ratione necessitatibus consequatur. Repellat, ab! Mollitia molestias ipsum praesentium!.
</p>

<button data-aos="fade-up" className="button-outline border-2 border-yellow-500 hover:bg-yellow-900 rounded-xl hover:text-white p-1"
>
  GET Started
</button>

  </div>
</div>
        </div>   
        </div>  
    </div>
  )
}

export default About
