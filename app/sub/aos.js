"use client"
import AOS from "aos";
import { useEffect } from "react";

export default function Aos() {
    useEffect(() => {
     AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
      once: true
    });
  }, [])

}