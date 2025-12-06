import React from "react";
import {
  HardHat,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-amber-500 p-2 rounded-sm">
                <HardHat className="w-6 h-6 text-slate-900" />
              </div>
              <span className="text-2xl font-bold tracking-tighter">
                Vijaya
                <span className="text-amber-500">
                  Construction
                </span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4 max-w-md">
              Vijaya Construction is a trusted building
              construction and interior design company in
              Perambalur, delivering high-quality residential
              and commercial projects. We specialize in house
              construction, renovation, architectural planning,
              and complete interior design services using
              durable materials and skilled workmanship. With a
              strong focus on transparency, on-time delivery,
              and modern design standards, our team ensures
              every project is built with care and long-lasting
              quality.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-all rounded-sm"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-all rounded-sm"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-all rounded-sm"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-all rounded-sm"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="">
            <h4 className="text-lg font-bold mb-6 border-b-2 border-amber-500 inline-block pb-1">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-amber-500 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-slate-400 hover:text-amber-500 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-slate-400 hover:text-amber-500 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-slate-400 hover:text-amber-500 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-400 hover:text-amber-500 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-amber-500 transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-amber-500 inline-block pb-1">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-amber-500 transition-colors"
                >
                  General Construction
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-amber-500 transition-colors"
                >
                  House Renovation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-amber-500 transition-colors"
                >
                  Architecture Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-amber-500 transition-colors"
                >
                  Interior Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-amber-500 transition-colors"
                >
                  Fixing & Repair
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-center items-center gap-4 text-center">
          <p className="text-slate-500 text-sm text-center">
            © {new Date().getFullYear()} Vijaya Construction.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
