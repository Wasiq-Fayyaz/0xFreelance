"use client";
import React from "react";
import { useState, useEffect } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import About from "./Pages/About/page";
import Discover from "./Pages/Why/page";
import Guide from "./Pages/Guide/page";
import Community from "./Pages/Community/page";
import Tokenomics from "./Pages/Tokenomics/page";
import Features from "./Pages/Features/page";
import Dapp from "./Pages/Dapp/page";

export default function Header() {
  let [isMenuOpen, setisMenuOpen] = useState(false);

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
    <header className="p-4 lg:p-10 w-full flex items-center justify-center sm:flex items-center lg:flex flex-col justify-between items-center">
      <div className="header--img"></div>
      <div className="flex justify-between items-center w-full ">
        <div>
          {/* <Image src={medicure} width={40} height={40}></Image> */}
          <h2 className="text-lg lg:hidden xl:block text-slate-200 font-normal tracking-tight">
            0xFreelance
          </h2>
        </div>

        {/** Mobile Menu */}
        <ul
          className={`${isMenuOpen ? "mobile--header--categories" : "hidden"}`}
        >
          <AnchorLink href="/">
            <p className="leading-7 text-base  font-regular tracking-wide">
              Home
            </p>
          </AnchorLink>

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
              <p className="leading-7 text-base font-regular tracking-wider text-slate-200">
                Whitepaper
              </p>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="">
              <p className="leading-7 text-base font-regular tracking-wider text-slate-200">
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
            <CloseOutlinedIcon className="fontSize: 60px text-slate-200" />
          ) : (
            <MenuOutlinedIcon className="fontSize: 60px text-slate-200" />
          )}
        </div>

        <ul className="hidden lg:flex gap-5 text-slate-200">
          <li>
            <AnchorLink href="/">
              <p className="leading-7 text-base font-normal tracking-wide">
                Home
              </p>
            </AnchorLink>
          </li>

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
          <Button className="hidden md:block backdrop-blur bg-purple-400/40 hover:bg-purple-600 transition duration-500 ease-in-out text-slate-200">
            Buy Now
          </Button>
        </div>
      </div>
      <section id="home" className="flex flex-col justify-center p-5 lg:p-10">
        <div className="flex flex-col items-center justify-center gap-3">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.3,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,

                transition: {
                  delay: 0.5,
                  transform: 0.3,
                },
              },
            }}
          >
            <h1 className="text-5xl mt-6 font-bold tracking-normal bg-white text-gradient md:text-7xl lg:text-9xl">
              0xFreeLance
            </h1>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.3,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,

                transition: {
                  delay: 0.5,
                  transform: 0.3,
                },
              },
            }}
          >
            <h4 className="text-xl text-center mt-2 lg:text-3xl font-medium tracking-tight text-purple-600 border-t-2 border-b-2 border-y-purple-700 rounded-lg p-3">
              Empower Your Freelance Career with AI-Driven Opportunities
            </h4>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.3,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,

              transition: {
                delay: 0.7,
                transform: 0.3,
              },
            },
          }}
        >
          <div className="flex flex-col justify-center items-center mt-8">
            <p className="text-slate-200 text-justify text-base md:text-lg tracking-normal w-full lg:w-full leading-10">
              Unlock your potential with blockchain-powered freelance
              marketplaces! Seamlessly connect with top clients, ensure secure
              transactions, and maximize your earnings. Experience the future of
              freelancing where blockchain technology meets opportunity,
              transforming the way you work and succeed.
            </p>
            <div className="mt-10 relative">
              <div className="w-full h-full absolute blur-3xl bg-purple-600 opacity-50"></div>
              <button className="glowing-btn absolute">
                <span className="glowing-txt">
                  JO<span className="faulty-letter">IN</span> US
                </span>
              </button>
            </div>
          </div>
        </motion.div>
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
