import React from "react";
import FORM from "./form";

function index() {
  return (
    <div className='h-screen'>
      <div className='grid grid-cols-7 relative h-full w-full'>
        <div className='hidden md:block col-span-2 top-0 md:bg-blue-400 h-screen bg-auth-bg bg-blend-multiply'></div>
        <div className='col-span-7 md:col-span-5 my-auto mx-auto md:mx-0'>
          <div className='mx-auto max-w-xl '>
            <FORM />
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
