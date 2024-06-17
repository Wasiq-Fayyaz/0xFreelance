"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import SwiperCore from "swiper";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import daap1 from "../../../Images/daap1.jpeg";
import daap2 from "../../../Images/daap2.jpeg";
import daap3 from "../../../Images/daap3.jpeg";
import daap4 from "../../../Images/daap4.jpeg";
import "swiper/css";
import "swiper/css/effect-flip";
import { EffectFade } from "swiper/modules";
import { EffectCards } from "swiper/modules";
import { EffectCube } from "swiper/modules";
import { EffectCoverflow } from "swiper/modules";
import { EffectFlip } from "swiper/modules";
import { EffectCreative } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css/effect-cards";
import "swiper/css/effect-cube";
import "swiper/css/effect-coverflow";
import { Button } from "@/components/ui/button";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import useInView from "../../CustomHooks";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Gallery() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  SwiperCore.use([Pagination, Autoplay]);
  return (
    <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
    transition={{ duration: 0.5 }}
  >
    <section className="mt-24">
      <h2 className="text-4xl font-bold tracking-normal text-gradient text-center md:text-5xl">
        Dapp
      </h2>

      <p className="text-slate-200 text-justify text-base md:text-lg mt-5 tracking-normal lg:w-full leading-8">
        Explore a cutting-edge decentralized application (DApp) for the
        Freelance Marketplace, seamlessly integrating AI and blockchain
        technology. This innovative platform offers a secure and transparent
        environment for freelancers and clients, utilizing smart contracts to
        automate payment and project management. Leverage advanced AI algorithms
        to match freelancers with suitable projects based on skills, experience,
        and preferences, ensuring optimal collaboration and efficiency
      </p>

    
      <div className="flex flex-col items-center justify-center relative">
        <div className="absolute w-full  h-full blur-2xl bg-purple-400/10 opacity-50"></div>

        <Swiper
          style={{ width: "300px", height: "300px", marginTop: "30px" }}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 1500,
          }}
          // pagination={{
          //     type:'bullets',
          //     clickable:true,
          //     dynamicBullets:true,
          //     bulletClass:'swiper-pagination swiper-pagination-bullet'
          // }}

          modules={[EffectCube]}
          effect="cube"
        >
          <SwiperSlide className="border-2 border-purple-400 rounded-sm">
            <Image src={daap1} alt="404"></Image>
          </SwiperSlide>

          <SwiperSlide className="border-2 border-purple-400 rounded-sm">
            <Image src={daap2} alt="404"></Image>
          </SwiperSlide>

          <SwiperSlide className="border-2 border-purple-400 rounded-sm">
            <Image src={daap3} alt="404"></Image>
          </SwiperSlide>

          <SwiperSlide className="border-2 border-purple-400 rounded-sm">
            <Image src={daap4} alt="404"></Image>
          </SwiperSlide>
        </Swiper>

        <div className="flex flex-col items-center justify-center mt-4 xl:mt-14 gap-2  lg:w-full">
          <div className="flex flex-col items-center md:flex-row justify-between w-full mt-18 gap-6 ">
          <FaArrowCircleRight className="hidden text-purple-400/30 text-7xl animate-pulse md:block"/>
     <FaArrowCircleDown className="block md:hidden text-purple-400/30 text-6xl animate-pulse"/>
            <button className="glowing-btn w-full md:w-1/2 lg:w-3/4 flex justify-center items-center">
              <Link href={""}>
                <span className="glowing-txt">
                  GO<span className="faulty-letter"> TO </span> DAPP
                </span>
              </Link>
            </button>
            
            <FaArrowCircleLeft className="hidden text-purple-400/30 text-7xl animate-pulse md:block"/>
          </div>

          <div className="flex flex-col items-center md:flex-row md:justify-between lg:w-full mt-14 gap-6">
          <FaArrowCircleRight className="hidden text-purple-400/30 text-7xl animate-pulse md:block"/>
          
          
            <button className="glowing-btn w-full md:w-1/2 lg:w-3/4 text-center flex justify-center items-center p-5">
              <Link href={""}>
                <span className="glowing-txt">
                  GO<span className="faulty-letter"> TO </span> UNISWAP
                </span>
              </Link>
            </button>
            <FaArrowCircleUp className="block md:hidden text-purple-400/30 text-6xl animate-pulse"/>
            <FaArrowCircleLeft className="hidden text-purple-400/30 text-7xl animate-pulse md:block"/>
            
          </div>
        </div>
      </div>

    </section>
    </motion.div>
  );
}
