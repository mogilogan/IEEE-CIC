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
        <div className="pb-12">
             <h1 className="text-xl py-6 pl-4">Home</h1>

            

    <section
      className='my-[5px] '
      id="#About"

    >
      <div className='container mx-auto bg-gray-100'>
      {/* <marquee className="py-5"><span className="text-xl  text-yellow-600"> Accepted and Registered papers of CIC 2016 will be published in ESCI-IP&Sc Thomson Reuters-Web of Science, Scopus & Anna Univ-Annex-II International Journals. Substantially Extended Versions of High Quality Papers will be considered for publication in Special Issue of Int. J. of Advanced Intelligence Paradigms, Inderscience, AEU Int.J of E&C, Elsevier* and Int.J. of Ambient Computing & Intelligence, IGI-Global. See Publications for more details.
            </span></marquee> */}
           

      <h1 className="text-3xl pl-4 font-bold text-blue-700 text-left py-4">CIC 2023</h1>
        <div className='bg-gray-100    min-h-[560px] px-12 pb-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left  xl:gap-x-[60px] xl:pb-0    '>
           
        <div className='flex-1' data-aos='zoom-in-left'>
            {/* <img className="border-white" src={home1} alt='' /> */}
            <Carousel className="max-w-lg" stopOnHover autoPlay  infiniteLoop showArrows={false} showStatus={false} showThumbs={false} interval={1500} dynamicHeight={false} showIndicators={false}>
                <div>
                    <img src={home1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={home2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={home3}/>
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={home5}/>
                    <p className="legend">Legend 4</p>
                </div>

            </Carousel>

          

            


          </div>
          <div className='flex-1 '>
           
            <p
              className=' pt-6 md:px-12  text-left mx-auto'
            >
   CIC 2023 aims to bring out the contemporary developments and evolving theories,methods and applications of computational intelligence in the design of Mobile and Wireless Communication networks. The main objective of CIC 2023 is to provide a lively forum for the scientific community and industry across the world to present their research findings, explore new directions in computational intelligence, probabilistic and statistical models to solve the ever growing challenges in Wireless Communication.
            </p>
            <p
              className='md:px-12 pt-4 text-left mx-auto'
            >
            CIC 2023 lays emphasis on computational intelligence techniques such as neural networks, fuzzy systems, evolutionary algorithms, hybrid intelligent systems, uncertain reasoning techniques, and other machine learning methods and how they could be applied for decision making and problem solving in mobile and wireless communication networks. The conference aims to provide an opportunity for researchers to highlight recent developments, share insightful experiences and interactions in the areas coming under the scope of the conference.
            </p>
            <p
              className='md:px-12 pt-4  text-left mx-auto'
            >
           CIC 2023 is organized by Department of Electronics & Communication Engineering, Pondicherry Engineering College, Puducherry on 7th and 8th , December 2023. The two day conference will include Plenary Talk, Key note Lectures, Paper Presentations and Poster Presentations.
Authors are invited to contribute original research papers which can be submitted electronically via the submission Web site <a className="text-blue-400 hover:underline" href="https://easychair.org/conferences/?conf=cic2023">https://easychair.org/conferences/?conf=cic2023</a>
            </p>
          </div>
        </div>
        <div className="py-6">
        <div className='container max-w-[640px] lg:max-w-[860px]  mx-auto bg-blue-200'>
      <h2 className='h2 mb-10 text-left px-4 pt-2 font font-black text-blue-800 text-xl' >
            SPONSORS
            </h2>
        <div className='bg-white   flex flex-col text-left'>
          <div className='flex-1 '>
          
            
            <p
              className='px-6 py-6 text-left mx-auto'
            >
         CIC 2023 is funded by the Technical Education Quality Improvement Programme (TEQIP) Phase-II . TEQIP is a project of the National Project Implementation Unit (NPIU) , of Ministry of Human Resource Development of the Govt. of India for implementation of World Bank Assisted Projects in Technical Education with an objective of strengthening institutions in the country and scaling-up postgraduate education and demand-driven Research & Development and Innovation.
            </p>
          </div>
        </div>
        </div>
      </div>
      </div>
      
     
      
    </section>
    

        </div>
    )
}

export default Home;