"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import type { HeroContent } from "@/data/types";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/data/ui-strings";

export default function HeroSection({ content }: { content: HeroContent }) {
  const { lang } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -80]);
  const titleOpacity = useTransform(scrollYProgress, [0.2, 0.45], [1, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section ref={heroRef} className="relative bg-white">
      {/* Part 1: Full viewport — centered product name */}
      <div className="min-h-screen flex flex-col items-center justify-center px-6">
        <motion.div
          style={{ y: titleY, opacity: titleOpacity, scale: titleScale }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mb-8"
          >
            <Image
              src="/oracle-logo.svg"
              alt="Oracle"
              width={100}
              height={70}
              className="mx-auto"
              priority
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-dark-text leading-[0.95] tracking-tight"
          >
            <span className="font-bold">{t("hero.oci", lang)}</span>{" "}
            <span className="font-light">{t("hero.enterpriseAi", lang)}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-xl text-medium-gray mt-6"
          >
            {t("hero.oracleCloud", lang)}
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-gray-300 flex justify-center pt-2"
          >
            <div className="w-1.5 h-2.5 bg-gray-300 rounded-full" />
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
