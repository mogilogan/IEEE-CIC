import React from "react";

const Timelines  = ()=>{
    return(
        <div>
             <h1 className="flex text-xl py-6 pl-4 leading-4"><a className=" flex gap-1 hover:text-teal-600" href="/">  <svg  height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(1 1)"><path d="m.5 9.5 9-9 9 9"/><path d="m2.5 7.5v8c0 .5522847.44771525 1 1 1h3c.55228475 0 1-.4477153 1-1v-4c0-.5522847.44771525-1 1-1h2c.5522847 0 1 .4477153 1 1v4c0 .5522847.4477153 1 1 1h3c.5522847 0 1-.4477153 1-1v-8"/></g></svg>Home</a> / Timelines</h1>
<div className="bg-[url('../public/try6.gif')] bg-cover bg-fixed">
            <section
      className='my-[5px] '
      id="#About"

    >
      <div className='container mx-auto'>
        <div className='   pb-12 flex flex-col    '>
            <div className="">
          <div className='flex-1 '>
            <h2 className='h2  text-2xl  py-4 font font-black text-yellow-500 text-center text-md' >
            Important Dates
            </h2>
            </div>
          
        <div className=' mx-auto   gap-0 text-left'>
          
          <table class="mx-auto text-xl bg-white shadow-light-inner-neumorphism-xl rounded-xl table-auto border-collapse border border-slate-900">
  <thead>
    <tr className="hover:bg-red-200 " >
      <th class="border-r py-2 px-2 border-slate-400   ">Submission of Full Paper</th>
      <td class=" py-2 px-2   ">15.07.2016</td>
    </tr>
  </thead>
  <tbody>
    <tr className="hover:bg-red-200 ">
    <th class="border py-2 px-2 border-slate-400   ">Notification of Acceptance</th>
      <td class="border py-2 px-2 border-slate-400  ">30.08.2016</td>
    </tr>
    <tr className="hover:bg-red-200 ">
    <th class="border py-2 px-2 border-slate-400   ">Registration and Camera Ready</th>
      <td class="border py-2 px-2 border-slate-400  ">05.09.2016(Early bid)</td>
    </tr>
    <tr className="hover:bg-red-200 ">
    <th class="border py-2 px-2 border-slate-400   ">Copy Submission</th>
      <td class="border py-2 px-2 border-slate-400  ">10.09.2016(Late)</td>
    </tr>
    <tr className="hover:bg-red-200 ">
    <th class=" py-2 px-2 border-slate-400   ">Conference Dates</th>
      <td class="border-l py-2 px-2 border-slate-400  ">19.10.2016 & 20.10.2016</td>
    </tr>
  </tbody>
  
</table>
          </div>
        
         
          </div>
           
          </div>
     
      </div>
    </section>
    </div>
        </div>
    )
}

export default Timelines;