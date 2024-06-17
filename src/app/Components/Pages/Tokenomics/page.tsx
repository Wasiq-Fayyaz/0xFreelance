"use client";
import * as React from "react";
import { PieChart } from "react-minimal-pie-chart";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { CiBitcoin } from "react-icons/ci";
import { FaEthereum } from "react-icons/fa";
import useInView from "../../CustomHooks";
import { motion } from "framer-motion";

export default function Tokenomics() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  function createData(
    name: string,
    category: string,
    percent: string,
  ) {
    return { name, category, percent};
  }
  const rows = [
    createData("1", "Tax", "5/5"),
    createData("2", "Total Supply", "1,000,000"),
    createData("3", "Lp", "85%"),
    createData("4", "Team", "5%"),
    createData("5", "Partnership and Listings", "10%"),
  ];
  return (
    <section className="flex flex-col items-center mt-24">
      
        <h2 className="text-4xl font-bold tracking-normal text-gradient text-center md:text-5xl">
        Tokenomics
        </h2>

        <p className="text-slate-200 text-justify text-base md:text-lg mt-5 tracking-normal lg:w-full leading-8">
        Explore the transformative power of AI and blockchain in freelance
              marketplaces. Discover how innovative technologies are
              revolutionizing the freelance economy. From seamless project
              matching and secure payments to transparent transactions and smart
              contracts, AI and blockchain are reshaping the way we work and
              thrive. Dive into a future where AI-driven insights and blockchain
              security create a decentralized, efficient, and prosperous
              freelance ecosystem
        </p>

        <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
      transition={{ duration: 0.5 }}
    >
        <div className="flex flex-col items-center xl:flex-row gap-24 xl:gap-44 mt-16 w-full">
           
           
             <TableContainer className="backdrop-blur bg-purple-400/5 rounded-lg border-4 border-purple-400">
               <Table >
                 <TableHead>
                   <TableRow>
                     <TableCell className="text-slate-200 font-semibold text-base md:text-lg tracking-normal">No</TableCell>
                     <TableCell className="text-slate-200 font-semibold text-base md:text-lg tracking-normal">Category</TableCell>
                     <TableCell className="text-slate-200 font-semibold text-base md:text-lg tracking-normal">Percentage</TableCell>
                   </TableRow>
                 </TableHead>
                 <TableBody>
                   {rows.map((row) => (
                     <TableRow
                       key={row.name}
                       className="border-t-2 border-purple-400"
                     >
                       <TableCell  className="text-slate-200 font-semibold text-base md:text-lg">
                         {row.name}
                       </TableCell>
                       <TableCell className="text-slate-200 font-semibold text-base md:text-lg">{row.category}</TableCell>
                       <TableCell className="text-slate-200 font-semibold text-base md:text-lg">{row.percent}</TableCell>
                     </TableRow>
                   ))}
                 </TableBody>
               </Table>
             </TableContainer>
           


           <div className="flex justify-center relative w-9/12 md:w-2/5 lg:w-1/3 xl:w-2/5">
             <div className="flex justify-center items-center absolute border-y-8 rounded-full border-purple-400 h-full w-full animate-spin">
             </div>
             <div className="flex justify-center items-center absolute h-full w-full">
             <FaEthereum className="text-purple-400 text-6xl xl:text-7xl animate-pulse hover:animate-ping" />
             </div>
             
             
           <div className="p-5  ">
           <PieChart
               data={[
                 { label: "85%", title: "Lp", value: 85, color: "#850F8D" },
                 { label: "5%", title: "Team", value: 5, color: "#C738BD" },
                 {
                   label: "10%",
                   title: "Partnership and cex listings",
                   value: 10,
                   color: "#E49BFF",
                 },
               ]}
               lineWidth={50}
               label={({ dataEntry }) => dataEntry.label}
               labelStyle={{
                 fontSize: "5px",
                 fill: "#fff",
                 
               }}
               labelPosition={70}
               animate
               animationDuration={500}
               animationEasing="ease-in"
               
             />
           </div>
           </div>
         </div>
         </motion.div>
    </section>
  );
}
