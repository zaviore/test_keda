import React from "react";
import ComponentHero from "./component";

function index() {
  const props = {
    title: "PRICING",
    desc: "Nikmati produk kami dengan harga sebagai berikut",
    price: [
      {
        nama: "BASIC",
        value: "Rp.0",
        fitur: [
          "Mencatat barang masuk",
          "gratis Mencatat barang keluar",
          "Mencatat hasil keuntungan",
        ],
      },
      {
        nama: "BUSINESS",
        value: "Rp.500.000",
        fitur: [
          "Mencatat barang masuk dan keluar",
          "Mencatat Keuntungan",
          "Dapat menganalisa hasil penjualan dengan CHART",
          "Support 7x24 Jam",
        ],
      },
      {
        nama: "premium",
        value: "Rp.2.000.000",
        fitur: [
          "Mencatat barang masuk dan keluar",
          "Mencatat Keuntungan",
          "Dapat menganalisa hasil penjualan dengan CHART",
          "Support 7x24 Jam",
          "Export data ke Excel",
          "AI Prediksi penghasilan",
        ],
      },
    ],
  };
  return (
    <div className=' min-h-[600px] relative'>
      <ComponentHero {...props} />
    </div>
  );
}

export default index;
