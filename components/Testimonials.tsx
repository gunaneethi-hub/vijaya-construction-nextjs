import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mohan Raj",
    role: "Perambalur",
    content:
      "House construction-ah full-a avanga handle pannanga. Material quality super, work speedum nalla irunthuchu. Budget-ku suit aagave pannirukanga. Romba satisfied.",
  },
  {
    name: "Thamarai Selvi",
    role: "Elamabalur",
    content:
      "Layout plan irundhu finishing varai perfect guidance kuduthanga. Time-ku project complete pannitanga. Nambikkaiya kodiya company.",
  },
  {
    name: "Janaki",
    role: "Ariyalur",
    content:
      "Kitchen renovation panninaanga. Work romba super. Daily update kuduthanga. Amount-um transparent-a solli pannanga. Family-la ellarum happy.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-amber-500 font-bold tracking-widest uppercase mb-2">
            Testimonials
          </h2>
          <h3 className="text-4xl font-extrabold text-slate-900">
            What Our Clients Say
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 shadow-md border-b-4 border-amber-500"
            >
              <div className="flex gap-1 text-amber-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-current"
                  />
                ))}
              </div>
              <p className="text-slate-600 mb-6 italic leading-relaxed">
                &quot;{item.content}&quot;
              </p>
              <div>
                <h4 className="text-lg font-bold text-slate-900">
                  {item.name}
                </h4>
                <p className="text-sm text-slate-500 uppercase tracking-wider">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
