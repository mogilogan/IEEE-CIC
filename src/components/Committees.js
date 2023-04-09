import React from "react";

import { callfp1,callfp2,callfor1,callfor2 } from "../data";

const Committees = ()=>{



    const {list1}=callfor1;
    const {list2}=callfor2;
    const {list3} = callfp1;
    const {list4} = callfp2;

    return(
        <div>
          <h1 className="text-xl py-6 pl-4">Home / Paper Submissions</h1>
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
        <div className='container  shadow-dark-neumorphism-xl  pb-4 mx-auto'>
      <h2 className='h2 text-left bg-red-900 px-4 py-2   rounded-xl font font-black text-gray-100 text-xl' >
      Technical Program Committee <span className="">^</span>
            </h2>

            
        <div className='pt-10 grid grid-cols-1 md:grid-cols-2 md:gap-2 text-left'>
         
        <table class=" border-collapse md:rounded-xl  rounded-tl-xl rounded-tr-xl bg-gradient-to-br  from-green-700 to-green-400 ">
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


<table class=" border-collapse md:rounded-tr-xl md:rounded-tl-xl  rounded-bl-xl rounded-br-xl bg-gradient-to-br  from-green-700 to-green-400 ">
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



        <div className="py-6 ">
        <div className='container  shadow-dark-neumorphism-xl  pb-4 mx-auto'>
      <h2 className='h2 text-left bg-red-900 px-4 py-2   rounded-xl font font-black text-gray-100 text-xl' >
      National 
            </h2>

            
        <div className='pt-10 grid grid-cols-1 md:grid-cols-2 md:gap-2 text-left'>
         
        <table class=" border-collapse md:rounded-xl  rounded-tl-xl rounded-tr-xl bg-gradient-to-br  from-green-700 to-green-400 ">
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


<table class=" border-collapse md:rounded-tr-xl md:rounded-tl-xl  rounded-bl-xl rounded-br-xl bg-gradient-to-br  from-green-700 to-green-400 ">
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