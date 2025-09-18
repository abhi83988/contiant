"use client";
import React from "react";

export default function StatsSection() {
  const stats = [
    {
      icon: "/shield.svg",
      value: "33%",
      description: "are denied cyber insurance",
    },
    {
      icon: "/users.svg",
      value: "43%",
      description: "of cyberattacks target SMEs",
    },
    {
      icon: "/building.svg",
      value: "60%",
      description: "shut down within 6 months of a cyber incident",
    },
  ];

  const lines = 5;
  const baseStart = 120;
  const gap = 8;
  const ctrlOffset = 20;
  const dip = 40;
  const endOffset = 10;

  return (
    <section className="relative py-12 overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1920 300">
          {Array.from({ length: lines }).map((_, i) => {
            const startY = baseStart + i * gap;
            const cp1Y = startY + ctrlOffset;
            const cp2Y = startY + dip;
            const midY = startY + dip;
            const cp3Y = startY + ctrlOffset;
            const endY = startY + endOffset;

            const d = [
              `M0,${startY}`,
              `C320,${cp1Y} 640,${cp2Y} 960,${midY}`,
              `S1600,${cp3Y} 1920,${endY}`,
            ].join(" ");

            return (
              <path
                key={i}
                d={d}
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            );
          })}
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col items-start justify-center p-9 rounded-lg bg-[#E8F5FB]  transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:scale-105"
          >
          <div className="flex items-start gap-2 ">  <img src={stat.icon} alt="" className="mb-3 h-10     w-10 " />
            <p className="text-3xl font-bold text-[#0E91D6] mt-3">{stat.value}</p> </div>
            <p className="mt-1 text-center text-gray-700 text-sm font-normal">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
