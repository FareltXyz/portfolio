"use client"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
export default function Page() {
    return (
        <>
            <Navbar />
            <div className="w-screen min-h-screen flex flex-col gap-y-5 bg-[#0a1630] pt-24 px-8 py-7">
                <h1 className="text-2xl font-extrabold text-white">My Certificate!</h1>
                <div className="grid grid-cols1 md:grid-cols-2 xl:grid-cols-3 gap-y-5 gap-x-6">
                    <img src={"/certificate1.png"} className="flex-1"/>
                    <img src={"/certificate2.jpg"} />
                    <img src={"/certificate3.jpg"} />
                </div>
            </div>
            <Footer />
        </>
    )
}