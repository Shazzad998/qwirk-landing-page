"use client";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import Image from "next/image";
import React from "react";

const images = [
  "/images/Beacons.svg",
  "/images/Bravado.svg",
  "/images/Causal.svg",
  "/images/Coca Cola.svg",
  "/images/Hyperline.svg",
  "/images/On Deck.svg",
  "/images/Open AI.svg",
  "/images/Pallet.svg",
  "/images/Passionfroot.svg",
  "/images/Plain.svg",
];

const imageWidth = 112 + 48;
const MarqueComponent = ({ direction }: { direction: string }) => {
  const x = useMotionValue(0);
  const totalWidth = imageWidth * images.length;

  useAnimationFrame((_, delta) => {
    const moveSpeed = delta * 0.04; // Adjust speed multiplier as needed
    const newX = direction === "left" ? x.get() - moveSpeed : x.get() + moveSpeed;
    x.set(newX <= -totalWidth ? 0 : newX >= 0 ? -totalWidth : newX);
  });

  
  return (
    <motion.div className="flex" style={{ x }}>
      {images
        .concat(images)
        .concat(images)
        .map((src, index) => (
          <div className="relative w-28 h-12 flex-shrink-0 mx-6" key={index}>
            <Image
              src={src}
              alt={`Slide ${index}`}
              fill
              className="w-full h-full"
            />
          </div>
        ))}
    </motion.div>
  );
};

const MarqueeSection = () => {
  return (
    <div className="overflow-hidden w-full flex flex-col gap-6 py-10 md:py-14 lg:py-20 xl:py-24">
      <MarqueComponent direction="left" />
      <MarqueComponent direction="right" />
    </div>
  );
};

export default MarqueeSection;
