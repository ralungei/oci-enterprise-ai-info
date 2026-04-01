"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { RegionsContent } from "@/data/types";

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function RegionsMap({ content }: { content: RegionsContent }) {
  return (
    <section className="py-32 md:py-40 bg-[#0a0a0f] text-white noise-overlay">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <Reveal>
          <div className="accent-bar mb-6" />
          <p className="text-sm font-bold text-oracle-red uppercase tracking-[0.2em] mb-5">
            Global Availability
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
            Available in <span className="bg-gradient-to-r from-[#e85d4a] to-[#C74634] bg-clip-text text-transparent">9 regions</span> worldwide.
          </h2>
        </Reveal>

        {/* Asymmetric photo grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[220px]">
          {content.cities.map((city, i) => {
            const isLarge = i === 0 || i === 4 || i === 7;
            return (
              <Reveal
                key={city.name}
                delay={i * 0.06}
                className={`${
                  isLarge ? "col-span-2 row-span-2 md:col-span-1 md:row-span-2" : ""
                }`}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden group cursor-pointer">
                  <Image
                    src={city.photo}
                    alt={city.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight">
                      {city.name}
                    </h4>
                    <p className="text-lg md:text-xl text-white/70 font-semibold mt-1">
                      {city.region}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-green-400 shadow-lg shadow-green-400/50" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
