"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoPlaceholderProps {
  videoUrl: string;
  replacementLabel: string;
  posterText?: string;
}

export default function VideoPlaceholder({
  videoUrl,
  replacementLabel,
  posterText,
}: VideoPlaceholderProps) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setPlaying(true);
    // Small delay to let the iframe/video mount
    setTimeout(() => videoRef.current?.play(), 100);
  };

  return (
    <div className="relative w-full rounded-2xl overflow-hidden bg-[#0a0a0f] aspect-video group">
      <AnimatePresence mode="wait">
        {!playing ? (
          <motion.div
            key="poster"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col items-center justify-center z-10"
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f]" />
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,rgba(199,70,52,0.3),transparent_70%)]" />

            {/* Play button */}
            <motion.button
              onClick={handlePlay}
              className="relative z-10 w-20 h-20 rounded-full bg-oracle-red/90 flex items-center justify-center shadow-2xl shadow-oracle-red/30 backdrop-blur-sm"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.button>

            {/* Replacement label */}
            <div className="relative z-10 mt-6 text-center">
              {posterText && (
                <p className="text-white/60 text-sm font-medium mb-1">{posterText}</p>
              )}
              <p className="text-white/30 text-xs font-mono px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                Replace with: {replacementLabel}
              </p>
            </div>

            {/* Scan lines effect */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
              style={{
                backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)",
              }}
            />
          </motion.div>
        ) : (
          <motion.div
            key="video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0"
          >
            <video
              ref={videoRef}
              src={videoUrl}
              className="w-full h-full object-cover"
              controls
              autoPlay
              playsInline
              muted
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
