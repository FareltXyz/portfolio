"use client"
import Typewriter from "typewriter-effect"
export default function typer() {
    return (
        <>
            <Typewriter
                options={{
                    autoStart: true,
                    loop: true,
                }}
                onInit={(typewriter) => {
                typewriter.typeString('Selamat datang di website ku 😎')
                .pauseFor(700)
                .deleteAll()
                .typeString('Gamer, Cyber Security Specialist, Computer & Network Technicians, Fullstack Developer')
                .pauseFor(500)
                .typeString('<br \\> Kurang keren apalagi coba 😎')
                .pauseFor(500)
                .changeDeleteSpeed(10)
                .deleteChars(28)
                .typeString('bercanda~')
                .pauseFor(500)
                .typeString(', Hehe')
                .deleteAll()
                .typeString('Hobby?')
                .typeString('<br \\> Nonton anime, ngegame, coding, dll 👀')
                .pauseFor(700)
                .deleteAll()
                .start();
  }}
/>
        </>
    )
}