import { FaAngleRight } from "react-icons/fa6"

export default function Last({ link }) {
    return (
        <>
            <div className="flex flex-col items-center justify-center bg-[#0a1630] py-14">
                <button className="from-sky-500 hover:from-sky-700 to-emerald-500 hover:to-emerald-700 text-violet-200 bg-gradient-to-r font-extrabold px-7 py-4 inline-flex rounded-lg w-full max-w-xs lg:max-w-md justify-center items-center gap-5 text-lg" onClick={() => {window.location = link}}> Selanjutnya <FaAngleRight /></button>
            </div>
        </>
    )
}