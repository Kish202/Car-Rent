import React from "react";

function Experience() {
  return (
    <div className="dark:bg-black dark:text-white text-white">
      <div className="container  border">
        
<div className=" text-center bg-gray-700 p-2 mt-2 mb-2 rounded-lg hover:text-primary"> 
  <h1 className="text-2xl sm:text-4xl md:text-6xl ">Experiences</h1>
</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 border">
        

       

         

          <div className="grid grid-rows-2 gap-4 border h-full rounded-xl "data-aos="zoom-in" data-aos-delay="0" >
            <div className="text-center p-2 bg-dark ">
              <h1 className="text-3xl font-bold p-6">60+</h1>

              <p className=" font-mono font-bold">Happy Client</p>
            </div>

            <div className="text-center p-6 bg-dark">
              <h1 className="text-3xl font-bold p-6">120+</h1>
              <p className="font-mono font-bold">Completed Projects</p>
            </div>
          </div>

          <div className="grid grid-rows-2 gap-4 border h-full " data-aos="zoom-in" data-aos-delay="300">
          
   <div className="text-center p-2 bg-dark">
              <h1 className="text-3xl font-bold p-6">60+</h1>
              <p className="font-mono font-bold">Happy Clients</p>
              </div>
              <div className="text-center p-6 bg-dark">
                <h1 className="text-3xl font-bold p-6">60+</h1>

                <p className="font-mono font-bold">Completed Projects</p>
              </div>
            </div>
            <div className="grid grid-rows-2 gap-4 border h-full" data-aos="zoom-in" data-aos-delay="600">
          
          <div className="text-center p-6 bg-dark">
                     <h1 className="text-3xl font-bold p-6">60+</h1>
                     <p className="font-mono font-bold" >Happy Clients</p>
                     </div>
                     <div className="text-center p-6 bg-dark">
                       <h1 className="text-3xl font-bold">60+</h1>
       
                       <p className="p-6 font-mono font-bold">Completed Projects</p>
                     </div>
                   </div>
       
          
        </div>
      </div>
    </div>
  );
}

export default Experience;
