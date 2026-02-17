"use client"
import { ScollToSection } from "../../utils/scroll"
import Typer from "../sub/typewriter"
export default function Main() {
   
    return(
        <>
            <div className="bg-[#0a1630] w-screen min-h-screen">
                <div className="grid grid-cols-1 min-h-screen xl:grid-cols-2 pt-20">
                    <div className="flex flex-col justify-center p-5 px-8 h-full">
                        <span className="text-green-400 text-sm md:text-lg max-w-md py-2" data-aos="fade-right" data-aos-duration="1500"> <Typer /></span>
                        <h1 className="text-white text-2xl md:text-6xl font-bold" data-aos="fade-right" data-aos-duration="1500">Halo, Selamat Datang!</h1>
                        <h2 className="text-gray-300 text-2xl md:text-6xl font-bold" data-aos="fade-right" data-aos-duration="1500">Nama Saya Farel, Salken</h2>
                        <p className="text-gray-400 max-md:max-w-md text-lg md:text-xl my-4 flex flex-col gap-1.5" data-aos="fade-right" data-aos-duration="1500">
                            <span>
                                Bukan siapa-siapa. tapi hanya orang yang gabut menjelajahi dunia
                                online. 
                            </span>
                            <span>
                                Saya adalah seorang pelajar yang masih berada di smk.
                            </span>
                            <span>
                                saya mempunyai keahlian di bidang cyber security, komputer & jaringan, dan pengembangan website
                            </span>
                        </p>
                        <div className="grid grid-cols-2 gap-1.5 max-w-2xl gap-y-3 py-3 px-3 text-xs lg:text-base font-bold" data-aos="fade-right" data-aos-duration="1500">
                            <div className="flex border border-blue-600 rounded-full px-5 py-1.5 w-fit max-md:order-3 max-md:col-span-2">
                                <p className="text-blue-400">Computer & Network Technicians</p>
                            </div>
                            <div className="flex border border-cyan-700 rounded-full px-5 py-1.5 w-fit">
                                <p className="text-cyan-500">Cyber Security Specialist</p>
                            </div>
                            <div className="flex border border-emerald-700 rounded-full px-5 py-1.5 w-fit">
                                <p className="text-emerald-400">Fullstack web dev</p>
                            </div>
                        </div>
                        <div className="mt-6 flex" >
                            <button
                            onClick={() => ScollToSection("Project")}
                            className="btn px-6 py-2 border bg-transparent border-green-400 text-green-400 rounded hover:bg-green-400 hover:text-[#0a1630] hover:cursor-pointer transition"
                            data-aos="fade-up"
                            data-aos-duration="1500"
                            data-aos-once="true"
                            >
                                Selanjutnya
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}