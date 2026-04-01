"use client";

import { motion } from "framer-motion";

interface StatCardProps {
  stat: string;
  label: string;
  detail: string;
  delay?: number;
}

export default function StatCard({ stat, label, detail, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      className="bg-light-gray rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
    >
      <div className="text-4xl md:text-5xl font-bold text-oracle-red mb-2">{stat}</div>
      <div className="text-sm font-semibold text-dark-text mb-2">{label}</div>
      <div className="text-xs text-medium-gray leading-relaxed">{detail}</div>
    </motion.div>
  );
}
