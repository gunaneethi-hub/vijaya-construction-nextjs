"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Phone } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden py-20">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1645434926657-6b03be95310d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY0MzEzMTQzfDA&ixlib=rb-4.1.0&q=80&w=1080")',
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h2 className="text-amber-500 font-bold tracking-widest uppercase mb-4 text-[12px] mt-12 md:mt-16">
            Building The Future
          </h2>
          <h1 className="text-[48px] font-bold text-white leading-tight mb-[32px]">
            We Build Your Dream Home With Quality Construction &
            Interiors
            <br />
            <span className="text-[rgba(255,255,255,0)] bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
              in Perambalur
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
            House construction, interiors, tiles, painting &
            full renovation — handled by experienced
            professionals.
          </p>

          <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
            <a
              href="tel:9952128231"
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-4 font-bold uppercase tracking-widest transition-all hover:scale-105 text-sm inline-flex items-center justify-center gap-3 rounded-sm w-full md:w-auto"
            >
              <Phone className="w-5 h-5" />
              Call 9952128231
            </a>
            <a
              href="#contact"
              className="border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-4 font-bold uppercase tracking-widest transition-all hover:scale-105 text-sm inline-flex items-center justify-center gap-3 rounded-sm w-full md:w-auto"
            >
              <ArrowRight className="w-5 h-5" />
              Get Quote
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
