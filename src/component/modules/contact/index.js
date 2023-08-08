import React from "react";

function index() {
  return (
    <div className=' min-h-[600px] relative bg-[#e6e6e6]'>
      <div>
        <h1 className='text-3xl font-bold text-white text-center p-10 bg-[#026ce0]'>
          Contact Us
        </h1>
        <div className='flex flex-wrap md:flex-nowrap max-w-6xl justify-between mx-auto p-5 md:p-2 md:gap-20 mt-10 md:mt-20'>
          <div className='bg-white w-full rounded-2xl mb-10'>
            <div className='p-10'>
              <div>
                <p className='text-2xl'>
                  Please fill out this form to discuss your needs and we’ll be
                  in touch shortly.
                </p>
                <div className='py-2 pt-10'>
                  <input
                    className='border border-gray-400 rounded-xl p-2 w-full '
                    placeholder='Name'
                  />
                </div>
                <div className='py-2'>
                  <input
                    className='border border-gray-400 rounded-xl p-2 w-full '
                    placeholder='email@gmail.com'
                  />
                </div>
                <div className='py-2'>
                  <textarea
                    className='border border-gray-400 rounded-xl p-2 w-full min-h-[200px]'
                    placeholder='Message'
                  />
                </div>
                <div className='py-2'>
                  <button className='bg-[#026ce0] font-bold rounded-lg text-white p-2 px-4 hover:bg-[#234f7e]'>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full'>
            <p className=' text-2xl font-bold'>Connect with US</p>
            <div className='py-5'>
              <p className=' text-xl font-semibold'>
                Chat online with our sales team
              </p>
              <p className=' text-base'>
                Chat is available Monday - Friday, 9 AM - 7 PM
              </p>
            </div>
            <div className='py-5'>
              <p className=' text-xl font-semibold'>Contact support</p>
              <p className=' text-base'>
                Email: <a>support@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
