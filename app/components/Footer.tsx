
'use client'

import React from 'react'
import { motion } from 'motion/react'

export default function Footer() {
  return (
    <footer className="py-10 text-center">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .6, delay: .6, ease: "easeOut" }} className="text-xs">© {new Date().getFullYear()} Dylan Piriou. All rights reserved.</motion.p>
    </footer>
  )
}
