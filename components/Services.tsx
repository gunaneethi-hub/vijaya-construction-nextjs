"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Building2, Home, Hammer, Ruler, Truck, Users } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Residential Construction',
    description: 'Custom home construction in Perambalur, built with attention to detail, structural strength, and premium finishes. We design and build residential spaces that match your lifestyle and deliver long-lasting quality.',
  },
  {
    icon: Building2,
    title: 'Commercial Projects',
    description: 'Expert commercial construction services in Perambalur, including office buildings, retail spaces, and industrial facilities. Our team ensures durable structures, efficient planning, and on-time delivery for every commercial project.',
  },
  {
    icon: Hammer,
    title: 'Renovation & Remodel',
    description: 'Professional house renovation services in Perambalur, transforming old spaces with modern upgrades while preserving the building\'s original character. Perfect for kitchen remodels, interior makeovers, and complete home renovation.',
  },
  {
    icon: Ruler,
    title: 'Architecture & Design',
    description: 'Comprehensive architectural design and planning services to ensure structural integrity, aesthetic appeal, and accurate blueprint development for your dream home or commercial project.',
  },
  {
    icon: Truck,
    title: 'Site Management',
    description: 'Reliable construction site management for safety, supervision, logistics, and quality control. We ensure your project stays on schedule, within budget, and meets all structural and safety standards.',
  },
  {
    icon: Users,
    title: 'Consultation',
    description: 'Expert construction consultation in Perambalur for project feasibility, budgeting, material selection, and structural planning. Get the right guidance before you begin your construction journey.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-amber-500 font-bold tracking-widest uppercase mb-2">Our Expertise</h2>
          <h3 className="text-4xl font-extrabold text-slate-900">Quality Construction Services</h3>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 border border-slate-100 hover:border-amber-500 transition-colors duration-300 bg-slate-50 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="bg-slate-900 w-16 h-16 flex items-center justify-center rounded-sm mb-6 group-hover:bg-amber-500 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-white group-hover:text-slate-900" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
