import type { Metadata } from "next"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us - MedEquip Pro",
  description: "Get in touch with MedEquip Pro for inquiries, quotes, and partnership opportunities",
}

export default function Contact() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-balance">Get in Touch</h1>
          <p className="text-lg opacity-90 mt-4 max-w-2xl">We're here to help and answer any question you might have</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: Mail,
                title: "Email",
                details: "info@medequippro.com",
                subtext: "Response within 24 hours",
              },
              {
                icon: Phone,
                title: "Phone",
                details: "+1 (555) 123-4567",
                subtext: "Available during business hours",
              },
              {
                icon: MapPin,
                title: "Address",
                details: "123 Medical Way, Healthcare City, HC 12345",
                subtext: "Global headquarters",
              },
              {
                icon: Clock,
                title: "Hours",
                details: "Mon - Fri: 9 AM - 6 PM",
                subtext: "UTC timezone",
              },
            ].map((info, idx) => {
              const Icon = info.icon
              return (
                <div key={idx} className="bg-card p-6 rounded-lg border border-border text-center">
                  <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">{info.title}</h3>
                  <p className="text-foreground font-semibold mb-1">{info.details}</p>
                  <p className="text-sm text-muted-foreground">{info.subtext}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="bg-card py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                  <select className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground">
                    <option>Select a subject</option>
                    <option>Product Inquiry</option>
                    <option>Quote Request</option>
                    <option>Partnership</option>
                    <option>General Question</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground resize-none"
                    placeholder="Tell us about your needs..."
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

            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Why Contact Us?</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Expert Consultation",
                    description:
                      "Get personalized advice from our team of medical equipment specialists with decades of combined experience",
                  },
                  {
                    title: "Custom Solutions",
                    description:
                      "Tailored solutions designed specifically for your healthcare facility's unique requirements and budget",
                  },
                  {
                    title: "Priority Support",
                    description:
                      "Dedicated account manager to ensure smooth operations and quick resolution of any issues",
                  },
                  {
                    title: "Competitive Pricing",
                    description:
                      "Get the best market prices through our extensive supplier network and volume advantages",
                  },
                ].map((reason, idx) => (
                  <div key={idx}>
                    <h3 className="font-bold text-foreground mb-2">{reason.title}</h3>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "What is the typical delivery time?",
                a: "Most orders are delivered within 7-14 days. Expedited options are available for urgent requirements.",
              },
              {
                q: "Do you offer financing options?",
                a: "Yes, we work with various financing partners to help make large purchases more manageable.",
              },
              {
                q: "Are products covered by warranty?",
                a: "All products come with manufacturer warranties. Extended warranty options are also available.",
              },
              {
                q: "Can you handle custom orders?",
                a: "Absolutely. We specialize in custom sourcing and can find virtually any medical equipment.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-bold text-foreground mb-2">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
