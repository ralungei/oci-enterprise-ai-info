"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function ConsoleScreenshot({
  src,
  alt,
  caption,
  dark = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  dark?: boolean;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div
        className={`rounded-lg overflow-hidden border cursor-pointer group transition-shadow hover:shadow-xl ${
          dark ? "border-white/10 bg-white/[0.03]" : "border-gray-200 bg-white"
        }`}
        onClick={() => setExpanded(true)}
      >
        <div className="relative overflow-hidden">
          <Image
            src={src}
            alt={alt}
            width={800}
            height={500}
            className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
        </div>
        {caption && (
          <div className={`px-5 py-3 flex items-center gap-2 ${dark ? "border-t border-white/10" : "border-t border-gray-100"}`}>
            <div className="w-2 h-2 rounded-full bg-oracle-red shrink-0" />
            <p className={`text-xs font-medium ${dark ? "text-white/50" : "text-medium-gray"}`}>
              {caption}
            </p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-6 cursor-pointer"
            onClick={() => setExpanded(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="max-w-[90vw] max-h-[90vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={src}
                alt={alt}
                width={1600}
                height={1000}
                className="rounded-lg w-auto h-auto max-h-[85vh] object-contain shadow-2xl"
              />
              {caption && (
                <p className="text-white/60 text-sm text-center mt-4">{caption}</p>
              )}
              <button
                onClick={() => setExpanded(false)}
                className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-sm transition-colors"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
