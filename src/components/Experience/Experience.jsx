import React from "react";

function Experience() {
  return (
    <div className="dark:bg-black dark:text-white text-white ">
      <div className="container  ">
        <div className=" text-center bg-gray-700   rounded-lg hover:text-primary">
          <span className="flex justify-center items-center text-2xl sm:text-2xl md:text-3xl font-semibold mb-2 pb-2 hover:underline">
            Experiences
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          <div
            className="grid grid-rows-2 gap-2 rounded-lg"
            data-aos="zoom-in"
            data-aos-delay="0"
          >
            <div className=" text-center  p-2 rounded-xl bg-dark  ">
              <h1 className="text-3xl font-bold p-6">60+</h1>

              <p className=" font-mono font-bold">Happy Client</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-dark">
              <h1 className="text-3xl font-bold p-6">120+</h1>
              <p className="font-mono font-bold">Completed Projects</p>
            </div>
          </div>

          <div
            className="grid grid-rows-2 gap-2   "
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="text-center p-2  rounded-xl bg-dark">
              <h1 className="text-3xl font-bold p-6">60+</h1>
              <p className="font-mono font-bold">Happy Clients</p>
            </div>
            <div className="text-center p-6  rounded-xl bg-dark">
              <h1 className="text-3xl font-bold p-6">60+</h1>

              <p className="font-mono font-bold">Completed Projects</p>
            </div>
          </div>
          <div
            className="grid grid-rows-2 gap-2  h-full"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <div className="text-center p-6  rounded-xl bg-dark">
              <h1 className="text-3xl font-bold p-6">60+</h1>
              <p className="font-mono font-bold">Happy Clients</p>
            </div>
            <div className="text-center p-6  rounded-xl bg-dark">
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
