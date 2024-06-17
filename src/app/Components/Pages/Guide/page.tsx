"use client"
import Image from "next/image";
import guideRobot from "../../../Images/guideRobot.json";
import Lottie from "lottie-react";
import Gallery from "../Dapp/page";
import { Button } from "@mui/material";
import { FaTelegramPlane } from "react-icons/fa";
import { BsRobot } from "react-icons/bs";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import useInView from "../../CustomHooks";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Guide() {
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
        Guide for Bot
      </h2>

      <p className="text-slate-200 text-justify text-base md:text-lg mt-5 tracking-normal lg:w-full leading-8">
      Explore an Extensive, Easy-to-Follow Guide to Using the 0xFreelance Market—Each Step Unveils Detailed Instructions and Insightful Tips, Ensuring You Master Every Functionality Effortlessly.
      </p>

   
      <div>
      <div className="flex flex-col xl:flex-row justify-between items-center mt-4 lg:flex lg:flex-nowrap gap-16">
        <div className="flex flex-col gap-10">
          <div className="group flex items-center cursor-pointer w-full 2xl:w-9/12">
            <div className="flex justify-center items-center grow-0 shrink-0 text-2xl backdrop-blur bg-purple-400/20 text-slate-200 h-16 w-16 rounded-full shadow-md group-hover:bg-gradient-to-l from-purple-400/10 to-indigo-400/10 group-hover:text-slate-200 xl:h-28 xl:w-28 lg:text-4xl">
              1
            </div>

            <div className="flex flex-col items-start ms-5 gap-1 mt-10 xl:ms-10 xl:gap-3 xl:w-9/12">
              <h2 className="text-purple-300 font-bold tracking-normal text-xl md:text-2xl">
                Connect Wallet to SignUp
              </h2>
              <p className="flex justify-center text-justify text-slate-200 text-sm w-full md:text-base md:text-start md:w-11/12 border-b-2 border-purple-400 pb-5 leading-8">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusamus minus quas recusandae vero autem voluptas!
              </p>
            </div>
          </div>

          <div className="group flex items-center cursor-pointer w-full 2xl:w-9/12">
            <div className="flex justify-center items-center grow-0 shrink-0 text-2xl backdrop-blur bg-purple-400/20 text-slate-200 h-16 w-16 rounded-full shadow-md group-hover:bg-gradient-to-l from-purple-400/10 to-indigo-400/10 group-hover:text-slate-200 xl:h-28 xl:w-28 lg:text-4xl">
              2
            </div>
            <div className="flex flex-col items-start ms-5 gap-1  xl:ms-10 xl:gap-3 xl:w-9/12">
              <h2 className="text-purple-300 font-bold tracking-normal text-xl md:text-2xl">
                Find Freelancer
              </h2>
              <p className="flex justify-center text-justify text-slate-200 text-sm w-full md:text-base md:text-start md:w-11/12 border-b-2 border-purple-400 pb-5 leading-8">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusamus minus quas recusandae vero autem voluptas!
              </p>
            </div>
          </div>

          <div className="group flex items-center cursor-pointer w-full 2xl:w-9/12">
            <div className="flex justify-center items-center grow-0 shrink-0 text-2xl backdrop-blur bg-purple-400/20 text-slate-200 h-16 w-16 rounded-full shadow-md group-hover:bg-gradient-to-l from-purple-400/10 to-indigo-400/10 group-hover:text-slate-200 xl:h-28 xl:w-28 lg:text-4xl">
              3
            </div>
            <div className="flex flex-col items-start ms-5 gap-1  xl:ms-10 xl:gap-3 xl:w-9/12">
              <h2 className="text-purple-300 font-bold tracking-normal text-xl lg:text-2xl">
                Accept Proposals
              </h2>
              <p className="flex justify-center text-justify text-slate-200 text-sm w-full md:text-base md:text-start md:w-11/12 border-b-2 border-purple-400 pb-5 leading-8">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusamus minus quas recusandae vero autem voluptas!
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-4/5 md:w-3/4">
          <div className="flex justify-between">
            <FaTelegramPlane className="text-purple-400/40 text-4xl md:text-6xl animate-bounce hover:animate-ping" />
            <BsRobot className="text-purple-400/40 text-4xl md:text-6xl animate-bounce hover:animate-ping" />
          </div>
          <Lottie animationData={guideRobot} />
          <div className="flex justify-between">
            <FaTelegramPlane className="text-purple-400/40 text-4xl md:text-6xl animate-bounce hover:animate-ping" />
            <BsRobot className="text-purple-400/40 text-4xl md:text-6xl animate-bounce hover:animate-ping" />
          </div>
        </div>
      </div>
      

      <div className="flex flex-col items-center md:flex-row  md:justify-between w-full mt-24 gap-6">
     <FaArrowCircleRight className="hidden text-purple-400/30 text-7xl animate-pulse md:block"/>
     <FaArrowCircleDown className="block md:hidden text-purple-400/30 text-6xl animate-pulse"/>
        <button className="glowing-btn w-5/6 md:w-1/2 lg:w-3/4 text-center flex justify-center items-center">
          <Link href={''}>
          <span className="glowing-txt">
            GO TO<span className="faulty-letter"> TELEGRAM </span> BOT
          </span></Link>
        </button>
        <FaArrowCircleUp className="block md:hidden text-purple-400/30 text-6xl animate-pulse"/>
        <FaArrowCircleLeft className="hidden text-purple-400/30 text-7xl animate-pulse md:block"/>
      </div>
      </div>
    </section>
    </motion.div>
  );
}
