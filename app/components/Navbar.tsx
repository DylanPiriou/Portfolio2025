'use client'

import React from 'react'
import NavLink from './NavLink'
import navbar from '../data/navbar.json'
import { motion } from 'motion/react'

export default function Navbar() {
  return (
    <header>
      <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .6, delay: .6, ease: "easeOut" }}>
        <ul>
          {navbar.map((item, index) => (
            <NavLink key={index} index={index} href={item.url}>{item.title}</NavLink>
          ))}
        </ul>
      </motion.nav>
    </header>
  )
}
