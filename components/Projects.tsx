"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

const projects = [
  {
    title: "Residential Construction",
    category: "House Construction",
    image: "/project1.png", // Place your project1.png in public/ folder
  },
  {
    title: "Modern House Painting",
    category: "Painting & Finishing",
    image: "/project2.png", // Place your project2.png in public/ folder
  },
  {
    title: "Kitchen Renovation",
    category: "Renovation",
    image:
      "https://images.unsplash.com/photo-1759691337957-ebc9ed54dc44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMHJlbm92YXRpb24lMjBraXRjaGVufGVufDF8fHx8MTc2NDI3NjA5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Urban Blueprints",
    category: "Architecture",
    image:
      "https://images.unsplash.com/photo-1556156657-b2925b706f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwc2t5c2NyYXBlciUyMGdsYXNzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY0MzEzMTQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-amber-500 font-bold tracking-widest uppercase mb-2">
              Our Portfolio
            </h2>
            <h3 className="text-4xl font-extrabold">
              Featured Projects
            </h3>
          </div>
          <a
            href="#"
            className="hidden text-white hover:text-amber-500 border-b border-amber-500 pb-1 transition-colors"
          >
            View All Projects &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-sm h-80 cursor-pointer"
            >
              <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-all duration-500 z-10" />
              {project.image.startsWith('/') ? (
                <Image
                  src={project.image}
                  alt={`${project.title} - Vijaya Construction Perambalur`}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              ) : (
                <img
                  src={project.image}
                  alt={`${project.title} - Vijaya Construction Perambalur`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              )}
              <div className="absolute bottom-0 left-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-amber-500 text-sm font-bold uppercase tracking-wider mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {project.category}
                </p>
                <h4 className="text-2xl font-bold text-white">
                  {project.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <a
            href="#"
            className="text-white hover:text-amber-500 border-b border-amber-500 pb-1 transition-colors"
          >
            View All Projects &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
