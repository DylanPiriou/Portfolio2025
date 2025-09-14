'use client'

import React from 'react'
import { motion } from 'motion/react'

export default function Contact({ contact, index }: { contact: any, index: number }) {
  return (
    <motion.li className="flex items-end gap-2.5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}><a href={contact.url} target="_blank" title={contact.title} className="text-2xl font-bold hover:underline">{contact.title}</a></motion.li>
  )
}
