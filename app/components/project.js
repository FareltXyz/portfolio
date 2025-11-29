import { FaLink, FaCode, FaGlobe, FaShield } from "react-icons/fa6";
export default function Project() {
  
  const analystic = [
    {
      name: "Visitor",
      value: "0"
    },
    {
      name: "Repository",
      value: "0",
    },
    {
      name: "Project",
      value: "0"
    },
    {
      name: "achievement",
      value: "0"
    }
  ]
  
  const skill = [
    {
      name: "Fullstack Developer",
      icon: FaCode,
      description: "masih belajar"
    },
    {
      name: "Networking",
      icon: FaGlobe,
      description: "masih belajar"
    },
    {
      name: "Cyber Security",
      icon: FaShield,
      description: "masih belajar"
    }
  ]

  const project = [
    {
      title: "Coming Soon!",
      description: "Belum ada project wkwkw"
    },
    {
      title: "Coming Soon!",
      description: "Nothing"
    }
  ]

  return (
   <>
      <div id="Project" className="min-h-screen max-lg:h-auto flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-2 p-5 bg-[#0a1630]">
        <div className="flex flex-col items-center mt-10 col-span-1" data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">
          <h2 className="text-white text-3xl"> Analystic</h2>
          <div className="grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 mt-12 space-x-4">
            {analystic.map((data, i) => {
              return(
                <div key={i} className="w-32 h-32 flex flex-col  items-center space-y-3">
                  <p className="text-lg text-white"> {data.name} </p>
                  <p className="text-4xl text-white"> {data.value} </p>
                </div>
              )
            })}
          </div>
        </div>
        <div className="flex flex-col items center mt-10 row-span-2 not-lg:order-last" data-aos="fade-down" data-aos-duration="1500" data-aos-once="true">
          <h2 className="text-white text-3xl text-center font-bold"> Project </h2>
            <div className="h-[75%] flex flex-col items-center space-y-3 mt-12">
              {project.map((data, i) => {
                return(
                  <div key={i} className="w-[60%] h-48 not-md:w-[80%] grid grid-rows-4 grid-cols-4 p-5 bg-[#1b283f] border border-[#ffffff1a] border-solid rounded-2xl transition hover:-translate-x-5">
                    <p className="text-2xl text-white col-span-4 row-span-1 h-3/4"> {data.title} </p>
                    <p className="text-md text-gray-400 col-span-4 row-span-2"> {data.description} </p>
                    <div className="flex flex-rows items-center justify-start col-span-3 row-span-1">
                    
                    </div>
                    <div className="flex flex-row justify-end items-end col-span-1 row-span-1">
                      <button className="text-white text-xl">
                      <FaLink />  
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
        </div>
        <div className="flex flex-col items-center max-md:w-full whitespace-nowrap max-md:h-auto mt-3 " data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
          <h2 className="text-white text-3xl text-center font-bold">Skills</h2>
          <div className="flex flex-row right-2/4 space-x-6 w-max max-md:w-full mt-5 whitespace-nowrap max-md:overflow-x-scroll scrollbar-hide">
            {skill.map((data, i) => {
              const Icon = data.icon;

              return(
                <div key={i} className="h-48 w-[187px] mt-7 pt-4 pl-3 shrink-0 bg-[#1b283f] border border-[#ffffff1a] border-solid rounded-2xl transition hover:-translate-y-3"> 

                  <p className="text-green-400 flex flex-col items-center justify-center text-md">
                    <Icon className="text-3xl my-3"/>
                    {data.name} 
                  </p>
                  <p className="text-gray-400 flex justify-center">
                    {data.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div> 
      </div>
   </>
  );
}
