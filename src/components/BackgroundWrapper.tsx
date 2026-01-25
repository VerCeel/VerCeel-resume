"use client";

import { ReactNode } from "react";
import Noise from "./Noise";

export default function BackgroundLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
      <div
        className="relative z-0 min-h-screen w-full"
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Noise
          patternSize={400}
          patternScaleX={2}
          patternScaleY={2}
          patternRefreshInterval={2}
          patternAlpha={10}
        />
        {children}
      </div>
  );
}
