"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./odometer.css";

interface OdometerNumberProps {
  value: string;
  className?: string;
}

function OdometerDigit({ digit, className = "" }: { digit: number; className?: string }) {
  return (
    <span className={`odometer-char ${className}`}>
      <span className="odometer-track" style={{ "--v": digit } as React.CSSProperties}>
        <span>9</span>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((v) => (
          <span key={v}>{v}</span>
        ))}
        <span>0</span>
      </span>
    </span>
  );
}

export default function OdometerNumber({ value, className = "" }: OdometerNumberProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setDisplayValue(value), 200);
      return () => clearTimeout(timer);
    }
  }, [isInView, value]);

  const chars = displayValue.split("");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`odometer-counter ${className}`}
    >
      <span className="odometer-chars" aria-hidden="true">
        {chars.map((char, i) => {
          const num = parseInt(char, 10);
          if (isNaN(num)) {
            return (
              <span key={i} className="odometer-char odometer-symbol">
                {char}
              </span>
            );
          }
          return <OdometerDigit key={i} digit={isInView ? num : 0} />;
        })}
      </span>
      <span className="sr-only">{value}</span>
    </motion.div>
  );
}
