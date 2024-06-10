import React, { useState } from 'react'
import pic from "../../public/img3.avif"
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-scroll";

const Navbar = () => {
    const [menu,setMenu]=useState(false)
    const navItems=[
        {
            id:1,
            text:"Home"
        },
        {
            id:2,
            text:"About"
        },
        {
            id:3,
            text:"Portfolio"
        },
        {
            id:4,
            text:"Experiance"
        },
        {
            id:5,
            text:"Contacts"
        },
    ]
  return (
    <>
    <div className="max-w-screen-2x1 container mx-auto px-4 md:px-20 h-18 shadow-md fixed top-0 right-0 left-0 z-50 bg-white ">
        <div className="flex justify-between items-center h-18">
            <div className='flex space-x-2'>
                <img src={pic} className="h-12 w-13 rounded-full" alt="" />
                <h1 className="font-semibold text-xl cursor-pointer">Sartha<span className="text-orange-500 text-2xl">k</span>
                <p className=" text-sm">Web Developer</p>
                </h1>
            </div>
            {/* desktop navbar */}
            <div>
                <ul className="hidden md:flex space-x-8">
                    {navItems.map(({id,text})=>(
                        <li className="hover:scale-105 duration-200 cursor-pointer" key={id}><Link
                        to={text}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        activeClass="active"
                      >
                        {text}
                      </Link>
                      </li>
                    ))}  
                </ul>
                <div onClick={()=> setMenu(!menu)} className="md:hidden"> { menu? <RxCross2 size={24}/>:<IoMdMenu size={24}/>}</div>
            </div>
        </div>
         {/* mobile navbar  */}
            {menu && (
                <div>
                <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3">
                {navItems.map(({id,text})=>(
                        <li className="hover:scale-105 duration-200 font-semibold cursor-pointer" key={id}><Link 
                        onClick={()=> setMenu(!menu)}
                        to={text}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        activeClass="active"
                      >
                        {text}
                      </Link></li>
                    ))} 
                </ul>

           </div>

            )}
            
       </div>
    </>
  )
}

export default Navbar