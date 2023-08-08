import React from "react";

function component(props) {
  const { title, desc, price } = props;
  return (
    <div className='bg-red max-w-6xl min-h-[600px] mx-auto text-center items-center z-10 relative'>
      <div className='mb-10'>
        <h1 className='text-4xl font-bold mb-2'>{title}</h1>
        <p>{desc}</p>
      </div>
      <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-3 w-full mb-20'>
        {price.map((item, idx) => {
          return (
            <div
              key={idx}
              className='border-dashed border-2 justify-between border-[#026ce0] rounded-lg flex flex-col py-10 items-center m-8'
            >
              <div>
                <div className='py-6 flex justify-center'>
                  <img src='/box.svg' width={100} alt='box' />
                </div>
                <p className='text-[#026ce0] font-semibold text-lg'>
                  {item.nama}
                </p>
                <span className='text-4xl font-bold'>{item.value}</span>
                <div className='my-10 text-left w-52'>
                  <ol className='list-decimal pl-2'>
                    {item.fitur.map((key, index) => (
                      <li key={index}>{key}</li>
                    ))}
                  </ol>
                </div>
              </div>
              <button className='bg-[#026ce0] font-bold rounded-lg text-white p-2 px-4 hover:bg-[#234f7e]'>
                Subscribe
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default component;
