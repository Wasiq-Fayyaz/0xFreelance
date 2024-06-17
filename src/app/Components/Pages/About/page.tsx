"use client"
import { FaBitcoin } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";
import { FaMicrochip } from "react-icons/fa6";
import { SiHiveBlockchain } from "react-icons/si";
import { BsCoin } from "react-icons/bs";
import { SiDogecoin } from "react-icons/si";
import Lottie from "lottie-react";
import aboutAnimate from "../../../Images/aboutAnimate.json";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import useInView from "../../CustomHooks";

export default function About() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  return (
    <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
    transition={{ duration: 0.5 }}
  >
    <section className="flex flex-col items-center justify-center mt-8">
      <div className="flex justify-center items-center gap-3 p-6 backdrop-blur bg-gradient-to-r from-transparent via-purple-400/20 to-transparent w-full animate-pulse">
        <h5 className="text-sm font-medium tracking-tight text-purple-400 md:text-3xl">
          CA Announcing Soon
        </h5>
      </div>

      <div className="mt-10">
        <h2 className="text-4xl font-bold tracking-normal text-gradient text-center md:text-5xl">
          About 0xFreeLance
        </h2>

  
      
  
        <div className="flex flex-col mt-5 w-full xl:mt-7 xl:w-full">
            <h3 className="text-base md:text-xl lg:text-2xl font-bold text-violet-400 tracking-wide mt-4 md:mt-8 text-center">
              Freelance Smarter Harness AI and Blockchain for Unmatched Security
              and Efficiency
            </h3>
            <p className="text-slate-200 text-justify text-base md:text-lg mt-5 tracking-normal w-full lg:w-full leading-8">
              Welcome to 0xFreelance, revolutionizing freelancing with
              blockchain and AI. Our platform offers secure, efficient, and
              transparent services for freelancers and clients. Enjoy benefits
              like transparent contracts, instant payments, verified talent, and
              streamlined project management. Join us to experience the future
              of freelancing today.
            </p>
          </div>
          
   
        <div className="flex flex-col xl:flex-row  xl:justify-center gap-16 mt-10">

        <div className="flex flex-row xl:flex-col justify-between">
        <FaReact className="transition ease-in-out delay-100 text-purple-400/40 text-5xl md:text-8xl xl:text-6xl hover:-translate-y-1 hover:scale-110 duration-300"/>
        <SiNextdotjs className="transition ease-in-out delay-100 text-purple-400/40 text-5xl md:text-8xl xl:text-6xl hover:-translate-y-1 hover:scale-110 duration-300"/>
        <SiTailwindcss className="transition ease-in-out delay-100 text-purple-400/40 text-5xl md:text-8xl xl:text-6xl hover:-translate-y-1 hover:scale-110 duration-300"/>
        <FaNodeJs className="transition ease-in-out delay-100 text-purple-400/40 text-5xl md:text-8xl xl:text-6xl hover:-translate-y-1 hover:scale-110 duration-300"/>
        </div>

        <div className="transition ease-in-out delay-150 backdrop-blur bg-purple-400/10 w-full xl:w-3/4 p-5 rounded-xl border-2 outline-4 border-violet-500 vision-background shadow-lg shadow-purple-400/30 hover:brightness-150 duration-300">
          
          <h3 className="text-2xl md:text-3xl font-bold text-purple-400 text-center tracking-wide">
            Our Vision
          </h3>
          <p className="text-slate-200 text-justify md:text-center font-semibold text-base md:text-lg w-full mt-3 tracking-wide leading-8 md:leading-9 italic">
            Our vision is to create a world where freelancers
            and clients can collaborate seamlessly, with complete trust and
            transparency. We aim to eliminate the traditional barriers and
            intermediaries that often complicate freelancing, offering a
            decentralized and autonomous environment that benefits both
            parties. And Artificial Intelligence will help in creating
            proposals, AI-Powered matching and AI Driven Analysis.
          </p>
        </div>

        <div className="flex flex-row xl:flex-col justify-between">
        <FaBitcoin className="transition ease-in-out delay-100 text-purple-400/40 text-5xl md:text-8xl xl:text-6xl hover:-translate-y-1 hover:scale-110 duration-300"/>
        <FaEthereum className="transition ease-in-out delay-100 text-purple-400/40 text-5xl md:text-8xl xl:text-6xl hover:-translate-y-1 hover:scale-110 duration-300"/>
        <FaMicrochip className="transition ease-in-out delay-100 text-purple-400/40 text-5xl md:text-8xl xl:text-6xl hover:-translate-y-1 hover:scale-110 duration-300"/>
        <SiHiveBlockchain className="transition ease-in-out delay-100 text-purple-400/40 text-5xl xl:text-6xl md:text-8xl hover:-translate-y-1 hover:scale-110 duration-300"/>
        </div>

        
          {/* <div className="flex flex-col gap-12 lg:flex-row justify-between w-full mt-5 md:mt-10 lg:mt-14">
          <div className="flex flex-row lg:flex-col justify-between">
          <FaBitcoin className="text-purple-400/40 text-4xl md:text-6xl animate-bounce hover:animate-ping"/>
          <BsCoin className="text-purple-400/40 text-4xl md:text-6xl animate-bounce hover:animate-ping"/>
          </div>
          <Lottie animationData={aboutAnimate}/>;
          <div className="flex flex-row lg:flex-col justify-between">
          <FaEthereum className="text-purple-400/40 text-4xl md:text-6xl animate-bounce hover:animate-ping"/>
          <SiDogecoin className="text-purple-400/40 text-4xl md:text-6xl animate-bounce hover:animate-ping"/>
          </div>
          </div> */}

        </div>
      </div>
      
    </section>
    </motion.div>
  );
}
