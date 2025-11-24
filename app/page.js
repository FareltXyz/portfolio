"use client"
import { ScollToSection } from "@/utils/scroll"
import Last from "./components/last";
import Main from "./components/main"
import Project from "./components/project"
export default function Home() {

  return (
    <>
    <div className="navbar bg-base-100 fixed flex justify-between flex-row top-0 z-10 h-16 w-full p-5">
       <div className="flex flex-row justify-start items-center  ">
       <a 
       className="btn btn-ghost text-xl text-white flex justify-center items-center hover:cursor-pointer"
       onClick={() => ScollToSection("fullpage")}
       >
        <img src="/logo.svg" height={50} width={50} alt="logo" color="#fff" className="text-white hover:cursor-pointer"></img>
        RELLZ
        </a>
       </div>
       <div className="flex flex-row items-center justify-end ">
        <button 
        className="btn  w-20 h-12 hover:cursor-pointer" 
        onClick={() => ScollToSection("fullpage")}
        >
          Home
         </button>
       </div>
    </div>
    <Main />
    <Project />
    <Last />
    </>
  );
}
