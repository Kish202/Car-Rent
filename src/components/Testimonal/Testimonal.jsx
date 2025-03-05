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

        <div className="container">
<div className="space-y-6 pb-12" >
       <p     data-aos="fade-up"
       className="text-3xl font-semibold text-center sm:text-4xl font-mono ">
        What Our Clients Say about us.
        </p  > 

        <p data-aos="fade-up" className="text-center sm:px-44">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, 
            reprehenderit. Distinctio voluptatum debitis repellat, consequatur, voluptatem officia culpa iure quos voluptates, 
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
