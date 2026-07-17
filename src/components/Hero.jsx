import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";

const Hero = () => {

    const [videoSrc, setVideoSrc] = useState( window.innerWidth < 640 ? smallHeroVideo : heroVideo);

    const handleVideoSrcSet = () =>{
        if(window.innerWidth < 640){
            setVideoSrc(smallHeroVideo);
        }
        else{
            setVideoSrc(heroVideo);
        }
    };

    useEffect(()=>{
        window.addEventListener('resize' , handleVideoSrcSet);

        return()=>{
            window.removeEventListener('resize', handleVideoSrcSet)
        }
    },[])

    useGSAP(() => {
        gsap.to(".hero-title", { opacity: 1, duration: 1, delay: 1.5, ease: "power2.inOut" });
        gsap.to("#cta",{ opacity: 1, duration:1,delay:1.7,y: -50, ease: 'power2.inOut' });
    }, []);


  return (
    <section className=" w-full nav-height bg-black relative">
        <div className=" h-5/6 w-full flex-center flex-col">
        <p className="hero-title">
            iPhone 15 Pro
        
        </p>
        <div className="md:w-10/12 w-9/12 ">
        <video className="pointer-events-none" key={videoSrc} src={videoSrc} autoPlay muted  playsInline type="video/mp4" />
        </div>
        </div>

        <div id="cta" className=" flex flex-col items-center opacity-0 translate-y-20">
            <a href="#highlights" className="btn">Buy</a>
            <p className="font-normal text-xl">From $199/month or $999</p>
        </div>
    </section>
  );
};

export default Hero;