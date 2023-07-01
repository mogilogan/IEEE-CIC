import React from "react";


import ButtonMailto from "./ButtonMaitto";

const Contact  = ()=>{


    

 
    return(
      
      
        <div>
          
          <h1 className="flex text-xl py-6 pl-4 leading-4"><a className=" flex gap-1 hover:text-teal-600" href="/">  <svg  height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(1 1)"><path d="m.5 9.5 9-9 9 9"/><path d="m2.5 7.5v8c0 .5522847.44771525 1 1 1h3c.55228475 0 1-.4477153 1-1v-4c0-.5522847.44771525-1 1-1h2c.5522847 0 1 .4477153 1 1v4c0 .5522847.4477153 1 1 1h3c.5522847 0 1-.4477153 1-1v-8"/></g></svg>Home</a> / Contact</h1>
            <div className="bg-[url('../public/try6.gif')] bg-cover bg-fixed">
            <section
      className='my-[5px]'
      id="#About"

    >
      <div className='container py-8 mx-auto'>
        <div className=' bg-white rounded-xl    pb-12 flex flex-col    '>
            <div className="">
          <div className='flex-1 rounded-tr-xl rounded-tl-xl bg-gradient-to-br from-blue-600 to-blue-400 '>
            <h2 className='h2 mb-10 px-4 pb-4 pt-2 font font-black text-white te text-xl xt-md' >
            ADDRESS FOR COMMUNICATION
            </h2>
            </div>
            <p
              className='px-12 font-bold text-2xl pb-6   text-left mx-auto'
            >
               IEEE ICACIC 2023
            </p>


            <p className='px-12 pt-2 text-lg text-blue-700 text-center  mx-auto'>
           <b>Dr. Gnanou Florence Sudha</b>
            </p>
            <p className='px-12 pb-1 text-lg text-blue-700 text-center mx-auto'>
            <b>Dr. R. Gunasundari</b>
            </p>

            <p className='px-12 text-xl pb-6 text-center   mx-auto'>CONFERENCE CHAIRS</p>


            <p className='px-12 pb-4  text-center mx-auto'>
              Department of Electronics & Communication Engineering
            </p>
            <p className='px-12   text-center mx-auto'>
            PUDUCHERRY TECHNOLOGICAL UNIVERISTY
            </p>
            <p className='px-12   text-center mx-auto'>
            Puducherry – 605014, INDIA
            </p>
            <p className='px-12 pt-6  text-center mx-auto'><button className="bg-yellow-500 px-1 py-1 rounded-xl hover:bg-blue-700 hover:text-white">
            <ButtonMailto  label="cic@ptuniv.edu.in" mailto="mailto:cic@ptuniv.edu.in"/></button>
            </p>
           
          </div>
        </div>
      </div>
    </section>
    </div>
        </div>
    )
}

export default Contact;