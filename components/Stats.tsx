"use client";

import React from "react";
import { motion } from "motion/react";

const stats = [
  { label: "Years Established", value: "3+" },
  { label: "Projects Completed", value: "20+" },
  { label: "Satisfied Clients", value: "100%" },
  { label: "Renovation", value: "10+" },
];

export function Stats() {
  return (
    <section className="py-16 bg-amber-500">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-800 font-medium uppercase tracking-wide text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
