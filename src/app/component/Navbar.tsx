"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from "../../Assets/logo.png"
import Link from 'next/link';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='bg-transparant text-black h-[50px] w-full flex justify-between items-center px-4 shadow-lg'>
      <h1 className='flex text-3xl font-bold '><Link href={'/'}>Nike</Link><Image src={logo} alt='logo' width={40}/></h1>
      
      
      
      <ul className='hidden md:flex p-8'>
        <li className='p-5 transform transition-transform duration-300 hover:scale-110 hover:font-semibold hover:text-black'><a href='/'>Home</a></li>
        <li className='p-5 transform transition-transform duration-300 hover:scale-110 hover:font-semibold hover:text-black'><a href='/about'>About Us</a></li>
        <li className='p-5 transform transition-transform duration-300 hover:scale-110 hover:font-semibold hover:text-black'><a href='/product'>Product</a></li>
        <li className='p-5 transform transition-transform duration-300 hover:scale-110 hover:font-semibold hover:text-black'><a href='/team'>Team</a></li>
        <li className='p-5 transform transition-transform duration-300 hover:scale-110 hover:font-semibold hover:text-black'><a href='/blog'>Blog</a></li>
      </ul>


      <div onClick={handleNav} className=' md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>

      <div className={nav ? 'z-10 fixed h-full left-0 top-0 w-[60%] bg-[white] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='text-3xl font-bold primary-color m-4'>Nike</h1>
        <ul className='p-3 text-2xl'>
          <li className='p-2'><a href='/'>Home</a></li>
          <li className='p-2'><a href='/about'>About Us</a></li>
          <li className='p-2'><a href='/product'>Product</a></li>
          <li className='p-2'><a href='/team'>Team</a></li>
          <li className='p-2'><a href='/blog'>Blog</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
