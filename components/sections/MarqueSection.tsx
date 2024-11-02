'use client'
import { motion } from 'framer-motion'
import React from 'react'

type MarqueSectionProps = {}

const MarqueSection = (props: MarqueSectionProps) => {
  return (
    <div>
      <motion.div
        animate={{
          translateX: "-50%",
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex gap-6 pr-6"
      >
        <div>asdfasdf</div>
      </motion.div>
    </div>
  )
}

export default MarqueSection