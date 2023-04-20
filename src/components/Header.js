import React from 'react';
import ptulogo from './assests/ptulogo.png';
import logotrans from './assests/logotrans.png';

import {Link} from 'react-router-dom';

const Header  = ()=>{

    
  return (
    <div>
    <section class="bg-[url('/src/components/assests/headerbg.jpg')]   flex space-x-4">
      <img className='max-w-lg max-h-24 md:max-h-40  mx-auto' alt='logo' src={ptulogo}/>
      <div className='mx-auto py-4'>

      </div>
        <div class=" px-12 mx-auto max-w-7xl">
          <div class="mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
            <h1 class="pb-4 text-lg md:text-2xl text-center font-extrabold leading-none tracking-normal text-slate-800  md:tracking-tight">
              <span className="text-white hidden sm:block">SECOND INTERNATIONAL CONFERENCE ON ADVANCES IN
COMPUTATIONAL INTELLIGENCE AND COMMUNICATION</span>
            </h1>
            
            <h1 className='py-4 text-center text-lg md:text-2xl font-black leading-none tracking-normal md:tracking-tight'><span className="block w-full pb-4 text-transparent bg-clip-text sm:text-lg md:text-3xl text-yellow-500 leading-12 bg-white lg:inline  ">CIC 2023<br/>7<sup>th </sup> & 8<sup>th</sup> December 2023</span><span className='hidden sm:block text-white text-2xl lg:pt-4 lg:block'>
Puducherry Technological University<br/> Puducherry-605014, India</span></h1>
            
            <div class="mb-0 space-x-0 md:space-x-2 md:mb-8">

            </div>
          </div>
        </div>
        <div className='py-4 sm:py-1'>
        <img className='max-w-md md:max-h-40 pr-2  sm:max-h-20 max-h-20 ' alt='ciclogo' src={logotrans}/>
        </div>
      
    </section >
    
    <div class="p-5 hidden lg:block">
    <div class="flex justify-center items-baseline flex-wrap">
        
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
                <svg xmlns="http://www.w3.org/2000/svg"  width="21"  fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16"> <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/> <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/> <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/> </svg>
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
                <svg width="21"  viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6 20.5C6 12.4919 12.4919 6 20.5 6H27.5C35.5081 6 42 12.4919 42 20.5C42 28.5081 35.5081 35 27.5 35H26.8V42C26.8 42 6 38.5 6 20.5ZM27.6914 12.4815C28.7211 13.1664 29.4977 14.2754 29.4977 15.7611C29.4977 17.3398 28.8609 18.4998 27.8298 19.2103C27.4025 19.5047 26.9427 19.6971 26.5 19.8236V21.3559C26.5 22.1844 25.8284 22.8559 25 22.8559C24.1716 22.8559 23.5 22.1844 23.5 21.3559V18.5586C23.5 17.769 24.1121 17.1147 24.8999 17.062C25.4539 17.0249 25.8743 16.9146 26.1276 16.74C26.2342 16.6665 26.3107 16.5823 26.3681 16.4677C26.4278 16.3486 26.4977 16.1339 26.4977 15.7611C26.4977 15.4485 26.3747 15.2088 26.0299 14.9794C25.6378 14.7186 25.0078 14.5265 24.2513 14.5025C23.5028 14.4787 22.776 14.625 22.2418 14.884C21.7049 15.1443 21.5087 15.4358 21.4533 15.6513C21.2472 16.4537 20.4297 16.9371 19.6273 16.731C18.825 16.5249 18.3416 15.7074 18.5476 14.905C18.8921 13.5637 19.8955 12.6875 20.9331 12.1845C21.9733 11.6802 23.1959 11.4674 24.3467 11.504C25.4895 11.5403 26.7089 11.828 27.6914 12.4815ZM25 29C26.1046 29 27 28.1046 27 27C27 25.8954 26.1046 25 25 25C23.8954 25 23 25.8954 23 27C23 28.1046 23.8954 29 25 29Z" fill="#333333"/> </svg>
                    CONTACT</div>
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