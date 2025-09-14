'use client'

import React from 'react'
import Link from 'next/link'

export default function NavLink({ href, children, index }: { href: string, children: React.ReactNode, index: number }) {
  return (
    <li><Link href={href}>{children}</Link></li>
)
}
