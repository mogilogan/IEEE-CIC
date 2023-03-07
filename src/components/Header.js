import React from 'react';
import ptulogo from './assests/ptulogo.png';
import logotrans from './assests/logotrans.png';

const Header  = ()=>{

    
  return (
    <div>
    <section class="bg-[url('/src/components/assests/headerbg.jpg')] flex space-x-4">
      <img className='max-w-lg max-h-20 md:max-h-40' alt='logo' src={ptulogo}/>
        <div class=" px-12 mx-auto max-w-7xl">
          <div class="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
            <h1 class="mb-8 text-lg md:text-2xl text-center font-extrabold leading-none tracking-normal text-slate-800 md:text-3xl md:tracking-tight">
              <span className="dark:text-white">INTERNATIONAL CONFERENCE ON ADVANCES IN
COMPUTATIONAL INTELLIGENCE IN COMMUNICATION</span>
            </h1>
            <h1 className='my-10 text-center text-lg md:text-2xl font-black leading-none tracking-normal text-slate-800 md:text-xl md:tracking-tight'><span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-white lg:inline  ">CIC 2016
Pondicherry Engineering College, Puducherry , India</span></h1>
            
            <div class="mb-0 space-x-0 md:space-x-2 md:mb-8">

            </div>
          </div>
        </div>
        <img className='max-w-md md:max-h-40 sm:max-h-20 max-h-12' alt='ciclogo' src={logotrans}/>

      
    </section >
    
<div class="flex flex-row items-center rounded-md shadow-sm" role="group">
<div class="content-center mx-auto ">
          <div class="w-full mx-auto text-center">
           <a href='/'><button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
    HOME
  </button></a>
  <a href='/call'> <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
    CALL FOR PAPERS
  </button></a>
  <a href='/paper'> <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
    PAPER SUBMISSIONS
  </button></a>
  <a href='/registrations'> <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
    REGISTRAIONS
  </button></a>
  <a href='/venue'><button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
    VENUE
  </button></a>
  <a href='/committees'><button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
    COMMITTEES
  </button></a>
  <a href='/timelines'> <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
    TIMELINES
  </button></a>
  <a href='/contact'> <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
    CONTACT
  </button></a>
</div>
</div>
</div>

    </div>

    )
}

export default Header;