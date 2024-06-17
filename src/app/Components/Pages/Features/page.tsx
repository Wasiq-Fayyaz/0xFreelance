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

export default function Features() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  return (
    <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
    transition={{ duration: 0.5 }}
  >
    <section className="flex flex-col items-center mt-24">
      
        <h2 className="text-4xl font-bold tracking-normal text-gradient text-center md:text-5xl">
          Features
        </h2>

        <p className="text-slate-200 text-justify text-base md:text-lg mt-5 tracking-normal lg:w-full leading-8">
          0xFreelance exhibits a vast amount of features to ensure smooth user
          expeirence. It provides a secure and transparent mode of communication
          and bussiness through Blockchain technology and artifical
          intelligence.
        </p>


      <div className="flex flex-col items-center gap-10 mt-10">

        <div className="flex flex-col items-center xl:flex-row gap-8 w-full">
          <div className="transition ease-in-out delay-150 w-full xl:w-full xl:h-72  flex flex-col gap-3 items-center justify-center backdrop-blur bg-purple-400/5 border-2 border-purple-400 rounded-xl p-3 md:p-5 shadow-md shadow-purple-400/30 hover:brightness-150 background--feature duration-200">
            <MdOutlinePostAdd className="text-purple-400 text-6xl mt-3" />
            <h2 className="text-purple-300 font-bold tracking-normal text-2xl">
              Job Posting and Bidding
            </h2>
            <p className="text-slate-200 leading-7 text-justify text-sm">
              Clients post jobs, and freelancers bid competitively, showcasing
              their skills. This ensures the best talent matches with exciting
              projects
            </p>
          </div>

          <div className="transition ease-in-out delay-150 w-full xl:w-full xl:h-72 flex flex-col gap-3 items-center justify-center backdrop-blur bg-purple-400/5 border-2 border-purple-400 rounded-xl p-3 md:p-5 shadow-md shadow-purple-400/30 hover:brightness-150 background--feature duration-200">
            <BsCashCoin className="text-purple-400 text-6xl" />
            <h2 className="text-purple-300 font-bold tracking-normal text-2xl text-center">
              Decenteralize Payments
            </h2>
            <p className="text-slate-200 leading-7 text-justify text-sm">
              Implement secure payments using Ethereum and your custom coin,
              ensuring safe and transparent transactions.
            </p>
          </div>

          <div className="transition ease-in-out delay-150 w-full xl:w-full xl:h-72 flex flex-col gap-3 items-center backdrop-blur bg-purple-400/5 border-2 border-purple-400 rounded-xl p-3 md:p-3 shadow-md shadow-purple-400/30 hover:brightness-150 background--feature duration-200">
            <SiBlockchaindotcom className="text-purple-400 text-6xl mt-5" />
            <h2 className="text-purple-300 font-bold tracking-normal text-2xl text-center">
              Smart Contracts Payment
            </h2>
            <p className="text-slate-200 leading-7 text-justify text-sm">
              Use Ethereum smart contracts to facilitate secure payments,
              ensuring trust and reliability. Empower transactions with
              seamless, tamper-proof payment handling.
            </p>
          </div>

          
        </div>




        <div className="flex flex-col items-center xl:flex-row gap-8">
          <div className="transition ease-in-out delay-150 w-full xl:w-full xl:h-72 flex flex-col gap-3 items-center justify-center backdrop-blur bg-purple-400/5 border-2 border-purple-400 rounded-xl p-3 md:p-5 shadow-md shadow-purple-400/30 hover:brightness-150 background--feature duration-200">
            <AiOutlineVerified className="text-purple-400 text-6xl mt-3" />
            <h2 className="text-purple-300 font-bold tracking-normal text-2xl text-center">
            Decentralized ID Verification
            </h2>
            <p className="text-slate-200 leading-7 text-justify text-sm">
            Utilize blockchain for secure, verifiable identity checks, ensuring authenticity and trust. Empower transparent, tamper-proof verification processes
            </p>
          </div>

          <div className="transition ease-in-out delay-150 w-full xl:w-full xl:h-72 flex flex-col gap-3 items-center justify-center backdrop-blur bg-purple-400/5 border-2 border-purple-400 rounded-xl p-3 md:p-5 shadow-md shadow-purple-400/30 hover:brightness-150 background--feature duration-200">
            <HiMiniCpuChip className="text-purple-400 text-6xl" />
            <h2 className="text-purple-300 font-bold tracking-normal text-2xl text-center">
            AI-Powered Matching
            </h2>
            <p className="text-slate-200 leading-7 text-justify text-sm">
            Leverage AI algorithms to match freelancers with jobs based on expertise, ensuring optimal placements. Facilitate seamless, tailored job connections.
            </p>
          </div>

          <div className="transition ease-in-out delay-150 w-full xl:w-full xl:h-72 flex flex-col gap-3 items-center backdrop-blur bg-purple-400/5 border-2 border-purple-400 rounded-xl p-3 md:p-5 shadow-md shadow-purple-400/30 hover:brightness-150 background--feature duration-200">
            <SiAmazonsimpleemailservice className="text-purple-400 text-6xl mt-5" />
            <h2 className="text-purple-300 font-bold tracking-normal text-2xl text-center">
              Automated Proposals
            </h2>
            <p className="text-slate-200 leading-7 text-justify text-sm">
            Create AI tools to assist freelancers in crafting personalized proposals swiftly, enhancing efficiency. Enable quick, tailored proposals for better job matching.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center xl:flex-row gap-8">
          <div className="transition ease-in-out delay-150 w-full xl:w-1/2 xl:h-72 flex flex-col gap-3 items-center justify-center backdrop-blur bg-purple-400/5 border-2 border-purple-400 rounded-xl p-3 md:p-5 shadow-md shadow-purple-400/30 hover:brightness-150 background--feature duration-200">
            <BsSafeFill className="text-purple-400 text-6xl mt-3" />
            <h2 className="text-purple-300 font-bold tracking-normal text-2xl">
            Smart Contracts as Escrow
            </h2>
            <p className="text-slate-200 leading-7 text-justify text-sm">
            Implement Ethereum smart contracts for automated payments, escrow services, and dispute resolution, ensuring security and trust. Streamline financial transactions with tamper-proof smart contracts.
            </p>
          </div>

          <div className="transition ease-in-out delay-150 w-full xl:w-1/2 xl:h-72 flex flex-col gap-3 items-center justify-center backdrop-blur bg-purple-400/5 border-2 border-purple-400 rounded-xl p-3 md:p-5 shadow-md shadow-purple-400/30 hover:brightness-150 background--feature duration-200">
            <IoMdAnalytics className="text-purple-400 text-6xl" />
            <h2 className="text-purple-300 font-bold tracking-normal text-2xl text-center">
            AI-Driven Analytics
            </h2>
            <p className="text-slate-200 leading-7 text-justify text-sm">
            Implement Ethereum and custom coin for secure, transparent payments with smart contracts, ensuring trust and efficiency. Utilize blockchain for seamless and tamper-proof financial transactions.
            </p>
          </div>
          
        </div>
      </div>
      
    </section>
    </motion.div>
  );
}
