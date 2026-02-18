import { FaAngleRight } from "react-icons/fa6"

export default function Last({ link }) {
    return (
        <>
            <div className="flex flex-col items-center justify-center bg-[#f1f5f9] dark:bg-[#0a1630] py-14">
                <button className="from-blue-500 hover:from-blue-600 to-cyan-500 hover:to-cyan-600 dark:from-sky-500 dark:hover:from-sky-700 dark:to-emerald-500 dark:hover:to-emerald-700 text-violet-200 bg-gradient-to-r font-extrabold px-7 py-4 inline-flex rounded-lg w-full max-w-xs lg:max-w-md justify-center items-center gap-5 text-lg" onClick={() => {window.location = link}}> Selanjutnya <FaAngleRight /></button>
            </div>
        </>
    )
}