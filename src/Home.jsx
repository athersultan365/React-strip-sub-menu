import React from "react";

import phone from "./assets/phone.svg";

export default function Home() {
  return (
    <>
      <section className="w-full max-w-[80%] p-4 m-auto h-auto flex flex-col lg:flex-row justify-between items-center  ">
        <div className="w-full lg:w-[58%] mb-8 lg:mb-0  ">
          <h1 className="font-bold text-[40px] md:text-[64px] lg:text-[88px] leading-[52px] md:leading-[68px] lg:leading-[92px] text-[rgb(16,42,66)]">
            Payments infrastructure for the internet
          </h1>
          <p className="text-[16px] md:text-[18px] lg:text-[20px] font-sm mt-6 text-[rgb(97,125,152)]">
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className="text-white mt-5 hover:bg-slate-500 transform duration-300 bg-black p-2 rounded-md cursor-pointer">
            <a href="">Start Now</a>
          </button>
        </div>
        
        <div className="w-full lg:w-[40%] flex justify-center items-center ">
          <img src={phone} alt="Phone" className="w-[80%] lg:w-auto" />
        </div>
      </section>
    </>
  );
}
