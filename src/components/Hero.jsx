import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { heroVideo, smallHeroVideo } from "../utils";
const Hero = () => {
    const videoSrc = window.innerWidth < 768 ? smallHeroVideo : heroVideo;
    useGSAP(() => {
        gsap.to(".hero-title", { opacity: 1, duration: 1, delay: 1, ease: "power2.inOut" });
    }, []);
  return (
    <section className=" w-full nav-height bg-black relative">
        <div className=" h-5/6 w-full flex-center flex-col">
        <p className="hero-title">
            iPhone 15 Pro
        
        </p>
        <div className="md:w-10/12 w-9/12 ">
        <video src={videoSrc} autoPlay muted  playsInline/>
        </div>
        </div>
    </section>
  );
};

export default Hero;