import React from 'react'

const step = [
    {
      number: "1",
      title: "Add Your Details",
      description: "Enter all your Personal, Professional and Family details that you want to show on the Biodata."
    },
    {
      number: "2",
      title: "Choose a Template",
      description: "Select a biodata design from our curated list of templates."
    },
    {
      number: "3",
      title: "Get Biodata on Download",
      description: "Fill the All Details in Form then Genrate biodata"
    }
  ]
  

const Stepsection = () => {
  return (
    <div className="bg-[#FFFFFF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-[80px]">
          <div className="text-left mb-3">
            <h6 className="text-[#1b7261] text-[18px] sm:text-[20px] font-bold Sail-font">Our MarriageBiodata Maker Steps</h6>
            <h2 className="text-[28px] sm:text-[45px] text-[#051145] font-bold">
              Steps to Create Marriage Biodata
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-3">
            {step.map((item, index) => (
              <div key={index}>
                <div className="group transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:rounded-2xl p-6 sm:p-8 text-left max-w-md mx-auto h-[300px] bg-white">
                  <div>
                    <div className="relative w-[100px] h-[100px] flex justify-center items-center text-[#1b7261] text-[32px] font-bold mb-6 overflow-hidden rounded-full bg-[#1B726114]">
                      <span className="z-10 transition-colors duration-300 group-hover:text-white">
                        {item.number}
                      </span>
                      <div className="absolute inset-0 bg-[#1b7261] rounded-full opacity-0 transition-opacity duration-500 delay-500 group-hover:opacity-100"></div>
                      <div className="absolute w-0 h-0 bg-[#1b7261] rounded-full transition-all duration-500 group-hover:w-[200px] group-hover:h-[200px] group-hover:-top-10 group-hover:-left-10"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[#1b7261] font-bold text-[24px]">
                      {item.title}
                    </h3>
                    <p className="text-[#54595F] text-[16px] OpenSans-font">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default Stepsection