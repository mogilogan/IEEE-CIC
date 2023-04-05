import React from "react";

const Contact  = ()=>{
    return(
        <div>
          
            <h1 className="text-xl py-6 pl-4">Home / Contact</h1>
            <div className="bg-[url('../public/try6.gif')] bg-cover bg-fixed">
            <section
      className='my-[5px] '
      id="#About"

    >
      <div className='container py-8 mx-auto'>
        <div className=' bg-gradient-to-br rounded-xl  from-red-300 to-purple-200    pb-12 flex flex-col    '>
            <div className="">
          <div className='flex-1 rounded-tr-xl rounded-tl-xl bg-blue-200 '>
            <h2 className='h2 mb-10 px-4 pb-4 pt-2 font font-black text-blue-800 text-md' >
            ADDRESS FOR COMMUNICATION
            </h2>
            </div>
            <p
              className='px-12 font-bold text-xl pb-10  text-left mx-auto'
            >
               CIC 2023
            </p>

            <p className='px-12  text-left mx-auto'>
              Department of Electronics & Communication Engineering
            </p>
            <p className='px-12   text-left mx-auto'>
            Pondicherry Engineering College
            </p>
            <p className='px-12   text-left mx-auto'>
            Puducherry – 605014, INDIA
            </p>
            <p className='px-12 pt-6   text-left mx-auto'>
            Email: examplemail@pec.edu
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