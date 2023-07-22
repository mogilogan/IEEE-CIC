import React from "react";

// import { RandomHLine, RandomBlob } from 'react-random-shapes'


import mandapam from './assests/mandapam.jpg';
import ptubuild from './assests/ptubuild.jpg';
import ece from './assests/ece.jpg';

const Venue = ()=>{
  // const numLines = 6
  // const rng = Array.from(new Array(numLines), (x, i) => i)
	// const start = Math.random() * 360
  // const styles = rng.map(x => {
	// 	return {fill: "transparent", stroke: `hsl(${start + x/numLines*360}, 100%, 50%)`}
	// })
    return(
        <div>
             <h1 className="flex text-xl py-6 pl-4 leading-4"><a className=" flex gap-1 hover:text-teal-600" href="/">  <svg  height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(1 1)"><path d="m.5 9.5 9-9 9 9"/><path d="m2.5 7.5v8c0 .5522847.44771525 1 1 1h3c.55228475 0 1-.4477153 1-1v-4c0-.5522847.44771525-1 1-1h2c.5522847 0 1 .4477153 1 1v4c0 .5522847.4477153 1 1 1h3c.5522847 0 1-.4477153 1-1v-8"/></g></svg>Home</a> / Venue</h1>
            {/* <div>
  				<RandomHLine width={600} height={150} options={{numLines: numLines, numControls: 4, debug: false, styleMid: styles}} />
  			</div> */}
        <div className="bg-[url('../public/try6.gif')] bg-cover bg-fixed"> 

            <section
      className='my-[5px] py-12'
      id="#About"

    >
      <div className='max-w-[360px] sm:max-w-[700px] md:max-w-[1200px] container rounded-xl  bg-gradient-to-br from-blue-500 to-blue-200 mx-auto '>
           

      <h1 className="text-3xl pl-4 font-bold text-white text-left py-4">PUDUCHERRY</h1>


<div class="w-full max-w-[90%] mx-auto  rounded-full h-2.5 mb-4 bg-gray-700">
  <div class="bg-yellow-400 h-2.5 rounded-full " style={{width: "30%"}}></div>
</div>


        <div className='    min-h-[560px] px-12 pb-12 flex flex-col text-center xl:flex-row  xl:text-left  xl:gap-x-[40px] xl:pb-0    '>
           
        <div className='flex-1 center mx-auto' data-aos='zoom-in-left'>
            <img className="border-white xl:pl-20 xl:max-h-[550px] max-h-[700px]" src={mandapam}  alt='' />
          </div>
          <div className='flex-1 '>
            <p
              className='md:px-6 pt-4 text-[14px] sm:text-lg text-justify  mx-auto'
            >
           Pondicherry ( or Puducherry), a French colonial settlement in India until 1954, is now a Union Territory town bounded by the south eastern Tamil Nadu state. It’s French legacy is preserved in it’s French quarter, with tree-lined streets, mustard coloured colonial villas and chic boutiques. The town offers a unique experience with its mix of modern heritage and spiritual culture. A sea side promenade runs along the Bay of Bengal and passes several statues, including a four metre high Gandhi memorial. Heritage is one the most precious gift, Puducherry has been offering to it’s tourists and visitors. The coastal town of Puducherry with the French ambience is known for the serene atmosphere. The Eglise de Notre Dame des Anges, Place De Gouvernement, French War Memorial, Sri Manakula Vinayakar Temple, Serinity beach, Chunnambar and Paradise Beach Boat house are some of the major tourist attractions in and around Puducherry. Sri Aurobindo Ashram and the nearby Auroville International Township lend unique spiritual flavour to the city.
            </p>
          </div>
        </div>
        
      </div>
      
     
      
    </section>

    <section
      className='my-[5px] pb-12'
      id="#About"

    >
      <div className='max-w-[360px] sm:max-w-[700px] md:max-w-[1200px] container rounded-xl mx-auto bg-gradient-to-br from-blue-500 to-blue-200'>
           

      <h1 className="text-3xl pl-4 font-bold text-white text-left py-4">PUDUCHERRY TECHNOLOGICAL UNIVERSITY</h1>


<div class="w-full max-w-[90%] mx-auto  rounded-full h-2.5 mb-4 bg-gray-700">
  <div class="bg-green-600 h-2.5 rounded-full " style={{width: "30%"}}></div>
</div>


        <div className='   min-h-[560px] px-12 pb-12 flex flex-col text-center xl:flex-row  xl:text-left  xl:gap-x-[40px] xl:pb-0    '>
           
        <div className='flex-1 center mx-auto my-auto' data-aos='zoom-in-left'>
            <img className="border-white xl:max-h-[500px] max-h-[700px]" src={ptubuild}  alt='' />
          </div>
          <div className='flex-1 '>
            <p
              className='md:px-12 pt-4 text-[14px] sm:text-lg text-justify  mx-auto'
            >
Puducherry Technological University (PTU) is the first state University of Union Territory of Puducherry. It seamlessly came into existence on the 5<sup></sup> September 2020 upon the elevation of erstwhile Pondicherry Engineering College - PEC (established in the year 1985 under the 7 th  five-year plan) with the University status. PTU began its journey with a position of pre-eminence and rightly stands as one of the finest engineering schools offering Bachelors, Masters and Doctoral study programmes in the prominent disciplines of Engineering/Technology, Science, Management, Entrepreneurship. Highly qualified faculty, diverse student population from across the country, best-of-breed infrastructure and an expansive campus sprawling over 185.8 acres of luscious green landscape on the shores of tantalizing Bay of Bengal present a vibrant ecosystem for the pursuit of intellectual excellence. Thirty-six years on since its original inception, PTU has built a legacy for itself and stands in good stead in terms of discernible academic parameters. NIRF, MHRD, Govt. of India has ranked PTU at 150 under the category of engineering education. PTU alumni are spread far and wide across the globe holding eminent positions in top global Corporates, Universities and Civil Services. Some of them own successful enterprises in India and abroad. Such accomplishments stand testimony to the quality of education we have been offering from the classrooms of PTU.
            </p>
          </div>
        </div>
        
      </div>
    </section>

    <section
      className='my-[5px] pb-12'
      id="#About"

    >
      <div className='max-w-[360px] sm:max-w-[700px] md:max-w-[1200px] container rounded-xl mx-auto bg-gradient-to-br from-blue-500 to-blue-200'>
           

      <h1 className="text-3xl pl-4 font-bold text-white text-left py-4">DEPARTMENT OF ELECTRONICS AND COMMUNICATION ENGINEERING</h1>


<div class="w-full max-w-[90%] mx-auto  rounded-full h-4 mb-4 bg-gray-700">
  <div class="bg-green-600 h-4 rounded-full " style={{width: "60%"}}></div>
</div>


        <div className='    min-h-[560px] px-12 pb-12 flex flex-col text-center xl:flex-row  xl:text-left  xl:gap-x-[40px] xl:pb-0    '>
           
        <div className='flex-1 center mx-auto my-auto' data-aos='zoom-in-left'>
            <img className="border-white xl:max-h-[500px] max-h-[700px] " src={ece}  alt='' />
          </div>
          <div className='flex-1 '>
            <p
              className='md:px-12 pt-4 text-[14px] sm:text-lg  text-justify mx-auto'
            >
          The Department of Electronics and Communication Engineering, since its inception in the year 1985, has been producing globally competitive engineering graduates. It is resourceful in terms of infrastructure and the state of the art facilities to pursue academic studies and research in niche areas of technology. The highly qualified and experienced faculties are one of the most significant features of the department. The department commenced to offer its first M.Tech degree program in the year 1990 and second M.Tech degree program on Wireless Communication technologies in the year 2006. Over the years, the department has matured into the QIP research centre producing Ph.D. Graduates in different specialisations of Electronics and Communication Engineering.
            </p>
          </div>
        </div>
        
      </div>
    </section>

    <section
      className='my-[5px] '
      id="#About"

    >
      <div className='max-w-[360px] sm:max-w-[700px] md:max-w-[1200px] container rounded-xl mx-auto bg-white'>
        <div className='   pb-12 flex flex-col    '>
            <div className="">
          <div className='flex-1 rounded-tl-xl rounded-tr-xl bg-blue-500'>
            <h2 className='h2 mb-10 px-4 py-3  font font-black text-white text-lg' >
            REACHING PUDUCHERRY TECHNOLOGICAL UNIVERSITY
            </h2>
            </div>
            <p
              className='px-12 text-[14px] sm:text-lg  text-left mx-auto'
            >
                <span className="underline">FROM CHENNAI:</span>
            <ul className="list-disc pl-10">
                <li className="py-3 mx-auto ">Through East Coast Road, about 120 Kms to the south of Chennai</li>
                <li className="py-3 mx-auto ">Through GST Road, reach Pondicherry through Tindivanam and proceed towards Rajiv Gandhi Statue.</li>
                <li className="py-3 mx-auto ">Take a right turn, then proceed straight towards Puducherry Technological University.</li>
            </ul>
            </p>

            <p
              className='px-12   text-left mx-auto'
            >
               <span className="underline">FROM PUDUCHERRY BUS STAND</span> 
            <ul className="list-disc pl-10">
                <li className="py-3 mx-auto ">About 14 Kms from Puducherry Bus stand and Railway Station. Town Buses and Auto Rickshaws are available at reasonable rates.</li>
                <li className="py-3 mx-auto ">About 5 Kms from Auroville International City.</li>
            </ul>
            </p>
           
          </div>
        </div>
      </div>
    </section>


    {/* Location */}

    <section
      className='my-[20px] py-12 '
      id="#About"

    >
      <div className='max-w-[360px] sm:max-w-[700px] md:max-w-auto container rounded-xl mx-auto bg-white'>
        <div className=' pb-12 flex flex-col'>
            <div className="">
          <div className='flex-1 rounded-tl-xl rounded-tr-xl bg-blue-500 '>
            <h2 className='h2 mb-10 px-4 py-3 font font-black text-white text-lg' >
            LOCATION
            </h2>
            </div>
            <div className="hidden md:block">
              <iframe class="mx-auto sm:display-none"  width="600" height="300" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.4525377240434!2d79.85504551473028!3d12.012335191490218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a536446022cfb0b%3A0x5c0d300c8187a76b!2sPuducherry%20Technological%20University!5e0!3m2!1sen!2sin!4v1678205503864!5m2!1sen!2sin"  style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className="md:hidden block">
              <iframe class="mx-auto sm:display-none"  width="350" height="200" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.4525377240434!2d79.85504551473028!3d12.012335191490218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a536446022cfb0b%3A0x5c0d300c8187a76b!2sPuducherry%20Technological%20University!5e0!3m2!1sen!2sin!4v1678205503864!5m2!1sen!2sin"  style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
          </div>
        </div>
      </div>
    </section>


             
    </div>
        </div>
    )
}

export default Venue;