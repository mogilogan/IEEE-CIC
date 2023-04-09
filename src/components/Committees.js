import React, { useState } from "react";

import { callfp1,callfp2,callfor1,callfor2 } from "../data";

const Committees = ()=>{

   const [tpc,Settpc]=useState("block");
   const [status,Setstatus] = useState("(Click to hide!)");



    const {list1}=callfor1;
    const {list2}=callfor2;
    const {list3} = callfp1;
    const {list4} = callfp2;

    const handleclick =()=>{

      if(tpc==="block"){
         Settpc("hidden");
         Setstatus("(Click to Show!)");
      } else{
         Settpc("block");
         Setstatus("(Click to hide!)");
      }

    }

    return(
        <div>
             <h1 className="flex text-xl py-6 pl-4 leading-4"><a className=" flex gap-1 hover:text-teal-600" href="/">  <svg  height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(1 1)"><path d="m.5 9.5 9-9 9 9"/><path d="m2.5 7.5v8c0 .5522847.44771525 1 1 1h3c.55228475 0 1-.4477153 1-1v-4c0-.5522847.44771525-1 1-1h2c.5522847 0 1 .4477153 1 1v4c0 .5522847.4477153 1 1 1h3c.5522847 0 1-.4477153 1-1v-8"/></g></svg>Home</a> / Paper Submissions</h1>
            <div className="bg-[url('../public/try6.gif')] bg-cover bg-fixed">
            <h1 className="h2 mb-6  pt-2 text-yellow-500 text-center font font-black text-3xl">Committees</h1>


              <div className="py-2">
              <div class="max-w-lg  bg-gradient-to-br from-blue-800 to-blue-400 mx-auto rounded-xl overflow-hidden shadow-lg">
              <div class="px-6 py-2">
              <div class="font-bold  text-xl mb-2">General Chair</div>
                 <p class="text-gray-100 text-center text-base">
                     Prof. (Dr.) S. Mohan
                 </p>
              </div>
              <div class="px-6 text-center   pb-2">
              <span class="inline-block bg-gray-200  rounded-xl px-3 py-1 text-sm font-semibold  mr-2 mb-2">Vice-Chancellor Puducherry Technological University Puducherry</span>
              </div>
              </div>
              </div>

              <div className="py-2">
              <div class="max-w-lg  bg-gradient-to-br from-blue-800 to-blue-400 mx-auto rounded-xl overflow-hidden shadow-lg">
              <div class="px-6 py-2">
              <div class="font-bold text-xl mb-2">Department Chair</div>
                 <p class="text-gray-100 text-center text-base">
                 Dr. V. Saminadan
                 </p>
              </div>
              <div class="px-6 text-center   pb-2">
              <span class="inline-block bg-gray-200  rounded-xl px-3 py-1 text-sm font-semibold  mr-2 mb-2">Professor &amp; Head ECE PTU Puducherry</span>
              </div>
              </div>
              </div>


              <div className="py-2">
              <div class="max-w-lg  bg-gradient-to-br from-blue-800 to-blue-400 mx-auto rounded-xl overflow-hidden shadow-lg">
              <div class="px-6 py-2">
              <div class="font-bold text-xl mb-2">Apex Committee</div>
                 <p class="text-gray-100 text-center text-base">
                 Dr. K. Vivekanandan
                 </p>
              </div>
              <div class="px-6 text-center   pb-2">
              <span class="inline-block bg-gray-200  rounded-xl px-3 py-1 text-sm font-semibold  mr-2 mb-2">Director (Academic Research) PTU</span>
              </div>
              <div class="px-6 py-2">
                 <p class="text-gray-100 text-center text-base">
                 Dr. E. Srinivasan
                 </p>
              </div>
              <div class="px-6 text-center   pb-2">
              <span class="inline-block bg-gray-200  rounded-xl px-3 py-1 text-sm font-semibold  mr-2 mb-2">Professor ECE PTU</span>
              </div>
              </div>
              </div>


              <div className="py-2">
              <div class="max-w-lg  bg-gradient-to-br from-blue-800 to-blue-400 mx-auto rounded-xl overflow-hidden shadow-lg">
              <div class="px-6 py-2">
              <div class="font-bold text-xl mb-2">Conference chairs</div>
                 <p class="text-gray-100 text-center text-base">
                 Dr. Gnanou Florence Sudha
                 </p>
              </div>
              <div class="px-6 text-center   pb-2">
              <span class="inline-block bg-gray-200  rounded-xl px-3 py-1 text-sm font-semibold  mr-2 mb-2">Professor ECE PTU</span>
              </div>
              <div class="px-6 py-2">
                 <p class="text-gray-100 text-center text-base">
                 Dr. R. Gunasundari
                 </p>
              </div>
              <div class="px-6 text-center   pb-2">
              <span class="inline-block bg-gray-200  rounded-xl px-3 py-1 text-sm font-semibold mr-2 mb-2">Professor ECE PTU</span>
              </div>
              </div>
              </div>

              <div className="py-2">
              <div class="max-w-lg  bg-gradient-to-br from-blue-800 to-blue-400 mx-auto rounded-xl overflow-hidden shadow-lg">
              <div class="px-6 py-2">
              <div class="font-bold text-xl mb-2">Executive Committee</div>
                 <p class="text-gray-100 text-center text-base">
                 Dr. G. Sivaradje
                 </p>
              </div>
              <div class="px-6 text-center   pb-2">
              <span class="inline-block bg-gray-200  rounded-xl px-3 py-1 text-sm font-semibold  mr-2 mb-2">Registrar PTU</span>
              </div>
              <div class="px-6 py-2">
                 <p class="text-gray-100 text-center text-base">
                 Dr. G. Nagarajan
                 </p>
              </div>
              <div class="px-6 text-center   pb-2">
              <span class="inline-block bg-gray-200  rounded-xl px-3 py-1 text-sm font-semibold  mr-2 mb-2">Professor ECE PTU</span>
              </div>
              <div class="px-6 py-2">
                 <p class="text-gray-100 text-center text-base">
                 Dr. M. Tamilarasi
                 </p>
              </div>
              <div class="px-6 text-center   pb-2">
              <span class="inline-block bg-gray-200  rounded-xl px-3 py-1 text-sm font-semibold  mr-2 mb-2">Professor ECE PTU</span>
              </div>
              </div>
              </div>


              <div className="py-2">
              <div class="max-w-lg  bg-gradient-to-br from-blue-800 to-blue-400 mx-auto rounded-xl overflow-hidden shadow-lg">
              <div class="px-6 py-2">
              <div class="font-bold text-xl mb-2">Advisory Committee</div>
                 <p class="text-gray-100 text-center text-base">
                 Dr. K. Porkumaran
                 </p>
              </div>
              <div class="px-6 text-center   pb-2">
              <span class="inline-block bg-gray-200  rounded-xl px-3 py-1 text-sm font-semibold  mr-2 mb-2">Chairman IEEE Madras section</span>
              </div>
              <div class="px-6 py-2">
                 <p class="text-gray-100 text-center text-base">
                 Dr .P. Sakthivel
                 </p>
              </div>
              <div class="px-6 text-center   pb-2">
              <span class="inline-block bg-gray-200  rounded-xl px-3 py-1 text-sm font-semibold  mr-2 mb-2">Academics IEEE Madras section</span>
              </div>
              <div class="px-6 py-2">
                 <p class="text-gray-100 text-center text-base">
                 Dr. R. Hariprakash
                 </p>
              </div>
              <div class="px-6 text-center   pb-2">
              <span class="inline-block bg-gray-200  rounded-xl px-3 py-1 text-sm font-semibold mr-2 mb-2">Secretary IEEE Madras section</span>
              </div>
              <div class="px-6 py-2">
                 <p class="text-gray-100 text-center text-base">
                 Dr. S. Radha
                 </p>
              </div>
              <div class="px-6 text-center   pb-2">
              <span class="inline-block bg-gray-200  rounded-xl px-3 py-1 text-sm font-semibold  mr-2 mb-2">Treasurer IEEE Madras section</span>
              </div>
              <div class="px-6 py-2">
                 <p class="text-gray-100 text-center text-base">
                 Dr. V. Nagarajan
                 </p>
              </div>
              <div class="px-6 text-center   pb-2">
              <span class="inline-block bg-gray-200  rounded-xl px-3 py-1 text-sm font-semibold mr-2 mb-2">Member EXCOM IEEE Madras Section</span>
              </div>
              </div>
              </div>

  

  

            <div className="py-6 ">
        <div className='container   pb-4 mx-auto'>
      <button className="w-full " ><h2 onClick={handleclick} className='hover:bg-yellow-600 h2 text-left bg-red-900 px-4 py-2   rounded-xl font font-black text-gray-100 text-xl' >
      Technical Program Committee <span className="float-right">{status}</span>
            </h2></button>
            

            <div className={`${tpc} pt-12`}>
            <h2  className='h2  bg-red-900 px-4 py-2 text-center   rounded-xl font font-black text-gray-100 text-xl' >
      International
            </h2>   

            
        <div className="pt-10 grid grid-cols-1 md:grid-cols-2 md:gap-4 text-left">
         
         

        <table class=" border-collapse md:rounded-xl  rounded-tl-xl rounded-tr-xl bg-gradient-to-br  from-green-800 to-green-600 ">
  <tbody>

  {list1.map((feature ,index) => {
            // destructure feature
            const { Name,description,description1 } =
              feature;

              return(
            
                <tr className="border-b-2 hover:bg-slate-900 border-red-900">
      <td class=" py-2 px-2 text-sm    text-gray-100">{Name}</td>
      <td class=" w-[70%] md:pl-10 py-2 px-2 text-sm   text-gray-100">{description}<br></br>{description1}</td>
    </tr>
                    );
  })}

<tr className="border-b-2 md:border-b-0 hover:bg-slate-900 border-red-900">
      <td class=" py-2 px-2 text-sm    text-gray-100">Dr. Vidhyacharan Bhaskar</td>
      <td class=" w-[70%] md:pl-10 py-2 px-2 text-sm   text-gray-100">Department of Computer Science<br></br>Univeristy of California at Davis, Dublin, CA</td>
    </tr>

  </tbody>
</table>


<table class=" border-collapse md:rounded-tr-xl md:rounded-tl-xl  rounded-bl-xl rounded-br-xl bg-gradient-to-br  from-green-800 to-green-600 ">
  <tbody>

  {list2.map((feature ,index) => {
            // destructure feature
            const { Name,description,description1 } =
              feature;

              return(
            
                <tr className="border-b-2 hover:bg-slate-900 border-red-900">
      <td class=" py-2 px-2 text-sm    text-gray-100">{Name}</td>
      <td class=" w-[70%] md:pl-10 py-2 px-2 text-sm   text-gray-100">{description}<br></br>{description1}</td>
    </tr>
                    );
  })}
  <tr className="hover:bg-slate-900 border-red-900">
      <td class=" py-2 px-2 text-sm    text-gray-100">Dr.Geetha Devi</td>
      <td class=" w-[70%] md:pl-10 py-2 px-2 text-sm   text-gray-100">National Univeristy of Science & Technology<br></br>College of ENgineering, Oman</td>
    </tr>

  </tbody>
</table>
</div>
          <div className=' mx-auto lg:ml-4'>
 
          </div>
        </div>
        </div>
        </div>


        <div className={`${tpc} pt-12`}>
        <div className="py-6 ">
        <div className='container  shadow-dark-neumorphism-xl  pb-4 mx-auto'>
      <h2 className='h2 text-center bg-red-900 px-4 py-2   rounded-xl font font-black text-gray-100 text-xl' >
      National 
            </h2>

            
        <div className='pt-10 grid grid-cols-1 md:grid-cols-2 md:gap-4 text-left'>
         
        <table class=" border-collapse md:rounded-xl  rounded-tl-xl rounded-tr-xl bg-gradient-to-br  from-green-800 to-green-600 ">
  <tbody>

  {list3.map((feature ,index) => {
            // destructure feature
            const { Name,description,description1 } =
              feature;
              

              return(
            
                <tr className="border-b-2 hover:bg-slate-900 border-red-900">
      <td class="  py-2 px-2 text-sm    text-gray-100">{Name}</td>
      <td class="w-[70%] md:pl-10 py-2 px-2 text-sm   text-gray-100">{description}<br></br>{description1}</td>
    </tr>
                    );
  })}
  <tr className="border-b-2 md:border-b-0 hover:bg-slate-900 border-red-900">
      <td class=" py-2 px-2 text-sm    text-gray-100">Dr.Malaya Kumar nath</td>
      <td class=" w-[70%] md:pl-10 py-2 px-2 text-sm   text-gray-100">Department of Ece<br></br>NIT Puducherry, Karaikal</td>
    </tr>

  </tbody>
</table>


<table class=" border-collapse md:rounded-tr-xl md:rounded-tl-xl  rounded-bl-xl rounded-br-xl bg-gradient-to-br  from-green-800 to-green-600 ">
  <tbody>

  {list4.map((feature ,index) => {
            

            // destructure feature
            const { Name,description,description1 } =
              feature;
             

              return(
            
                <tr className="border-b-2 hover:bg-slate-900 border-red-900">
      <td class=" py-2 px-2 text-sm    text-gray-100">{Name}</td>
      <td class=" w-[70%] md:pl-10 py-2 px-2 text-sm   text-gray-100">{description}<br></br>{description1}</td>
    </tr>
                    );
  })}
<tr className="hover:bg-slate-900 border-red-900">
      <td class=" py-2 px-2 text-sm    text-gray-100">Dr.R.Aarthi</td>
      <td class=" w-[70%] md:pl-10 py-2 px-2 text-sm   text-gray-100">SRM Easwari Engineering College<br></br>Tamil Nadu</td>
    </tr>
  </tbody>
</table>
</div>
          <div className=' mx-auto lg:ml-4'>
 
          </div>
        </div>
        </div>
        </div>


              <div className="py-2">
              <div class="max-w-lg  bg-gradient-to-br from-blue-800 to-blue-400 mx-auto rounded-xl overflow-hidden shadow-lg">
              <div class="px-6 py-2">
              <div class="font-bold text-xl mb-2">Conference Execution Committees</div>
                 <p class="text-gray-100 text-center text-base">
                 Dr. D. Saraswady
                 </p>
              </div>
              <div class="px-6 text-center   pb-2">
              <span class="inline-block bg-gray-200  rounded-xl px-3 py-1 text-sm font-semibold  mr-2 mb-2">Professor ECE PTU</span>
              </div>
              <div class="px-6 py-2">
                 <p class="text-gray-100 text-center text-base">
                 Dr. S. Batmavady
                 </p>
              </div>
              
              <div class="px-6 text-center   pb-2">
              <span class="inline-block bg-gray-200  rounded-xl px-3 py-1 text-sm font-semibold  mr-2 mb-2">Professor ECE PTU</span>
              </div>
              <div class="px-6 py-2">
                 <p class="text-gray-100 text-center text-base">
                 Dr. L. Nithyanandan
                 </p>
              </div>
              <div class="px-6 text-center   pb-2">
              <span class="inline-block bg-gray-200  rounded-xl px-3 py-1 text-sm font-semibold  mr-2 mb-2">Professor ECE PTU</span>
              </div>
              <div class="px-6 py-2">
                 <p class="text-gray-100 text-center text-base">
                 Dr. K. Jayanthi
                 </p>
              </div>
              <div class="px-6 text-center   pb-2">
              <span class="inline-block bg-gray-200  rounded-xl px-3 py-1 text-sm font-semibold  mr-2 mb-2">Professor ECE PTU</span>
              </div>
              <div class="px-6 py-2">
                 <p class="text-gray-100 text-center text-base">
                 Dr. K. Kumar
                 </p>
              </div>
              <div class="px-6 text-center   pb-2">
              <span class="inline-block bg-gray-200  rounded-xl px-3 py-1 text-sm font-semibold  mr-2 mb-2">Professor ECE PTU</span>
              </div>
              <div class="px-6 py-2">
                 <p class="text-gray-100 text-center text-base">
                 Dr. V.Vijayalakshmi
                 </p>
              </div>
              <div class="px-6 text-center   pb-2">
              <span class="inline-block bg-gray-200  rounded-xl px-3 py-1 text-sm font-semibold  mr-2 mb-2">Assoc. Professor ECE PTU</span>
              </div>
              
              <div class="px-6 py-2">
                 <p class="text-gray-100 text-center text-base">
                 Dr. S. Tamilselvan
                 </p>
              </div>
              <div class="px-6 text-center   pb-2">
              <span class="inline-block bg-gray-200  rounded-xl px-3 py-1 text-sm font-semibold  mr-2 mb-2">Assoc. Professor ECE PTU</span>
              </div>
              </div>



              <div className="py-2">
              <div class="max-w-lg  bg-gradient-to-br from-blue-800 to-blue-400 mx-auto rounded-xl overflow-hidden shadow-lg">
              <div class="px-6 py-2">
              <div class="font-bold text-xl mb-2">Publication Committee</div>
                 <p class="text-gray-100 text-center text-base">
                 Dr. Gnanou Florence Sudha
                 </p>
              </div>
              <div class="px-6 text-center   pb-2">
              <span class="inline-block bg-gray-200  rounded-xl px-3 py-1 text-sm font-semibold  mr-2 mb-2">Professor ECE PTU</span>
              </div>
              <div class="px-6 py-2">
                 <p class="text-gray-100 text-center text-base">
                 Dr. R. Gunasundari
                 </p>
              </div>
              <div class="px-6 text-center   pb-2">
              <span class="inline-block bg-gray-200  rounded-xl px-3 py-1 text-sm font-semibold  mr-2 mb-2">Professor ECE PTU</span>
              </div>
              <div class="px-6 py-2">
                 <p class="text-gray-100 text-center text-base">
                 Dr. A. V. Ananthalakshmi
                 </p>
              </div>
              <div class="px-6 text-center   pb-2">
              <span class="inline-block bg-gray-200  rounded-xl px-3 py-1 text-sm font-semibold  mr-2 mb-2">Asst. Professor ECE PTU</span>
              </div>
              </div>
              </div>

              <div className="py-2">
              <div class="max-w-lg  bg-gradient-to-br from-blue-800 to-blue-400 mx-auto rounded-xl overflow-hidden shadow-lg">
              <div class="px-6 py-2">
              <div class="font-bold text-xl mb-2">Workshop & Publicity Committee</div>
                 <p class="text-gray-100 text-center text-base">
                 Dr. M. Thachayani
                 </p>
              </div>
              <div class="px-6 text-center   pb-2">
              <span class="inline-block bg-gray-200  rounded-xl px-3 py-1 text-sm font-semibold  mr-2 mb-2">Asst. Professor ECE PTU</span>
              </div>
              <div class="px-6 py-2">
                 <p class="text-gray-100 text-center text-base">
                 Dr. R. Sandanalakshmi
                 </p>
              </div>
              <div class="px-6 text-center   pb-2">
              <span class="inline-block bg-gray-200  rounded-xl px-3 py-1 text-sm font-semibold  mr-2 mb-2">Asst. Professor ECE PTU</span>
              </div>
              </div>
              </div>
           
      </div>
      </div>
        </div>
    )
}

export default Committees;