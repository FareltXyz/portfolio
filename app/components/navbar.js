"use client"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { FaSun, FaMoon, FaBarsStaggered, FaRegCircleXmark, FaCode, FaHouse, FaCertificate, FaMedal, FaPhone } from "react-icons/fa6"
export default function Navbar() {
    const [ open, setOpen ] = useState(false)
    const [ mount, setMount ] = useState(false)
    const { theme, setTheme } = useTheme()
    useEffect(() => {
        setMount(true)
    }, [])
    if(!mount) return null
    return (
          <>
            <Sidebar setOpen={setOpen} open={open} />
            <div className="navbar transition-colors duration-500 bg-white dark:bg-transparent fixed flex justify-between flex-row top-0 z-10 h-16 w-screen px-10 p-5">
                  <div className="flex flex-row justify-start items-center  ">
                    <a 
                    className="btn btn-ghost bg-transparent text-xl text-black dark:text-white flex justify-center items-center hover:cursor-pointer"
                    onClick={() => window.location = "/"}
                    >
                      RELLZ
                    </a>
                   </div>
                   <div className="hidden lg:flex flex-row gap-x-6 items-center justify-center ">
                    <button 
                    className="my-auto hover:cursor-pointer text-black dark:text-white hover:underline" 
                    onClick={() => window.location = "/"}
                    >
                      Home
                    </button>
                    <button 
                    className="my-auto hover:cursor-pointer text-black dark:text-white hover:underline" 
                    onClick={() => window.location = "/projects"}
                    >
                      Projects
                    </button>
                    <button 
                    className="my-auto hover:cursor-pointer text-black dark:text-white hover:underline" 
                    onClick={() => window.location = "/certificate"}
                    >
                      Certificate
                    </button>
                    <button 
                    className="my-auto hover:cursor-pointer text-black dark:text-white hover:underline" 
                    onClick={() => window.location = "/achievement"}
                    >
                      Achievement
                    </button>
                    <button 
                    className="my-auto hover:cursor-pointer text-black dark:text-white hover:underline" 
                    onClick={() => window.location = "/contact"}
                    >
                      Contact
                    </button>
                   </div>
                   { /* Tema */ }
                   <div className="inline-flex text-black dark:text-white text-xl gap-6 items-center">
                        <button className={`transition-transform duration-1000 ${theme === "dark" ? "rotate-0" : "rotate-360"}`} onClick={() => { if (theme === "dark") { setTheme("light")} else { setTheme("dark")}}}>{ theme === "dark" ? <FaSun className="transition-all"/> : <FaMoon className="transition-all "/> }</button>
                        <button onClick={() => {setOpen(true)}} className="block lg:hidden"><FaBarsStaggered /></button>
                   </div>
                </div>
             </>  
        )
}

function Sidebar({open, setOpen}) {
    return (
        <>
            <div className={`fixed w-screen z-10 h-screen bg-black/30 ${open ? "block" : "hidden"}`} onClick={() => {setOpen(false)}}></div>
            <div className={`fixed w-screen flex flex-col z-20 min-h-64 bg-slate-100 dark:bg-[#0a1929] border-b border-[#334e68] duration-500 transition-transform ${ open ? "translate-y-0" : "-translate-y-full"} `}>
                <div className="h-16 w-full px-10 p-5 inline-flex items-center justify-between border-b bg-white dark:bg-inherit border-gray-300 dark:border-gray-500">
                    <h1 className="text-xl font-bold text-black dark:text-white">RELLZ</h1>
                    <button className="text-xl text-black dark:text-white" onClick={() => {setOpen(false)}}><FaRegCircleXmark /></button>
                </div>
                <ul className="px-5 p-3 text-black dark:text-white flex flex-col gap-4 text-lg py-5">
                    <li className="inline-flex gap-3 items-center hover:underline hover:cursor-pointer" onClick={() => {window.location = "/"}}> <FaHouse />Home</li>
                    <li className="inline-flex gap-3 items-center hover:underline hover:cursor-pointer" onClick={() => {window.location = "/projects"}}> <FaCode />Project</li>
                    <li className="inline-flex gap-3 items-center hover:underline hover:cursor-pointer" onClick={() => {window.location = "/certificate"}}> <FaCertificate />Certificate</li>
                    <li className="inline-flex gap-3 items-center hover:underline hover:cursor-pointer" onClick={() => {window.location = "/achievement"}}> <FaMedal /> Achievement</li>
                    <li className="inline-flex gap-3 items-center hover:underline hover:cursor-pointer" onClick={() => {window.location = "/contact"}}> <FaPhone /> Contact</li>
                </ul>
            </div>
        </>
    )
}