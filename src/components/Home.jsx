import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";

import { ReactTyped } from "react-typed";
import pic from "../../public/logo.png"

function Home() {
  return (
    <>
    <div  name="Home" 
    className="max-w-screen-2x1 container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
           <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
             <span className="tect-xl">Welcome In My Feed</span>
               <div className="flex space-x-1 text-2xl md:text-4xl">
                 <h1>Hello, I'm a</h1>
                {/*  <span className="text-orange-700 font-bold">Developer</span>*/}
                <ReactTyped
                className="text-pink-500 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
               </div>
            <br/>
            <p className=" text-sm md:text-md text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, recusandae consequatur. Accusamus sint libero eligendi laborum fuga repudiandae? Asperiores tempore eos animi dolores corrupti! Sint quos, mollitia architecto aliquam nesciunt, optio cum delectus sit voluptatum aut ratione quaerat veniam aperiam
            </p>
            <br />
            {/*social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
         <div className="space-y-1">
            <h1 className="font-bold">Available On</h1>
            <ul className="flex space-x-5">
                 <li>
                    <a href="https://www.facebook.com/" target="_blank">
                 <FaFacebookSquare className="text-2xl cursor-pointer" color="blue" />
                 </a>
                 </li>
                 <li>
                 <a href="https://telegram.org/" target="_blank">
                    <FaTelegramPlane className="text-2xl cursor-pointer" color="#0088cc"/>
                    </a>
                 </li>
                 <li> 
                 <a href="https://www.youtube.com/" target="_blank">
                    <FaYoutube className="text-2xl cursor-pointer" color="red"/>
                    </a>
                 </li>
                 <li>
                 <a href="https://in.linkedin.com/" target="_blank">
                    <FaLinkedin className="text-2xl cursor-pointer" color="#0077B5"/>
                    </a>
                 </li>
            </ul>
        </div>
        {/*Currently working icons icons */}
        <div className="space-y-1">
            <h1 className="font-bold">Currently working On</h1>
            <div className="flex space-x-5">
            <DiJavascript className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
            <FaReact  className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
            <IoLogoNodejs  className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
             
             

            </div>
            </div>
        </div>
        </div>
        <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1" >
        <img src={pic} className="rounded-full md:w-[450px] md:h-[450]" alt="" />
        </div>
        </div>
    </div>
   
    <hr />
    </>
  )
}

export default Home
