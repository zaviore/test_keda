import React from "react";
import ComponentHero from "./component";

function index() {
  const props = {
    title: "HERO LANDING",
    desc:
      "Dapatkan berbagai layanan teknologi AI yang memberikan end-t-end solusi cerdas seperti sistem otomatis untuk mendeteksi objek pada gambar atau video, serta memantau dan menganalisis data dalam jumlah besar.",
  };
  return (
    <div className=' min-h-[600px] relative'>
      <div className='absolute bottom-0 right-0'>
        <img src='/banner-fg.svg' className='bg-contain' alt='bgfg' />
      </div>
      <ComponentHero {...props} />
    </div>
  );
}

export default index;
