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
export default function Discover() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  return (
    <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
    transition={{ duration: 0.5 }}
  >
    <section className="mt-24">
      <h2 className="text-4xl font-bold tracking-normal text-gradient text-center md:text-5xl">
        Why Choose 0xFreelance
      </h2>
      
        <p className="text-slate-200 text-justify text-base md:text-lg mt-5 tracking-normal lg:w-full leading-8">
          0xFreelance offers a unique blend of technology, security, and
          efficiency that sets us apart from traditional freelancing platforms.
          It will provide Unmatched Security, Efficient and Intelligent
          Matchmaking, Transparent and Fair Reviews and with Cutting Edge
          technology our Clients will get assistance. Unlike other traditional
          Freelancing Marketplaces there will be No third party involved in the
          payment, No fee payment to third party it is a complete Decentralized
          AI powered solution.
        </p>
      
  
      <div className="flex flex-col xl:flex-row justify-between items-center gap-5 xl:gap-24 mt-10">

      
      <div className="flex flex-col w-full xl:w-1/2  gap-8 mt-10">
        <div className="transition ease-in-out delay-150 flex flex-col gap-3 p-5 border-2 border-purple-400 rounded-xl backdrop-filter bg-purple-400/5 shadow-md shadow-purple-400/30 hover:brightness-150 background--feature duration-300">
          <h2 className="text-purple-300 font-bold tracking-normal text-2xl">Cutting-Edge Technology</h2>
          <p className="text-slate-200 leading-7 text-justify">
          On 0xFreelance, blockchain secures transactions for transparency and fraud prevention, while AI matches freelancers to projects perfectly. Enjoy peace of mind with every payment, contract, and review.
          </p>
        </div>

        <div className="transition ease-in-out delay-100 flex flex-col gap-3 p-5 border-2 border-purple-400 rounded-xl backdrop-filter bg-purple-400/5 shadow-md shadow-purple-400/30 hover:brightness-150 background--feature duration-300">
          <h2 className="text-purple-300 font-bold tracking-normal text-2xl">Transparency</h2>
          <p className="text-slate-200 leading-7 text-justify">
          Blockchain ensures secure, immutable, and transparent transactions. Smart contracts automate terms, reducing fraud risk. AI monitors for suspicious activity, enhancing security and protection
          </p>
        </div>

        <div className="transition ease-in-out delay-100  flex flex-col gap-3 p-5 border-2 border-purple-400 rounded-xl backdrop-filter bg-purple-400/5 shadow-md shadow-purple-400/30 hover:brightness-150 background--feature duration-300">
          <h2 className="text-purple-300 font-bold tracking-normal text-2xl">Time Saving</h2>
          <p className="text-slate-200 leading-7 text-justify">
          Advanced algorithms match freelancers to projects by skills and experience, boosting satisfaction. Blockchain ensures verifiable work histories and credentials, guaranteeing authenticity and reliability.
          </p>
        </div>
      </div>

      <div className="flex flex-col w-4/5 md:w-3/4 xl:w-1/2 mt-8 lg:mt-14">
      <div className="flex justify-between">
      <GrTechnology className="text-purple-400/40 text-4xl md:text-6xl animate-bounce hover:animate-ping"/>
      <SiLitecoin className="text-purple-400/40 text-4xl md:text-6xl animate-bounce hover:animate-ping"/>
      </div>
      <Lottie animationData={whyAnimation}/>
      <div className="flex justify-between">
      <SiHiveBlockchain className="text-purple-400/40 text-4xl md:text-6xl animate-bounce hover:animate-ping"/>
      <RiCopperCoinFill className="text-purple-400/40 text-4xl md:text-6xl animate-bounce hover:animate-ping"/>
      </div>
      </div>

      </div>
      
    </section>
    </motion.div>
  );
}
