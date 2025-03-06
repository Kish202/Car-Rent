import React from 'react'
const testimonialData = [
    {
      name: "Dilshad",
      image: "",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      aosDelay: "0",
    },
    {
      name: "Satya",
      image: "",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      aosDelay: "300",
    },
    {
      name: "Sabir",
      image: "",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      aosDelay: "1000",
    },
  ];
 

function Testimonal() {
  return (
    <div>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:pb-24">

        <div className="container min-w-full p-0">
<div className="pb-12 px-0 min-w-full bg-yellow-500 rounded-t-xl " >
       
        <p     data-aos="fade-up"
       className="text-2xl font-bold text-center sm:text-3xl font-mono">
        What Our Clients Say about us.
 
        </p  > 


        </div>
<div className="font-semibold sm:text-2xl p-6 flex">
        <p data-aos="fade-up" className="flext justify-start max-sm:text-left pr-10  sm:px-44">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, 
            reprehenderit. Distinctio voluptatum debitis repellat, consequatur, iure quos voluptates, 
            soluta itaque dolor labore nobis? Hic magnam aperiam fugiat.
            
            </p>
        
           

</div>        </div>




<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white">

{
testimonialData.map((item)=>(
    <div
    key={item.name}
    data-aos="fade-up"

    data-aos-delay={item.aosDelay}
    className="text-center group  card space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300 rounded-lg"
    >
        <div className="flex justify-center">
<img

src="https://picsum.photos/200"
alt=""
className="rounded-full w-20 h-20"
/>
        </div>

        <div className="text-2xl">
        ⭐⭐⭐⭐⭐

        </div>

        <p>
     {item.description}     

        </p>

        <p className="text-center font-semibold">
{item.name}
        </p>
    </div>
))
}

</div>
      </div>
    </div>
  )
}

export default Testimonal
