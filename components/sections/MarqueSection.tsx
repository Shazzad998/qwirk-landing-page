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

const MarqueeSection = () => {
  const x = useMotionValue(0);
  const imageWidth = 112 + 48; // Width of each image (adjust based on actual size + gap)
  const totalWidth = imageWidth * images.length;

  useAnimationFrame((_, delta) => {
    // Move the slider leftward continuously, and reset `x` when it reaches `-totalWidth`
    const newX = x.get() - delta * 0.1;
    x.set(newX <= -totalWidth ? 0 : newX);
  });

  return (
    <div className="overflow-hidden w-full flex justify-center items-center py-10 md:py-14 lg:py-20 xl:py-24">
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
    </div>
  );
};

export default MarqueeSection;
