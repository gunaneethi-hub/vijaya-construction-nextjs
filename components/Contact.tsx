"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

// GOOGLE SHEETS SETUP INSTRUCTIONS:
// 1. Create a new Google Sheet with these column headers in row 1:
//    Timestamp | First Name | Last Name | Email | Phone | Service | Details
//
// 2. Go to Extensions > Apps Script and paste this code:
/*
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      new Date(),
      data.firstName,
      data.lastName,
      data.email,
      data.phone,
      data.service,
      data.details
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
*/
// 3. Click Deploy > New deployment > Select type: Web app
// 4. Set "Execute as" to "Me" and "Who has access" to "Anyone"
// 5. Click Deploy and copy the Web App URL
// 6. Replace the GOOGLE_SHEET_URL below with your Web App URL

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbw4iCsMRMHOxv54QWoHnx2XF8aTqSdrAUho4EoQacOLvnc6ihMVELu-ePxesmh2RKItLA/exec";

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "General Construction",
    details: "",
  });

  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("loading");

    console.log("Submitting form data:", formData);

    try {
      // Send to Google Sheets
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Form submitted successfully");
      setSubmitStatus("success");

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "General Construction",
        details: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");

      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-amber-500 font-bold tracking-widest uppercase mb-2">
              Get In Touch
            </h2>
            <h3 className="text-4xl font-extrabold text-slate-900 mb-6">
              Let&apos;s Build Together
            </h3>
            <p className="text-slate-600 mb-10 leading-relaxed max-w-md">
              Ready to start your next project? Contact us today
              for a free consultation and quote. Our team is
              ready to help you achieve your construction goals.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-slate-900 p-3 rounded-sm text-white">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">
                    Phone
                  </h4>
                  <p className="text-slate-600">
                    +91 9952128231
                  </p>
                  <p className="text-slate-400 text-sm">
                    Mon-Fri, 8am-6pm
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-slate-900 p-3 rounded-sm text-white">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">
                    Email
                  </h4>
                  <p className="text-slate-600">
                    vijayaconstructionpblr@gmail.com
                  </p>
                  <p className="text-slate-400 text-sm">
                    Online support 24/7
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-slate-900 p-3 rounded-sm text-white">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">
                    Address
                  </h4>
                  <p className="text-slate-600">
                    Elambalur, Perambalur,
                    <br />
                    TamilNadu 621212
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-50 p-8 md:p-10 border border-slate-100 shadow-lg">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        firstName: e.target.value,
                      })
                    }
                    required
                    disabled={submitStatus === "loading"}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        lastName: e.target.value,
                      })
                    }
                    required
                    disabled={submitStatus === "loading"}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  required
                  disabled={submitStatus === "loading"}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all"
                  placeholder="+91 9876543210"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone: e.target.value,
                    })
                  }
                  required
                  disabled={submitStatus === "loading"}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Service Needed
                </label>
                <select
                  className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all text-slate-600"
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      service: e.target.value,
                    })
                  }
                  disabled={submitStatus === "loading"}
                >
                  <option>General Construction</option>
                  <option>Renovation</option>
                  <option>Architecture Design</option>
                  <option>Commercial Project</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Project Details
                </label>
                <textarea
                  className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all h-32 resize-none"
                  placeholder="Tell us about your project..."
                  value={formData.details}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      details: e.target.value,
                    })
                  }
                  disabled={submitStatus === "loading"}
                ></textarea>
              </div>

              {submitStatus === "success" && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded">
                  ✓ Message sent successfully! We&apos;ll contact you
                  soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded">
                  ✗ Something went wrong. Please try again or
                  call us directly.
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold uppercase tracking-widest py-4 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={submitStatus === "loading"}
              >
                {submitStatus === "loading"
                  ? "Sending..."
                  : "Send Message"}
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
