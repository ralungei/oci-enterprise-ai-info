"use client";

import { useState, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
  type PanInfo,
} from "framer-motion";

export interface SwipeCard {
  id: number;
  scenario: string;
  isAgent: boolean;
  explanation: string;
}

interface TinderSwipeProps {
  cards: SwipeCard[];
  className?: string;
}

const SWIPE_THRESHOLD = 120;

function Card({
  card,
  isTop,
  stackIndex,
  onSwipe,
}: {
  card: SwipeCard;
  isTop: boolean;
  stackIndex: number;
  onSwipe: (direction: "left" | "right") => void;
}) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-300, 0, 300], [-18, 0, 18]);
  const leftOpacity = useTransform(x, [-150, 0], [1, 0]);
  const rightOpacity = useTransform(x, [0, 150], [0, 1]);

  const handleDragEnd = useCallback(
    (_: unknown, info: PanInfo) => {
      if (info.offset.x > SWIPE_THRESHOLD) {
        onSwipe("right");
      } else if (info.offset.x < -SWIPE_THRESHOLD) {
        onSwipe("left");
      }
    },
    [onSwipe]
  );

  return (
    <motion.div
      className="absolute inset-0"
      style={{
        zIndex: 10 - stackIndex,
      }}
      initial={false}
      animate={{
        scale: 1 - stackIndex * 0.05,
        y: stackIndex * 12,
        opacity: stackIndex > 2 ? 0 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <motion.div
        className={`w-full h-full rounded-3xl border-2 bg-white p-8 md:p-10 flex flex-col justify-between shadow-xl ${
          isTop ? "cursor-grab active:cursor-grabbing" : ""
        } border-gray-100`}
        style={isTop ? { x, rotate } : undefined}
        drag={isTop ? "x" : false}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.9}
        onDragEnd={isTop ? handleDragEnd : undefined}
      >
        {/* Swipe indicators */}
        {isTop && (
          <>
            <motion.div
              className="absolute top-6 right-6 text-green-500 font-extrabold text-2xl border-4 border-green-500 rounded-xl px-5 py-2 -rotate-12"
              style={{ opacity: rightOpacity }}
            >
              AGENT
            </motion.div>
            <motion.div
              className="absolute top-6 left-6 text-red-500 font-extrabold text-2xl border-4 border-red-500 rounded-xl px-5 py-2 rotate-12"
              style={{ opacity: leftOpacity }}
            >
              NOPE
            </motion.div>
          </>
        )}

        <div className="flex-1 flex items-center">
          <p className="text-xl md:text-2xl font-bold text-dark-text leading-relaxed">
            &ldquo;{card.scenario}&rdquo;
          </p>
        </div>

        <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
          <span className="text-sm text-medium-gray font-medium">
            Swipe right if agent, left if not
          </span>
          <span className="text-xs text-medium-gray/50 font-mono">
            #{card.id + 1}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ResultCard({
  card,
  userSaidAgent,
}: {
  card: SwipeCard;
  userSaidAgent: boolean;
}) {
  const isCorrect = userSaidAgent === card.isAgent;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className={`rounded-2xl p-6 border-2 ${
        isCorrect
          ? "border-green-200 bg-green-50"
          : "border-red-200 bg-red-50"
      }`}
    >
      <div className="flex items-center gap-3 mb-2">
        <span
          className={`text-2xl font-extrabold ${
            isCorrect ? "text-green-600" : "text-red-600"
          }`}
        >
          {isCorrect ? "Correct!" : "Not quite!"}
        </span>
        <span
          className={`text-sm font-bold px-3 py-1 rounded-full ${
            card.isAgent
              ? "bg-oracle-red text-white"
              : "bg-gray-200 text-dark-text"
          }`}
        >
          {card.isAgent ? "Agent" : "Not an Agent"}
        </span>
      </div>
      <p className="text-sm text-medium-gray leading-relaxed">
        {card.explanation}
      </p>
    </motion.div>
  );
}

export default function TinderSwipe({ cards, className = "" }: TinderSwipeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState<
    { card: SwipeCard; userSaidAgent: boolean }[]
  >([]);

  const handleSwipe = useCallback(
    (direction: "left" | "right") => {
      const card = cards[currentIndex];
      setResults((prev) => [
        ...prev,
        { card, userSaidAgent: direction === "right" },
      ]);
      setCurrentIndex((prev) => prev + 1);
    },
    [cards, currentIndex]
  );

  const isComplete = currentIndex >= cards.length;
  const correctCount = results.filter(
    (r) => r.userSaidAgent === r.card.isAgent
  ).length;

  const remainingCards = cards.slice(currentIndex, currentIndex + 3);

  return (
    <div className={className}>
      {/* Card stack */}
      <div className="relative w-full max-w-lg mx-auto" style={{ height: 320 }}>
        <AnimatePresence>
          {!isComplete &&
            remainingCards
              .map((card, i) => (
                <Card
                  key={card.id}
                  card={card}
                  isTop={i === 0}
                  stackIndex={i}
                  onSwipe={handleSwipe}
                />
              ))
              .reverse()}
        </AnimatePresence>

        {isComplete && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <div className="text-6xl font-extrabold text-oracle-red">
              {correctCount}/{cards.length}
            </div>
            <p className="text-xl font-bold text-dark-text mt-3">
              {correctCount === cards.length
                ? "Perfect score!"
                : correctCount >= 3
                ? "Well done!"
                : "Keep learning!"}
            </p>
            <button
              onClick={() => {
                setCurrentIndex(0);
                setResults([]);
              }}
              className="mt-6 text-sm font-bold text-oracle-red hover:underline"
            >
              Try again
            </button>
          </motion.div>
        )}
      </div>

      {/* Swipe buttons for accessibility */}
      {!isComplete && (
        <div className="flex items-center justify-center gap-6 mt-8">
          <motion.button
            onClick={() => handleSwipe("left")}
            className="w-14 h-14 rounded-full border-2 border-red-200 bg-white flex items-center justify-center text-red-500 hover:bg-red-50 transition-colors shadow-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </motion.button>
          <span className="text-sm text-medium-gray font-medium">
            {currentIndex + 1} / {cards.length}
          </span>
          <motion.button
            onClick={() => handleSwipe("right")}
            className="w-14 h-14 rounded-full border-2 border-green-200 bg-white flex items-center justify-center text-green-500 hover:bg-green-50 transition-colors shadow-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </motion.button>
        </div>
      )}

      {/* Results feed */}
      {results.length > 0 && (
        <div className="mt-8 space-y-3 max-w-lg mx-auto">
          <AnimatePresence>
            {results.map((r, i) => (
              <ResultCard
                key={i}
                card={r.card}
                userSaidAgent={r.userSaidAgent}
              />
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
