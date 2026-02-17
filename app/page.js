"use client"
import { ScollToSection } from "../utils/scroll"
import Footer from "./components/footer";
import Main from "./components/main";
import Project from "./components/project";
import Last from "./components/last"
import Navbar from "./components/navbar"
export default function Home() {

  return (
    <>
    <Navbar />
    <Main />
    <Project />
    <Last link={"/projects"}/>
    <Footer />
    </>
  );
}
