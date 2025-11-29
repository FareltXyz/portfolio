
import { FaUser, FaRegEnvelope, FaCircleCheck } from "react-icons/fa6";
export async function webhook(e) {
    e.preventDefault();

    const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: e.target.user.value,
            email: e.target.email.value,
            message: e.target.message.value,
        }),
    });

    const data = await res.json();

     if (data.success) {
        alert("Pesan berhasil terkirim!");
    } else {
        console.log(data)
        alert("Gagal mengirim pesan.");
    }
}

export default function Last() {

    return (
        <>
            <div className="min-h-screen py-5 shrink-0 bg-[#0a1630] grid grid-cols-1 lg:grid-cols-2 px-5 ">
                <div className="flex mt-20 flex-col justify-center items-center min-w-max ">
                    <div className="w-3/4 max-w-xl shrink-1 mt-6 pt-10 p-8 space-y-5 lg:space-y-10 items-center bg-[#1b283f] border border-[#ffffff1a] rounded-xl shadow-[#4d1192ca] shadow-2xl">
                        <h2 className="text-white font-extrabold text-3xl text-center">Get In Touch</h2>
                        <form onSubmit={webhook}>
                        <div className="flex flex-row max-md:flex-col justify-center gap-5 w-full">
                            <div className="border-b flex-1 h-10 px-2 flex items-center gap-2">
                                <FaUser className="text-base flex-none" />
                                <input className="outline-0 w-full bg-transparent" type="name" name="user" placeholder="Your name" />
                            </div>
                            <div className="border-b flex-1 h-10 px-2 flex items-center gap-2">
                                <FaRegEnvelope className="text-base flex-none"/>
                                <input className="outline-0 w-full bg-transparent" type="email" name="email" placeholder="someone@example.com" />
                            </div>
                        </div>
                        <label className="w-full" htmlFor="messages">
                            <p className="mt-2">Messages:</p>
                            <textarea name="message" className="resize-none bg-transparent mt-4 p-2.5 w-full h-32 outline-0 border border-[#ffffff1a] rounded-md" placeholder="Types Something...">

                            </textarea>
                        </label>
                        <div className="w-full flex justify-center">
                            <button type="submit" className="w-full mt-2 py-3  bg-slate-700 hover:bg-slate-900 rounded-2xl text-white">
                                <p className="flex items-center justify-center gap-3">
                                    Submit
                                    <FaCircleCheck className="text-lg text-white" />
                                </p>
                            </button>
                        </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}