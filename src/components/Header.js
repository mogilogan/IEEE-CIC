import React from 'react';


const Header  = ()=>{

    
  return (
    <div>
    <section class="bg-[url('/src/components/assests/headerbg.jpg')] ">
      <div data-aos='fade-down' data-aos-delay='600'>
        <div class="px-12 mx-auto max-w-7xl">
          <div class="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
            <h1 class="mb-8 text-4xl font-extrabold leading-none tracking-normal text-slate-800 md:text-6xl md:tracking-tight">
              <span className="dark:text-white">hey</span> | <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r  from-blue-700 to-sky-400 lg:inline  dark:bg-clip-text dark:bg-gardient-to-r dark:from-lightblue-400 dark:to-grey-200">hey</span>
            </h1>
            <h1 className='my-10 text-2xl font-black leading-none tracking-normal text-slate-800 md:text-4xl md:tracking-tight'><span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-indigo-500 lg:inline  dark:bg-clip-text dark:bg-gardient-to-r dark:from-lightblue-400 dark:to-grey-200">23rd & 24th FEB </span></h1>
            {/* <p class="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
              
            </p> */}
            <div class="mb-0 space-x-0 md:space-x-2 md:mb-8">

            </div>
          </div>
          <div class="w-full mx-auto mt-12 text-center md:w-10/12">
            <div class="relative z-0 w-full mt-8">
              <div class="relative overflow-hidden shadow-2xl">
                <div class="flex items-center flex-none px-4 bg-slate-800 rounded-b-none h-11 rounded-xl">
                  <div class="flex space-x-1.5">
                    <div class="w-3 h-3 border-2 border-white dark:border-black rounded-full"></div>
                    <div class="w-3 h-3 border-2 border-white dark:border-black rounded-full"></div>
                    <div class="w-3 h-3 border-2 border-white dark:border-black rounded-full"></div>
                  </div>
                </div>
                <div data-aos='fade-up' data-aos-delay='800'>
                  <img alt="" src='../assests/headerbg.jpg' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
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