'use client';

import React from 'react'
import { motion } from "motion/react";

export default function Heading({ content }: { content: React.ReactNode }) {
  return (
    <motion.h1
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: .8, delay: .2, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-light my-14 font-instrument"
      >
        {content}
      </motion.h1>
  )
}
