"use client"
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FaRegEnvelope, FaCircleUser, FaPaperPlane } from "react-icons/fa6";
import { webhook } from "../sub/fetch";
export default function Page() {

    return (
        <>
            <Navbar />
            <div className="transition-colors duration-500 w-screen min-h-screen flex flex-col gap-y-5 bg-[#f1f5f9] dark:bg-[#0a1630]">
                <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2  pt-24 px-5 py-7">
                    <div className="flex flex-col items-center p-5 lg:px-14 my-auto">
                        <div className="w-full lg:max-w-md xl:max-w-lg px-5  rounded-lg bg-white border-gray-300 dark:bg-[#102a43] border dark:border-[#334e68] flex-flex-col gap-4 py-4">
                           <form onSubmit={webhook}>

                            <h1 className="text-black dark:text-white text-xl text-center font-extrabold">Get In Touch</h1>
                            <div className="flex flex-row flex-wrap lg:flex-nowrap gap-y-5 gap-x-5 my-5">
                                <div className="flex flex-col gap-y-0.5">
                                    <p className="text-black dark:text-white">Name: </p>
                                    <div className="bg-slate-100 dark:bg-[#0a1929] border border-gray-300 dark:border-[#334e68] text-black dark:text-white w-full px-4 rounded-sm inline-flex items-center py-2 gap-5"> 
                                        <FaCircleUser className="flex-none"/>
                                        <input type="text" placeholder="someone" name="name" className="w-full focus:outline-0  px-1.5"/>    
                                    </div>
                                </div>
                                <div className="flex flex-col gap-y-0.5">
                                    <p className="text-black dark:text-white">Email:</p>
                                    <div className="bg-slate-100 dark:bg-[#0a1929] border border-gray-300 dark:border-[#334e68] text-black dark:text-white w-full px-4 rounded-sm inline-flex items-center py-2 gap-5"> 
                                        <FaRegEnvelope className="flex-none"/>
                                        <input type="email" name="email" placeholder="someone@example.com" className="w-full focus:outline-0"/>    
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-0.5 text-black dark:text-white">
                                <p>Message:</p>
                                <textarea name="message" className="bg-slate-100 dark:bg-[#0a1929] h-40 resize-none focus:outline-0 p-3"></textarea>
                            </div>
                            <button className="text-white dark:text-white hover:bg-cyan-600 dark:hover:bg-cyan-800 focus:bg-cyan-600  dark:focus:bg-cyan-800 inline-flex gap-x-4 w-full bg-cyan-500 dark:bg-cyan-700 rounded-md my-3 mt-5 py-2 lg:py-3 items-center justify-center">
                                Send message
                                <FaPaperPlane />
                            </button>
                           </form>
                        </div>
                    </div>
                </div>      
            </div>
            <Footer />
        </>
    )
}