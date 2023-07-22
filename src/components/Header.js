import React from 'react';
import ptulogo from './assests/ptulogo.png';
import logotrans from './assests/logotransp.png';
import ieeadva from './assests/ieeadva.png'
import ieeemad from './assests/ieeemad.png'

import {Link} from 'react-router-dom';

import {RiTimeLine} from 'react-icons/ri';
import {MdConnectWithoutContact} from 'react-icons/md'

const Header  = ()=>{

    
  return (
    <div>
    <section class="bg-[url('../public/comp4.gif')]  bg-fixed   max-w-full">
      <div className='grid grid-cols-3 gap-6'>

    {/* 1st two images */}
    <div className='pl-4 sm:py-1 py-4'>
      <img className='max-w-lg max-h-16 sm:max-h-24  md:max-h-40  ' alt='logo' src={ptulogo}/>
      <div className='pt-[30px] mr-16 md:mr-[400px]'>
      <img className='max-w-md max-h-9 sm:max-h-16 md:max-h-[100px]  mx-auto' alt='logo' src={ieeadva}/>
      </div>
    </div>

    {/* //center text */}
        <div class=" mx-auto max-w-7xl xl:col-start-2 ">
          <div class="mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
            <h1 class="pb-4  text-blue-800 text-lg md:text-2xl text-center md:font-bold xl:font-extrabold leading-none tracking-normal   md:tracking-tight">
              <span className=" hidden sm:block">IEEE SECOND INTERNATIONAL CONFERENCE ON ADVANCES IN
COMPUTATIONAL INTELLIGENCE AND COMMUNICATION</span>
            </h1>
            <h1 className='py-4 text-center text-lg md:text-2xl sm:font-bold leading-none tracking-normal md:tracking-tight'><span className="block w-full pb-4 text-transparent bg-clip-text text-[14px] sm:text-lg md:text-3xl text-yellow-500 leading-12  lg:inline  ">IEEE ICACIC 2023<br/>7<sup>th </sup> & 8<sup>th</sup> December 2023</span><br/><span className=' hidden lg:block  text-blue-800 text-[12px] sm:text-lg md:text-2xl lg:pt-4 '>
Puducherry Technological University<br/> Puducherry-605014, India</span></h1>
          </div>
        </div>


        <div className='py-4 sm:pl-0 ml-4 sm:ml-8 md:ml-[68px] lg:ml-[150px] xl:ml-[250px] sm:py-1 '>
        <img className='max-w-md md:max-h-36 max-h-14 ml-4  md:ml-8  sm:max-h-20 ' alt='ciclogo' src={logotrans}/>
        <div className='pt-10 '>
        <img className='max-w-md max-h-8 sm:max-h-12 md:max-h-[70px] ' alt='logo' src={ieeemad}/>
        </div>
        </div>

        </div>
        <h1 className='block py-2 lg:hidden  text-center text-blue-800 text-[12px] sm:text-lg md:text-2xl lg:pt-4 '>Puducherry Technological University<br/> Puducherry-605014, India</h1>
    </section >


    <h1  className='text-xl text-center font-bold text-blue-800 sm:text-3xl  lg:block'>
Technically Co-sponsored by<br/>IEEE Madras Section</h1>

<h1  className='text-xl text-center font-bold py-4 sm:text-3xl  lg:block'>
Conference ID: 59454</h1>

<marquee className="pt-2 "><span className="text-xl  text-yellow-600"> "Accepted and Presented papers of IEEE ICACIC 2023 will be published in IEEE Xplore Digital Library subject to meeting the IEEE Xplore’s scope and quality requirements."
            </span></marquee>


            
    
    <div className="p-5  hidden lg:block">
    <div class="flex sticky top-20 z-50 justify-center items-baseline flex-wrap">
        
        <div class="flex m-2">
        <Link to="/"><button  class="text-base  rounded-r-none  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-blue-700 hover:text-blue-200
        bg-blue-200 
        text-teal-700 
        min-h-[80px]
        border duration-200 ease-in-out 
        border-teal-600 transition">
                <div class="flex leading-5 my-auto">
                <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(1 1)"><path d="m.5 9.5 9-9 9 9"/><path d="m2.5 7.5v8c0 .5522847.44771525 1 1 1h3c.55228475 0 1-.4477153 1-1v-4c0-.5522847.44771525-1 1-1h2c.5522847 0 1 .4477153 1 1v4c0 .5522847.4477153 1 1 1h3c.5522847 0 1-.4477153 1-1v-8"/></g></svg>
                    HOME</div>
            </button> </Link>
            <Link to="/call"> <button  class="text-base  rounded-l-none rounded-r-none  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-blue-700 hover:text-blue-200
        bg-blue-200 
        text-teal-700 
        min-h-[80px]
        border duration-200 ease-in-out 
        border-teal-600 transition">
                <div class="flex leading-5 my-auto">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  width="21"  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone-call"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    CALL FOR PAPERS</div>
            </button></Link>
            <Link to="/paper">   <button class="text-base  rounded-l-none rounded-r-none   hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-blue-700 hover:text-blue-200
        bg-blue-200 
        text-teal-700 
        min-h-[80px]
        border duration-200 ease-in-out 
        border-teal-600 transition">
                <div class="flex leading-5 my-auto">
                <svg xmlns="http://www.w3.org/2000/svg"  width="21" viewBox="0 0 24 24" fill="none"><path fill="currentColor" d="M6 21h12c-1 0-3-.6-3-3v-2H3v2c0 2.4 2 3 3 3z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13c0 1-.6 3-3 3m0 0H6c-1 0-3-.6-3-3v-2h12v2c0 2.4 2 3 3 3zM9 7h8m-8 4h4"/></svg>
                    PAPER SUBMISSION</div>
            </button></Link>
            <Link to="/registrations"> <button class="text-base  rounded-l-none rounded-r-none  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-blue-700 hover:text-blue-200
        bg-blue-200 
        text-teal-700 
        min-h-[80px]
        border duration-200 ease-in-out 
        border-teal-600 transition">
                <div class="flex leading-5 my-auto">
                <svg xmlns="http://www.w3.org/2000/svg"  width="21" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polygon points="240 160 176 200 176 120 240 160" opacity="0.2"/><line x1="40" y1="64" x2="216" y2="64" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="40" y1="128" x2="136" y2="128" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="40" y1="192" x2="136" y2="192" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polygon points="240 160 176 200 176 120 240 160" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>   
                                 REGISTRATION</div>
            </button></Link>
            <Link to="/venue"> <button class="text-base rounded-l-none   rounded-r-none   hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-blue-700 hover:text-blue-200
        bg-blue-200 
        text-teal-700 
        min-h-[80px]
        border duration-200 ease-in-out 
        border-teal-600 transition">
                <div class="flex leading-5 my-auto">
                <svg viewBox="0 0 1024 1024" width="21" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"/><path fill="currentColor" d="M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"/><path fill="currentColor" d="M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320z"/></svg>
                    VENUE</div>
            </button></Link>
            <Link to="/committees"><button class="text-base  rounded-l-none rounded-r-none   hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-blue-700 hover:text-blue-200
        bg-blue-200 
        text-teal-700 
        min-h-[80px]
        border duration-200 ease-in-out 
        border-teal-600 transition">
                <div class="flex leading-5 my-auto">
                <svg xmlns="http://www.w3.org/2000/svg"  width="21"  fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16"> <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/> <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/> <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/> </svg>
                    COMMITTEES</div>
            </button></Link>

            <Link to="/timelines"><button class="text-base  rounded-l-none rounded-r-none   hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-blue-700 hover:text-blue-200
        bg-blue-200 
        text-teal-700 
        min-h-[80px]
        border duration-200 ease-in-out 
        border-teal-600 transition">
                <div class="flex leading-5 my-auto">
                  <RiTimeLine size={23} />
                    TIMELINES</div>
            </button></Link>
           
           
            <Link to="/contact?type=Website%20designed%20by%20MOGINDER.E,%20ECE%20-%203rd%20Year"> <button class="text-base  rounded-l-none  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-blue-700 hover:text-blue-200
        bg-blue-200 
        text-teal-700 
        min-h-[80px]
        border duration-200 ease-in-out 
        border-teal-600 transition">
                <div class="flex leading-5 my-auto">
<MdConnectWithoutContact size={25}/>                    CONTACT</div>
            </button></Link>
        </div>
    </div>

</div>

<div class="lg:hidden" id="mobile-menu">
    <div class="space-y-1 px-2 pt-2 pb-3">
     
     

    <div className='py-[0.002rem]'><Link className='py-2' to="/">  <a  class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"><button type="button" >
    HOME
  </button></a></Link></div>
  <div className='py-[0.002rem]'><Link className='py-2' to="/call"><a  class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"> <button type="button" >
    CALL FOR PAPERS
  </button></a></Link></div>
  <div className='py-[0.002rem]'><Link className='py-2' to="/paper"><a  class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"> <button type="button" >
    PAPER SUBMISSION
  </button></a></Link></div>
  <div className='py-[0.002rem]'><Link className='py-2' to="/registrations"><a href='/registrations' class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"> <button type="button" >
    REGISTRAION
  </button></a></Link></div>
  <div className='py-[0.002rem]'><Link className='py-2' to="/venue"><a  class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"><button type="button" >
    VENUE
  </button></a></Link></div>
  <div className='py-[0.002rem]'><Link className='py-2' to="/committees"><a class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"><button type="button" >
    COMMITTEES
  </button></a></Link></div>

  <div className='py-[0.002rem]'><Link className='py-2' to="/timelines" > <a class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"> <button type="button" >
    TIMELINES
  </button></a></Link></div>
 <div className='py-[0.002rem]'>
  <Link  to="/contact?type=Created%20by%20MOGINDER%20E,%20ECE%20-%203rd%20Year" > <a  class="bg-gray-900 w-full text-white block rounded-md px-3 py-2 text-base font-medium">  <button type="button" >
    CONTACT
  </button></a></Link></div>
    </div>
  </div>
    </div>

    )
}

export default Header;