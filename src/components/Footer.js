import React, { useEffect, useState } from "react";
import Icon from "./Icon";
import ButtonMailto from "./ButtonMaitto";

const Footer = ()=>{

  const [name,Setname]=useState(false);
   
  const queryParameters = new URLSearchParams(window.location.search);
  const type = queryParameters.get("type");
  console.log(type);

  const sendmail = ()=>{
     
    window.open("https://maps.google.com?q="+12.012534575561443+","+79.85718055294289 );
  }

  useEffect(() => {
    // Update the document title using the browser API
    if(type === "contact"){
      Setname(true);
    }else {
      Setname(false);
    }
  },[type]);


    
    return(
      <div >
        {/* <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="fill-blue-800"></path>
    </svg>
      */}
      <section className="relative w-full h-[30vh] bg-white overflow-hidden">
  <div class="absolute b-0 l-0 w-full h-[100px] bg-[url('../public/wave.png')] bg-[length:1000px_100px] air1"></div>
  <div class="absolute b-0 l-0 w-full h-[100px] bg-[url('../public/wave.png')] bg-[length:1000px_100px]   air2"></div>
  <div class="absolute b-0 l-0 w-full h-[100px] bg-[url('../public/wave.png')] bg-[length:1000px_100px] air3 "></div>
  <div class="absolute b-0 l-0 w-full h-[100px] bg-[url('../public/wave.png')] bg-[length:1000px_100px]  air4"></div>
</section>
            <footer
  class="bg-blue-800 relative top-0 left-0 w-full leading-none overflow:hidden text-center text-neutral-600  lg:text-left">
    
  
  <div class="mx-6 py-10 text-center md:text-left">
    <div class="grid-1 grid gap-10 md:gap-40 lg:gap-60  md:grid-cols-2 lg:grid-cols-2">
      <button onClick={sendmail} class="">
        <h6 
          class="mb-4 flex text-neutral-300 text-left font-semibold uppercase md:justify-start">
         <svg style={{color:'white'}} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M23.4236 41.8172C23.424 41.8174 23.4243 41.8176 24 41L23.4236 41.8172ZM24.5764 41.8172L24.58 41.8146L24.5891 41.8082L24.6209 41.7854C24.6482 41.7658 24.6875 41.7374 24.7379 41.7004C24.8387 41.6263 24.9842 41.5178 25.1681 41.3765C25.5357 41.0938 26.0571 40.6794 26.6811 40.1459C27.9277 39.08 29.5908 37.5328 31.2565 35.6059C34.5639 31.7799 38 26.3195 38 20.0769C38 16.3454 36.5264 12.7655 33.9016 10.1251C31.2765 7.48454 27.7149 6 24 6C20.2851 6 16.7235 7.48454 14.0984 10.1251C11.4736 12.7655 10 16.3454 10 20.0769C10 26.3195 13.4361 31.7799 16.7435 35.6059C18.4092 37.5328 20.0723 39.08 21.3189 40.1459C21.9429 40.6794 22.4643 41.0938 22.8319 41.3765C23.0158 41.5178 23.1613 41.6263 23.2621 41.7004C23.3125 41.7374 23.3518 41.7658 23.3791 41.7854L23.4109 41.8082L23.42 41.8146L23.4236 41.8172C23.7689 42.0603 24.2311 42.0603 24.5764 41.8172ZM24 41L24.5764 41.8172C24.576 41.8174 24.5757 41.8176 24 41ZM29 20C29 22.7614 26.7614 25 24 25C21.2386 25 19 22.7614 19 20C19 17.2386 21.2386 15 24 15C26.7614 15 29 17.2386 29 20Z" fill="white"></path> </svg>
         Department of Electronics & Communication Engineering <br/>
Puducherry Technological University <br/>PUDUCHERRY<br/> INDIA
        </h6>
      </button>
      
      <div>
        <p class="flex text-neutral-300 md:pl-12 items-center  md:justify-start">
          <Icon/>
          <span className="text-xl pl-2"> <button className=" px-1 py-1 rounded-xl hover:text-yellow-400 ">
            <ButtonMailto  label="cic@ptuniv.edu.in" mailto="mailto:cic@ptuniv.edu.in"/></button></span>
        </p>
      </div>
    </div>
  </div>
  <div className="bg-blue-900  p-4 text-center text-3xl text-yellow-500">
    <span><b>CIC 2023</b></span>
    {name?
    
    <span className="text-[20px] text-blue-300"><br/>Created by MOGINDER E - ECE 3rd Year</span>
    :
    <p></p>
    }
    
  </div>
 
</footer>

</div>
    )
}

export default Footer;