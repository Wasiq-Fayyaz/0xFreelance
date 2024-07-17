"use client";
import Lottie from "lottie-react";
import React from "react";
import whyAnimation from '../../../Images/whyAnimation2.json'
import { GrTechnology } from "react-icons/gr";
import { SiHiveBlockchain } from "react-icons/si";
import { SiLitecoin } from "react-icons/si";
import { RiCopperCoinFill } from "react-icons/ri";
import useInView from "../../CustomHooks";
import { motion } from "framer-motion";
import Image from "next/image";
import atom from '../../../Images/globe.png'
import animate_1 from '../../../Images/whyAnimation3.json'
import { Fade,Slide } from "react-awesome-reveal";

export default function Discover() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  return (

    <section className="mt-8 lg:mt-24">
      <Fade>
      <h2 className="text-4xl font-bold tracking-normal text-gradient text-center md:text-5xl">
        Why 0xFreelance
      </h2>
      </Fade>
      
        <p className="text-white text-justify lg:text-center text-lg md:text-xl tracking-normal w-full lg:w-full leading-8 md:leading-8 mt-4">
          0xFreelance offers a unique blend of technology, security, and
          efficiency that sets us apart from traditional freelancing platforms.
          It will provide Unmatched Security, Efficient and Intelligent
          Matchmaking, Transparent and Fair Reviews and with Cutting Edge
          technology our Clients will get assistance. Unlike other traditional
          Freelancing Marketplaces there will be No third party involved in the
          payment, No fee payment to third party it is a complete Decentralized
          AI powered solution.
        </p>
      
  
      <div className="flex flex-col lg:flex-row justify-between items-center gap-5 xl:gap-24 mt-4 lg:mt-10">

      
      <div className="flex flex-col w-full xl:w-1/2  gap-4 mt-4 lg:mt-10">
    
      
     
      <Fade cascade className="p-5">
        <Fade>
        <div className="relative transition ease-in-out delay-150 flex flex-col gap-3 p-5 border-2 border-sky-400 rounded-xl backdrop-filter bg-sky-400/5 shadow-md shadow-sky-600/30 background--feature duration-300">
      
          <h2 className="text-sky-400 font-bold tracking-normal text-2xl">Cutting-<span className="text-white">Edge</span> Technology</h2>
          <p className="text-white text-base leading-7 text-justify w-full md:w-11/12 p-1 lg:p-0">
          On 0xFreelance, blockchain secures transactions for transparency and fraud prevention, while AI matches freelancers to projects perfectly. Enjoy peace of mind with every payment and contract.
          </p>
          <Image src={atom} alt="404" className="absolute w-16 md:w-24 -right-10 lg:-right-12 top-24 md:top-12 lg:top-14 animate-pulse z-10"/>
        </div>
        </Fade>

        <Fade>
        <div className="relative transition ease-in-out delay-100 flex flex-col gap-3 p-5 border-2 border-sky-400 rounded-xl backdrop-filter bg-sky-400/5 shadow-md shadow-sky-600/30  background--feature duration-300">
          <h2 className="text-sky-400 font-bold tracking-normal text-2xl">Transparent & <span className='text-white'>Secure</span></h2>
          <p className="text-white text-base leading-7 text-justify w-full md:w-11/12 p-1 lg:p-0">
          Blockchain ensures secure, immutable, and transparent transactions. Smart contracts automate terms, reducing fraud risk. AI monitors for suspicious activity, enhancing security and protection
          </p>
          <Image src={atom} alt="404" className="absolute w-16 md:w-24 -right-10 lg:-right-12 top-24 md:top-12 lg:top-14 animate-pulse z-10"/>
        </div>
        </Fade>

<Fade>
        <div className="relative transition ease-in-out delay-100  flex flex-col gap-3 p-5 border-2 border-sky-400 rounded-xl backdrop-filter bg-sky-400/5 shadow-md shadow-sky-600/30 hover:brightness-150 lg:w-full background--feature duration-300">
          <h2 className="text-sky-400 font-bold tracking-normal text-2xl"><span className="text-white">Time</span> Saving</h2>
          <p className="text-white text-base leading-7 text-justify w-full md:w-11/12 p-1 lg:p-0">
          Advanced algorithms match freelancers to projects by skills and experience, boosting satisfaction. Blockchain ensures verifiable work histories and credentials, guaranteeing authenticity and reliability.
          </p>
          <Image src={atom} alt="404" className="absolute w-16 md:w-24 -right-10 lg:-right-12 top-24 md:top-12 lg:top-14 animate-pulse z-10"/>
        </div>
        </Fade>
        </Fade>
      </div>

      <div className="flex flex-col w-full xl:w-1/2  md:mt-12">
      <Slide>
      <Lottie animationData={animate_1}/>
      </Slide>
      </div>

      </div>
      
    </section>
  
  );
}
