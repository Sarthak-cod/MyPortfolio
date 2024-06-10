import React from 'react'
import css from "../../public/css3.jpg"
import java from "../../public/java2.jpg"
import javascri from "../../public/javascript.png"
import nodejs from "../../public/node.png"

import reactjs from "../../public/react2.webp"


const Portfolio = () => {
    const cardItem = [
        {
          id: 1,
          logo: css,
          name: "css",
        },
        {
          id: 2,
          logo: javascri,
          name: "javaScripte",
        },
        {
          id: 3,
          logo: reactjs,
          name: "ReactJS",
        },
        {
          id: 4,
          logo: nodejs,
          name: "NodeJS",
        },
        
        
        {
          id: 5,
          logo: java,
          name: "Java",
        },
    ];

  return (
    <div
    name="Portfolio"
    className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
   > <div>
    <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
    <span className=" underline font-semibold">Featured Projects</span>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
                <a href="https://www.youtube.com/watch?v=kGA5L9VsCS4&t=504s" target="_blank"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  Video
                </button></a>
                <a href="https://github.com/" target="_blank"><button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Source code
                </button> </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio