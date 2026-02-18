"use client"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Last from "../components/last"
export default function Page() {
    return (
        <>
            <Navbar />
            <div className="transition-colors duration-500 w-screen min-h-screen flex flex-col gap-y-5 bg-[#f1f5f9] dark:bg-[#0a1630] pt-24 px-8 py-7">
                <h1 className="text-2xl font-extrabold text-black dark:text-white" data-aos="fade-right" data-aos-duration="1000">My Certificate!</h1>
                <div className="grid grid-cols1 md:grid-cols-2 xl:grid-cols-3 gap-y-5 gap-x-6">
                    <img src={"/certificate1.png"} data-aos="fade-up" data-aos-duration="1500"/>
                    <img src={"/certificate2.jpg"} data-aos="fade-up" data-aos-duration="1500"/>
                    <img src={"/certificate3.jpg"} data-aos="fade-up" data-aos-duration="1500"/>
                </div>
            </div>
            <Last link={"/achievement"} />
            <Footer />
        </>
    )
}