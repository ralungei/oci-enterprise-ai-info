"use client";

import "./isometric-layers.css";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/data/ui-strings";

interface LayerConfig {
  text: string;
  gradient: [string, string];
  size: number;
  offset?: [number, number, number];
  index: number;
}

function Layer({ text, gradient, size, offset = [0, 0, 0], index }: LayerConfig) {
  const gid = `iso-grad-${index}`;
  const fid = `iso-filt-${index}`;
  const w = size;
  const h = 40 * (size / 100);
  const t = 5;

  return (
    <g
      className="iso-layer"
      style={{
        "--offset-x": `${offset[0]}px`,
        "--offset-y": `${offset[1]}px`,
        "--offset-z": `${offset[2]}px`,
        "--size": `${size}`,
      } as React.CSSProperties}
    >
      <path
        d={`M0,${h / 2 + t} v${-t} L${w / 2},${0} L${w},${h / 2} v${t} L${w / 2},${h + t} Z`}
        fill={`url(#${gid})`}
        filter={`url(#${fid})`}
      />
      <path d={`M0,${h / 2 + t} v${-t} L${w / 2},${h} v${t} Z`} />
      <path d={`M${w / 2},${h + t} v${-t} L${w},${h / 2} v${t} Z`} />
      <text x={0} y={0} dominantBaseline="middle" textAnchor="middle" style={{ fontSize: 7 * size / 100 }}>
        {text}
      </text>
      <defs>
        <linearGradient id={gid} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={gradient[0]} />
          <stop offset="100%" stopColor={gradient[1]} />
        </linearGradient>
        <filter id={fid} filterUnits="userSpaceOnUse" x="-10" y="-10" width="120" height="120">
          <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor={gradient[0]} floodOpacity="0.2" />
          <feDropShadow dx="0" dy="-1" stdDeviation="2" floodColor={gradient[0]} floodOpacity="0.2" />
        </filter>
      </defs>
    </g>
  );
}

export default function IsometricLayers() {
  const { lang } = useLanguage();
  return (
    <svg className="iso-layers" viewBox="0 0 100 110" xmlns="http://www.w3.org/2000/svg">
      {/*
        Paint order = back to front (SVG paints later elements on top)
        Visual stack: bottom=OCI Infra, middle=Platform, top=capabilities
        Higher Y offset = lower on screen
      */}

      <Layer index={0} text={t("iso.ociInfra", lang)} gradient={["#1a1a2e", "#312D2A"]} offset={[0, 65, 0]} size={100} />
      <Layer index={1} text={t("iso.platform", lang)} gradient={["#312D2A", "#6B6B6B"]} offset={[0, 38, 0]} size={100} />
      <Layer index={2} text={t("iso.tools", lang)} gradient={["#C74634", "#e85d4a"]} offset={[0, 10, 0]}  size={48} />
      <Layer index={3} text={t("iso.memory", lang)} gradient={["#C74634", "#e85d4a"]} offset={[52, 10, 0]} size={48} />
      <Layer index={4} text={t("iso.models", lang)} gradient={["#C74634", "#e85d4a"]} offset={[0, 20, 0]}  size={48} />
      <Layer index={5} text="Frameworks" gradient={["#C74634", "#e85d4a"]} offset={[52, 20, 0]} size={48} />
    </svg>
  );
}
