"use client"
import Link from "next/link"
import dynamic from 'next/dynamic'
import Typer from "../sub/typewriter"
import Image from "next/image"
import { ScollToSection } from "../../utils/scroll"
import Waves from "../sub/wave"

import AOS from "aos";
import { useEffect } from "react";

export default function Main () {
  useEffect(() => {
     AOS.init({
      offset: 200,
      duration: 600,
      delay: 100,
    });
  }, [])

    return (
        <>
         <main id="fullpage" className="overflow-y-auto relative shrink-0 min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-[#0a1630] px-6">
          <div className="flex items-center justify-center min-h-screen shrink-0 my-20">
            <div className="flex flex-row md:space-x-10">

              <div className="left-6 top-1/4 hidden lg:flex bottom-1/4 border-l-2 border-gray-500"></div>

              <div className="max-w-2xl min-h-max text-left">
                <span className="text-green-400 max-md:text-base font-mono mb-2">

                 <Typer />  
                </span>
        

                <h1 className="text-3xl max-w-full h-auto lg:text-5xl font-extrabold text-white leading-tight" data-aos="fade-right" data-aos-duration="1500">
                  Selamat Datang! <br />
                  <span className="text-gray-300">Nama saya Farel, Salken</span>
                </h1>

                <p className="text-gray-400 text-xl max-md:text-base min-w-0 max-w-max mt-4" data-aos="fade-right" data-aos-duration="1500">
                  Bukan siapa-siapa. tapi hanya orang yang gabut menjelajahi dunia
                  online.
                </p>

               <p className="text-gray-300 max-md:text-base text-lg max-w-max" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
                  Salam kenal!
                </p>

                <div className="mt-6 flex" >
                  <button
                    onClick={() => ScollToSection("Project")}
                    className="btn px-6 py-2 border border-green-400 text-green-400 rounded hover:bg-green-400 hover:text-[#0a1630] hover:cursor-pointer transition"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-once="true"
                  >
                    next?
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex justify-center min-h-screen items-center hidden">
            <div className="absolute right-6 top-1/4 hidden flex-col justify-between items-center h-[70vh] lg:flex">
              <div className="h-3/5 border-1 border-gray-500 z-10"></div>
              <div className="relative  bottom-10 flex flex-col items-center justify-center gap-[2px] text-gray-300">
                <Waves />
              </div>
            </div>
            <Image 
            alt="PFP" 
            width={300} 
            height={300} 
            src={"/pp.jpg"} 
            className="rounded-2xl"
            data-aos="zoom-in"
            data-aos-duration="1500"
            />
          </div>
         </main>
        </>
    )
}