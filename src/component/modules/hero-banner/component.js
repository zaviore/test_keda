import React from "react";

function component(props) {
  const { title, desc } = props;
  return (
    <div className='bg-red max-w-6xl min-h-[600px] flex flex-wrap md:flex-nowrap mx-auto p-10 lg:p-0 items-center z-10 relative'>
      <div className='md:max-w-lg'>
        <h1 className='text-5xl md:text-7xl font-bold mb-10'>{title}</h1>
        <p>{desc}</p>
      </div>
      <div className=' md:block'>
        <img src='/banner.svg' className='bg-contain' alt='baner' />
      </div>
    </div>
  );
}

export default component;
