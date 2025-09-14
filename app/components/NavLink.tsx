'use client'

import React from 'react'
import Link from 'next/link'

export default function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <li><Link href={href}>{children}</Link></li>
)
}
