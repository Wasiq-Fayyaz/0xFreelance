"use client";
import { FaBitcoin } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";
import { FaMicrochip } from "react-icons/fa6";
import { SiHiveBlockchain } from "react-icons/si";
import { BsCoin } from "react-icons/bs";
import { SiDogecoin } from "react-icons/si";
import Lottie, { LottiePlayer } from "lottie-react";
import aboutAnimate from "../../../Images/aboutAnimate.json";
import aboutAnimation from "../../../Images/aboutAnimation.json";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import useInView from "../../CustomHooks";
import Image from "next/image";
import caBG from "../../../Images/ca_bg.png";
import globe from "../../../Images/globe.png";
import { useViewportScroll } from "framer-motion";
import { useTransform } from "framer-motion";
import { Fade,Slide,JackInTheBox } from "react-awesome-reveal";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export default function About() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 2]);

  const aboutOptions = {
    animationData: aboutAnimation,
    loop: true, 
  };


   
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
   
      <section className="flex flex-col items-center justify-center mt-8">

        <div className="mt-6 md:mt-10">
          <Fade cascade>
          <h2 className="text-5xl font-semibold tracking-normal text-gradient text-center md:text-5xl lg:text-6xl">
            0xFreeLance
          </h2>

          <div className="flex flex-col items-center mt-5 w-full xl:mt-7 xl:w-full">
            <h3 className="text-lg md:text-2xl lg:text-4xl font-medium text-sky-400 tracking-normal md:mt-2 lg:mt-2 text-center">
            Freelance Smarter with <span className="text-white font-semibold"> AI </span>  & <span className="text-white font-semibold">Blockchain</span>
            </h3>
          </div>
          </Fade>
          <p className="text-white text-justify lg:text-center text-base md:text-xl tracking-normal w-full lg:w-full leading-8  md:leading-8 mt-4 lg:mt-6">
            Welcome to 0xFreelance, where we revolutionize freelancing with advanced blockchain and AI technology. Our platform provides unmatched security, efficiency, and transparency for both freelancers and clients. Key benefits include transparent contracts, instant payments, verified talent, and streamlined project management. Join us to experience the future of freelancing today, where technology empowers you to achieve more.
            </p>
          <div className="flex justify-center gap-8 mt-10">
            <Fade cascade>
            <motion.div
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%",
              }}
            >
              <FaBitcoin className="text-4xl md:text-6xl text-sky-400" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%",
              }}
            ><FaReact className="text-4xl md:text-6xl text-sky-400" />
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%",
              }}
            ><FaEthereum className="text-4xl md:text-6xl text-sky-400" />
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%",
              }}
            ><SiNextdotjs className="text-4xl md:text-6xl text-sky-400" /></motion.div>
            
            <motion.div
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%",
              }}
            ><SiTailwindcss className="text-4xl md:text-6xl text-sky-400" /></motion.div>
            </Fade>
          </div>

          <div className="flex flex-col xl:flex-row  xl:justify-center gap-16 mt-10 lg:mt-0">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <div className="lg:w-4/5 border-l-4 border-sky-400 pl-4">
              <JackInTheBox delay={1e3} cascade damping={1e-1}>
                
                <h3 className="text-2xl md:text-3xl font-bold text-sky-400 text-start tracking-wide">
                Our Vision
                </h3>
                </JackInTheBox>
                <p className="text-white text-justify lg:text-center lg:text-justify font-base text-base md:text-xl w-full mt-3 tracking-wide leading-8 md:leading-9 italic lg:w-4/5">
                  Our vision is to create a world where freelancers and clients
                  can collaborate seamlessly, with complete trust and
                  transparency. We aim to eliminate the traditional barriers and
                  intermediaries that often complicate freelancing, offering a
                  decentralized and autonomous environment that benefits both
                  parties. And Artificial Intelligence will help in creating
                  proposals, AI-Powered matching and AI Driven Analysis.
                </p>
              </div>
              {/* <motion.div style={{ scale }} className="w-full lg:w-2/5"> */}
                <div className="w-3/4 lg:w-1/2 mt-8">
                  <Slide>
                <Lottie animationData={aboutAnimation} className="w-full" />
                </Slide>
                </div>
              {/* </motion.div> */}
            </div>
            {/* </div> */}
          </div>
        </div>
      </section>
    
  );
}
