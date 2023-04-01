import React from "react";

const Paper  = ()=>{
    return(
        <div className="pb-12">
            <h1 className="text-xl py-6 pl-4">Home / Paper Submissions</h1>

            <section
      className='my-[5px] '
      id="#About"

    >
      <div className='container mx-auto'>
        <div className='bg-gray-100    pb-12 flex flex-col    '>
          <div className='flex-1 '>
            <h2 className='h2 mb-10 px-4 pt-2 font font-black text-blue-800 text-xl' >
            INFORMATION TO AUTHORS:
            </h2>
            <p
              className='px-12  text-left mx-auto'
            >
            The original unpublished manuscripts having maximum length of 6 pages on the topics related to the theme of the conference are invited for presentation/publication in the conference proceedings.
            </p>
            <p
              className='px-12 pt-4 text-left mx-auto'
            >
            Kindly ensure that the paper is formatted as per IEEE template (not exceeding 6 pages) including figures and references. Click <a href="" className="text-blue-700">here</a> for IEEE  template format.
            </p>
            <p
              className='px-12 pt-4  text-left mx-auto'
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
      <div className='container mx-auto'>
        <div className='bg-gray-100 pb-12 flex flex-col'>
          <div className='flex-1'>
            <h2 className='h2 mb-10 px-4 pt-2 font font-black text-blue-800 text-xl' >
            SUBMISSION INSTRUCTIONS
            </h2>
            <ul class="list-decimal mx-auto text-left px-12">
  <li><p className='text-left pb-5 mx-auto'>All papers that confirm to submission guidelines will be peer reviewed by 2-3 reviewers and evaluated based on originality, technical and / or research content/ depth, correctness, relevance to conference, contributions and readability.</p>
  </li>
  <li><p className='text-left py-5 mx-auto'>Acceptance of paper will be communicated by email.</p></li>
  <li><p className='text-left py-5 mx-auto'>At least one author of an accepted paper must register and present his/her paper in conference.</p></li>
  <li><p className='text-left mx-auto py-5'>Additional pages per paper above limit will be charged.</p></li>
  <li><p className='text-left mx-auto py-5'>The CIC 2023 organisers regard plagiarism as a serious professional misconduct. All submissions will be screened for plagiarism and when identified, the submission by the same author will be rejected.</p></li>
  <li><p className='text-left mx-auto py-5 text-blue-700 font-black'>6.	The similarity content should not exceed 20%. Any model/figure/table /data used should be properly cited and prior permission should have been taken for copyrighted material.</p></li>
  <li><p className='text-left mx-auto py-5'>A submission implies that the author intends to ultimately register the paper upon a favourable response from the conference organisers. </p></li>
  <li><p className='text-left mx-auto py-5'>Moreover CIC 2023 does not encourage withdrawals after the paper is accepted.</p></li>
  <li><p className='text-left mx-auto py-5'>All papers must be submitted online via Microsoft CMT submission system only using link ( WILL BE PROVIDED SHORTLY)</p></li>
  <li><p className='text-left mx-auto py-5'>The accepted regular papers are to be published in the Indexed conference proceedings published by reputed publishers.</p></li>
  <li><p className='text-left mx-auto py-5'>Best papers will be duly awarded.</p></li>


</ul>
          </div>
        </div>
      </div>
    </section>
        </div>
    )
}

export default Paper;