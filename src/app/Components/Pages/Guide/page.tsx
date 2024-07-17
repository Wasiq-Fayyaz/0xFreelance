"use client";
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
import { Fade, Slide } from "react-awesome-reveal";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Guide() {
  
  const notify = () => toast.info('Coming Soon!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
    });;

  return (
    <section className="mt-24">
      <Fade>
        <h2 className="text-4xl font-bold tracking-normal text-gradient text-center md:text-5xl">
          Guide for Bot
        </h2>
      </Fade>

      <p className="text-white text-justify lg:text-center text-base md:text-xl mt-5 tracking-normal lg:w-full leading-8 lg:leading-8">
        Explore an Extensive, Easy-to-Follow Guide to Using the 0xFreelance
        Market—Each Step Unveils Detailed Instructions and Insightful Tips,
        Ensuring You Master Every Functionality Effortlessly.
      </p>

      <div>
        <div className="flex flex-col lg:flex-row justify-between items-center mt-4 lg:flex lg:flex-nowrap gap-16">
          <div className="flex flex-col gap-10">
            <Fade cascade>
              <div className="group flex items-center cursor-pointer w-full 2xl:w-9/12">
                <div className="flex justify-center items-center grow-0 shrink-0 text-2xl backdrop-blur bg-gradient-to-r from-sky-600/50 to-sky-400/50 text-white h-16 w-16 rounded-full shadow-md  xl:h-28 xl:w-28 lg:text-4xl font-medium">
                  1
                </div>

                <div className="flex flex-col items-start ms-5 gap-1 mt-10 xl:ms-10 xl:gap-3 xl:w-9/12">
                  <h2 className="text-sky-400 font-bold tracking-normal text-xl md:text-2xl">
                    Connect Wallet to SignUp
                  </h2>
                  <p className="text-white lex justify-center text-justify text-white text-sm w-full md:text-lg md:text-start md:w-11/12 lg:w-full border-b-2 border-sky-400 pb-5 leading-8">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Accusamus minus quas recusandae vero autem voluptas!
                  </p>
                </div>
              </div>

              <div className="group flex items-center cursor-pointer w-full 2xl:w-9/12">
                <div className="flex justify-center items-center grow-0 shrink-0 text-2xl backdrop-blur bg-gradient-to-r from-sky-600/50 to-sky-400/50 text-white h-16 w-16 rounded-full shadow-md  xl:h-28 xl:w-28 lg:text-4xl font-medium">
                  2
                </div>
                <div className="flex flex-col items-start ms-5 gap-1  xl:ms-10 xl:gap-3 xl:w-9/12">
                  <h2 className="text-sky-400 font-bold tracking-normal text-xl md:text-2xl">
                    Find Freelancer
                  </h2>
                  <p className="flex justify-center text-justify text-white text-sm w-full md:text-lg md:text-start md:w-11/12 lg:w-full border-b-2 border-sky-400 pb-5 leading-8">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Accusamus minus quas recusandae vero autem voluptas!
                  </p>
                </div>
              </div>

              <div className="group flex items-center cursor-pointer w-full 2xl:w-9/12">
                <div className="flex justify-center items-center grow-0 shrink-0 text-2xl bg-gradient-to-r from-sky-600/50 to-sky-400/50 text-white h-16 w-16 rounded-full shadow-md  xl:h-28 xl:w-28 lg:text-4xl font-medium">
                  3
                </div>
                <div className="flex flex-col items-start ms-5 gap-1  xl:ms-10 xl:gap-3 xl:w-9/12">
                  <h2 className="text-sky-400 font-bold tracking-normal text-xl lg:text-2xl">
                    Accept Proposals
                  </h2>
                  <p className="flex justify-center text-justify text-white text-sm w-full md:text-lg md:text-start md:w-11/12 lg:w-full border-b-2 border-sky-400 pb-5 leading-8">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Accusamus minus quas recusandae vero autem voluptas!
                  </p>
                </div>
              </div>
            </Fade>
          </div>

          <div className="flex flex-col w-4/5 md:w-3/4">
            {/* <div className="flex justify-between">
            <FaTelegramPlane className="text-purple-400/40 text-4xl md:text-6xl animate-bounce hover:animate-ping" />
            <BsRobot className="text-purple-400/40 text-4xl md:text-6xl animate-bounce hover:animate-ping" />
          </div> */}
            <Slide>
              <Lottie animationData={guideRobot} />
            </Slide>
            {/* <div className="flex justify-between">
            <FaTelegramPlane className="text-purple-400/40 text-4xl md:text-6xl animate-bounce hover:animate-ping" />
            <BsRobot className="text-purple-400/40 text-4xl md:text-6xl animate-bounce hover:animate-ping" />
          </div> */}
          </div>
        </div>

        <div className="buttons mt-14 lg:mt-24">
          <Fade>
          {/* <button className="transition ease-in-out delay-100 w-3/4 md:w-2/4 lg:w-1/4 text-white border-2 border-sky-600 rounded-xl p-3 hover:bg-sky-600 text-lg duration-300">
            Go To Telegram Bot
          </button> */}
          <button className="glowing-btn absolute w-full md:w-3/5 lg:2/5 xl:w-1/3" onClick={notify}>
                <span className="glowing-txt text-lg">
                  LAUNCH<span className="faulty-letter"> BOT </span>
                </span>
              </button>
          </Fade>
          {/* <button className="btn-hover color-9 text-xl font-semibold tracking-wider w-1/4">Go To Telegram Bot</button> */}
        </div> 
      </div>
    </section>
  );
}
