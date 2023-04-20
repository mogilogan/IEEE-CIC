import React from "react";

import IEEETemplate from './assests/IEEETemplate..doc';

const Paper  = ()=>{
    return(
        <div className="pb-12">
             <h1 className="flex text-xl py-6 pl-4 leading-4"><a className=" flex gap-1 hover:text-teal-600" href="/">  <svg  height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(1 1)"><path d="m.5 9.5 9-9 9 9"/><path d="m2.5 7.5v8c0 .5522847.44771525 1 1 1h3c.55228475 0 1-.4477153 1-1v-4c0-.5522847.44771525-1 1-1h2c.5522847 0 1 .4477153 1 1v4c0 .5522847.4477153 1 1 1h3c.5522847 0 1-.4477153 1-1v-8"/></g></svg>Home</a> / Paper Submission</h1>
            <div className="bg-[url('../public/try6.gif')] bg-cover bg-fixed">

            <section
      className='my-[5px] '
      id="#About"

    >
      <div className='container py-8 mx-auto'>
        <div className=' bg-gradient-to-br from-blue-800 to-blue-400   py-8 rounded-xl flex flex-col    '>
          <div className='flex-1 text-gray-100 '>
            <h2 className='h2 mb-10 px-4 pt-2 text-yellow-500 font font-black text-2xl' >
            INFORMATION TO AUTHORS:
            </h2>
            <p
              className='px-12 text-xl  text-left mx-auto'
            >
            The original unpublished manuscripts having maximum length of 6 pages on the topics related to the theme of the conference are invited for presentation/publication in the conference proceedings.
            </p>
            <p
              className='px-12 pt-4 text-xl  text-left mx-auto'
            >
            Kindly ensure that the paper is formatted as per IEEE template (not exceeding 6 pages) including figures and references. Click <a href={IEEETemplate}  download="IEEE-paper-format" className="text-xl text-slate-800">here</a> for IEEE  template format.
            </p>
            <p
              className='px-12 pt-4 text-xl  text-left mx-auto'
            >
              Submissions must include title, abstract, keywords, author and affiliation with e-mail address. The paper should not contain page numbers.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      className='my-[5px] '
      id="#About"

    >
      <div className='container py-8 mx-auto'>
        <div className=' bg-gradient-to-br from-blue-800 to-blue-400   py-8 rounded-xl flex flex-col'>
          <div className='flex-1 text-gray-100'>
            <h2 className='h2 mb-10 px-4 pt-2 font font-black text-yellow-500 text-2xl' >
            SUBMISSION INSTRUCTIONS
            </h2>
            <ul class="list-decimal text-xl mx-auto text-left px-12">
  <li><p className='text-left pb-5 mx-auto'>All papers that confirm to submission guidelines will be peer reviewed by 2-3 reviewers and evaluated based on originality, technical and / or research content/ depth, correctness, relevance to conference, contributions and readability.</p>
  </li>
  <li><p className='text-left py-2 mx-auto'>Acceptance of paper will be communicated by email.</p></li>
  <li><p className='text-left py-2 mx-auto'>At least one author of an accepted paper must register and present his/her paper in conference.</p></li>
  <li><p className='text-left mx-auto py-2'>Additional pages per paper above limit will be charged.</p></li>
  <li><p className='text-left mx-auto py-2'>The CIC 2023 organisers regard plagiarism as a serious professional misconduct. All submissions will be screened for plagiarism and when identified, the submission by the same author will be rejected.</p></li>
  <li><p className='text-left mx-auto py-2 text-white font-black'>The similarity content should not exceed 10%. Any model/figure/table /data used should be properly cited and prior permission should have been taken for copyrighted material.</p></li>
  <li><p className='text-left mx-auto py-2'>A submission implies that the author intends to ultimately register the paper upon a favourable response from the conference organisers. </p></li>
  <li><p className='text-left mx-auto py-2'>Moreover CIC 2023 does not encourage withdrawals after the paper is accepted.</p></li>
  <li><p className='text-left mx-auto py-2'>All papers must be submitted online via Microsoft CMT submission system only using link - <a title="Microsoft CMT - CIC23" className="text-yellow-400 hover:text-slate-900" href=" https://cmt3.research.microsoft.com/CIC2023" target="_blank"> https://cmt3.research.microsoft.com/CIC2023</a></p></li>
  <li><p className='text-left mx-auto py-2'>The accepted regular papers are to be published in the Indexed conference proceedings published by reputed publishers.</p></li>
  <li><p className='text-left mx-auto py-2'>Best papers will be duly awarded.</p></li>


</ul>
          </div>
        </div>
      </div>
    </section>
    </div>
        </div>
    )
}

export default Paper;