import React from "react";

function component(props) {
  const { title, desc } = props;
  return (
    <div className='bg-red max-w-6xl min-h-[600px] flex flex-wrap p-10 mx-auto justify-between items-center z-10 relative'>
      <div className='md:w-3/12'>
        <img src='/aboutus.svg' alt='abt' />
      </div>
      <div className='md:w-8/12'>
        <h1 className='text-4xl font-bold mb-10 text-center text-[#026ce0]'>
          {title}
        </h1>
        <p>{desc}</p>
        <div className='mt-10'>
          <button className='bg-[#9DDAF4] font-bold rounded-lg text-white p-2 px-4 hover:bg-[#76b7d3]'>
            Our product
          </button>
        </div>
      </div>
    </div>
  );
}

export default component;
