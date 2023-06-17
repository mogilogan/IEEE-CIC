import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";


import home1 from './assests/Home1.avif';
import home2 from './assests/home2.jpg';
import home3 from './assests/Home3.webp';
import home4 from './assests/home4.jpg';
import home5 from './assests/home5.jpg';
var Carousel = require('react-responsive-carousel').Carousel;


const Home  = ()=>{
    return(
      <div>
        <h1 className="text-xl py-6 pl-4">Home </h1>
        <div className="bg-[url('../public/try6.gif')] bg-cover bg-fixed" >
             

            

    <section
      className='my-[5px] py-10 '
      id="#About"

    >
      <div className='container  rounded-3xl  mx-auto bg-gradient-to-br from-blue-900  to-blue-400'>
      {/* <marquee className="py-5"><span className="text-xl  text-yellow-600"> Accepted and Registered papers of ICACIC 2016 will be published in ESCI-IP&Sc Thomson Reuters-Web of Science, Scopus & Anna Univ-Annex-II International Journals. Substantially Extended Versions of High Quality Papers will be considered for publication in Special Issue of Int. J. of Advanced Intelligence Paradigms, Inderscience, AEU Int.J of E&C, Elsevier* and Int.J. of Ambient Computing & Intelligence, IGI-Global. See Publications for more details.
            </span></marquee> */}
           

      <h1 className="text-3xl pl-4 font-bold text-gray-200 text-left py-4">ICACIC 2023</h1>
        <div className='    min-h-[560px] px-12 pb-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left  xl:gap-x-[60px] xl:pb-0    '>
           
        <div className='flex-1' data-aos='zoom-in-left'>
            {/* <img className="border-white" src={home1} alt='' /> */}
            <Carousel className="max-w-lg" stopOnHover autoPlay  infiniteLoop showArrows={false} showStatus={false} showThumbs={false} interval={1500} dynamicHeight={false} showIndicators={false}>
                <div>
                    <img src={home1} />
                    
                </div>
                <div>
                    <img src={home2} />
                    
                </div>
                <div>
                    <img src={home3}/>
                    
                </div>
                <div>
                    <img src={home4}/>
                   
                </div>
                <div>
                    <img src={home5}/>
                   
                </div>

            </Carousel>

          

            


          </div>
          <div className='flex-1 '>
           
            <p
              className=' pt-6 text-justify text-lg md:px-12 text-gray-100  text-left mx-auto'
            >
   ICACIC 2023 is organized by the Department of Electronics & Communication Engineering, Puducherry Technological University, Puducherry, India on 7<sup>th</sup> and 8<sup>th</sup> , December  2023. The two day conference will include Plenary Talks, Key note Lectures, Paper Presentations and Poster Presentations.
            </p>
            <p
              className='md:px-12 text-justify text-lg pt-4 text-gray-100 text-left mx-auto'
            >
           ICACIC 2023 aims to bring out the contemporary developments and evolving theories, methods and applications of computational intelligence in diverse fields. ICACIC 2023 will provide a platform  for the scientific community and industry across the world to present their research findings, explore new directions in computational intelligence, probabilistic and statistical models to solve the ever growing challenges in the society.
            </p>
            <p
              className='md:px-12 text-justify text-lg pt-4 text-gray-100  text-left mx-auto'
            >
           ICACIC 2023 lays emphasis on computational intelligence techniques such as neural networks, fuzzy systems, evolutionary algorithms, hybrid intelligent systems, uncertain reasoning techniques, and other machine learning methods and how they could be applied for decision making and problem solving in various disciplines namely, wireless communication and networks, intelligent  healthcare systems , intelligent transport systems, robotics and automation, precision agriculture, information security systems, environmental monitoring, education and entertainment.
            </p>
            <p
              className='md:px-12 text-justify text-lg pt-4 text-gray-100  text-left mx-auto'
            >
ICACIC 2023 is to be conducted in HYBRID mode (Physical and Online).
Authors of the accepted papers who are unable to attend the conference in person can present their papers online and attend an interactive virtual conference.
            </p>
            <p
              className='md:px-12 text-justify text-lg py-4 text-gray-100  text-left mx-auto'
            >Authors are invited to contribute original research papers for electronic submission  via the Microsoft CMT link <a title="Microsoft CMT - CIC23" className="text-yellow-400 hover:text-slate-900" href=" https://cmt3.research.microsoft.com/CIC2023" target="_blank"> https://cmt3.research.microsoft.com/CIC2023</a>
            </p>
          </div>
        </div>
        
      </div>

      
      
     
      
    </section>
    

        </div>
        </div>
    )
}

export default Home;