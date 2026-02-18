"use client"
import { FaCheck, FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6"
function getProject(amount) {
    const project = [
    { 
        name: "Ai-Asli Ini", 
        description: "sebuah website chatbot ai dengan model dari gemini",
        image: "project1.png",
        github: "https://github.com/FareltXyz/ai-web",
        demo: "https://ai.farelt.xyz",
        features: ["Dark Theme", "Fast Response", "Google Login Auth"],
        program: [{ name: "Next.js", icon: "devicon-nextjs-plain"}, { name: "Tailwindcss", icon: "devicon-tailwindcss-original"}, { name: "HTML", icon: "devicon-html5-plain"}, { name: "Postcss", icon: "devicon-postcss-plain"}]
     },
     { 
        name: "Digital Service Lab",
        description: "sebuah template website landing page untuk sebuah jasa layanan service",
        image: "project2.png",
        github: "https://github.com/FareltXyz/digitalservicelab",
        demo: "https://digitalservicelab.my.id",
        features: ["Dark Theme", "Modern Design"],
        program: [{ name: "Next.js", icon: "devicon-nextjs-plain"}, { name: "Tailwindcss", icon: "devicon-tailwindcss-original"}, { name: "HTML", icon: "devicon-html5-plain"}, { name: "Postcss", icon: "devicon-postcss-plain"}]

     }
  ]
  return project.slice(0, amount)
}

export default function ListProject({amount}) {
    const project = getProject(amount)
    return (
        <>
            { project.map((data, i) => {
              return (

                  <div  key={i} className="py-3 px-1.5 gap-4 flex flex-col bg-[#102a43] border border-[#334e68] rounded-md w-full lg:max-w-md" data-aos="fade-up" data-aos-duration="1000">
                    <img src={data.image} className="p-2"/>
                    <div className="px-6">
                        <h1 className="text-2xl text-white font-bold">{data.name}</h1>
                        <p className="text-gray-400 text-lg">{data.description}</p>
                        <div className="flex flex-row flex-wrap gap-4 mt-3">
                        {
                            data.program.map((progrram, i) => {
                                return (
                                    <div key={i} className="inline-flex px-3 py-1.5 items-center rounded-full gap-2 text-white  border-white border text-xs">                                          
                                        <i className={progrram.icon}></i>
                                        <span>
                                            {progrram.name}    
                                        </span>
                                    </div>
                                )
                            })
                        }
                        </div>
                        <div className="mt-3"> 
                            <p className="text-white text-lg font-semibold">Features:</p>
                            <div className="flex flex-row flex-wrap gap-4">
                            {
                                data.features.map((features, i) => {
                                    return (
                                        <div key={i} className="inline-flex items-center gap-3 text-white text-sm">
                                            <FaCheck />
                                            {features}
                                        </div>
                                    )
                                })
                            }
                            </div>
                        </div>
                        <div className="inline-flex my-5 gap-4">
                            <button className="bg-[#0a1929] hover:bg-[#0a1929]/75 py-1.5 px-3 rounded-md font-extrabold text-gray-400 inline-flex items-center gap-3" onClick={() => window.location = data.github}><FaGithub /> Github</button>
                            <button className="bg-emerald-500 hover:bg-emerald-600 py-1.5 px-4 rounded-md font-extrabold text-white inline-flex items-center gap-3" onClick={() => window.location = data.demo}><FaArrowUpRightFromSquare /> Demo</button>
                        </div>
                    </div>
                </div>
             )
            })}
        </>
    )
}