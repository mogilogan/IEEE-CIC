import React from "react";

const Call  = ()=>{
    return(
        <div>
             <h1 className="text-xl py-6 pl-4">Home / Call For Papers</h1>

            <section
      className='my-[5px] '
      id="#About"

    >
      <div className='container mx-auto bg-gray-100'>
        <div className=' pb-12 flex flex-col    '>
          <div className='flex-1 '>
            <h2 className='h2 mb-10 px-4 pt-2 font font-black text-blue-800 text-xl' >
            CONFERENCE TRACKS
            </h2>
            <table class="table-fixed">
  <thead>
    <tr className="bg-gray-300">
      <th className="border border-slate-400">Track 1</th>
      <th className="border border-slate-400">Track 2</th>
      <th className="border border-slate-400">Track 3</th>
      <th className="border border-slate-400">Track 4</th>
      <th className="border border-slate-400">Track 5</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td className="border border-slate-400 text-center">Computational Intelligence Methodologies</td>
    <td className="border border-slate-400 text-center">Computational Intelligence in Signal & Image Processing</td>
    <td className="border border-slate-400 text-center">Computational Intelligence in Wireless Communcation Network</td>
    <td className="border border-slate-400 text-center"> Computational Methods in Biosignal Processing for Telemedicine</td>
    <td className="border border-slate-400 text-center"> Computational Intelligence Applications</td>
    </tr>
    
  </tbody>
</table>
            
          </div>
        </div>
        {/* TRACK 1 */}
       
        <div className="pb-6 bg-gray-100">
        <div className='container   mx-auto bg-gray-400'>
      <h2 className='h2 mb-4 text-left px-4 pt-2 font font-black text-blue-800 text-xl' >
      Track 1: COMPUTATIONAL INTELLIGENCE METHODOLOGIES
            </h2>
        <div className='bg-gray-100 pl-20 py-4  grid grid-cols-2 gap-6 text-left'>
          <div className=' '>
          <table class=" border-collapse border border-slate-500 ...">
  <thead>
    <tr>
      <td class="border py-2 px-2 border-slate-400  bg-blue-100 text-blue-500">Artificial Neural Networks</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border py-2 px-2 border-slate-400  bg-blue-100 text-blue-500">Bio inspired algorithms</td>
    </tr>
    <tr>
      <td class="border py-2 px-2 border-slate-400  bg-blue-100 text-blue-500">Classification and Clustering</td>
    </tr>
    <tr>
      <td class="border py-2 px-2 border-slate-400  bg-blue-100 text-blue-500">Data Mining</td>
    </tr>
    <tr>
      <td class="border py-2 px-2 border-slate-400  bg-blue-100 text-blue-500">Decision support systems</td>
    </tr>
    <tr>
      <td class="border py-2 px-2 border-slate-400  bg-blue-100 text-blue-500">Hybrid Intelligent Systems</td>
    </tr>
  </tbody>
</table>
          </div>
          <div className=''>
          <table class=" border-collapse border border-slate-500 ...">
  <thead>
    <tr>
      <td class="border py-2 px-2 border-slate-400  bg-blue-100 text-blue-500">Fuzzy systems</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border py-2 px-2 border-slate-400  bg-blue-100 text-blue-500">Evolutionary Algorithms</td>
    </tr>
    <tr>
      <td class="border py-2 px-2 border-slate-400  bg-blue-100 text-blue-500">Knowledge based networks</td>
    </tr>
    <tr>
      <td class="border py-2 px-2 border-slate-400  bg-blue-100 text-blue-500">Optimization techniques</td>
    </tr>
    <tr>
      <td class="border py-2 px-2 border-slate-400  bg-blue-100 text-blue-500">Pattern recognition and Machine Learning</td>
    </tr>

  </tbody>
</table>
          </div>
        </div>
    
      </div>
      </div>

      {/* Track 2 */}

      <div className="pb-6">
        <div className='container   mx-auto bg-gray-400'>
      <h2 className='h2 mb-4 text-left px-4 pt-2 font font-black text-blue-800 text-xl' >
      Track 2: COMPUTATIONAL INTELLIGENCE IN SIGNAL & IMAGE PROCESSING
            </h2>
        <div className='bg-gray-100 pl-20 py-4   grid grid-cols-2 gap-6 text-left'>
          <div className=''>
          <table class=" border-collapse max-w-[250px] border border-slate-500 ...">
  <thead>
    <tr>
      <td class="border py-2 px-2 border-slate-400 text-sm  bg-blue-100 text-blue-500">Computational intelligence methods for the three-dimensional modelling</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border py-2 px-2 border-slate-400 text-sm  bg-blue-100 text-blue-500">Computational methods for image filtering, enhancement and segmentation</td>
    </tr>
    <tr>
      <td class="border py-2 px-2 border-slate-400 text-sm  bg-blue-100 text-blue-500">Computational methods for signal recovery</td>
    </tr>
    <tr>
      <td class="border py-2 px-2 border-slate-400 text-sm  bg-blue-100 text-blue-500">Computational methods for speech recognition</td>
    </tr>
    <tr>
      <td class="border py-2 px-2 border-slate-400 text-sm  bg-blue-100 text-blue-500">Dynamic information acquisition and extraction from imaging sensors</td>
    </tr>
    <tr>
      <td class="border py-2 px-2 border-slate-400 text-sm  bg-blue-100 text-blue-500">Learning algorithms for adaptive signal processing</td>
    </tr>
  </tbody>
</table>
</div>
          <div className=' '>
          <table class=" border-collapse max-w-[250px] border border-slate-500 ...">
  <thead>
    <tr>
      <td class="border py-2 px-2 border-slate-400  text-sm bg-blue-100 text-blue-500">Machine vision</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border py-2 px-2 border-slate-400  text-sm bg-blue-100 text-blue-500">Model-based data inversion</td>
    </tr>
    <tr>
      <td class="border py-2 px-2 border-slate-400  text-sm bg-blue-100 text-blue-500">Software and hardware implementation of efficient computations in imaging systems</td>
    </tr>
    <tr>
      <td class="border py-2 px-2 border-slate-400  text-sm bg-blue-100 text-blue-500">Sparse data processing</td>
    </tr>
    <tr>
      <td class="border py-2 px-2 border-slate-400 text-sm  bg-blue-100 text-blue-500">Statistical signal processing</td>
    </tr>
    <tr>
      <td class="border py-2 px-2 border-slate-400  text-sm bg-blue-100 text-blue-500">Unconventional sensing of image data</td>
    </tr>

  </tbody>
</table>
          </div>
        </div>
        </div>
      </div>
       {/* Track 3 */}

       <div className="pb-6">
        <div className='container   mx-auto bg-gray-400'>
      <h2 className='h2 mb-4 text-left px-4 pt-2 font font-black text-blue-800 text-xl' >
      Track 3: COMPUTATIONAL INTELLIGENCE IN WIRELESS COMMUNICATION NETWORKS
            </h2>
        <div className='bg-gray-100 pl-20 py-4   grid grid-cols-2 gap-6 text-left'>
          <div className=''>
          <table class=" border-collapse max-w-[250px] border border-slate-500 ...">
  <thead>
    <tr>
      <td class="border py-2 px-2 border-slate-400 text-sm  bg-blue-100 text-blue-500">Ad Hoc networks optimization issues</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border py-2 px-2 border-slate-400 text-sm  bg-blue-100 text-blue-500">Cognitive Wireless Sensor Networks</td>
    </tr>
    <tr>
      <td class="border py-2 px-2 border-slate-400 text-sm  bg-blue-100 text-blue-500">Computational Intelligence and Energy efficient Protocols in WSN</td>
    </tr>
    <tr>
      <td class="border py-2 px-2 border-slate-400 text-sm  bg-blue-100 text-blue-500">Computational Intelligence and Routing in WSN</td>
    </tr>
    <tr>
      <td class="border py-2 px-2 border-slate-400 text-sm  bg-blue-100 text-blue-500">Distributed and Parallel Algorithms for Smart WSN</td>
    </tr>
    <tr>
      <td class="border py-2 px-2 border-slate-400 text-sm  bg-blue-100 text-blue-500">Learning Patterns from Sensor Sources</td>
    </tr>
    <tr>
      <td class="border py-2 px-2 border-slate-400 text-sm  bg-blue-100 text-blue-500">Statistical models</td>
    </tr>
  </tbody>
</table>
</div>
          <div className=' '>
          <table class=" border-collapse max-w-[250px] border border-slate-500 ...">
  <thead>
    <tr>
      <td class="border py-2 px-2 border-slate-400  text-sm bg-blue-100 text-blue-500">Mobile Computing</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border py-2 px-2 border-slate-400  text-sm bg-blue-100 text-blue-500">Mobility Models</td>
    </tr>
    <tr>
      <td class="border py-2 px-2 border-slate-400  text-sm bg-blue-100 text-blue-500">Optimization techniques in Telecommunication</td>
    </tr>
    <tr>
      <td class="border py-2 px-2 border-slate-400  text-sm bg-blue-100 text-blue-500">Optimized design of Wireless Networks</td>
    </tr>
    <tr>
      <td class="border py-2 px-2 border-slate-400 text-sm  bg-blue-100 text-blue-500">Pervasive computing</td>
    </tr>
    <tr>
      <td class="border py-2 px-2 border-slate-400  text-sm bg-blue-100 text-blue-500">Prediction systems</td>
    </tr>
    <tr>
      <td class="border py-2 px-2 border-slate-400  text-sm bg-blue-100 text-blue-500">Wireless Communication System Modeling</td>
    </tr>

  </tbody>
</table>
          </div>
        </div>
        </div>
      </div>

      {/* Track 4 */}

      <div className="pb-6">
        <div className='container   mx-auto bg-gray-400'>
      <h2 className='h2 mb-4 text-left px-4 pt-2 font font-black text-blue-800 text-xl' >
      Track 4: COMPUTATIONAL METHODS IN BIOSIGNAL PROCESSING FOR TELEMEDICINE
            </h2>
        <div className='bg-gray-100 pl-20 py-4   grid grid-cols-2 gap-6 text-left'>
          <div className=''>
          <table class=" border-collapse max-w-[250px] border border-slate-500 ...">
  <thead>
    <tr>
      <td class="border py-2 px-2 border-slate-400 text-sm  bg-blue-100 text-blue-500">Computational methods in Cardiovascular and respiratory mechanics</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border py-2 px-2 border-slate-400 text-sm  bg-blue-100 text-blue-500">Computational intelligence in medical image analysis</td>
    </tr>
    <tr>
      <td class="border py-2 px-2 border-slate-400 text-sm  bg-blue-100 text-blue-500">EEG and EMG signal processing</td>
    </tr>
    <tr>
      <td class="border py-2 px-2 border-slate-400 text-sm  bg-blue-100 text-blue-500">Health care model design</td>
    </tr>
    <tr>
      <td class="border py-2 px-2 border-slate-400 text-sm  bg-blue-100 text-blue-500">Intelligent Medical device design</td>
    </tr>
    <tr>
      <td class="border py-2 px-2 border-slate-400 text-sm  bg-blue-100 text-blue-500">Medical imaging (MRI, Ultrasound, Ophthalmological imaging, Neuro imaging, etc)</td>
    </tr>
    <tr>
      <td class="border py-2 px-2 border-slate-400 text-sm  bg-blue-100 text-blue-500">Statistical models</td>
    </tr>
  </tbody>
</table>
</div>
          <div className=' '>
          <table class=" border-collapse max-w-[250px] border border-slate-500 ...">
  <thead>
    <tr>
      <td class="border py-2 px-2 border-slate-400  text-sm bg-blue-100 text-blue-500">Numerical modelling of organs</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border py-2 px-2 border-slate-400  text-sm bg-blue-100 text-blue-500">Patient-specific modelling</td>
    </tr>
    <tr>
      <td class="border py-2 px-2 border-slate-400  text-sm bg-blue-100 text-blue-500">Surgical simulation</td>
    </tr>
    <tr>
      <td class="border py-2 px-2 border-slate-400  text-sm bg-blue-100 text-blue-500">AI in Tumour modelling</td>
    </tr>
    <tr>
      <td class="border py-2 px-2 border-slate-400 text-sm  bg-blue-100 text-blue-500">Telemedicine</td>
    </tr>

  </tbody>
</table>
          </div>
        </div>
        </div>
      </div>

      {/* Track 5 */}

      <div className="pb-6">
        <div className='container   mx-auto bg-gray-400'>
      <h2 className='h2 mb-4 text-left px-4 pt-2 font font-black text-blue-800 text-xl' >
      Track 5: COMPUTATIONAL INTELLIGENCE APPLICATIONS
            </h2>
        <div className='bg-gray-100 pl-20 py-4   grid grid-cols-2 gap-6 text-left'>
          <div className=''>
          <table class=" border-collapse max-w-[250px] border border-slate-500 ...">
  <thead>
    <tr>
      <td class="border py-2 px-2 border-slate-400 text-sm  bg-blue-100 text-blue-500">AI system design</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border py-2 px-2 border-slate-400 text-sm  bg-blue-100 text-blue-500">Robotics and Automation</td>
    </tr>
    <tr>
      <td class="border py-2 px-2 border-slate-400 text-sm  bg-blue-100 text-blue-500">Human machine interaction</td>
    </tr>
  </tbody>
</table>
</div>
          <div className=' '>
          <table class=" border-collapse max-w-[250px] border border-slate-500 ...">
  <thead>
    <tr>
      <td class="border py-2 px-2 border-slate-400  text-sm bg-blue-100 text-blue-500">Intelligent information retrieval</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border py-2 px-2 border-slate-400  text-sm bg-blue-100 text-blue-500">Natural language processing</td>
    </tr>
    <tr>
      <td class="border py-2 px-2 border-slate-400  text-sm bg-blue-100 text-blue-500">VLSI design of intelligent systems</td>
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

    <div className="pb-6">
        <div className='container   mx-auto bg-blue-200'>
      <h2 className='h2 mb-4 px-4 pt-2 font font-black text-blue-800 text-xl' >
            CONFERENCE PUBLICATIONS
            </h2>
            <div className="bg-gray-100">
            <ul class="list-disc mx-auto text-left px-12">
  <li><p className='text-left pb-5 mx-auto'>The CIC 2016 conference plans to include only quality papers with significant contributions. All submissions will be screened for plagiarism and all submitted papers will undergo a peer review process, coordinated by the Program Committee. Each manuscript will be reviewed by a minimum of three reviewers. The accepted and registered regular papers is to be published in the conference proceedings published by reputed publishers.</p>
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