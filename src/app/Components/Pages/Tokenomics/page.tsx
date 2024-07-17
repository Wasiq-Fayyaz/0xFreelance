"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Fade,Slide } from "react-awesome-reveal";
import { PieChart } from "react-minimal-pie-chart";
import Image from "next/image";
import { FaEthereum } from "react-icons/fa";




export default function Tokenomics() {
  
  
  function createData(name: string, category: string, percent: string) {
    return { name, category, percent };
  }
  const rows = [
    createData("1", "Tax", "5/5"),
    createData("2", "Total Supply", "1,000,000"),
    createData("3", "Lp", "85%"),
    createData("4", "Team", "5%"),
    createData("5", "Partnership and Listings", "10%"),
  ];
  const options = {
    animationEnabled: true,
    title: {
      text: "Customer Satisfaction"
    },
    subtitles: [{
      text: "71% Positive",
      verticalAlign: "center",
      fontSize: 24,
      dockInsidePlotArea: true
    }],
    data: [{
      type: "doughnut",
      showInLegend: true,
      indexLabel: "{name}: {y}",
      yValueFormatString: "#,###'%'",
      dataPoints: [
        { name: "Unsatisfied", y: 5 },
        { name: "Very Unsatisfied", y: 31 },
        { name: "Very Satisfied", y: 40 },
        { name: "Satisfied", y: 17 },
        { name: "Neutral", y: 7 }
      ]
    }]
  }
  return (
    <section className="flex flex-col items-center mt-24">
      <Fade>
        <h2 className="text-4xl font-bold tracking-normal text-gradient text-center md:text-5xl">
          Tokenomics
        </h2>
      </Fade>

      <p className="text-white text-justify lg:text-center text-base md:text-xl mt-5 tracking-normal lg:w-full leading-8 lg:leading-8">
        Explore the transformative power of AI and blockchain in freelance
        marketplaces. Discover how innovative technologies are revolutionizing
        the freelance economy. From seamless project matching and secure
        payments to transparent transactions and smart contracts, AI and
        blockchain are reshaping the way we work and thrive. Dive into a future
        where AI-driven insights and blockchain security create a decentralized,
        efficient, and prosperous freelance ecosystem
      </p>

      <div className="flex flex-col items-center lg:flex-row gap-24 xl:gap-44 mt-16 w-full">
        
        <TableContainer className="backdrop-blur bg-sky-400/5 rounded-lg border-4 border-sky-600">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="text-white font-semibold text-base md:text-lg tracking-normal">
                  No
                </TableCell>
                <TableCell className="text-white font-semibold text-base md:text-lg tracking-normal">
                  Category
                </TableCell>
                <TableCell className="text-white font-semibold text-base md:text-lg tracking-normal">
                  Percentage
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name} className="border-t-2 border-sky-600">
                  
                  <TableCell className="text-slate-200 font-semibold text-base md:text-lg">
                    {row.name}
                  </TableCell>
                  <TableCell className="text-slate-200 font-semibold text-base md:text-lg">
                    {row.category}
                  </TableCell>
                  <TableCell className="text-slate-200 font-semibold text-base md:text-lg">
                    {row.percent}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        
        
        <div className="flex justify-center relative w-9/12  md:w-full lg:w-1/3 xl:w-2/5">
          <div className="lg:w-full">
            <Slide>
            <PieChart
              data={[
                { label: "85%", title: "Lp", value: 85, color: "#0369A1" },
                { label: "5%", title: "Team", value: 5, color: "#38BDF8" },
                {
                  label: "10%",
                  title: "Partnership and cex listings",
                  value: 10,
                  color: "#0EA5E9",
                },
              ]}
              lineWidth={50}
              label={({ dataEntry }) => dataEntry.label}
              labelStyle={{
                fontSize: "5px",
                fill: "#fff",
                fontWeight:"500"
              }}
              
              startAngle={20}
              totalValue={100}
              labelPosition={70}
              animate
              animationDuration={500}
              animationEasing="ease-in"
              
            />
            </Slide>
          </div>
        </div>
        
      </div>
    </section>
  );
}
