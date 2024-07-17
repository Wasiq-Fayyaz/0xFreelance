"use client";
import React from "react";
import { useState, useEffect } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Button } from "@/components/ui/button";
import About from "./Pages/About/page";
import Discover from "./Pages/Why/page";
import Guide from "./Pages/Guide/page";
import Community from "./Pages/Community/page";
import Tokenomics from "./Pages/Tokenomics/page";
import Features from "./Pages/Features/page";
import Dapp from "./Pages/Dapp/page";
import useInView from "./CustomHooks";
import { motion } from "framer-motion";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Image from "next/image";
import { Fade,Slide } from "react-awesome-reveal";
import CA from "./Pages/CA/page";
import { FaEthereum, } from "react-icons/fa";
import { SiBitcoinsv } from "react-icons/si";



export default function Header() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  let [isMenuOpen, setisMenuOpen] = useState(false);
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

  function ToggleNav() {
    setisMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <header className="w-full flex items-center justify-center sm:flex items-center lg:flex flex-col justify-between items-center">
      <div className="header--img"></div>
      <div className="p-4 lg:p-6 flex justify-between items-center w-full ">
        <div>
          {/* <Image src={medicure} width={40} height={40}></Image> */}
          <h2 className="text-lg  xl:block text-white font-normal tracking-tight">
            0xFreelance
          </h2>
        </div>

        {/** Mobile Menu */}
        <ul
          className={`${isMenuOpen ? "mobile--header--categories" : "hidden"}`}
        >
          <li>
            <AnchorLink href="#about">
              <p
                className="leading-7 text-base font-regular tracking-wide"
                onClick={ToggleNav}
              >
                About
              </p>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#discover">
              <p
                className="leading-7 text-base font-regular tracking-wide"
                onClick={ToggleNav}
              >
                Why 0xFreelance
              </p>
            </AnchorLink>
          </li>

          <li>
            <AnchorLink href="#features">
              <p
                className="leading-7 text-base font-regular tracking-wider"
                onClick={ToggleNav}
              >
                Features
              </p>
            </AnchorLink>
          </li>

          <li>
            <AnchorLink href="#tokenomics">
              <p
                className="leading-7 text-base font-regular tracking-wider"
                onClick={ToggleNav}
              >
                Tokenomics
              </p>
            </AnchorLink>
          </li>

          <li>
            <AnchorLink href="#guide">
              <p
                className="leading-7 text-base font-regular tracking-wider"
                onClick={ToggleNav}
              >
                Guide
              </p>
            </AnchorLink>
          </li>

          <li>
            <AnchorLink href="#dapp">
              <p
                className="leading-7 text-base font-reggular tracking-wider"
                onClick={ToggleNav}
              >
                Dapp
              </p>
            </AnchorLink>
          </li>

          <li>
            <AnchorLink href="#community">
              <p
                className="leading-7 text-base font-regular tracking-wider"
                onClick={ToggleNav}
              >
                Community
              </p>
            </AnchorLink>
          </li>

          <li>
            <AnchorLink href="">
              <p className="leading-7 text-base font-regular tracking-wider text-white">
                Whitepaper
              </p>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="">
              <p className="leading-7 text-base font-regular tracking-wider text-white">
                Buy Now
              </p>
            </AnchorLink>
          </li>
        </ul>

        {/** Desktop Menu */}
        <div
          className="flex justify-end w-full  lg:hidden "
          onClick={ToggleNav}
        >
          {isMenuOpen ? (
            <CloseOutlinedIcon className="fontSize: 60px text-white" />
          ) : (
            <MenuOutlinedIcon className="fontSize: 60px text-white" />
          )}
        </div>

        <ul className="hidden lg:flex gap-5 text-white">
          <li>
            <AnchorLink href="#about">
              <p className="leading-7 text-sm font-normal tracking-wide">
                About
              </p>
            </AnchorLink>
          </li>

          <li>
            <AnchorLink href="#discover">
              <p className="leading-7 text-sm font-normal tracking-wide">
                Why 0xFreelance
              </p>
            </AnchorLink>
          </li>

          <li>
            <AnchorLink href="#features">
              <p className="leading-7 text-sm font-normal tracking-wide">
                Features
              </p>
            </AnchorLink>
          </li>

          <li>
            <AnchorLink href="#tokenomics">
              <p className="leading-7 text-sm font-normal tracking-wide">
                Tokenomics
              </p>
            </AnchorLink>
          </li>

          <li>
            <AnchorLink href="#guide">
              <p className="leading-7 text-sm font-normal tracking-wide">
                Guide
              </p>
            </AnchorLink>
          </li>

          <li>
            <AnchorLink href="#dapp">
              <p className="leading-7 text-sm font-normal tracking-wide">
                Dapp
              </p>
            </AnchorLink>
          </li>

          <li>
            <AnchorLink href="#community">
              <p className="leading-7 text-sm font-normal tracking-wide">
                Community
              </p>
            </AnchorLink>
          </li>

          <li>
            <AnchorLink href="/">
              <p className="leading-7 text-sm font-normal tracking-wide">
                Whitepaper
              </p>
            </AnchorLink>
          </li>
        </ul>

        <div className="hidden lg:flex">
          <Button
            className="hidden md:block backdrop-blur bg-sky-400/50 hover:bg-sky-600 transition duration-500 ease-in-out text-white"
            onClick={notify}
          >
            
            Buy Now
          </Button>
        </div>
      </div>

      <section
        id="home"
        className="relative flex flex-col justify-center p-5 lg:p-7 w-full"
      >
       
        <div className="flex flex-col items-center justify-center gap-3 mt-5">
          <Fade cascade className="flex justify-center w-full">
            <div className="flex justify-center md:justify-between w-full">
            <FaEthereum className="hidden md:block text-sky-600 text-6xl border-2 border-slate-400 rounded-full p-2 animate-bounce"/>
            <h1 className="text-5xl font-bold tracking-normal text-center bg-white text-gradient md:text-7xl lg:text-9xl">
              0xFreeLance
            </h1>
            <FaEthereum className="hidden md:block text-sky-600 text-6xl border-2 border-slate-400 rounded-full p-2 animate-bounce"/>
            </div>

            <h4 className="text-xl text-center mt-2 lg:text-3xl font-medium tracking-normal text-sky-400 border-t-2  border-t-sky-400  p-3">
              Empower Your <span className="text-white">Freelance</span> Career
              with <span className="text-white">AI-Driven</span> Opportunities
            </h4>

            <div className="flex justify-center">
              <p className="text-white text-justify lg:text-center text-base md:text-xl tracking-normal w-full lg:w-10/12 leading-7 md:leading-8 lg:leading-8">
                Unlock your potential with blockchain-powered freelance
                marketplaces! Seamlessly connect with top clients, ensure secure
                transactions, and maximize your earnings. Experience the future
                of freelancing where blockchain technology meets opportunity,
                transforming the way you work and succeed.
              </p>
            </div>

            
            <div className="flex justify-center md:justify-between items-center w-full">
            <SiBitcoinsv className="hidden md:block text-sky-600 text-6xl border-2 border-slate-400 rounded-full p-2 animate-bounce"/>
            <button className="glowing-btn w-3/4 md:w-1/2 lg:2/5 xl:w-1/3 mt-10" onClick={notify}>
                <span className="glowing-txt text-lg">
                  JOIN <span className="faulty-letter">US</span>
                </span>
              </button>
              
            <SiBitcoinsv className="hidden md:block text-sky-600 text-6xl border-2 border-slate-400 rounded-full p-2 animate-bounce"/>
            </div>
              
             
              
          
          </Fade>
        </div>
      </section>

      <section className="w-full">
        <CA />
      </section>

      <section id="about" className="p-5">
        <About />
      </section>

      <section id="discover" className="p-5">
        <Discover />
      </section>

      <section id="features" className="p-5">
        <Features />
      </section>

      <section id="tokenomics" className="p-5">
        <Tokenomics />
      </section>

      <section id="guide" className="p-5">
        <Guide />
      </section>

      <section id="dapp" className="p-5">
        <Dapp />
      </section>

      <section id="community" className="p-5">
        <Community />
      </section>
    </header>
  );
}
