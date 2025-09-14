'use client'

import React from 'react'
import { motion } from 'motion/react'

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: .6, delay: .1, ease: "easeOut" }}
    >
        {children}
    </motion.div>
  )
}
