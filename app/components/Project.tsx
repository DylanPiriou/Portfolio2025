'use client'

import React from 'react'
import { motion } from 'motion/react'

export default function Project({ project, index }: { project: any, index: number }) {
    return (
        <motion.li 
            key={index} 
            className="flex flex-col gap-2.5 w-full mb-8"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.4, delay: index * 0.2, ease: "easeOut" }}
        >
            <h2 className="text-2xl font-bold"><a href={project.live} target="_blank" className="hover:underline">{project.title}</a></h2>
            <p>{project.description}</p>
            <div className="flex gap-2">
                {project.technologies.map((tech: string, i: number) => (
                    <span 
                        key={i} 
                        className="text-sm bg-gray-800 px-2 py-1 rounded"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </motion.li>
    )
}
