import { projects } from '@/data'
import { title } from 'process'
import React from 'react'
import { PinContainer } from './ui/3d-pin'

const Recentprojects = () => {
  return (
    <div className="py-20">
    <h1 className="heading">
      A small selection of{" "}
      <span className="text-purple">recent projects</span>
    </h1>
    <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
    {projects.map((item) => (
        <div key={item.id}
        className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >  
              <PinContainer
              title="/ui.aceternity.com"
              href="vashu.com"
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>
          </PinContainer>
        </div>
    ))} 
        </div>
        </div>
  )
}

export default Recentprojects