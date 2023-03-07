import React from "react";

const Timelines  = ()=>{
    return(
        <div>
            <h1 className="text-xl py-6 pl-4">Home / Timelines</h1>

            <section
      className='my-[5px] '
      id="#About"

    >
      <div className='container mx-auto'>
        <div className='bg-gray-100    pb-12 flex flex-col    '>
            <div className="">
          <div className='flex-1 '>
            <h2 className='h2 mb-10 px-4 pb-4 pt-2 font font-black text-blue-800 text-md' >
            Important Dates
            </h2>
            </div>
            <div className="pb-6 bg-gray-100">
        <div className='container   mx-auto bg-gray-400'>
     
        <div className='bg-gray-100  py-4 mx-auto   gap-0 text-left'>
          <div className='mx-auto'>
          <table class="mx-auto table-auto border-collapse border border-slate-900">
  <thead>
    <tr>
      <th class="border py-2 px-2 border-slate-400   ">Submission of Full Paper</th>
      <td class="border py-2 px-2 border-slate-400   ">15.07.2016</td>
    </tr>
  </thead>
  <tbody>
    <tr>
    <th class="border py-2 px-2 border-slate-400   ">Notification of Acceptance</th>
      <td class="border py-2 px-2 border-slate-400  ">30.08.2016</td>
    </tr>
    <tr>
    <th class="border py-2 px-2 border-slate-400   ">Registration and Camera Ready</th>
      <td class="border py-2 px-2 border-slate-400  ">05.09.2016(Early bid)</td>
    </tr>
    <tr>
    <th class="border py-2 px-2 border-slate-400   ">Copy Submission</th>
      <td class="border py-2 px-2 border-slate-400  ">10.09.2016(Late)</td>
    </tr>
    <tr>
    <th class="border py-2 px-2 border-slate-400   ">Conference Dates</th>
      <td class="border py-2 px-2 border-slate-400  ">19.10.2016 & 20.10.2016</td>
    </tr>
  </tbody>
  
</table>
          </div>
          </div>
          </div>
          </div>
           
          </div>
        </div>
      </div>
    </section>
        </div>
    )
}

export default Timelines;