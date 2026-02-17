import { FaInstagram, FaGithub, FaGlobe } from "react-icons/fa6"

export default function Footer () {
    return (
        <>
            <div className="min-h-64 w-screen flex flex-col gap-4 from-[#0e223f] to-[#0a1630] bg-gradient-to-t py-5 px-10 border-t border-[#334e68]">
                <div className="flex flex-col justify-center items-center gap-4">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-base font-extrabold text-[#768a9e]"> Built With ❤️ Using Next.JS</h1>
                        <div className="flex flex-row justify-center gap-4 text-gray-200">
                            <button className="p-2 bg-[#202325] rounded-full text-xl lg:text-2xl border-gray-600 border"><FaInstagram /></button>
                            <button className="p-2 bg-[#202325] rounded-full text-xl lg:text-2xl border-gray-600 border"><FaGithub /></button>
                            <button className="p-2 bg-[#202325] rounded-full text-xl lg:text-2xl border-gray-600 border"><FaGlobe /></button>
                        </div>
                    </div>
                    <div className="max-w-xs w-full lg:max-w-lg border border-gray-600"></div>
                </div>
                <div className="flex flex-col justify-center items-center gap-4"> 
                    <p className="text-gray-300">©2026 Farel</p>
                </div>
            </div>
        </>
    )
}