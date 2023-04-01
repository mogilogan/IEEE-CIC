import React, { useState } from "react";

const Call  = ()=>{
   
    return(
        <div>
             <h1 className="text-xl py-6 pl-4">Home / Call For Papers</h1>

            <section
      className='my-[5px] '
      id="#About"

    >
      <div className='container mx-auto  '>
        <div className=' pb-12 flex flex-col shadow-dark-neumorphism-2xl rounded-xl   bg-gradient-to-br from-red-500 to-purple-500 '>
          <div className='flex-1 '>
            <h2 className='h2 bg-purple-700 rounded-tl-xl rounded-tr-xl mb-10 px-4 py-2 font font-black text-gray-300 text-xl' >
            CONFERENCE TRACKS
            </h2>
            <div className="pb-6 ">
        <div className='container    mx-auto '>
     
        <div className='  pt-6   mx-auto  grid md:grid-cols-5 grid-cols-1  gap-0 text-left'>
          <div className='mx-auto py-2 '>
          <table class=" border-collapse     table-fixed  border-slate-500">
  <thead>
    <tr>
      <td class="  w-52 rounded-tl-xl  rounded-tr-xl   py-2 px-2 border-slate-500  bg-red-700 text-gray-200">Track 1</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="   rounded-bl-xl rounded-br-xl w-52 h-40 py-2 px-2 border-slate-500 bg-pink-200  text-blue-600">COMPUTATIONAL INTELLIGENCE METHODOLOGIES</td>
    </tr>
  </tbody>
</table>
          </div>
          <div className='mx-auto py-2 px-2'>
          <table class=" border-collapse  border-slate-500 ...">
  <thead>
    <tr>
      <td class=" w-52 rounded-tl-xl  rounded-tr-xl  py-2 px-2 border-slate-500  bg-red-700 text-gray-200">track 2</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class=" rounded-bl-xl rounded-br-xl w-52 h-40 py-2 px-2 border-slate-500 bg-pink-200   text-blue-600">COMPUTATIONAL INTELLIGENCE IN SIGNAL & IMAGE PROCESSING</td>
    </tr>
  </tbody>
</table>
          </div>
          <div className='mx-auto py-2'>
          <table class=" border-collapse  border-slate-500 ...">
  <thead>
    <tr>
      <td class=" w-52 rounded-tl-xl  rounded-tr-xl  py-2 px-2 border-slate-500  bg-red-700 text-gray-200">track 3</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class=" rounded-bl-xl rounded-br-xl w-52 h-40 py-2 px-2 border-slate-500 bg-pink-200  text-blue-600">COMPUTATIONAL INTELLIGENCE IN WIRELESS COMMUNICATION NETWORKS</td>
    </tr>
  </tbody>
</table>
          </div>
          <div className='mx-auto py-2'>
          <table class=" border-collapse  border-slate-500 ...">
  <thead>
    <tr>
      <td class=" w-52 py-2 rounded-tl-xl  rounded-tr-xl px-2 border-slate-500 bg-red-700 text-gray-200">track 4</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class=" rounded-bl-xl rounded-br-xl w-52 h-40 py-2 px-2 border-slate-500 bg-pink-200    text-blue-600">COMPUTATIONAL METHODS FOR POWER SYSTEMS</td>
    </tr>
  </tbody>
</table>
          </div>
          <div className='mx-auto py-2'>
          <table class=" border-collapse  border-slate-500 ...">
  <thead>
    <tr>
      <td class=" w-52  py-2 rounded-tl-xl  rounded-tr-xl px-2 border-slate-500  bg-red-700 text-gray-200">track 5</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class=" rounded-bl-xl rounded-br-xl w-52 h-40 py-2 px-2 border-slate-500 bg-pink-200   text-blue-600">COMPUTATIONAL INTELLIGENCE APPLICATIONS </td>
    </tr>
  </tbody>
</table>
          </div>
        </div>
        
    
      </div>
      </div>
            
          </div>
        </div>
        {/* TRACK 1 */}
       
        <div className="py-6 ">
        <div className='container rounded-xl bg-gradient-to-br shadow-dark-neumorphism-xl from-red-500 to-purple-500 pb-4 mx-auto'>
      <h2 className='h2 mb-4 text-left bg-purple-700 px-4 py-2  rounded-tl-xl rounded-tr-xl font font-black text-gray-300 text-xl' >
      Track 1: COMPUTATIONAL INTELLIGENCE METHODOLOGIES
            </h2>
        <div className=' pt-6       grid md:grid-cols-2 grid-cols-1  gap-6 text-left'>
          <div className='mx-auto lg:mr-4'>
          <table class=" border-collapse bg-gradient-to-br rounded-xl  from-red-300 to-purple-200 pb-4 mx-auto  border-slate-500 ...">
  <thead>
    <tr>
      <td class=" w-52 py-2 px-2  rounded-tr-xl rounded-tl-xl   text-blue-500">Statistical models</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class=" w-52 py-2 px-2 border-slate-500   text-blue-500">Artificial Neural Networks</td>
    </tr>
    <tr>
      <td class=" w-52 py-2 px-2 border-slate-500   text-blue-500">Bio inspired algorithm</td>
    </tr>
    <tr>
      <td class=" w-52 py-2 px-2 border-slate-500   text-blue-500">Classification and Clustering</td>
    </tr>
    <tr>
      <td class=" w-52 py-2 px-2 border-slate-500   text-blue-500">Data Mining</td>
    </tr>
    <tr>
      <td class=" w-52 py-2 px-2 border-slate-500   text-blue-500">Decision support systems</td>
    </tr>
    <tr>
      <td class=" w-52 py-2 px-2 border-slate-500   text-blue-500">Hybrid Intelligent Systems</td>
    </tr>
  </tbody>
</table>
          </div>
          <div className='mx-auto lg:ml-4'>
          <table class=" border-collapse rounded-xl bg-gradient-to-br from-red-300 to-purple-200 border-slate-500 ...">
  <thead>
    <tr>
      <td class=" w-52 py-2 px-2 border-slate-500     text-blue-500">Fuzzy systems</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class=" w-52 py-2 px-2 border-slate-500   text-blue-500">Evolutionary Algorithms</td>
    </tr>
    <tr>
      <td class=" w-52 py-2 px-2 border-slate-500   text-blue-500">Knowledge based networks</td>
    </tr>
    <tr>
      <td class=" w-52 py-2 px-2 border-slate-500   text-blue-500">Optimization techniques</td>
    </tr>
    <tr>
      <td class=" w-52 py-2 px-2 border-slate-500   text-blue-500">Pattern recognition</td>
    </tr>
    <tr>
      <td class=" w-52 py-2 px-2 border-slate-500   text-blue-500">Distributed and parallel Algorithms</td>
    </tr>

  </tbody>
</table>
          </div>
        </div>
    
      </div>
      </div>

      {/* Track 2 */}

      <div className="py-6 ">
        <div className='container rounded-xl bg-gradient-to-br shadow-dark-neumorphism-xl from-red-500 to-purple-500 pb-4 mx-auto'>
      <h2 className='h2 mb-4 text-left bg-purple-700 px-4 py-2  rounded-tl-xl rounded-tr-xl font font-black text-gray-300 text-xl' >
      Track 2: COMPUTATIONAL INTELLIGENCE IN SIGNAL & IMAGE PROCESSING
            </h2>
        <div className='  pt-6  grid md:grid-cols-2 grid-cols-1 gap-6 text-left'>
          <div className='mx-auto lg:mr-4'>
          <table class=" border-collapse max-w-[250px]  bg-gradient-to-br rounded-xl  from-red-300 to-purple-200 border-slate-500 ...">
  <thead>
    <tr>
      <td class=" w-52 py-2 px-2 text-sm   text-blue-500">Computational intelligence methods for modeling</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class=" w-52 py-2 px-2  text-sm   text-blue-500">Computational methods for image filtering, enhancement and segmentation</td>
    </tr>
    <tr>
      <td class=" w-52 py-2 px-2 border-slate-500 text-sm   text-blue-500">Computational methods for signal recovery</td>
    </tr>
    <tr>
      <td class=" w-52 py-2 px-2 border-slate-500 text-sm   text-blue-500">Computational methods for speech recognition/processing</td>
    </tr>
    <tr>
      <td class=" w-52 py-2 px-2 border-slate-500 text-sm   text-blue-500">Natural language processing</td>
    </tr>
    <tr>
      <td class=" w-52 py-2 px-2 border-slate-500 text-sm   text-blue-500">Dynamic information acquisition and extraction from imaging sensors</td>
    </tr>
    <tr>
      <td class=" w-52 py-2 px-2 border-slate-500 text-sm   text-blue-500">Learning algorithms for adaptive signal processing</td>
      </tr>
      <tr>
      <td class=" w-52 py-2 px-2 border-slate-500  text-sm  text-blue-500">Machine learning & Deep Learning</td>
    </tr>
    <tr>
      <td class=" w-52 py-2 px-2 border-slate-500  text-sm  text-blue-500">Machine vision</td>
    </tr>
    <tr>
      <td class=" w-52 py-2 px-2 border-slate-500  text-sm  text-blue-500">Sparse data processing</td>
    </tr>
  
  </tbody>
</table>
</div>
          <div className=' mx-auto lg:ml-4'>
          <table class=" border-collapse max-w-[250px] bg-gradient-to-br rounded-xl  from-red-300 to-purple-200 border-slate-500 ...">
  <thead>
    <tr>
      <td class=" w-52 py-2 px-2 border-slate-500  text-sm  text-blue-500">Statistical signal processing</td>
    </tr>
  </thead>
  <tbody>
  
    
    <tr>
      <td class=" w-52 py-2 px-2 border-slate-500  text-sm  text-blue-500">Sensing and processing</td>
    </tr>
    <tr>
      <td class=" w-52 py-2 px-2 border-slate-500 text-sm   text-blue-500">Computational methods for cardiovasucular and respiratory diagnosis</td>
    </tr>
    <tr>
      <td class=" w-52 py-2 px-2 border-slate-500  text-sm  text-blue-500">Computational method for medical image analysis</td>
    </tr>
    <tr>
      <td class=" w-52 py-2 px-2 border-slate-500  text-sm  text-blue-500">EEG, ECG and EMG signal processing</td>
    </tr>
    <tr>
      <td class=" w-52 py-2 px-2 border-slate-500  text-sm  text-blue-500">Intelligent medical device design</td>
    </tr>
    <tr>
      <td class=" w-52 py-2 px-2 border-slate-500  text-sm  text-blue-500">Modeling of organs</td>
    </tr><tr>
      <td class=" w-52 py-2 px-2 border-slate-500  text-sm  text-blue-500">AI in disease diagnosis</td>
    </tr>
    <tr>
      <td class=" w-52 py-2 px-2 border-slate-500  text-sm  text-blue-500">Virtual tools for surgery</td>
    </tr>
    <tr>
      <td class=" w-52 py-2 px-2 border-slate-500  text-sm  text-blue-500">Patient data analysis</td>
    </tr>
  </tbody>
</table>
          </div>
        </div>
        </div>
      </div>
       {/* Track 3 */}

       <div className="py-6 ">
        <div className='container rounded-xl bg-gradient-to-br shadow-dark-neumorphism-xl from-red-500 to-purple-500 pb-4 mx-auto'>
      <h2 className='h2 mb-4 text-left bg-purple-700 px-4 py-2  rounded-tl-xl rounded-tr-xl font font-black text-gray-300 text-xl' >
      Track 3: COMPUTATIONAL INTELLIGENCE IN WIRELESS COMMUNICATION NETWORKS
            </h2>
        <div className=' pt-6   grid md:grid-cols-2 grid-cols-1 gap-6 text-left'>
          <div className='mx-auto lg:mr-4'>
          <table class=" border-collapse max-w-[250px] bg-gradient-to-br rounded-xl  from-red-300 to-purple-200 border-slate-500 ...">
  <thead>
    <tr>
      <td class=" w-52 py-2 px-2 border-slate-500 text-sm   text-blue-500">Ad Hoc networks optimization issues</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class=" w-52 py-2 px-2 border-slate-500 text-sm   text-blue-500">Cognitive Wireless Sensor Networks</td>
    </tr>
    <tr>
      <td class=" w-52 py-2 px-2 border-slate-500 text-sm   text-blue-500">Computational Intelligence and Energy efficient Protocols</td>
    </tr>
    <tr>
      <td class=" w-52 py-2 px-2 border-slate-500 text-sm   text-blue-500">Computational Intelligence and Routing</td>
    </tr>
    <tr>
      <td class=" w-52 py-2 px-2 border-slate-500 text-sm   text-blue-500">Distributed and Parallel Algorithms</td>
    </tr>
    <tr>
      <td class=" w-52 py-2 px-2 border-slate-500 text-sm   text-blue-500">Learning Patterns from Sensor Sources</td>
    </tr>
    <tr>
      <td class=" w-52 py-2 px-2 border-slate-500 text-sm   text-blue-500">Statistical models for Communication systems</td>
    </tr>
    <tr>
      <td class="w-52 py-2 px-2 border-slate-500 text-sm   text-blue-500">Mobile Computing</td>
    </tr>
    <tr>
      <td class=" w-52 py-2 px-2 border-slate-500 text-sm   text-blue-500">Mobility Models</td>
    </tr>
  </tbody>
</table>
</div>
          <div className='mx-auto lg:ml-4'>
          <table class=" border-collapse max-w-[250px] bg-gradient-to-br rounded-xl  from-red-300 to-purple-200 border-slate-500 ...">
  <thead>
    <tr>
      <td class=" w-52 py-2 px-2 border-slate-500  text-sm  text-blue-500">Optimization techniques in Telecommunication</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class=" w-52 py-2 px-2 border-slate-500  text-sm  text-blue-500">Optimized design of Wireless Networks</td>
    </tr>
    <tr>
      <td class=" w-52 py-2 px-2 border-slate-500  text-sm  text-blue-500">Prediction systems </td>
    </tr>
    <tr>
      <td class=" w-52 py-2 px-2 border-slate-500  text-sm  text-blue-500">Wireless Communication System Modeling</td>
    </tr>
    <tr>
      <td class=" w-52 py-2 px-2 border-slate-500 text-sm   text-blue-500">Internet of Everything</td>
    </tr>
    <tr>
      <td class=" w-52 py-2 px-2 border-slate-500  text-sm  text-blue-500">Cloud Computing</td>
    </tr>
    <tr>
      <td class=" w-52 py-2 px-2 border-slate-500  text-sm  text-blue-500">5G communication</td>
    </tr>
    <tr>
      <td class=" w-52 py-2 px-2 border-slate-500  text-sm  text-blue-500">Next Generation systems</td>
    </tr>
    <tr>
      <td class=" w-52 py-2 px-2 border-slate-500  text-sm  text-blue-500">Cryptography, Network security and management</td>
    </tr>
    <tr>
      <td class=" w-52 py-2 px-2 border-slate-500  text-sm  text-blue-500">VLSI design of Intelligent systems</td>
    </tr>

  </tbody>
</table>
          </div>
        </div>
        </div>
      </div>

      {/* Track 4 */}

      <div className="py-6 ">
        <div className='container rounded-xl bg-gradient-to-br shadow-dark-neumorphism-xl from-red-500 to-purple-500 pb-4 mx-auto'>
      <h2 className='h2 mb-4 text-left bg-purple-700 px-4 py-2  rounded-tl-xl rounded-tr-xl font font-black text-gray-300 text-xl' >
      Track 4: COMPUTATIONAL METHODS FOR POWER SYSTEMS
            </h2>
        <div className=' pt-6    grid md:grid-cols-2 grid-cols-1 gap-6 text-left'>
          <div className='mx-auto lg:mr-4'>
          <table class="bg-gradient-to-br rounded-xl  from-red-300 to-purple-200 border-collapse max-w-[250px] border-slate-500 ...">
  <thead>
    <tr>
      <td class=" py-2 w-52 px-2 border-slate-500 text-sm   text-blue-500">E-vehicles</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class=" py-2 w-52  px-2 border-slate-500 text-sm   text-blue-500">Smart Grid Technologies</td>
    </tr>
    <tr>
      <td class=" py-2 w-52 px-2 border-slate-500 text-sm   text-blue-500">Energy saving techniques</td>
    </tr>
    <tr>
      <td class=" py-2 w-52 px-2 border-slate-500 text-sm   text-blue-500">Power systems modeling</td>
    </tr>
    <tr>
      <td class=" py-2 w-52 px-2 border-slate-500 text-sm   text-blue-500">Power Electronics, Systems, and Applications</td>
    </tr>
    <tr>
      <td class=" py-2 w-52 px-2 border-slate-500 text-sm   text-blue-500">AI for power systems</td>
    </tr>
  </tbody>
</table>
</div>
          <div className='mx-auto lg:ml-4'>
          <table class=" border-collapse max-w-[250px] border-slate-500 bg-gradient-to-br rounded-xl  from-red-300 to-purple-200">
  <thead>
    <tr>
      <td class=" py-2 w-52 px-2 border-slate-500  text-sm  text-blue-500">Green computing</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class=" py-2 w-52 px-2 border-slate-500  text-sm  text-blue-500">Intelligent systems</td>
    </tr>
    <tr>
      <td class=" py-2 w-52 px-2 border-slate-500  text-sm  text-blue-500">Embedded systems</td>
    </tr>
    <tr>
      <td class=" py-2 w-52 px-2 border-slate-500  text-sm  text-blue-500">Internet of things</td>
    </tr>
    <tr>
      <td class=" py-2 w-52 px-2 border-slate-500 text-sm   text-blue-500">Instrumentation & Feedback Control Systems</td>
    </tr>
    <tr>
      <td class=" py-2 w-52 px-2 border-slate-500 text-sm   text-blue-500">Future energy systems</td>
    </tr>

  </tbody>
</table>
          </div>
        </div>
        </div>
      </div>


      {/* Track 5 */}

      <div className="py-6 ">
        <div className='container rounded-xl bg-gradient-to-br shadow-dark-neumorphism-xl from-red-500 to-purple-500 pb-4 mx-auto'>
      <h2 className='h2 mb-4 text-left bg-purple-700 px-4 py-2  rounded-tl-xl rounded-tr-xl font font-black text-gray-300 text-xl' >
      Track 5: COMPUTATIONAL INTELLIGENCE APPLICATIONS
            </h2>
        <div className=' pt-6    grid md:grid-cols-2 grid-cols-1  text-left'>
          <div className='mx-auto pb-4 lg:mr-4'>
          <table class=" border-collapse max-w-[250px] bg-gradient-to-br rounded-xl  from-red-300 to-purple-200 border-slate-500 ...">
  <thead>
    <tr>
      <td class=" py-2 w-52 px-2 border-slate-500 text-sm   text-blue-500">Application of ML and DL in civil engineering</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class=" py-2 w-52 px-2 border-slate-500 text-sm   text-blue-500">Smart structures</td>
    </tr>
    <tr>
      <td class=" py-2 w-52 px-2 border-slate-500 text-sm   text-blue-500">AI based structural health monitoring</td>
    </tr>
  </tbody>
</table>
</div>
          <div className='mx-auto py-4 lg:ml-4'>
          <table class=" border-collapse max-w-[250px] bg-gradient-to-br rounded-xl  from-red-300 to-purple-200 border-slate-500 ...">
  <thead>
    <tr>
      <td class=" py-2 w-52 px-2 border-slate-500  text-sm  text-blue-500">Robotics and Intelligent systems</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class=" py-2 w-52 px-2 border-slate-500  text-sm  text-blue-500">Human machine interaction</td>
    </tr>
    <tr>
      <td class=" py-2 w-52 px-2 border-slate-500  text-sm  text-blue-500">Home Automation systems</td>
    </tr>
  </tbody>
</table>
          </div>
        </div>
        </div>
      </div>
      </div>

    </section> 

    <section
      className='my-[40px] '
      id="#About"

    >

    <div className="pb-6 ">
        <div className='container bg-gradient-to-br rounded-xl  from-red-300 to-purple-200   mx-auto '>
      <h2 className='h2 mb-4 px-4 pt-2 font font-black bg-purple-500 pb-3 text-gray-300 text-xl' >
            CONFERENCE PUBLICATIONS
            </h2>
            <div className="">
            <ul class="list-disc mx-auto text-left px-12">
  <li><p className='text-left pb-5 mx-auto'>The CIC 2023 conference plans to include only quality papers with significant contributions. All submissions will be screened for plagiarism and all submitted papers will undergo a peer review process, coordinated by the Program Committee. Each manuscript will be reviewed by a minimum of three reviewers. The accepted and registered regular papers is to be published in the conference proceedings published by reputed publishers.</p>
  </li>
  <li><p className='text-left py-5 mx-auto'>Best papers will be duly awarded.</p></li>
  <li><p className='text-left py-5 mx-auto'>Extended works of authors of the best papers will be recommended for publication in Indexed Journals</p></li>
</ul>
</div>

        </div>
      </div>
   

    </section>
        </div>
    )
}

export default Call;