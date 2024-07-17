"use client";
import * as React from "react";
import { MdOutlinePostAdd } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import { SiBlockchaindotcom } from "react-icons/si";
import { AiOutlineVerified } from "react-icons/ai";
import { HiMiniCpuChip } from "react-icons/hi2";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { BsSafeFill } from "react-icons/bs";
import { IoMdAnalytics } from "react-icons/io";
import backgroundFeature from '../../../Images/backgroundFeature.jpeg'
import useInView from "../../CustomHooks";
import { motion } from "framer-motion";
import { Fade,Slide } from "react-awesome-reveal";

export default function Features() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  return (

    <section className="flex flex-col items-center mt-12 md:mt-16">
      <Fade>
        <h2 className="text-5xl font-bold tracking-normal text-gradient text-center md:text-5xl">
          Features
        </h2>
        </Fade>
        <p className="text-white text-justify lg:text-center text-lg md:text-xl mt-5 tracking-normal lg:w-full leading-8 lg:leading-8">
        0xFreelance offers a comprehensive suite of features designed to ensure a seamless user experience. Our platform leverages cutting-edge blockchain technology and artificial intelligence to provide a secure, transparent, and efficient mode of communication and business transactions. With 0xFreelance, users can benefit from immutable contracts, instant payments, and verified talent, all managed through AI-powered tools that enhance productivity and streamline project management. Join us to experience a new era of freelancing where technology fosters trust, efficiency, and unparalleled convenience.
        </p>

      
      <div className="flex flex-col items-center gap-10 mt-14 p-2">
        <Fade>
        <div className="flex flex-col items-center lg:flex-row gap-8 w-full">
          
          <div className="transition ease-in-out delay-150 w-full xl:w-full xl:h-72 lg:h-96  flex flex-col gap-3 items-center  backdrop-blur bg-sky-400/5 border-2 border-sky-400 rounded-xl p-3 md:p-7 shadow-md shadow-sky-600/30 hover:brightness-150 background--feature duration-200">
            <MdOutlinePostAdd className="text-sky-400 text-7xl md:text-8xl" />
            <h2 className="text-sky-400 font-bold tracking-normal text-2xl text-center">
              Job <span className="text-white">Posting</span> and <span className="text-white">Bidding</span>
            </h2>
            <p className="text-white text-base leading-7 text-justify md:text-center">
              Clients post jobs, and freelancers bid competitively, showcasing
              their skills. This ensures the best talent matches with exciting
              projects
            </p>
          </div>

          <div className="transition ease-in-out delay-150 w-full xl:w-full xl:h-72 lg:h-96  flex flex-col gap-3 items-center  backdrop-blur bg-sky-400/5 border-2 border-sky-400 rounded-xl p-3 md:p-7 shadow-md shadow-sky-600/30 hover:brightness-150 background--feature duration-200">
            <BsCashCoin className="text-sky-400 text-7xl md:text-8xl" />
            <h2 className="text-sky-400 font-bold tracking-normal text-2xl text-center">
              <span className="text-white">Decenteralize</span> Payments
            </h2>
            <p className="text-white leading-7 text-justify md:text-center text-base">
              Implement secure payments using Ethereum and your custom coin,
              ensuring safe and transparent transactions.
            </p>
          </div>

          <div className="transition ease-in-out delay-150 w-full xl:w-full xl:h-72 lg:h-96  flex flex-col gap-3 items-center backdrop-blur bg-sky-400/5 border-2 border-sky-400 rounded-xl p-3 md:p-7 shadow-md shadow-sky-600/30 hover:brightness-150 background--feature duration-200">
            <SiBlockchaindotcom className="text-sky-400 text-7xl md:text-8xl" />
            <h2 className="text-sky-400 font-bold tracking-normal text-2xl text-center">
              Smart <span className="text-white">Contracts</span> Payment
            </h2>
            <p className="text-white leading-7 text-justify md:text-center text-base">
              Use Ethereum smart contracts to facilitate secure payments,
              ensuring trust and reliability. Empower transactions with
              seamless, tamper-proof payment handling.
            </p>
          </div>
        </div>
        </Fade>
        



        <Fade >
        <div className="flex flex-col items-center lg:flex-row gap-8">
          <div className="transition ease-in-out delay-150 w-full xl:w-full xl:h-72 lg:h-96  flex flex-col gap-3 items-center  backdrop-blur bg-sky-400/5 border-2 border-sky-400 rounded-xl p-3 md:p-7 shadow-md shadow-sky-600/30 hover:brightness-150 background--feature duration-200">
            <AiOutlineVerified className="text-sky-400 text-7xl md:text-8xl" />
            <h2 className="text-sky-400 font-bold tracking-normal text-2xl text-center">
            <span className="text-white">Decentralized</span> ID Verification
            </h2>
            <p className="text-white leading-7 text-justify md:text-center text-base">
            Utilize blockchain for secure, verifiable identity checks, ensuring authenticity and trust. Empower transparent, tamper-proof verification processes
            </p>
          </div>

          <div className="transition ease-in-out delay-150 w-full xl:w-full xl:h-72 lg:h-96  flex flex-col gap-3 items-center  backdrop-blur bg-sky-400/5 border-2 border-sky-400 rounded-xl p-3 md:p-7 shadow-md shadow-sky-600/30 hover:brightness-150 background--feature duration-200">
            <HiMiniCpuChip className="text-sky-400 text-7xl md:text-8xl" />
            <h2 className="text-sky-400 font-bold tracking-normal text-2xl text-center">
            <span className="text-white">AI-Powered</span> Matching
            </h2>
            <p className="text-white leading-7 text-justify md:text-center text-base">
            Leverage AI algorithms to match freelancers with jobs based on expertise, ensuring optimal placements. Facilitate seamless, tailored job connections.
            </p>
          </div>

          <div className="transition ease-in-out delay-150 w-full xl:w-full xl:h-72 lg:h-96  flex flex-col gap-3 items-center  backdrop-blur bg-sky-400/5 border-2 border-sky-400 rounded-xl p-3 md:p-7 shadow-md shadow-sky-600/30 hover:brightness-150 background--feature duration-200">
            <SiAmazonsimpleemailservice className="text-sky-400 text-7xl md:text-8xl" />
            <h2 className="text-sky-400 font-bold tracking-normal text-2xl text-center">
              <span className="text-white">
              Automated</span> Proposals
            </h2>
            <p className="text-white leading-7 text-justify md:text-center text-base">
            Create AI tools to assist freelancers in crafting personalized proposals swiftly, enhancing efficiency. Enable quick, tailored proposals for better job matching.
            </p>
          </div>
        </div>
        </Fade>

        
        <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-8">
          
          <div className="transition ease-in-out delay-150 w-full lg:w-2/5 xl:h-72 lg:h-96  flex flex-col gap-3 items-center backdrop-blur bg-sky-400/5 border-2 border-sky-400 rounded-xl p-3 md:p-7 shadow-md shadow-sky-600/30 hover:brightness-150 background--feature duration-200">
            <BsSafeFill className="text-sky-400 text-7xl md:text-8xl" />
            <h2 className="text-sky-400 font-bold tracking-normal text-2xl text-center">
            <span className="text-white">Smart Contracts</span> as Escrow
            </h2>
            <p className="text-white leading-7 text-justify md:text-center text-base">
            Implement Ethereum smart contracts for automated payments, escrow services, and dispute resolution, ensuring security and trust. Streamline financial transactions with tamper-proof smart contracts.
            </p>
          </div>

          <div className="transition ease-in-out delay-150 w-full lg:w-2/5 lg:h-96 xl:h-72 flex flex-col gap-3 items-center backdrop-blur bg-sky-400/5 border-2 border-sky-400 rounded-xl p-3 md:p-6 shadow-md shadow-sky-600/30 hover:brightness-150 background--feature duration-200">
            <IoMdAnalytics className="text-sky-400 text-7xl md:text-8xl" />
            <h2 className="text-sky-400 font-bold tracking-normal text-2xl text-center">
            <span className="text-white">AI-Driven</span> Analytics
            </h2>
            <p className="text-white leading-7 text-justify md:text-center text-base">
            Implement Ethereum and custom coin for secure, transparent payments with smart contracts, ensuring trust and efficiency. Utilize blockchain for seamless and tamper-proof financial transactions.
            </p>
          </div>
          
        </div>
        
      </div>
      
    </section>
   
  );
}
