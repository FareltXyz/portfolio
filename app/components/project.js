import { DiNodejs } from "react-icons/di"
import ListProject from "../sub/listProject"
import { FaArrowTrendUp, FaCertificate, FaBookBookmark, FaMedal, FaCode, FaGlobe, FaShield, FaCheck, FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
const analistikCard = [
        { name: "Sertifikat", value: 3, icon: FaCertificate },
        { name: "Repository", value: 12, icon: FaBookBookmark  },
        { name: "Project", value: 3, icon: FaCode },
        { name: "Achievement", value: 0, icon: FaMedal }
    ]

const project = [
    { 
        name: "Ai-Asli Ini", 
        description: "sebuah website chatbot ai dengan model dari gemini",
        image: "project1.png",
        features: ["Dark Theme", "Fast Response", "Google Login Auth"],
        program: [{ name: "Next.js", icon: "devicon-nextjs-plain"}, { name: "Tailwindcss", icon: "devicon-tailwindcss-original"}, { name: "HTML", icon: "devicon-html5-plain"}, { name: "Postcss", icon: "devicon-postcss-plain"}]
     }
]

const skill = [
    {
      name: "Fullstack Developer",
      icon: FaCode,
      description: "Mempelajari pengembangan aplikasi web secara menyeluruh, mulai dari perancangan antarmuka (frontend) hingga pengelolaan logika server dan database (backend)."
    },
    {
      name: "Networking",
      icon: FaGlobe,
      description: "Mempelajari dasar jaringan komputer menggunakan simulasi Cisco Packet Tracer, meliputi konfigurasi server, DNS, email, serta perancangan topologi jaringan berbasis router dan switch."
    },
    {
      name: "Cyber Security",
      icon: FaShield,
      description: "Mempelajari berbagai bidang keamanan siber, termasuk web exploitation, reverse engineering, digital forensics, cryptography, dan binary exploitation."
    }
  ]

export default function Project() {
    return (
        <>
            <div id="Project" className="bg-[#f1f5f9] dark:bg-[#0a1630] w-screen min-h-screen">
                <div className="grid grid-cols-1 lg:grid-cols-2 ">
                    <div className="flex flex-col-reverse md:flex-col items-center gap-y-12 p-3 py-14 px-8 mt-16"> 
                        <div className="flex flex-col gap-y-4 bg-gray-50 dark:bg-[#102a43] border border-gray-300 dark:border-[#334e68] py-5 px-6 rounded-lg w-full lg:max-w-xl" data-aos="fade-up" data-aos-duration="1500"> 
                            <h1 className="text-black dark:text-white text-3xl font-bold inline-flex gap-4 my-3"><div className="bg-sky-400 dark:bg-sky-800 p-1 rounded-sm"><FaArrowTrendUp className="text-sky-100 dark:text-sky-300"/></div> Analystic </h1>
                            <div className="grid grid-cols-1 gap-y-4">
                                {
                                    analistikCard.map((data, i) => {
                                        const Icon = data.icon
                                        return (

                                            <div key={i} className="bg-gray-200 dark:bg-[#0a1929] border border-gray-300 dark:border-[#334e68] px-4  py-5 rounded-md">
                                              <p className="text-black dark:text-white flex flex-row justify-between px-1.5">
                                                <span className="inline-flex gap-4">
                                                    <span className="bg-sky-500 p-1 dark:text-inherit text-white rounded-sm"><Icon /></span>{data.name}
                                                </span>
                                                <span>
                                                    {data.value}
                                                </span>
                                              </p>
                                        </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-4 items-center">
                            <div className="flex flex-col items-center">
                                <h1 className="text-black dark:text-white text-3xl font-bold" data-aos="fade-down" data-aos-duration="1500">Keterampilan</h1>
                                <p className="text-gray-800 dark:text-gray-300 text-lg font-semibold" data-aos="fade-down" data-aos-duration="1500">Skill Yang Saya Kuasai Saat Ini</p>
                            </div>
                            <div className="flex flex-col gap-y-4 w-full lg:max-w-xl" data-aos="fade-right" data-aos-duration="1500">
                              {
                                skill.map((data, i) => {
                                    const Icons = data.icon
                                    return (

                                    <div key={i} className="flex flex-col gap-y-4 bg-white dark:bg-[#102a43] border border-[#334e68] py-5 px-6 rounded-lg w-full lg:max-w-xl">
                                        <h1 className="inline-flex gap-4 text-xl font-semibold text-violet-500 dark:text-white"><span className="p-1 rounded-md bg-violet-500 dark:bg-radial from-fuchsia-500 to-violet-400"><Icons className="text-white dark:text-inherit"/></span>{data.name}</h1>
                                        <div>
                                            <p className="text-gray-800 dark:text-white">
                                                {data.description}
                                            </p>
                                        </div>
                                    </div>
                                  )
                                })
                              }
                            </div>
                        </div>
                    </div>
                    <div className="max-lg:row-start-1 flex flex-col items-center gap-y-6 p-3 px-8">
                        <div className="flex flex-col gap-y-5 w-full" data-aos="fade-down" data-aos-duration="1500">
                            <h1 className="text-black dark:text-white text-3xl text-center font-bold">Project</h1>
                            <div className="flex flex-col items-center gap-y-3 w-full">
                                <ListProject amount={1}/>     
                            </div>
                        </div>
                        <button className="px-7 py-4 bg-sky-500 hover:bg-sky-600 dark:bg-cyan-600 dark:hover:bg-cyan-800 rounded-xl w-full lg:max-w-md text-white font-extrabold" data-aos="fade-right" data-aos-duration="1500" onClick={() => {window.location = "/projects"}}>Lihat Selengkapnya</button>
                    </div>
                </div>
            </div>
        </>
    )
}