"use client"

import type React from "react"
import { useState } from "react"
import { MapPin, Phone, Mail, Clock, ChevronDown  } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", phone: "", company: "", message: "" })
  }

   const toggleFAQ = (idx: number) => {
    setExpandedFAQ(expandedFAQ === idx ? null : idx)
  }

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section
        className="relative text-primary-foreground py-32 md:py-48"
        style={{
          backgroundImage: "url(/BaroyiCustomerSupport2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-primary/95 via-primary/85 to-primary/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl opacity-95 max-w-2xl mx-auto">We're here to help with your medical equipment needs</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow flex items-start gap-4">
              <Phone className="w-8 h-8 text-secondary shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Phone</h3>
                <p className="text-muted-foreground">+251 977 989 898</p>
                <p className="text-sm text-muted-foreground mt-1">Available Monday - Friday, 9am - 6pm EST</p>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow flex items-start gap-4">
              <Mail className="w-8 h-8 text-secondary shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground">gilandobiomedicalsln@gmail.com</p>
                <p className="text-sm text-muted-foreground mt-1">Response within 24 hours</p>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow flex items-start gap-4">
              <MapPin className="w-8 h-8 text-secondary shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Address</h3>
                <p className="text-muted-foreground">German square</p>
                <p className="text-muted-foreground">Gudina Tumsa BLDG</p>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow flex items-start gap-4">
              <Clock className="w-8 h-8 text-secondary shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Business Hours</h3>
                <p className="text-muted-foreground">Mon - Fri: 8am - 5pm EST</p>
                <p className="text-muted-foreground">sat: 8am - 12am EST</p>
                <p className="text-muted-foreground">Sun: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg border border-border max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-lg font-semibold transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "What is your typical delivery timeframe?",
                a: "Most orders are delivered within 2-4 weeks depending on destination and equipment type.",
              },
              {
                q: "Do you handle customs documentation?",
                a: "Yes, we handle all customs documentation and compliance requirements for international shipments.",
              },
              {
                q: "Is the equipment certified?",
                a: "All equipment is certified and meets international standards including ISO, FDA, and CLIA requirements.",
              },
              {
                q: "Do you offer installation services?",
                a: "Yes, we can arrange professional installation and training at your facility.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-background rounded-lg border border-border overflow-hidden hover:border-secondary/50 transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-background/80 transition-colors"
                >
                  <h3 className="text-lg font-bold text-foreground">{faq.q}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-secondary shrink-0 transition-transform duration-300 ${
                      expandedFAQ === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedFAQ === idx ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6 text-muted-foreground border-t border-border">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
     <div className="mt-7" style={{ width: "100%", height: 400, borderRadius: 8, overflow: "hidden" }}>
       <iframe
         title="Our location"
         width="100%"
         height="100%"
         style={{ border: 0 }}
         loading="lazy"
         src="https://www.google.com/maps?q=8.964860397773586, 38.73380379999999&z=15&output=embed"
         referrerPolicy="no-referrer-when-downgrade"
       />
  </div>

      </section>
    </main>
  )
}
