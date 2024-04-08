"use client";

import React from "react";

type DotsProps = {
  state: Record<string, number>;
};

export default function Dots({ state }: DotsProps) {
  return (
    <>
      {Object.entries(state).map(([key, value]) => {
        return (
          <div key={key} className="absolute bg-pink rounded-full" style={{}} />
        );
      })}
    </>
  );
}
