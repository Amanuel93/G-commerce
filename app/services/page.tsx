import type { Metadata } from "next"
import { Truck, Zap, Shield, BarChart3, Users, Clock } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Services - MedEquip Pro",
  description: "Comprehensive medical equipment import and export services tailored to your needs",
}

export default function Services() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-balance">Our Services</h1>
          <p className="text-lg opacity-90 mt-4 max-w-2xl">End-to-end solutions for all your medical equipment needs</p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: Truck,
                title: "Import & Export",
                description:
                  "Seamless customs clearance and logistics management for smooth equipment delivery worldwide",
                features: ["Door-to-door delivery", "Customs expertise", "Documentation support"],
              },
              {
                icon: Zap,
                title: "Procurement Solutions",
                description: "Expert sourcing of quality medical equipment tailored to your facility requirements",
                features: ["Equipment assessment", "Vendor verification", "Price optimization"],
              },
              {
                icon: Shield,
                title: "Quality Assurance",
                description: "Rigorous testing and certification ensuring every product meets international standards",
                features: ["ISO compliance", "Performance testing", "Certification support"],
              },
              {
                icon: BarChart3,
                title: "Supply Chain Management",
                description: "Strategic inventory planning and logistics optimization for cost efficiency",
                features: ["Inventory tracking", "Demand forecasting", "Optimization"],
              },
            ].map((service, idx) => {
              const Icon = service.icon
              return (
                <div key={idx} className="bg-card p-8 rounded-lg border border-border">
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-card py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Additional Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Consulting & Advisory",
                description: "Expert guidance on equipment selection and market trends",
              },
              {
                icon: Clock,
                title: "24/7 Support",
                description: "Round-the-clock customer support and emergency logistics",
              },
              {
                icon: BarChart3,
                title: "Market Analysis",
                description: "Insights and reports on medical equipment market trends",
              },
            ].map((service, idx) => {
              const Icon = service.icon
              return (
                <div key={idx} className="text-center">
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Service Process</h2>
          <div className="grid md:grid-cols-4 gap-4 md:gap-0">
            {[
              { step: "1", title: "Assessment", desc: "Understand your needs" },
              { step: "2", title: "Sourcing", desc: "Find best options" },
              { step: "3", title: "Verification", desc: "Quality check" },
              { step: "4", title: "Delivery", desc: "On-time arrival" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold text-2xl mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-foreground mb-1 text-center">{item.title}</h3>
                <p className="text-sm text-muted-foreground text-center">{item.desc}</p>
                {idx < 3 && <div className="hidden md:block w-full h-1 bg-border mt-4 -ml-4" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your medical equipment requirements
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-lg font-semibold transition-colors"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </main>
  )
}
