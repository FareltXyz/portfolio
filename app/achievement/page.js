"use client"
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Last from "../components/last";
export default function Page() {
    return (
        <>
            <Navbar />
            <div className="w-screen max-w-screen min-h-screen flex flex-col gap-y-5 bg-[#0a1630] pt-24 px-8 py-7">
                <h1 className="text-2xl font-extrabold text-white">My Achievement!</h1>
                <div className="grid grid-cols1 md:grid-cols-2 xl:grid-cols-3 gap-y-5 gap-x-6">
                   <h2 className="text-white text-lg"> Kekosongan Njirr</h2>
                </div>
            </div>
            <Last link={"/contact"} />
            <Footer />
        </>
    )
}