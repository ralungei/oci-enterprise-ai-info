"use client";

import ScrollReveal from "./ScrollReveal";

interface CodeBlockProps {
  code: string;
  title?: string;
  className?: string;
}

export default function CodeBlock({ code, title, className = "" }: CodeBlockProps) {
  return (
    <ScrollReveal className={className}>
      <div className="rounded-xl overflow-hidden shadow-lg">
        {title && (
          <div className="bg-[#16162a] px-4 py-2 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-xs text-gray-400 ml-2 font-mono">{title}</span>
          </div>
        )}
        <pre className="code-block !rounded-t-none !mt-0">
          <code>{code}</code>
        </pre>
      </div>
    </ScrollReveal>
  );
}
