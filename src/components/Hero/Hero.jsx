import React from 'react'
import       carPng from "../../assets/car.png";
import yellowCar from "../../assets/banner-car.png";
import { useEffect } from 'react';
import AOS from "aos";

function Hero({theme}) {

    useEffect(()=>{
        AOS.refresh();    
    })
  return (
    <div className="dark:bg-black dark:text-white duration-300">
 <div className="container min-h-[620px] flex">
    <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
      <div data-aos="zoom-in"
      data-aos-duration="1500"
     data-aos-once="false"
     className="order-1 sm:order-2"
     >
<img src={theme==="dark"?carPng:yellowCar}
alt=""
className="sm:scale-125 relative -z-10 max-h-[600px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
/>
</div>
<div className="space-y-5 order-2 sm:order-1 sm:pr-32 ">
  <p data-aos="fade-up" className="text-primary text-2xl font-serif">
Effortless
  </p>
<h1  data-aos="fade-up"
data-aos-delay="600"
className="text-5xl lg:text-7xl font-semibold font-serif">
  Car Rental
</h1>
<p data-aos="fade-up"
data-ao-delay="1000">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis impedit architecto, nemo non similique tempora fugiat aperiam, tempore, rerum at amet vero.
 Vel ipsum odit laudantium, quaerat veritatis voluptatum accusantium Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus numquam quas suscipit reprehenderit beatae delectus, maxime, explicabo natus voluptas dolorem blanditiis. Soluta illo iusto saepe ipsam hic culpa fuga. Sequi!
</p>
<button 
data-aos="fade-up"
data-aos-delay="1500"
onClick={()=>{
  AOS.refreshHard(); 
}}
className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-1 px-4 text-black">
  Get Started
</button>
</div>
    </div>

        </div>
      
    </div>
  )
}

export default Hero
