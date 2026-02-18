"use client"
import ListProject from "../sub/listProject"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Last from "../components/last"
export default function Page() {
    return (
        <>
            <Navbar />
            <div className="w-screen min-h-screen flex flex-col gap-y-5 bg-[#0a1630] pt-24 px-8 py-7">
                <div className="flex flex-col gap-6">
                    <h1 className="text-2xl font-extrabold text-white" data-aos="fade-right" data-aos-duration="1500">My Projects</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
                        <ListProject amount={2}/>
                    </div>
                </div>
            </div>
            <Last link={"/certificate"}/>
            <Footer />
        </>
    )
}