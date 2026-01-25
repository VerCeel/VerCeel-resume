"use client";
import { ReactNode } from "react";
import Noise from "./Noise";

export default function BackgroundLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="relative min-h-screen w-full">
  <div className="fixed inset-0 -z-10">
    <Noise
      patternSize={300}
      patternScaleX={2}
      patternScaleY={2}
      patternRefreshInterval={2}
      patternAlpha={20}
    />
  </div>

  <div className="relative z-10">
    {children}
  </div>
</div>

  );
}
